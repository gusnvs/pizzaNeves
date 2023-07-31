import React, { useState } from 'react';
import {
    Link as ChakraLink,
    Text,
    Button,
    Flex,
    Image,
    Box,
    Stack,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    InputGroup,
    CircularProgress,
    InputRightElement,
    useColorModeValue
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { DarkModeSwitch } from '../../components/DarkModeSwitch'
import Head from 'next/head'
import logoPrincipal from '../../../public/PizzaNeves.png'
import Link from 'next/link';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => setShowPassword(!showPassword);


    return (
        <>
            <Head>
                <title>PizzaNeves - Cadastro</title>
            </Head>
            <DarkModeSwitch position="fixed" top={4} right={4} aria-label="Toggle Theme" />
            <Flex width="full" h="100vh" align="center" justifyContent="center" >
                <Box 
                    p={8} 
                    maxWidth="500px" 
                    borderWidth={1} 
                    borderRadius={8} 
                    boxShadow="lg" 
                    bg={useColorModeValue('gray.100', 'gray.700')} 
                    >
                    <Box maxWidth="full" mb={10} >
                        <Image w="250px" src={logoPrincipal.src} alt="PizzaNeves Logo"  mx="auto"/>
                    </Box>
                    <Box textAlign="center" mb={8}>
                        <Heading fontSize="md">Faça seu cadastro</Heading>
                    </Box>
                    <Box my={4} textAlign="left" >
                        <form>
                            <FormControl isRequired>
                                <FormLabel>Nome</FormLabel>
                                <Input type="text" placeholder="João da Silva" />
                            </FormControl>
                            <FormControl isRequired mt={6}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder="email@pizzaneves.com" />
                            </FormControl>
                            <FormControl isRequired mt={6}>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="*******"
                                        size="md"
                                        maxLength={20}
                                        onChange={event => setPassword(event.currentTarget.value)}
                                    />
                                    <InputRightElement h="full" width="3rem" >
                                        <Button
                                            h="1.5rem"
                                            size="sm"
                                            bg="transparent"
                                            onClick={handlePasswordVisibility}
                                        >
                                            {showPassword ? (
                                                <ViewIcon name="view-off" />
                                            ) : (
                                                <ViewOffIcon name="view" />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button width="full" mt={4} type="submit" variant={'blueButton'}>
                                {isLoading ? (
                                    <CircularProgress
                                        isIndeterminate
                                        size="24px"
                                        color="teal"
                                    />
                                ) : (
                                    'Sign up'
                                )}
                            </Button>
                        </form>
                        <Box textAlign="center" mt={3} >
                            <Link href="/">
                                <Text color="gray" fontSize="sm">Já possui conta? Faça seu login.</Text>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default Signup
