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
import { ChevronDown, Phone, HardHat, Hammer, Clock } from 'lucide-react';

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
        minH={{ base: "100vh", md: "90vh" }} // Increased mobile height
        position="relative"
        overflow="hidden"
        bgImage="linear-gradient(rgba(18, 64, 117, 0.8), rgba(0, 0, 0, 0.85)), url(/hero-image.jpg)"
        bgSize="cover"
        backgroundPosition={{ base: "center", md: "center" }}
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
        <Container 
          maxW="6xl" 
          px={{ base: 6, md: 6 }} // Increased horizontal padding on mobile
          py={{ base: 16, md: 24 }} // Increased vertical padding on mobile
          position="relative" 
          zIndex={10}
        >
          <VStack 
            gap={{ base: 8, md: 10 }} // Increased gap on mobile
            align="center"
            textAlign="center"
            maxW={{ base: "100%", md: "85%", lg: "75%" }}
            mx="auto"
          >
            {/* Main heading with animated underline */}
            <VStack gap={{ base: 3, md: 3 }}> // Increased gap on mobile
              <Heading 
                as="h1"
                fontSize={{ base: "5xl", md: "5xl", lg: "6xl" }}
                lineHeight="tight"
                color="white"
                textShadow="0 2px 10px rgba(0, 0, 0, 0.8)"
                fontWeight="bold"
              >
                Kanitas AB
              </Heading>
              
              <Box 
                h="2px" 
                w={{ base: "28", md: "40" }}
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
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="medium"
                color="blue.100"
                textShadow="0 2px 6px rgba(0, 0, 0, 0.6)"
                mt={{ base: 2, md: 2 }} // Increased spacing on mobile
              >
                Kvalitet och pålitlighet inom bygg- och städtjänster
              </Heading>
            </VStack>
            
            <Text 
              color="white"
              textShadow="0 1px 3px rgba(0, 0, 0, 0.9)"
              fontSize={{ base: "md", md: "xl" }}
              fontWeight="medium"
              lineHeight={{ base: "1.7", md: "1.7" }} // Increased line height on mobile
              maxW="3xl"
              px={{ base: 2, md: 0 }} // Added horizontal padding on mobile
            >
              Välkommen till Kanitas AB – din pålitliga partner inom bygg- och städtjänster i Sverige. 
              Vi erbjuder skräddarsydda lösningar för både privata och kommersiella projekt, med särskilt 
              fokus på högkvalitativa byggtjänster och städning som överträffar dina förväntningar.
            </Text>
            
            {/* Feature badges in a row - stack vertically on very small screens */}
            <Box 
              w="full" 
              pt={{ base: 3, md: 4 }} // Increased top padding on mobile
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              gap={{ base: 3, sm: 3 }} // Increased gap on mobile
            >
              <Feature icon={HardHat} text="Professionalism" />
              <Feature icon={Hammer} text="Kvalitetslösningar" />
              <Feature icon={Clock} text="Leverans i tid" />
            </Box>
            
            {/* Call to action buttons */}
            <Stack 
              direction={{ base: "column", sm: "row" }}
              pt={{ base: 8, md: 10 }} // Increased top padding on mobile
              width="100%"
              justify="center"
              gap={4}
            >
              <Button
                onClick={() => scrollToSection('tjanster')}
                bg="#124075"
                color="white"
                fontWeight="semibold"
                py={{ base: 6, md: 6 }} // Increased vertical padding on mobile
                px={{ base: 6, md: 8 }}
                borderRadius="md"
                size={{ base: "md", md: "lg" }}
                width={{ base: "full", sm: "auto" }}
                fontSize={{ base: "md", md: "lg" }}
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
                py={{ base: 6, md: 6 }} // Increased vertical padding on mobile
                px={{ base: 6, md: 8 }}
                borderRadius="md"
                size={{ base: "md", md: "lg" }}
                width={{ base: "full", sm: "auto" }}
                fontSize={{ base: "md", md: "lg" }}
                _hover={{ 
                  bg: "whiteAlpha.100",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s ease"
              >
                <Icon as={Phone} boxSize={{ base: 4, md: 5 }} />
                Kontakta oss
              </Button>
            </Stack>
          </VStack>
        </Container>
        
        {/* Pulsing scroll down indicator - adjusted for mobile */}
        <Center 
          position="absolute" 
          bottom={{ base: 10, md: 10 }} // Increased bottom position on mobile
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
            p={{ base: 4, md: 3 }} // Increased padding on mobile
            position="relative"
            cursor="pointer"
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
            <Icon as={ChevronDown} boxSize={{ base: 6, md: 6 }} /> {/* Increased icon size on mobile */}
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

// Feature badge component - improved for mobile
const Feature = ({ icon, text }: { icon: React.ElementType, text: string }) => (
  <HStack
    bg="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(4px)"
    borderRadius="full"
    px={{ base: 4, md: 4 }} // Increased horizontal padding on mobile
    py={{ base: 2, md: 2 }} // Increased vertical padding on mobile
    borderWidth="1px"
    borderColor="whiteAlpha.200"
    my={1.5} // Increased margin on both mobile and desktop
    minW={{ base: "auto", sm: "auto" }}
    maxW={{ base: "85%", sm: "auto" }} // Increased max width on mobile
    justifyContent={{ base: "center", sm: "flex-start" }}
  >
    <Icon as={icon} color="blue.200" boxSize={{ base: 5, md: 5 }} /> // Increased icon size on mobile
    <Text color="white" fontWeight="medium" fontSize={{ base: "sm", md: "md" }}>
      {text}
    </Text>
  </HStack>
);

export default HeroSection;