import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout/Layout'
import { useAccount, useSigner,useContractEvent } from 'wagmi'
import { Flex, Button, Input, useToast, FormControl,FormErrorMessage, Stack, InputGroup, InputLeftAddon, Center} from '@chakra-ui/react'
import { Formik, Field, Form } from "formik";
import {
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { contractFactoryAddress, abiFactory } from "../public/constants/factory"
import Upload from '../components/Upload'

export default function createRental() {

  const { isConnected } = useAccount()
  const { data: signer } = useSigner()
  const toast = useToast()
  const router = useRouter()

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [description, setDescription] = useState("");
  const [rental, setRental] = useState("");
  const[image,setImage] = useState("");

  useContractEvent({
    address: contractFactoryAddress,
    abi: abiFactory,
    eventName: 'RentalCollectionCreated',
    listener(_rentalName, _rentalSymbol, _collectionAddress,_timestamp) {
      if(rental !== "")
      {
        toast({
          title: 'Congratulations',
          description: `The rental ${_rentalName} with ${_rentalSymbol} \n at the address ${_collectionAddress} has been created!`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
    },
  },[rental]);

  function handleRentalNameChange(event) {
    setName(event.target.value);
  }

  function handleRentalSymnbolChange(event) {
    setSymbol(event.target.value);
  }

  function handleRentalDescriptionChange(event) {
    setDescription(event.target.value);
  }

  const createRental = async() => {

    try {
        const contract = new ethers.Contract(contractFactoryAddress, abiFactory, signer);
        if(image === "")
        {
          toast({
            title: 'Error',
            description: 'You must upload an image before validating',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
          return;
        }

        if(name === "" || symbol === "" || description === ""){
          toast({
            title: 'Error',
            description: 'All fields are mandatory',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
          return;
        }
        let transaction = await contract.createRentalCollection(name, symbol, description,`https://ipfs.io/ipfs/${image}`);
        await transaction.wait()
        setRental(transaction);
        setName("");
        setSymbol("");
        setDescription("");
        setImage("");
        
    }
    catch(e) {
        toast({
            title: 'Error',
            description: `${String(e).includes("Rental name already exists") ? "Rental name already exists" : e}`,
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
        console.log(e)
    }
    
  }
  
  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    }
    return error
  }

  return (
    <>
      <Head>
        <title>Cryptokey DApp : Create rental</title>
        <meta name="description" content="Generated by cryptokey app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {isConnected ? (
          <Flex alignItems="center">
            <Formik
              onSubmit={() => {
                alert("clicked");
              }}
            >
              {(props) => (
                <Form>
                  <Field name='name' validate={validateName}>
                    {({ form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <Stack spacing={4}>
                          <InputGroup>
                            <Upload setImage={setImage}/>
                          </InputGroup>
                          <InputGroup>
                            <InputLeftAddon text-a width="120px" bg='#718096' color='white' children='Rental name' />
                            <Input borderColor='#A0AEC0' onChange={handleRentalNameChange} />
                          </InputGroup>
                          <InputGroup>
                            <InputLeftAddon width="120px" bg='#718096' color='white' children='Symbol' />
                            <Input borderColor='#A0AEC0' onChange={handleRentalSymnbolChange}/>
                          </InputGroup>
                          <InputGroup>
                            <InputLeftAddon width="120px" bg='#718096' color='white' children='Description' />
                            <Input borderColor='#A0AEC0' onChange={handleRentalDescriptionChange}/>
                          </InputGroup>
                        </Stack>
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Center h='100px' color='white'>
                    <Button backgroundColor="#001922" mt={4} colorScheme='facebook'
                    onClick={() => createRental()}
                    >
                      Submit
                    </Button>
                  </Center>
                 
                </Form>
              )}
            </Formik>
          </Flex>
        ) : (
          <Alert borderRadius="10" fontFamily="fantasy" textAlign="center" status='info' width="50%" height="10%">
          <AlertIcon />
          Please, connect your Wallet!
          </Alert>
        )}
      </Layout>
    </>
  )
}