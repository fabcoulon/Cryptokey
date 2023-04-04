import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout/Layout'
import { useAccount, useSigner } from 'wagmi'
import { Flex, Button, Input, useToast, FormControl,FormErrorMessage, Stack, InputGroup, InputLeftAddon, Center} from '@chakra-ui/react'
import { Formik, Field, Form } from "formik";
import {
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { useState } from 'react'
import { ethers } from 'ethers'
import { contractAddress, abi } from "../public/constants"

export default function createRental() {

  const { isConnected } = useAccount()
  const { data: signer } = useSigner()
  const toast = useToast()
  const router = useRouter()

  const [number, setNumber] = useState(null)
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [address, setAddress] = useState("")

  function handleRentalNameChange(event) {
    setName(event.target.value);
  }

  function handleRentalSymnbolChange(event) {
    setSymbol(event.target.value);
  }

  function handleRentalAddressChange(event) {
    setAddress(event.target.value);
  }

  const setTheNumber = async() => {

    try {
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(contract);
        let transaction = await contract.createRentalCollection(name, symbol, address);
        await transaction.wait()
        // router.push('/getNumber')
        toast({
            title: 'Congratulations',
            description: `The rental ${name} has been created!`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    }
    catch(e) {
        toast({
            title: 'Error',
            description: `${String(e).includes("Rental name already exists") ? "Rental name already exists" : "Unknown error"}`,
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
        <title>Cryptokey DApp : Set the number</title>
        <meta name="description" content="Generated by create next app" />
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
                            <InputLeftAddon text-a width="120px" bg='#718096' color='white' children='Rental name' />
                            <Input borderColor='#A0AEC0' onChange={handleRentalNameChange} />
                          </InputGroup>
                          <InputGroup>
                            <InputLeftAddon width="120px" bg='#718096' color='white' children='Symbol' />
                            <Input borderColor='#A0AEC0' onChange={handleRentalSymnbolChange}/>
                          </InputGroup>
                          <InputGroup>
                            <InputLeftAddon width="120px" bg='#718096' color='white' children='Address' />
                            <Input borderColor='#A0AEC0' onChange={handleRentalAddressChange}/>
                          </InputGroup>
                        </Stack>
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Center h='100px' color='white'>
                    <Button mt={4} colorScheme='facebook'
                    onClick={() => setTheNumber()}
                    >
                      Submit
                    </Button>
                  </Center>
                 
                </Form>
              )}
            </Formik>
          </Flex>
        ) : (
          <Alert status='warning' width="50%">
            <AlertIcon />
            Please, connect your Wallet.
          </Alert>
        )}
      </Layout>
    </>
  )
}