import React from 'react';
import { Box, Button, Input, VStack, Text, Link } from '@chakra-ui/react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function LoginPage() {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Login to Your Account</Text>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="blue" width="full">Login</Button>
        <Text>or continue with</Text>
        <Button leftIcon={<FaGoogle />} colorScheme="red" width="full">Google</Button>
        <Button leftIcon={<FaFacebook />} colorScheme="blue" width="full">Facebook</Button>
        <Link color="teal.500" href="/signup">Don't have an account? Sign up</Link>
      </VStack>
    </Box>
  );
}

export default LoginPage;