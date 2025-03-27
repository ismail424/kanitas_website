"use client"

import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  Image,
  Flex,
  VStack,
} from "@chakra-ui/react"

const ReferencesSection = () => {
  // Modern color palette
  const primaryColor = "#2563eb";
  const bgColor = "#ffffff";
  
  const references = [
    { name: 'NCC', logo: '/references/ncc.png' },
    { name: 'Implenia', logo: '/references/Implenia.jpg' },
    { name: 'Jiben', logo: '/references/jiben.png' },
    { name: 'Oljibe', logo: '/references/oljibe.png' },
    { name: 'Artega', logo: '/references/artega.png' },
    { name: 'Byggpartner', logo: '/references/byggpartner.png' },
    { name: 'DAGAB', logo: '/references/dagab.jpg' },
    { name: 'SMD Logistics', logo: '/references/smd.jpg' },
  ]

  return (
    <Box 
      as="section" 
      id="referenser" 
      py={{ base: "20", md: "28" }}
      bg={bgColor}
    >
      <Container maxW="container.xl">
        {/* Section Header */}
        <VStack gap="4" mb={{ base: "12", md: "16" }}>
          <Heading 
            as="h2" 
            fontSize={{ base: "3xl", md: "4xl" }}
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
            Referenser
          </Heading>
          
          <Text 
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            maxW="3xl"
            textAlign="center"
            pt="6"
            lineHeight="tall"
          >
            Vi är stolta över att ha samarbetat med några av Sveriges ledande aktörer inom bygg- och fastighetsbranschen.
          </Text>
        </VStack>
        
        {/* Logo Grid */}
        <SimpleGrid 
          columns={{ base: 2, sm: 3, md: 4 }} 
          gap={{ base: "6", md: "8" }}
          mb={{ base: "14", md: "20" }}
        >
          {references.map((company, index) => (
            <Card.Root
              key={index}
              borderRadius="lg"
              height="130px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="5"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                borderColor: `${primaryColor}`,
              }}
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                maxW="90%"
                maxH="70px"
                objectFit="contain"
              />
            </Card.Root>
          ))}
        </SimpleGrid>
        
        {/* Bottom Card */}
        <Flex justify="center" w="full">
          <Card.Root
            borderRadius="xl"
            p={{ base: "8", md: "10" }}
            maxW="4xl"
            w="full"
            bg="gray.50"
            borderWidth="1px"
            borderColor="gray.200"
          >
            <VStack gap="5">
              <Heading
                as="h4"
                fontSize={{ base: "xl", md: "2xl" }}
                color="gray.800"
                textAlign="center"
                position="relative"
                pb="4"
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  borderRadius: "full",
                  bg: primaryColor,
                }}
              >
                Långsiktiga partnerskap bygger på förtroende
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                textAlign="center"
                lineHeight="tall"
              >
                Sedan starten 2011 har vi byggt starka och varaktiga relationer med våra kunder. 
                Genom att konsekvent leverera hög kvalitet, hålla tidsplaner och erbjuda transparens 
                genom hela byggprocessen har vi blivit en betrodd partner för både små och stora 
                projekt i hela Stockholm. Vår framgång bygger på våra kunders förtroende.
              </Text>
            </VStack>
          </Card.Root>
        </Flex>
      </Container>
    </Box>
  )
}

export default ReferencesSection