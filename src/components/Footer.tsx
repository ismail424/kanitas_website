"use client"

import React from 'react';
import { Layout, Typography, Row, Col, Space } from 'antd';
import { PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Footer: AntFooter } = Layout;
const { Text, Link: AntLink, Title } = Typography;

const Footer: React.FC = () => {
  return (
    <AntFooter 
      className="pt-16 pb-6"
      style={{ 
        background: '#0e3261',
        color: 'white'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certificate Images Row - Further Improved Styling */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 32, // reduced from 48
            marginTop: 4, // reduced from 12
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 16, // reduced from 48
              background: 'rgba(255,255,255,0.18)',
              borderRadius: 22,
              boxShadow: '0 4px 32px 0 rgba(18,64,117,0.13)',
              padding: '20px 24px', // reduced from 28px 40px
              flexWrap: 'wrap',
              border: '1.5px solid #3a85d844',
              maxWidth: 900,
              width: '100%',
              minHeight: 90, // reduced from 110
              transition: 'box-shadow 0.3s',
            }}
          >
            <Image src="/images/cert/aaa_120.png" alt="AAA certifikat" width={140} height={80} style={{ objectFit: 'contain', background: '#fff', borderRadius: 12, padding: 8, boxShadow: '0 2px 12px #12407522', border: '1px solid #e5e7eb', margin: 4 }} />
            <Image src="/images/cert/byggnads_140.png" alt="Byggnads certifikat" width={140} height={80} style={{ objectFit: 'contain', background: '#fff', borderRadius: 12, padding: 8, boxShadow: '0 2px 12px #12407522', border: '1px solid #e5e7eb', margin: 4 }} />
            <Image src="/images/cert/fastighets_120.png" alt="Fastighets certifikat" width={140} height={80} style={{ objectFit: 'contain', background: '#fff', borderRadius: 12, padding: 8, boxShadow: '0 2px 12px #12407522', border: '1px solid #e5e7eb', margin: 4 }} />
            <Image src="/images/cert/SafeTrade_120.png" alt="SafeTrade certifikat" width={140} height={80} style={{ objectFit: 'contain', background: '#fff', borderRadius: 12, padding: 8, boxShadow: '0 2px 12px #12407522', border: '1px solid #e5e7eb', margin: 4 }} />
            <Image src="/images/cert/svnaring_B.png" alt="Svensk Näring certifikat" width={140} height={80} style={{ objectFit: 'contain', background: '#fff', borderRadius: 12, padding: 8, boxShadow: '0 2px 12px #12407522', border: '1px solid #e5e7eb', margin: 4 }} />
          </div>
        </div>
        <Row gutter={[48, 48]}>
          <Col xs={24} sm={12} lg={8}>
            <div className="mb-6">
              <Image 
                src="/images/logo_circle.png" 
                alt="Kanitas AB Logo" 
                width={'70'}
                height={'70'}
                className="rounded-full"
              />
            </div>
            <Text 
              className="block mb-4"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Etablerat 2011. Vi bedriver verksamhet inom bygg- och städbranschen, 
              byggstädning, byggservice, byggsanering, brandsanering, fuktsanering, 
              snöröjning, rivning, och mark- och anläggningsentreprenader.
            </Text>
          </Col>
          
          <Col xs={24} sm={12} lg={8}>
            <Title 
              level={4} 
              className="mb-6"
              style={{ color: 'white', fontSize: '18px', position: 'relative' }}
            >
              <span 
                style={{ 
                  position: 'absolute', 
                  bottom: '-10px', 
                  left: '0', 
                  width: '30px', 
                  height: '2px', 
                  background: '#3a85d8' 
                }}
              ></span>
              Kontakta oss
            </Title>
            <Space direction="vertical" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <Space>
                <PhoneOutlined style={{ color: '#3a85d8' }} />
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>070-665 32 48</Text>
              </Space>
              <Space>
                <MailOutlined style={{ color: '#3a85d8' }} />
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>info@kanitas.se</Text>
              </Space>
              <Space>
                <HomeOutlined style={{ color: '#3a85d8' }} />
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Almarevägen 13, 176 76 Järfälla</Text>
              </Space>
            </Space>
          </Col>
          
          <Col xs={24} sm={12} lg={8}>
            <Title 
              level={4} 
              className="mb-6"
              style={{ color: 'white', fontSize: '18px', position: 'relative' }}
            >
              <span 
                style={{ 
                  position: 'absolute', 
                  bottom: '-10px', 
                  left: '0', 
                  width: '30px', 
                  height: '2px', 
                  background: '#3a85d8' 
                }}
              ></span>
              Snabblänkar
            </Title>
            <Space direction="vertical" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <AntLink href="/#om-oss" style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.3s' }} className="hover:text-white">Om oss</AntLink>
              <AntLink href="/#tjanster" style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.3s' }} className="hover:text-white">Våra tjänster</AntLink>
              <AntLink href="/#referenser" style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.3s' }} className="hover:text-white">Referenser</AntLink>
              <AntLink href="/#kontakt" style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.3s' }} className="hover:text-white">Kontakt</AntLink>
            </Space>
          </Col>
        </Row>
        
        <div className="border-t border-opacity-20 border-white mt-12 pt-6 text-center">
          <Text style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © {new Date().getFullYear()} Kanitas AB · Org.nr: 556841-1010 · Alla rättigheter förbehållna
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;