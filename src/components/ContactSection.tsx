"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  Flex,
  Stack,
  Icon,
  Card,
  CardBody,
  CardHeader,
  Link,
} from '@chakra-ui/react';
import { Mail, Phone, Home, Send } from 'lucide-react';

// Define TypeScript interfaces
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Color definitions - simplified and modernized
  const primaryColor: string = "#2563eb"; // Modern blue
  const hoverColor: string = "#1d4ed8"; // Slightly darker blue for hover states
  const bgLight: string = "#f8fafc"; // Very light blue-gray background

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form values:', formData);
      alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Box id="kontakt" py={{ base: 20, md: 24 }} bg={bgLight} position="relative">
      <Container maxW="7xl" position="relative">
        {/* Section Header */}
        <Stack gap={4} mb={{ base: 12, md: 16 }} align="center">
          <Heading 
            as="h2" 
            fontSize={{ base: "3xl", md: "4xl" }} 
            textAlign="center"
            color="gray.800"
            position="relative"
            _after={{
              content: '""',
              display: 'block',
              width: '60px',
              height: '3px',
              bg: primaryColor,
              mx: 'auto',
              mt: 4,
              borderRadius: 'full',
            }}
          >
            Kontakta oss
          </Heading>
          <Text 
            textAlign="center" 
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.600" 
            maxW="800px"
            mt={2}
          >
            Har du frågor eller vill du veta mer om hur vi kan hjälpa dig med ditt projekt? 
            Tveka inte att kontakta oss - vi svarar gärna på alla dina frågor!
          </Text>
        </Stack>
        
        {/* Main Content */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
          {/* Contact Form */}
          <Card.Root 
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            borderWidth="2px"
            borderColor="gray.200"
            _hover={{ borderColor: "blue.200" }}
            transition="border-color 0.3s ease"
          >
            <CardHeader bg="white" borderBottom="1px" borderColor="gray.100" pt={6} pb={4} px={6}>
              <Heading as="h4" fontSize="xl" color="gray.800" fontWeight="semibold">
                Skicka meddelande
              </Heading>
            </CardHeader>
            
            <CardBody p={6}>
              <form onSubmit={handleSubmit}>
                <Stack gap={5}>
                  <Box>
                    <Text fontWeight="medium" mb={2} color="gray.700" fontSize="sm">Namn</Text>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ditt namn"
                      size="md"
                      borderColor="gray.200"
                      borderRadius="md"
                      _focus={{ 
                        borderColor: primaryColor,
                        boxShadow: `0 0 0 1px ${primaryColor}`
                      }}
                      required
                    />
                  </Box>
                  
                  <Box>
                    <Text fontWeight="medium" mb={2} color="gray.700" fontSize="sm">E-post</Text>
                    <Input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Din e-post"
                      size="md"
                      type="email"
                      borderColor="gray.200"
                      borderRadius="md"
                      _focus={{ 
                        borderColor: primaryColor,
                        boxShadow: `0 0 0 1px ${primaryColor}`
                      }}
                      required
                    />
                  </Box>
                  
                  <Box>
                    <Text fontWeight="medium" mb={2} color="gray.700" fontSize="sm">Telefon</Text>
                    <Input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ditt telefonnummer"
                      size="md"
                      borderColor="gray.200"
                      borderRadius="md"
                      _focus={{ 
                        borderColor: primaryColor,
                        boxShadow: `0 0 0 1px ${primaryColor}`
                      }}
                    />
                  </Box>
                  
                  <Box>
                    <Text fontWeight="medium" mb={2} color="gray.700" fontSize="sm">Meddelande</Text>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beskriv ditt projekt eller ställ dina frågor här"
                      size="md"
                      rows={4}
                      borderColor="gray.200"
                      borderRadius="md"
                      _focus={{ 
                        borderColor: primaryColor,
                        boxShadow: `0 0 0 1px ${primaryColor}`
                      }}
                      required
                    />
                  </Box>
                  
                  <Box pt={2}>
                    <Button
                      type="submit"
                      bg={primaryColor}
                      color="white"
                      px={6}
                      py={2.5}
                      height="auto"
                      fontWeight="500"
                      disabled={isSubmitting}
                      _hover={{
                        bg: hoverColor,
                      }}
                      _active={{
                        bg: hoverColor,
                      }}
                      transition="all 0.2s"
                      borderRadius="md"
                      w={{ base: 'full', sm: 'auto' }}
                      fontSize="md"
                    >
                      <Icon as={Send} boxSize={4} mr={2} />
                      {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                    </Button>
                  </Box>
                </Stack>
              </form>
            </CardBody>
          </Card.Root>
          
          {/* Contact Information */}
          <Card.Root 
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            borderWidth="2px"
            borderColor="gray.200"
            _hover={{ borderColor: "blue.200" }}
            transition="border-color 0.3s ease"
          >
            <CardHeader bg="white" borderBottom="1px" borderColor="gray.100" pt={6} pb={4} px={6}>
              <Heading as="h4" fontSize="xl" color="gray.800" fontWeight="semibold">
                Kontaktinformation
              </Heading>
            </CardHeader>
            
            <CardBody p={6}>
              <Stack gap={6}>
                <Flex align="center">
                  <Flex 
                    bg={`${primaryColor}10`} 
                    p={3} 
                    borderRadius="md" 
                    mr={4}
                    color={primaryColor}
                  >
                    <Icon as={Phone} boxSize={4} />
                  </Flex>
                  <Box>
                    <Text fontWeight="semibold" mb={1} fontSize="sm" color="gray.600">Telefon</Text>
                    <Link 
                      href="tel:070-6653248" 
                      color="gray.800" 
                      _hover={{ color: primaryColor }}
                      display="flex"
                      alignItems="center"
                      fontWeight="medium"
                    >
                      070-665 32 48
                    </Link>
                  </Box>
                </Flex>
                
                <Flex align="center">
                  <Flex 
                    bg={`${primaryColor}10`} 
                    p={3} 
                    borderRadius="md" 
                    mr={4}
                    color={primaryColor}
                  >
                    <Icon as={Mail} boxSize={4} />
                  </Flex>
                  <Box>
                    <Text fontWeight="semibold" mb={1} fontSize="sm" color="gray.600">E-post</Text>
                    <Link 
                      href="mailto:info@kanitas.se" 
                      color="gray.800" 
                      _hover={{ color: primaryColor }}
                      display="flex"
                      alignItems="center"
                      fontWeight="medium"
                    >
                      info@kanitas.se
                    </Link>
                  </Box>
                </Flex>
                
                <Flex align="center">
                  <Flex 
                    bg={`${primaryColor}10`} 
                    p={3} 
                    borderRadius="md" 
                    mr={4}
                    color={primaryColor}
                  >
                    <Icon as={Home} boxSize={4} />
                  </Flex>
                  <Box>
                    <Text fontWeight="semibold" mb={1} fontSize="sm" color="gray.600">Adress</Text>
                    <Text color="gray.800" fontWeight="medium">
                      Kanitas AB<br />
                      Almarevägen 13<br />
                      176 76 Järfälla<br />
                      Sverige
                    </Text>
                  </Box>
                </Flex>
              </Stack>
              
              <Box h="1px" bg="gray.100" my={8} />
              
              <Heading as="h4" fontSize="lg" mb={5} color="gray.800" fontWeight="semibold">
                Organisationsinfo
              </Heading>
              
              <Stack gap={3}>
                <Flex justify="space-between" py={2} borderBottom="1px solid" borderColor="gray.100">
                  <Text fontWeight="medium" color="gray.600" fontSize="sm">Org.nummer</Text>
                  <Text color="gray.800">556841-1010</Text>
                </Flex>
                <Flex justify="space-between" py={2} borderBottom="1px solid" borderColor="gray.100">
                  <Text fontWeight="medium" color="gray.600" fontSize="sm">Grundat</Text>
                  <Text color="gray.800">2011</Text>
                </Flex>
                <Flex justify="space-between" py={2}>
                  <Text fontWeight="medium" color="gray.600" fontSize="sm">Anställda</Text>
                  <Text color="gray.800">33</Text>
                </Flex>
              </Stack>
            </CardBody>
          </Card.Root>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactSection;