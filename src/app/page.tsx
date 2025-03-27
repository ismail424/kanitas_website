"use client"

import { Layout } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ReferencesSection from '../components/ReferencesSection';
import ContactSection from '../components/ContactSection';
import { Separator } from '@chakra-ui/react';

const { Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <Header />
      <Content>
        <HeroSection />
        <AboutSection />
        <ReferencesSection />
        <ServicesSection />
        <Separator borderColor="gray.200"  borderWidth="1px" />
        <ContactSection />
      </Content>
      <Footer />
    </Layout>
  );
}