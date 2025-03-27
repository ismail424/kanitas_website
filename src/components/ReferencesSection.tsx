"use client"

import React from 'react';
import { Typography, Row, Col, Card } from 'antd';

const { Title, Paragraph } = Typography;

const ReferencesSection: React.FC = () => {
  const references = [
    { name: 'NCC', logo: '/references/ncc.png' },
    { name: 'Implenia', logo: '/references/Implenia.jpg' },
    { name: 'Jiben', logo: '/references/jiben.png' },
    { name: 'Oljibe', logo: '/references/oljibe.png' },
    { name: 'Artega', logo: '/references/artega.png' },
    { name: 'Byggpartner', logo: '/references/byggpartner.png' },
    { name: 'DAGAB', logo: '/references/dagab.jpg' },
    { name: 'SMD Logistics', logo: '/references/smd.png' },
  ];

  return (
    <section id="referenser" className="section-container section-alternate">
      <Title level={2} className="section-title">Referenser</Title>
      <Paragraph className="text-center text-lg mb-16" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        Vi är stolta över att ha samarbetat med några av Sveriges ledande aktörer inom bygg- och fastighetsbranschen.
      </Paragraph>
      
      <Row gutter={[36, 40]} justify="center" className="mb-12">
        {references.map((company, index) => (
          <Col key={index} xs={12} sm={8} md={6} className="flex justify-center items-center">
            <Card 
              className="w-full h-full card-hover flex items-center justify-center" 
              style={{ 
                padding: '15px', 
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                height: '100px',
                background: 'white'
              }}
              bordered={false}
              bodyStyle={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '10px',
                width: '100%',
                height: '100%'
              }}
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="reference-logo"
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '80px', 
                  objectFit: 'contain',
                  filter: 'grayscale(0.1) contrast(0.95)'
                }} 
              />
            </Card>
          </Col>
        ))}
      </Row>
      
      <Row justify="center">
        <Col xs={24} md={16}>
          <Card 
            className="text-center p-8" 
            bordered={false}
            style={{ 
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              borderRadius: '12px',
            }}
          >
            <Title level={4} style={{ color: 'var(--secondary-color)', marginBottom: '16px' }}>
              Våra nöjda kunder är vår bästa referens
            </Title>
            <Paragraph style={{ fontSize: '16px' }}>
              Med en omsättning på 49,4 miljoner kronor (2023) och mer än 10 års erfarenhet har vi byggt starka och 
              långsiktiga relationer med företag i olika branscher. Vårt mål är alltid att överträffa kundens förväntningar.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default ReferencesSection;