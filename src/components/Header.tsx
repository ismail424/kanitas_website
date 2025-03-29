"use client"

import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Text,
  IconButton,
  Container,
  CloseButton,
  Drawer,
  Portal,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiMenu, FiPhone, FiMail } from 'react-icons/fi';

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeKey, setActiveKey] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Define colors directly
  const primaryColor = "#124075"; // Main blue color
  const primaryColorHover = "#0d325c"; // Darker shade for hover states

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll state for header styling
      setScrolled(window.scrollY > 80);
      
      // Update active nav item based on scroll position
      const sections = ['kontakt', 'referenser', 'tjanster', 'om-oss'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section === 'om-oss' ? 'about' : 
                   section === 'tjanster' ? 'services' : 
                   section === 'referenser' ? 'references' : 'contact';
          break;
        }
      }
      
      setActiveKey(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 90,
        behavior: 'smooth'
      });
    }
    setDrawerVisible(false);
  };

  const navItems = [
    { key: 'home', label: 'Hem', section: 'top' },
    { key: 'about', label: 'Om oss', section: 'om-oss' },
    { key: 'services', label: 'Tjänster', section: 'tjanster' },
    { key: 'references', label: 'Referenser', section: 'referenser' },
    { key: 'contact', label: 'Kontakt', section: 'kontakt' },
  ];

  return (
    <>
      {/* Top info bar */}
      <Box 
        display={{ base: 'none', md: 'block' }} 
        bg={primaryColor}
        color="white"
        position="relative"
        zIndex={1001}
      >
        <Container maxW="7xl" py={2} px={{ base: 4, sm: 6, lg: 8 }}>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <Box display="flex" gap={6}>
              <Box 
                as="a" 
                display="flex" 
                alignItems="center" 
                gap={2} 
                color="white" 
                _hover={{ color: "whiteAlpha.900" }}
              >
                <Box color="white" as={FiPhone} />
                <Text color={'white'} fontSize="sm">070-665 32 48</Text>
              </Box>
              <Box 
                as="a" 
                display="flex" 
                alignItems="center" 
                gap={2} 
                color="white" 
                _hover={{ color: "whiteAlpha.900" }}
              >
                <Box color="white" as={FiMail} />
                <Text color="white" fontSize="sm">info@kanitas.se</Text>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      
      {/* Main header with navigation */}
      <Box 
        as="header"
        position="sticky"
        top={0}
        bg="white"
        borderBottom="1px solid"
        borderColor={scrolled ? "gray.200" : "gray.100"}
        height={scrolled ? '70px' : '80px'}
        transition="all 0.3s ease"
        zIndex={1000}
      >
        <Container 
          maxW="7xl" 
          height="full" 
          px={{ base: 4, sm: 6, lg: 8 }}
        >
          <Box 
            display="flex"
            justifyContent="space-between" 
            alignItems="center" 
            height="full"
          >
            {/* Text logo instead of image */}
            <Link href="/" passHref legacyBehavior>
              <Box 
                as="a" 
                display="flex" 
                alignItems="center"
              >
                <Text 
                  fontSize={scrolled ? "2xl" : "3xl"} 
                  fontWeight="bold" 
                  color={primaryColor}
                  transition="all 0.3s ease"
                >
                  KanitasAB
                </Text>
              </Box>
            </Link>
            
            {/* Desktop navigation */}
            <Box 
              display={{ base: 'none', md: 'flex' }}
              gap={2}
              height="full"
              alignItems="center"
            >
              {navItems.map((item) => (
                <Box 
                  key={item.key}
                  as="button"
                  onClick={() => scrollToSection(item.section)}
                  px={4}
                  py={2}
                  position="relative"
                  fontWeight={500}
                  color={primaryColor}
                  transition="color 0.2s"
                  _hover={{ 
                    color: primaryColorHover
                  }}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    bg: activeKey === item.key ? primaryColor : 'transparent',
                    transition: 'background-color 0.3s'
                  }}
                >
                  {item.label}
                </Box>
              ))}
            </Box>
            
            {/* Updated Contact button (desktop) - smaller size with color */}
            <Button
              display={{ base: 'none', md: 'block' }}
              onClick={() => scrollToSection('kontakt')}
              variant="solid"
              size="md"
              fontWeight={500}
              px={4}
              py={2}
              height="auto"
              bg={primaryColor}
              color="white"
              _hover={{
                bg: primaryColorHover,
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s"
              borderRadius="md"
            >
              Kontakta oss
            </Button>
            
            {/* Mobile menu button */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              variant="ghost"
              color={primaryColor}
              onClick={() => setDrawerVisible(true)}
              _hover={{ bg: 'gray.50' }}
            >
              <FiMenu size={24} />
            </IconButton>
          </Box>
        </Container>
      </Box>
      
      {/* Mobile navigation drawer */}
      <Drawer.Root open={drawerVisible} onOpenChange={(details) => setDrawerVisible(details.open)} placement="end">
        <Portal>
          <Drawer.Backdrop bg="blackAlpha.300" />
          <Drawer.Positioner>
            <Drawer.Content bg="white" maxW="300px" h="100vh">
              <Box p={5}>
                {/* Text logo and close button */}
                <Box 
                  display="flex" 
                  justifyContent="space-between" 
                  alignItems="center" 
                  mb={8}
                  borderBottom="1px solid"
                  borderColor="gray.100"
                  pb={4}
                >
                  <Text 
                    fontSize="2xl" 
                    fontWeight="bold" 
                    color={primaryColor}
                  >
                    KanitasAB
                  </Text>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="md" color={primaryColor} />
                  </Drawer.CloseTrigger>
                </Box>
                
                {/* Navigation links */}
                <Box display="flex" flexDirection="column" gap={1} mb={10}>
                  {navItems.map((item) => (
                    <Box
                      key={item.key}
                      as="button"
                      onClick={() => scrollToSection(item.section)}
                      py={3}
                      width="full"
                      textAlign="left"
                      fontSize="lg"
                      fontWeight={activeKey === item.key ? "600" : "500"}
                      color={activeKey === item.key ? primaryColor : "gray.700"}
                      _hover={{ color: primaryColor, bg: "gray.50" }}
                      borderRadius="md"
                      px={3}
                      transition="all 0.2s"
                    >
                      {item.label}
                    </Box>
                  ))}
                </Box>
                
                {/* Contact information */}
                <Box 
                  display="flex" 
                  flexDirection="column" 
                  gap={4} 
                  mt={8}
                  pt={6}
                  borderTop="1px solid"
                  borderColor="gray.100"
                >
                  <Box 
                    as="a"
                    display="flex" 
                    alignItems="center" 
                    gap={3}
                    color="gray.700"
                    _hover={{ color: primaryColor }}
                  >
                    <Box as={FiPhone} />
                    <Text>070-665 32 48</Text>
                  </Box>
                  <Box 
                    as="a"
                    display="flex" 
                    alignItems="center" 
                    gap={3}
                    color="gray.700"
                    _hover={{ color: primaryColor }}
                  >
                    <Box as={FiMail} />
                    <Text>info@kanitas.se</Text>
                  </Box>
                  <Button
                    variant="solid"
                    width="full"
                    mt={4}
                    py={2.5}
                    height="auto"
                    fontSize="md"
                    bg={primaryColor}
                    color="white"
                    fontWeight={500}
                    onClick={() => scrollToSection('kontakt')}
                    _hover={{
                      bg: primaryColorHover,
                    }}
                    transition="all 0.2s"
                    borderRadius="md"
                  >
                    Kontakta oss
                  </Button>
                </Box>
              </Box>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
};

export default Header;