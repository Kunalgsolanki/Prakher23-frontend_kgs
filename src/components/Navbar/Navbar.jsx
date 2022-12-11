
import React from 'react'
import { Image, Flex, Button ,HStack, chakra, IconButton } from '@chakra-ui/react';
import Logo from "../../accets/Images/logo.png"
import { FaUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function Navbar() {
  const [display, changeDisplay] = React.useState('none')
  return (

  
    <chakra.header borderBlockEnd='4px'
     backgroundClip="gray" 
     marginTop="2px"

    
    borderColor='gray.400'

    
    backgroundColor="#f9efd7" borderRadius="20">
      <Flex>



        <Flex
          w="100%"
          px="6"
          py="5"
          align="center"
          justify="space-between"


          display={['none', 'none', 'flex', 'flex']}


        >
          <Image src={Logo}
            h="50px"
          />
          <HStack as="nav" spacing="3">

            <FaUserCircle size="40px" />

            <Button borderBlockEnd="2px" borderColor='black' color="white" backgroundColor="purple.400">  Sing in </Button>

            <HStack>
              <Button>
                <FiShoppingCart size="40px" />

              </Button>

            </HStack>



          </HStack>




        </Flex>

        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          borderBlockEnd='4px'
          borderRadius="20"
          backgroundColor='purple.400'
         

          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />


      </Flex>


      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"

        overflowY="auto"
        flexDir="column"
      >

       
        <Flex
          justify="flex-end"

        >


          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}

          />










        </Flex>


        <Flex
          flexDir="column"
          align="center"
        >


          <Button

            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"
          >
            <FaUserCircle size="40px" />


          </Button>

          <Button

            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"
          >
            <Button borderBlockEnd="2px" borderColor='black' color="white" backgroundColor="purple.400">  Sing in </Button>


          </Button>


          <Button

            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"
          >

            <FiShoppingCart size="40px" />

          </Button>









        </Flex>


      </Flex>





    </chakra.header>

   
  )
}

export default Navbar