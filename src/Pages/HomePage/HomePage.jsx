import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import Logo from "../../accets/Images/Saly.png"


export default function HomePage() {

 

  return (

  
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}
    
    
    > 
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '6xl', md: '7xl', lg: '6xl' }}>
            <Text
         
         fontSize={{ base: '6xl', md: '6xl', lg: '7xl' }}
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
               
                bottom: 1,
                 
               
                zIndex: -1,
              }}>
              WELCOME 
            </Text>
           <br/> 
            <Text
         
         fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
               
                bottom: 1,
                left: 0,
               
                zIndex: -1,
              }}>
               TO 
            </Text>
            <br />{' '}
            <Text color={'purple.400'}
            
          
            as={'span'}>
                PRAKARSH ’ 23
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: '2xs' }}
           marginRight="4905px"
          color={'gray.500'}
          
          fontSize='lg'
          
          >
            Prakarsh ‘23’s vision is to assist the rural areas, and villages and to encourage them in the advancement of their lives through technologies developed in Prakarsh by students.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              width={{ base: '100%', sm: '50%', md: '100%' }} 
          borderBlockEnd="4px"
          borderBlockEndColor="black"
             
              height= "77px"
              rounded={'md'}
              bg={'purple.400'}
              color={'white'}
              _hover={{
                bg: 'purple.800',
               
                 
              }}>
                <Text
                 fontSize='3xl'
                >
              ExploRE EVENTS ->
                </Text>
              
            </Button>
        
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
         width={{ base: '100%', sm: '30%', md: '843px' }} 
         height={{ base: '100%', sm: '30%', md: '843px' }} 
          
          alt={'Login Image'}
          objectFit={'cover'}
         src={ Logo}
       

left="1143px"

    
         backgroundColor="#f9eed7"
        />
      </Flex>
    </Stack>

   

 
  );
}