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
                <Text style={{ color: 'rgba(255, 255, 255, 0.7)' }}>073-994 80 47</Text>
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