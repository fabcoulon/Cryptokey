import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import { useAccount } from 'wagmi'
import { Text } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import Upload from '@/components/Upload'
import Mint from '@/components/Mint'

export default function Home() {

  const { isConnected } = useAccount()
  
  return (
    <>
      <Head>
        <title>Cryptokey DApp : Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {isConnected ? (
          <Text>Welcome on Cryptokey DApp !</Text>
        ) : (
          <Alert status='warning' width="50%">
            <AlertIcon />
            Please, connect your Wallet!
          </Alert>
        )}
       <Mint/>
      </Layout>
    </>
  )
}