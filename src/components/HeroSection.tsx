"use client"

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
  HStack,
  Center,
  Icon,
} from '@chakra-ui/react';

// Lucide icons
import { ChevronDown , Phone, HardHat, Hammer, Clock } from 'lucide-react';

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
        bgImage="linear-gradient(rgba(18, 64, 117, 0.8), rgba(0, 0, 0, 0.85)), url(/hero-image.jpg)"
        bgSize="cover"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Simple dark overlay */}
        <Box 
          position="absolute" 
          inset="0" 
          bg="blackAlpha.600" 
          zIndex={0}
        ></Box>
        
        {/* Content */}
        <Container maxW="6xl" px={{ base: 4, md: 6 }} py={{ base: 16, md: 24 }} position="relative" zIndex={10}>
          <VStack 
            gap={{ base: 8, md: 10 }} 
            align="center"
            textAlign="center"
            maxW={{ base: "100%", md: "85%", lg: "75%" }}
            mx="auto"
          >
            {/* Main heading with animated underline */}
            <VStack gap={3}>
              <Heading 
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                lineHeight="tight"
                color="white"
                textShadow="0 2px 10px rgba(0, 0, 0, 0.8)"
                fontWeight="bold"
              >
                Kanitas AB
              </Heading>
              
              <Box 
                h="2px" 
                w={{ base: "32", md: "40" }}
                bgGradient="linear(to-r, blue.400, blue.600)"
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgGradient: "linear(to-r, transparent, white, transparent)",
                  animation: "shimmer 2s infinite",
                }}
                css={{
                  '@keyframes shimmer': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                  }
                }}
              />
              
              <Heading 
                as="h2"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="medium"
                color="blue.100"
                textShadow="0 2px 6px rgba(0, 0, 0, 0.6)"
              >
                Kvalitet och pålitlighet inom bygg- och städtjänster
              </Heading>
            </VStack>
            
            <Text 
              color="white"
              textShadow="0 1px 3px rgba(0, 0, 0, 0.9)"
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="medium"
              lineHeight="1.7"
              maxW="3xl"
            >
              Välkommen till Kanitas AB – din pålitliga partner inom bygg- och städtjänster i Sverige. 
              Vi erbjuder skräddarsydda lösningar för både privata och kommersiella projekt, med särskilt 
              fokus på högkvalitativa byggtjänster och städning som överträffar dina förväntningar.
            </Text>
            
            {/* Feature badges in a row */}
            <HStack 
              justify="center" 
              flexWrap="wrap"
              pt={4}
            >
              <Feature icon={HardHat} text="Professionalism" />
              <Feature icon={Hammer} text="Kvalitetslösningar" />
              <Feature icon={Clock} text="Leverans i tid" />
            </HStack>
            
            {/* Call to action buttons */}
          <Stack 
              direction={{ base: "column", sm: "row" }}
              pt={{ base: 6, md: 10 }}
              width="100%"
              justify="center"
              gap={4}
            >
              <Button
                onClick={() => scrollToSection('tjanster')}
                bg="#124075"
                color="white"
                fontWeight="semibold"
                py={6}
                px={8}
                borderRadius="md"
                size="lg"
                width={{ base: "full", sm: "auto" }}
                fontSize="lg"
                _hover={{ 
                  bg: "#0d325c",
                  transform: "translateY(-2px)", 
                }}
                transition="all 0.3s ease"
                borderWidth="1px"
                borderColor="#124075"
              >
                Våra tjänster
              </Button>
              
              <Button
                onClick={() => scrollToSection('kontakt')}
                variant="outline"
                color="white"
                borderColor="white"
                borderWidth="1px"
                fontWeight="semibold"
                py={6}
                px={8}
                borderRadius="md"
                size="lg"
                width={{ base: "full", sm: "auto" }}
                fontSize="lg"
                _hover={{ 
                  bg: "whiteAlpha.100",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s ease"
              >
                <Icon as={Phone} boxSize={5} />
                Kontakta oss
              </Button>
            </Stack>
          </VStack>
        </Container>
        
        {/* Pulsing scroll down indicator */}
        <Center 
          position="absolute" 
          bottom={10} 
          left={0} 
          right={0} 
          zIndex={10}
        >
          <Box 
            as="a"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('om-oss');
            }}
            color="white" 
            bg="#124075" 
            borderRadius="full" 
            p={3}
            position="relative"
            _hover={{ 
              transform: "translateY(-3px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
            }}
            transition="all 0.3s ease"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "full",
              border: "2px solid #124075",
              animation: "pulse 2s infinite",
            }}
            css={{
              '@keyframes pulse': {
                '0%': { 
                  transform: 'scale(1)',
                  opacity: 1
                },
                '100%': { 
                  transform: 'scale(1.8)',
                  opacity: 0
                },
              }
            }}
          >
            <Icon as={ChevronDown} boxSize={6} />
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

// Feature badge component
const Feature = ({ icon, text }: { icon: React.ElementType, text: string }) => (
  <HStack
    bg="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(4px)"
    borderRadius="full"
    px={4}
    py={2}
    borderWidth="1px"
    borderColor="whiteAlpha.200"
    my={1}
  >
    <Icon as={icon} color="blue.200" boxSize={5} />
    <Text color="white" fontWeight="medium">{text}</Text>
  </HStack>
);

export default HeroSection;