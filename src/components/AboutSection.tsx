"use client"

import React from 'react'
import {
  Box,
  Card,
  Container,
  Image,
  Text,
  Flex,
  Heading,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react"
import { 
  Award, 
  Calendar, 
  Users, 
  Target, 
  Home, 
  Columns, 
  Building, 
  Briefcase, 
  Bath, 
  ChefHat 
} from 'lucide-react'

const AboutSection = () => {
  // Modern color palette
  const primaryColor = "#2563eb";
  const bgColor = "#f8fafc";
  
  const values = [
    {
      title: 'Helhetsansvar',
      description: 'Vi tar ansvar för hela projektet från start till mål, så du slipper oroa dig.',
      icon: Target
    },
    {
      title: 'Erfaren partner',
      description: 'Etablerade sedan 2011 med gedigen erfarenhet av entreprenadarbeten.',
      icon: Calendar
    },
    {
      title: 'Kvalitetsgaranti',
      description: 'Vi levererar alltid högsta kvalitet, vilket är anledningen till våra många återkommande kunder.',
      icon: Award
    },
  ]

  const specializations = [
    { name: 'Fönsterbyten', icon: Home },
    { name: 'Gipsentreprenader', icon: Columns },
    { name: 'Nyproduktion', icon: Building },
    { name: 'Kontorsrenoveringar', icon: Briefcase },
    { name: 'Badrumsrenoveringar', icon: Bath },
    { name: 'Köksrenoveringar', icon: ChefHat }
  ]

  return (
    <Box 
      as="section" 
      id="om-oss" 
      py={{ base: "20", md: "28" }}
      bg={bgColor}
    >
      <Container maxW="container.xl">
        {/* Section Header */}
        <VStack gap="4" mb={{ base: "12", md: "16" }}>
          <Heading 
            as="h2" 
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="gray.800"
            position="relative"
            textAlign="center"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "3px",
              borderRadius: "full",
              bg: primaryColor,
            }}
          >
            Välkommen till Kanitas AB
          </Heading>
          
          <Text 
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            maxW="3xl"
            textAlign="center"
            pt="6"
          >
            Din professionella byggpartner som tar helhetsansvar för ditt projekt
          </Text>
        </VStack>
        
        {/* Main Content */}
        <Flex 
          direction={{ base: "column", lg: "row" }} 
          gap={{ base: "10", lg: "16" }} 
          mb={{ base: "16", lg: "20" }} 
          align="start"
        >
          {/* Left Side: Text Content */}
          <Box flex="1">
            <VStack gap="6" align="start">
                <Text 
                fontSize={{ base: "md", md: "lg" }} 
                color="gray.700" 
                lineHeight="tall" 
                textAlign={{ base: "center", md: "left" }}
                >
                Kanitas AB startade 2011 och har med åren kommit att specialisera sig inom 
                entreprenadarbeten såsom fönsterbyten, gipsentreprenader, nyproduktion och 
                kontorsrenoveringar. Våra kunder är privatpersoner, bostadsrättsföreningar, 
                fastighetsägare och byggbolag.
                </Text>
              
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" lineHeight="tall"
                textAlign={{ base: "center", md: "left" }}
              >
                <Text as="span" fontWeight="600">Vårt motto är att alltid ta ett helhetsansvar</Text> i de projekt vi åtar oss. 
                Efter flera års erfarenhet av entreprenadarbete har vi lärt oss att nyckeln till ett 
                lyckat projekt alltid hänger ihop med att någon knyter ihop säcken. Det är därför våra 
                kunder är återkommande, då de verkligen tagit fasta på fördelen med ett byggföretag 
                som tar stafettpinnen från start till mål.
              </Text>
              
              {/* Specializations */}
              <Box w="full" pt="4">
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" color={primaryColor} mb="4">
                  Våra specialområden:
                </Text>
                
                <Flex flexWrap="wrap" gap="4">
                  {specializations.map((specialization, index) => (
                    <HStack 
                      key={index}
                      bg="white"
                      px="4"
                      py="2.5"
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="gray.200"
                      transition="all 0.2s ease"
                      _hover={{
                        borderColor: primaryColor,
                        transform: "translateY(-2px)",
                      }}
                    >
                      <Icon as={specialization.icon} color={primaryColor} boxSize="4" />
                      <Text fontWeight="medium" color="gray.700">
                        {specialization.name}
                      </Text>
                    </HStack>
                  ))}
                </Flex>
              </Box>
            </VStack>
          </Box>
          
          {/* Right Side: Image */}
          <Box 
            flex="1" 
            borderRadius="lg" 
            overflow="hidden" 
            position="relative"
            h={{ base: "300px", md: "400px" }}
            borderWidth="1px"
            borderColor="gray.200"
          >
            <Image
              src="/images/building.jpg"
              alt="Byggprojekt"
              objectFit="cover"
              w="full"
              h="full"
              transition="transform 0.6s ease"
              _hover={{ transform: "scale(1.05)" }}
            />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bg="linear-gradient(transparent, rgba(0,0,0,0.7))"
              p="6"
            >
              <Text color="white" fontWeight="bold" fontSize="xl">
                Professionella byggexperter
              </Text>
            </Box>
          </Box>
        </Flex>
        
        {/* Core Values */}
        <Box mt={{ base: "16", md: "20" }}>
          <Heading 
            as="h3" 
            fontSize={{ base: "2xl", md: "3xl" }}
            textAlign="center"
            color="gray.800"
            mb={{ base: "8", md: "12" }}
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "40px",
              height: "2px",
              borderRadius: "full",
              bg: primaryColor,
            }}
          >
            Vad som gör oss unika
          </Heading>
          
          <Flex 
            flexWrap="wrap" 
            justify="center" 
            gap={{ base: "6", md: "8" }}
            mt="8"
          >
            {values.map((value, index) => (
              <Card.Root 
                key={index} 
                maxW={{ base: "100%", md: "30%" }}
                minW={{ base: "100%", md: "300px" }}
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                transition="all 0.3s ease"
                _hover={{ 
                  transform: "translateY(-8px)", 
                  borderColor: primaryColor
                }}
                borderWidth="1px"
                borderColor="gray.200"
              >
                <Card.Body py="8" px="6">
                  <VStack gap="5" align="center">
                    <Flex
                      justify="center"
                      align="center"
                      w="16"
                      h="16"
                      borderRadius="full"
                      bg={`${primaryColor}10`}
                    >
                      <Icon as={value.icon} color={primaryColor} boxSize="7" />
                    </Flex>
                    
                    <Text
                      as="h4"
                      fontSize="xl"
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {value.title}
                    </Text>
                    
                    <Box h="1px" w="16" bg="gray.200" />
                    
                    <Text
                      color="gray.600"
                      textAlign="center"
                      fontSize="md"
                      lineHeight="tall"
                    >
                      {value.description}
                    </Text>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Flex>
        </Box>
        
        {/* Company Facts */}
        <Flex 
          mt={{ base: "16", md: "24" }}
          bg="#34495e"  // Changed from primaryColor to a dark blue-gray
          p={{ base: "8", md: "10" }}
          borderRadius="lg"
          color="white"
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={{ base: "8", md: "4" }}
          borderWidth="1px"
          borderColor="rgba(52, 73, 94, 0.4)"  // Adjusted border color to match new background
        >
          <HStack gap="4">
            <Icon as={Calendar} boxSize={{ base: "6", md: "7" }} color="white" opacity="0.9" />
            <VStack align="start" gap="0">
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">Sedan 2011</Text>
              <Text fontSize="sm" color="white" opacity="0.8">Etablerade</Text>
            </VStack>
          </HStack>
          
          <Box display={{ base: "none", md: "block" }} h="50px" w="1px" bg="white" opacity="0.2" />
          
          <HStack gap="4">
            <Icon as={Users} boxSize={{ base: "6", md: "7" }} color="white" opacity="0.9" />
            <VStack align="start" gap="0">
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">Många nöjda kunder</Text>
              <Text fontSize="sm" color="white" opacity="0.8">Privatpersoner till företag</Text>
            </VStack>
          </HStack>
          
          <Box display={{ base: "none", md: "block" }} h="50px" w="1px" bg="white" opacity="0.2" />
          
          <HStack gap="4">
            <Icon as={Target} boxSize={{ base: "6", md: "7" }} color="white" opacity="0.9" />
            <VStack align="start" gap="0">
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">100% engagemang</Text>
              <Text fontSize="sm" color="white" opacity="0.8">I varje projekt</Text>
            </VStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default AboutSection