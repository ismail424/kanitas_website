"use client"

import React from 'react';
import { Typography, Row, Col, Card, Tabs } from 'antd';
import { 
  HomeOutlined, 
  ToolOutlined, 
  BranchesOutlined, 
  ClearOutlined,
  ProjectOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ServicesSection: React.FC = () => {
  const buildingServices = [
    {
      title: 'Nybyggnation',
      description: 'Vi hanterar alla aspekter av byggprocessen från grunden, från planering och design till färdig byggnad.',
      icon: <HomeOutlined style={{ fontSize: '36px', color: '#1677ff' }} />,
    },
    {
      title: 'Renovering & Ombyggnation',
      description: 'Vi moderniserar och renoverar bostäder, kontor och kommersiella utrymmen för att möta dagens standarder.',
      icon: <ToolOutlined style={{ fontSize: '36px', color: '#1677ff' }} />,
    },
    {
      title: 'Anpassade lösningar',
      description: 'Skräddarsydda bygglösningar för både privatpersoner och företag baserat på specifika behov.',
      icon: <BranchesOutlined style={{ fontSize: '36px', color: '#1677ff' }} />,
    },
  ];

  const cleaningServices = [
    {
      title: 'Kontors- & Fastighetsstädning',
      description: 'Regelbunden städning för kontor och fastigheter som håller utrymmen rena och hälsosamma.',
      icon: <ClearOutlined style={{ fontSize: '36px', color: '#1677ff' }} />,
    },
    {
      title: 'Flyttstädning',
      description: 'Grundlig städning vid flytt för att säkerställa att utrymmen lämnas i perfekt skick.',
      icon: <ClearOutlined style={{ fontSize: '36px', color: '#1677ff' }} />,
    },
    {
      title: 'Specialstädning',
      description: 'Specialiserad städning efter byggprojekt för att ta bort byggdamm och skräp.',
      icon: <ClearOutlined style={{ fontSize: '36px', color: '#1677ff' }} />,
    },
  ];

  const otherServices = [
    {
      title: 'Projekthantering',
      description: 'Omfattande projektledning för att säkerställa att byggnads- och renoveringsprojekt genomförs effektivt.',
      icon: <ProjectOutlined style={{ fontSize: '36px', color: '#1677ff' }} />,
    },
    {
      title: 'Rådgivning',
      description: 'Expertråd om bygglösningar, materialval och designalternativ för att hjälpa kunder att fatta informerade beslut.',
      icon: <ProjectOutlined style={{ fontSize: '36px', color: '#1677ff' }} />,
    },
    {
      title: 'Byggstädning',
      description: 'Specialiserad städtjänst efter avslutade byggprojekt för att säkerställa att utrymmet är helt rent och redo för användning.',
      icon: <ClearOutlined style={{ fontSize: '36px', color: '#1677ff' }} />,
    },
  ];

  const renderServiceCards = (services: any[]) => (
    <Row gutter={[36, 36]} className="mt-8">
      {services.map((service, index) => (
        <Col key={index} xs={24} md={8}>
          <Card 
            className="h-full card-hover text-center" 
            bordered={false}
            hoverable
            style={{ 
              borderRadius: '8px', 
              boxShadow: '0 6px 25px rgba(0,0,0,0.06)',
              height: '100%'
            }}
            bodyStyle={{ padding: '2rem' }}
          >
            <div className="mb-6 flex justify-center">
              {React.cloneElement(service.icon, { style: { fontSize: '42px', color: 'var(--primary-color)' } })}
            </div>
            <Title level={4} style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>
              {service.title}
            </Title>
            <Paragraph style={{ color: 'var(--text-light)' }}>
              {service.description}
            </Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <section id="tjanster" className="section-container section-alternate">
      <Title level={2} className="section-title">Våra tjänster</Title>
      <Paragraph className="text-center text-lg mb-12" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        Vi erbjuder ett brett utbud av tjänster inom bygg och städning, skräddarsydda efter dina specifika behov och önskemål.
      </Paragraph>
      
      <Tabs
        defaultActiveKey="1"
        centered
        size="large"
        className="service-tabs"
        tabBarGutter={40}
        tabBarStyle={{ marginBottom: '2.5rem', fontWeight: '500' }}
        items={[
          {
            key: "1",
            label: "Byggtjänster",
            children: renderServiceCards(buildingServices)
          },
          {
            key: "2",
            label: "Städtjänster",
            children: renderServiceCards(cleaningServices)
          },
          {
            key: "3",
            label: "Övriga tjänster",
            children: renderServiceCards(otherServices)
          }
        ]}
      />
    </section>
  );
};

export default ServicesSection;