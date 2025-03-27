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
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiMenu, FiPhone, FiMail } from 'react-icons/fi';

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activeKey, setActiveKey] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
        bg="brand.500" 
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
                <Box color="gray.900" as={FiPhone} />
                <Text color={'gray.900'} fontSize="sm">073-994 80 47</Text>
              </Box>
              <Box 
                as="a" 
                display="flex" 
                alignItems="center" 
                gap={2} 
                color="white" 
                _hover={{ color: "whiteAlpha.900" }}
              >
                <Box color="gray.900" as={FiMail} />
                <Text color="gray.900" fontSize="sm">info@kanitas.se</Text>
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
        boxShadow={scrolled ? 'md' : '0 1px 0 rgba(0,0,0,0.06)'}
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
            {/* Logo */}
            <Link href="/" passHref legacyBehavior>
              <Box 
                as="a" 
                display="flex" 
                alignItems="center"
              >
                <Image 
                  src="/logo_side.png" 
                  alt="Kanitas AB Logo" 
                  height={scrolled ? '50px' : '60px'} 
                  transition="all 0.3s ease"
                />
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
                  color="brand.500"
                  transition="color 0.2s"
                  _hover={{ 
                    color: "brand.600"
                  }}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    bg: activeKey === item.key ? 'brand.500' : 'transparent',
                    transition: 'background-color 0.3s'
                  }}
                >
                  {item.label}
                </Box>
              ))}
            </Box>
            
            {/* Contact button (desktop) */}
            <Button
              display={{ base: 'none', md: 'block' }}
              onClick={() => scrollToSection('kontakt')}
              colorPalette="brand"
              size="lg"
              fontWeight={500}
              px={5}
              py={6}
              height="auto"
              boxShadow="sm"
              _hover={{
                transform: "translateY(-1px)",
                boxShadow: "md"
              }}
              transition="all 0.2s"
            >
              Kontakta oss
            </Button>
            
            {/* Mobile menu button */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              variant="ghost"
              color="brand.500"
              onClick={() => setDrawerVisible(true)}
              _hover={{ bg: 'transparent' }}
            >
              <FiMenu size={24} />
            </IconButton>
          </Box>
        </Container>
      </Box>
      
      {/* Mobile navigation drawer - Updated to v3 */}
      <Drawer.Root open={drawerVisible} onOpenChange={(details) => setDrawerVisible(details.open)}>
        <Portal>
          <Drawer.Backdrop backdropFilter="blur(2px)" bg="blackAlpha.600" />
          <Drawer.Positioner zIndex={1100}>
            <Drawer.Content>
              <Box p={6}>
                {/* Logo and close button */}
                <Box 
                  display="flex" 
                  justifyContent="space-between" 
                  alignItems="center" 
                  mb={10}
                >
                  <Image 
                    src="/logo_side.png" 
                    alt="Kanitas AB Logo" 
                    height="55px" 
                  />
                  <Drawer.CloseTrigger asChild>
                    <CloseButton colorPalette="brand" size="lg" />
                  </Drawer.CloseTrigger>
                </Box>
                
                {/* Navigation links */}
                <Box display="flex" flexDirection="column" gap={0} mb={10}>
                  {navItems.map((item) => (
                    <Box key={item.key}>
                      <Box
                        as="button"
                        onClick={() => scrollToSection(item.section)}
                        py={3}
                        width="full"
                        textAlign="left"
                        fontSize="lg"
                        fontWeight={500}
                        color="brand.500"
                        _hover={{ color: "brand.600" }}
                        borderBottom="1px solid"
                        borderColor="gray.100"
                      >
                        {item.label}
                      </Box>
                    </Box>
                  ))}
                </Box>
                
                {/* Contact information */}
                <Box display="flex" flexDirection="column" gap={4} mt={12}>
                  <Box 
                    as="a"
                    display="flex" 
                    alignItems="center" 
                    gap={3}
                    color="brand.500"
                  >
                    <Box as={FiPhone} />
                    <Text>073-994 80 47</Text>
                  </Box>
                  <Box 
                    as="a"
                    display="flex" 
                    alignItems="center" 
                    gap={3}
                    color="brand.500"
                  >
                    <Box as={FiMail} />
                    <Text>info@kanitas.se</Text>
                  </Box>
                  <Button
                    colorPalette="brand"
                    width="full"
                    mt={6}
                    py={2}
                    height="auto"
                    onClick={() => scrollToSection('kontakt')}
                    boxShadow="sm"
                    _hover={{
                      transform: "translateY(-1px)",
                      boxShadow: "md"
                    }}
                    transition="all 0.2s"
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