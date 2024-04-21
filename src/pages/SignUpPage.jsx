import { Box, FormControl, FormLabel, Input, Button, VStack, Heading } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>Sign Up</Heading>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue" w="full" mt={4}>
          Sign Up
        </Button>
        <Button colorScheme="teal" w="full" mt={4}>
          Sign Up with Google
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUpPage;
