import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import MainFooter from './MainFooter';
import Navbar from './Navbar';
import React from 'react'
// import { AuthContext } from '../Contexts/AuthContext';
import { useContext } from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function SignUp() {
   
    const [text,setText]=useState({email:"",password:""})
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const handelsignin=()=>{
      alert("SignIn Successfully")
      return <Navigate to="/dashboard"/>
    }
  return (
    <Stack>
      <Navbar/>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input   value={email}
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              {/* <Link color={'blue.500'}>Forgot password?</Link> */}
            </Stack>
            <Button onClick={handelsignin} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
    <MainFooter/>
    </Stack>
  );
}