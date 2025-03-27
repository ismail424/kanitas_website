"use client"

import React from 'react'
import {
  Box,
  Card,
  Container,
} from "@chakra-ui/react"
import { CheckCircle } from 'lucide-react'

const AboutSection = () => {
  const values = [
    {
      title: 'Kvalitet',
      description: 'Vi levererar högkvalitativa tjänster vilket återspeglas i våra mycket goda nyckeltal och ekonomiska resultat.',
    },
    {
      title: 'Pålitlighet',
      description: 'Etablerade sedan 2011 med stabil ekonomi och stark position inom branschen i Stockholm.',
    },
    {
      title: 'Brett tjänsteutbud',
      description: 'Allt från bygg och renovering till specialiserade tjänster som mark- och anläggningsentreprenader.',
    },
  ]

  return (
    <Box as="section" id="om-oss" py="16">
      <Container maxW="container.xl">
        <Box.Text 
          as="h2" 
          mb="12" 
          fontSize="3xl" 
          fontWeight="bold"
          textAlign="center"
        >
          Om oss
        </Box.Text>
        
        <Box 
          display="flex"
          flexDirection={{ base: "column", lg: "row" }} 
          gap="12" 
          mb="16" 
          alignItems="center"
        >
          <Box flex="1">
            <Box.Text mb="6" fontSize="lg" color="fg.muted">
              Vi är ett etablerat byggföretag som driver byggentreprenader och specialiserar oss på 
              badrumsrenoveringar, köksrenoveringar, fönsterbyten, gipsentreprenader, nyproduktion och kontorsrenoveringar. 
              Våra kunder är privatpersoner, bostadsrättsföreningar, fastighetsägare och byggbolag.
            </Box.Text>
            <Box.Text mb="6" fontSize="lg" color="fg.muted">
              Vårt motto är att alltid ta ett helhetsansvar i de projekt vi åtar oss. Efter flera års erfarenhet av 
              entreprenadarbete har vi lärt oss att nyckeln till ett lyckat projekt alltid hänger ihop med att någon 
              knyter ihop säcken. Det är därför våra kunder är återkommande, då de verkligen tagit fasta på fördelen 
              med ett byggföretag som tar stafettpinnen från start till mål.
            </Box.Text>
            <Box.Text fontSize="lg" color="fg.muted" fontWeight="medium">
              Kanitas AB grundades 2011 och har sedan dess utvecklats till ett stabilt företag med 33 anställda. 
              Med en omsättning på 49,4 miljoner kronor (2023) och utmärkta ekonomiska nyckeltal står vi för 
              stabilitet, kvalitet och långsiktig kundrelation.
            </Box.Text>
          </Box>
          
          <Box flex="1" overflow="hidden" borderRadius="lg" boxShadow="xl">
            <Box
              as="img" 
              src="/about-image.jpg" 
              alt="Kanitas arbetsteam" 
              w="full"
              h="auto"
              maxH="350px"
              objectFit="cover"
              transition="transform 0.5s"
              _hover={{ transform: "scale(1.05)" }}
            />
          </Box>
        </Box>
        
        <Box.Text 
          as="h3" 
          mb="12" 
          fontSize="2xl" 
          fontWeight="bold"
          textAlign="center"
        >
          Vi värdesätter
        </Box.Text>
        
        <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="9">
          {values.map((value, index) => (
            <Card.Root 
              key={index} 
              h="full" 
              boxShadow="md" 
              border="none"
              transition="transform 0.3s, box-shadow 0.3s"
              _hover={{ 
                transform: "translateY(-5px)", 
                boxShadow: "lg" 
              }}
            >
              <Card.Body>
                <Box display="flex" flexDirection="column" alignItems="center" gap="4">
                  <CheckCircle 
                    size={32}
                    color="var(--chakra-colors-blue-600)" 
                  />
                  <Box.Text 
                    as="h4" 
                    fontSize="xl" 
                    color="blue.800"
                    fontWeight="bold"
                  >
                    {value.title}
                  </Box.Text>
                  <Box.Text color="fg.muted" textAlign="center">
                    {value.description}
                  </Box.Text>
                </Box>
              </Card.Body>
            </Card.Root>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default AboutSection