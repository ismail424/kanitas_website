"use client"

import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  VStack,
  HStack,
  Center,
  Icon,
  Card,
  createSystem,
  defaultSystem
} from '@chakra-ui/react';

// Lucide icons for Chakra UI v3 (requires installation: npm install lucide-react)
import { ChevronDown, Tool, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 90,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box id="top" position="relative">
      <Box
        minH={{ base: "100vh", md: "90vh" }}
        position="relative"
        overflow="hidden"
        bgImage="linear-gradient(rgba(18, 64, 117, 0.9), rgba(0, 0, 0, 0.85)), url(/hero-image.jpg)"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Dark overlay */}
        <Box position="absolute" inset="0" bg="blackAlpha.500" zIndex={0}></Box>
        
        {/* Content */}
        <Container maxW="7xl" px={{ base: 4, md: 6 }} py={{ base: 16, md: 24 }} position="relative" zIndex={10}>
          <Stack 
            direction={{ base: "column-reverse", md: "row" }}
            spacing={{ base: 10, md: 12 }}
            align="center"
            justify="space-between"
          >
            {/* Left side - Text content */}
            <VStack 
              spacing={6} 
              align={{ base: "center", md: "start" }}
              maxW={{ base: "100%", md: "55%" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Center display={{ base: "flex", md: "block" }} w="full">
                <Image 
                  src="/logo_top.png" 
                  alt="Kanitas AB Logo" 
                  h={{ base: "24", md: "32" }}
                  mb={4}
                  filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3)) brightness(1.05)"
                />
              </Center>
              
              <Heading 
                as="h1"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                lineHeight="tight"
                color="white"
                textShadow="0 2px 10px rgba(0, 0, 0, 0.8)"
                fontWeight="bold"
              >
                Professionella bygg- och städtjänster
              </Heading>
              
              <Box 
                h="1px" 
                w="24" 
                bg="#3a85d8"
                display={{ base: "none", md: "block" }}
                alignSelf={{ md: "start" }}
              />
              
              <Text 
                color="white"
                textShadow="0 2px 6px rgba(0, 0, 0, 0.8)"
                fontWeight="medium"
                lineHeight="1.6"
                fontSize="lg"
              >
                Vi erbjuder ett brett utbud av tjänster inom bygg och städ, samt byggservice, 
                sanering, rivning, och entreprenad. Kvalitet och pålitlighet för både 
                företag och privatpersoner.
              </Text>
              
              <HStack 
                spacing={4} 
                width="full"
                justify={{ base: "center", md: "start" }}
                flexDir={{ base: "column", sm: "row" }}
                alignItems={{ base: "stretch", sm: "center" }}
                gap={{ base: 4, sm: 4 }}
              >
                <Button
                  onClick={() => scrollToSection('tjanster')}
                  bg="white"
                  color="#124075"
                  fontWeight="semibold"
                  boxShadow="md"
                  py={3}
                  px={6}
                  borderRadius="md"
                  size="lg"
                  width={{ base: "full", sm: "auto" }}
                  _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                >
                  Våra tjänster
                </Button>
                <Button
                  onClick={() => scrollToSection('kontakt')}
                  variant="outline"
                  color="white"
                  borderColor="white"
                  fontWeight="semibold"
                  py={3}
                  px={6}
                  borderRadius="md"
                  size="lg"
                  width={{ base: "full", sm: "auto" }}
                  _hover={{ bg: "whiteAlpha.100" }}
                >
                  Kontakta oss
                </Button>
              </HStack>
            </VStack>
            
            {/* Right side - Feature badges */}
            <VStack 
              spacing={4} 
              align={{ base: "center", md: "end" }}
              maxW={{ base: "100%", md: "40%" }}
            >
              <Card
                p={6}
                bg="white"
                borderRadius="lg"
                boxShadow="lg"
                width="full"
                maxW="sm"
                transition="all 0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              >
                <HStack align="start" spacing={4}>
                  <Center 
                    p={2} 
                    borderRadius="full" 
                    bg="rgba(18, 64, 117, 0.1)"
                  >
                    <Icon as={Tool} boxSize={6} color="#124075" />
                  </Center>
                  <VStack align="start" spacing={1}>
                    <Heading as="h4" fontSize="lg" color="#124075">
                      Etablerat 2011
                    </Heading>
                    <Text color="gray.700" fontWeight="medium">
                      Över 10 års erfarenhet inom bygg- och städbranschen med 33 anställda
                    </Text>
                  </VStack>
                </HStack>
              </Card>
              
              <Card
                p={6}
                bg="white"
                borderRadius="lg"
                boxShadow="lg"
                width="full"
                maxW="sm"
                transition="all 0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              >
                <HStack align="start" spacing={4}>
                  <Center 
                    p={2} 
                    borderRadius="full" 
                    bg="rgba(18, 64, 117, 0.1)"
                  >
                    <Icon as={Users} boxSize={6} color="#124075" />
                  </Center>
                  <VStack align="start" spacing={1}>
                    <Heading as="h4" fontSize="lg" color="#124075">
                      Omfattande tjänster
                    </Heading>
                    <Text color="gray.700" fontWeight="medium">
                      Bygg, renovering, städning, sanering och entreprenader för både företag och privatpersoner
                    </Text>
                  </VStack>
                </HStack>
              </Card>
            </VStack>
          </Stack>
        </Container>
        
        {/* Down arrow for scrolling */}
        <Center 
          position="absolute" 
          bottom={8} 
          left={0} 
          right={0} 
          zIndex={10}
        >
          <Box 
            as="a"
            href="#om-oss" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('om-oss');
            }}
            color="white" 
            bg="#124075" 
            borderRadius="full" 
            p={3}
            bgOpacity={0.5}
            animation="bounce 2s infinite"
            _hover={{ color: "whiteAlpha.800" }}
            css={{
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              }
            }}
          >
            <Icon as={ChevronDown} boxSize={5} />
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default HeroSection;