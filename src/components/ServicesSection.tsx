"use client"

import React, { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  Flex,
  VStack,
  Button,
  Icon,
} from "@chakra-ui/react"
import { 
  Home, 
  Wrench, 
  GitBranch,
  Trash2, 
  Briefcase,
  ClipboardList,
  Building,
  Truck,
  MessageCircle
} from 'lucide-react'

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("building")
  
  // Modern color palette
  const primaryColor = "#2563eb";
  const bgColor = "#f8fafc";
  const iconBgColor = "#eff6ff";

  const buildingServices = [
    {
      title: 'Nybyggnation',
      description: 'Vi hanterar alla aspekter av byggprocessen från grunden, från planering och design till färdig byggnad.',
      icon: Home,
    },
    {
      title: 'Renovering & Ombyggnation',
      description: 'Vi moderniserar och renoverar bostäder, kontor och kommersiella utrymmen för att möta dagens standarder.',
      icon: Wrench,
    },
    {
      title: 'Anpassade lösningar',
      description: 'Skräddarsydda bygglösningar för både privatpersoner och företag baserat på specifika behov.',
      icon: GitBranch,
    },
  ]

  const cleaningServices = [
    {
      title: 'Kontors- & Fastighetsstädning',
      description: 'Regelbunden städning för kontor och fastigheter som håller utrymmen rena och hälsosamma.',
      icon: Building,
    },
    {
      title: 'Flyttstädning',
      description: 'Grundlig städning vid flytt för att säkerställa att utrymmen lämnas i perfekt skick.',
      icon: Truck,
    },
    {
      title: 'Specialstädning',
      description: 'Specialiserad städning efter byggprojekt för att ta bort byggdamm och skräp.',
      icon: Trash2,
    },
  ]

  const otherServices = [
    {
      title: 'Projekthantering',
      description: 'Omfattande projektledning för att säkerställa att byggnads- och renoveringsprojekt genomförs effektivt.',
      icon: ClipboardList,
    },
    {
      title: 'Rådgivning',
      description: 'Expertråd om bygglösningar, materialval och designalternativ för att hjälpa kunder att fatta informerade beslut.',
      icon: MessageCircle,
    },
    {
      title: 'Byggstädning',
      description: 'Specialiserad städtjänst efter avslutade byggprojekt för att säkerställa att utrymmet är helt rent och redo för användning.',
      icon: Briefcase,
    },
  ]

  // Function to render service cards based on active tab
  const getActiveServices = () => {
    switch (activeTab) {
      case "building":
        return buildingServices
      case "cleaning":
        return cleaningServices
      case "other":
        return otherServices
      default:
        return buildingServices
    }
  }

  return (
    <Box 
      as="section" 
      id="tjanster" 
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
            Våra tjänster
          </Heading>
          
          <Text 
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600"
            maxW="3xl"
            textAlign="center"
            pt="6"
            lineHeight="tall"
          >
            Vi erbjuder ett brett utbud av tjänster inom bygg och städning, skräddarsydda efter dina specifika behov och önskemål.
          </Text>
        </VStack>
        
        {/* Tab Buttons */}
        <Flex 
          justify="center" 
          gap={{ base: "4", md: "5" }} 
          mb={{ base: "10", md: "12" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Button
            px={{ base: "6", md: "8" }}
            py="5"
            fontSize={{ base: "md", md: "md" }}
            fontWeight="500"
            bg={activeTab === "building" ? primaryColor : "white"}
            color={activeTab === "building" ? "white" : "gray.700"}
            borderWidth="1px"
            borderColor={activeTab === "building" ? primaryColor : "gray.200"}
            borderRadius="md"
            transition="all 0.2s"
            _hover={{
              bg: activeTab === "building" ? primaryColor : "gray.50",
              transform: "translateY(-1px)",
            }}
            onClick={() => setActiveTab("building")}
          >
            Byggtjänster
          </Button>
          
          <Button
            px={{ base: "6", md: "8" }}
            py="5"
            fontSize={{ base: "md", md: "md" }}
            fontWeight="500"
            bg={activeTab === "cleaning" ? primaryColor : "white"}
            color={activeTab === "cleaning" ? "white" : "gray.700"}
            borderWidth="1px"
            borderColor={activeTab === "cleaning" ? primaryColor : "gray.200"}
            borderRadius="md"
            transition="all 0.2s"
            _hover={{
              bg: activeTab === "cleaning" ? primaryColor : "gray.50",
              transform: "translateY(-1px)",
            }}
            onClick={() => setActiveTab("cleaning")}
          >
            Städtjänster
          </Button>
          
          <Button
            px={{ base: "6", md: "8" }}
            py="5"
            fontSize={{ base: "md", md: "md" }}
            fontWeight="500"
            bg={activeTab === "other" ? primaryColor : "white"}
            color={activeTab === "other" ? "white" : "gray.700"}
            borderWidth="1px"
            borderColor={activeTab === "other" ? primaryColor : "gray.200"}
            borderRadius="md"
            transition="all 0.2s"
            _hover={{
              bg: activeTab === "other" ? primaryColor : "gray.50",
              transform: "translateY(-1px)",
            }}
            onClick={() => setActiveTab("other")}
          >
            Övriga tjänster
          </Button>
        </Flex>
        
        {/* Service Cards */}
        <SimpleGrid 
          columns={{ base: 1, md: 3 }} 
          gap={{ base: "6", md: "8" }}
        >
          {getActiveServices().map((service, index) => (
            <Card.Root
              key={index}
              borderRadius="lg"
              borderWidth="2px"
              borderColor="gray.200"
              bg="white"
              p={{ base: "6", md: "7" }}
              transition="all 0.3s ease"
              _hover={{
                borderColor: "blue.200"
              }}
              height="100%"
            >
              <VStack align="flex-start" gap="5" height="100%">
                <Flex
                  justify="center"
                  align="center"
                  w="14"
                  h="14"
                  borderRadius="lg"
                  bg={iconBgColor}
                >
                  <Icon as={service.icon} color={primaryColor} boxSize="6" />
                </Flex>
                
                <Heading
                  as="h3"
                  fontSize="xl"
                  color="gray.800"
                  fontWeight="600"
                >
                  {service.title}
                </Heading>
                
                <Text
                  color="gray.600"
                  lineHeight="tall"
                  flex="1"
                >
                  {service.description}
                </Text>
              </VStack>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default ServicesSection