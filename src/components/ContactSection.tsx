"use client"

import React from 'react';
import { Typography, Row, Col, Form, Input, Button, message } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  HomeOutlined,
  SendOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const ContactSection: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
    form.resetFields();
  };

  return (
    <section id="kontakt" className="section-container section-alternate">
      <Title level={2} className="section-title">Kontakta oss</Title>
      <Paragraph className="text-center text-lg mb-12" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        Har du frågor eller vill du veta mer om hur vi kan hjälpa dig med ditt projekt? 
        Tveka inte att kontakta oss - vi svarar gärna på alla dina frågor!
      </Paragraph>
      
      <Row gutter={[48, 48]}>
        <Col xs={24} lg={12}>
          <div className="bg-white p-8 rounded-lg shadow-lg h-full" style={{ borderRadius: '12px' }}>
            <Title level={4} className="mb-6" style={{ color: 'var(--secondary-color)' }}>Skicka meddelande</Title>
            
            <Form 
              form={form}
              layout="vertical" 
              onFinish={onFinish}
              requiredMark={false}
            >
              <Form.Item
                name="name"
                label="Namn"
                rules={[{ required: true, message: 'Vänligen fyll i ditt namn' }]}
              >
                <Input size="large" placeholder="Ditt namn" />
              </Form.Item>
              
              <Form.Item
                name="email"
                label="E-post"
                rules={[
                  { required: true, message: 'Vänligen fyll i din e-post' },
                  { type: 'email', message: 'Vänligen ange en giltig e-postadress' }
                ]}
              >
                <Input size="large" placeholder="Din e-post" />
              </Form.Item>
              
              <Form.Item
                name="phone"
                label="Telefon"
              >
                <Input size="large" placeholder="Ditt telefonnummer" />
              </Form.Item>
              
              <Form.Item
                name="message"
                label="Meddelande"
                rules={[{ required: true, message: 'Vänligen skriv ditt meddelande' }]}
              >
                <TextArea rows={4} placeholder="Beskriv ditt projekt eller ställ dina frågor här" />
              </Form.Item>
              
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  size="large"
                  icon={<SendOutlined />}
                  className="px-6 h-auto py-2"
                  style={{ 
                    backgroundColor: 'var(--primary-color)',
                    borderColor: 'var(--primary-color)',
                    fontWeight: '500'
                  }}
                >
                  Skicka meddelande
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        
        <Col xs={24} lg={12}>
          <div className="bg-white p-8 rounded-lg shadow-lg h-full" style={{ borderRadius: '12px' }}>
            <Title level={4} className="mb-6" style={{ color: 'var(--secondary-color)' }}>Kontaktinformation</Title>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneOutlined style={{ color: 'var(--primary-color)', fontSize: '20px' }} className="mr-4 mt-1" />
                <div>
                  <Text strong className="block mb-1">Telefon</Text>
                  <Paragraph>073-994 80 47</Paragraph>
                </div>
              </div>
              
              <div className="flex items-start">
                <MailOutlined style={{ color: 'var(--primary-color)', fontSize: '20px' }} className="mr-4 mt-1" />
                <div>
                  <Text strong className="block mb-1">E-post</Text>
                  <Paragraph>info@kanitas.se</Paragraph>
                </div>
              </div>
              
              <div className="flex items-start">
                <HomeOutlined style={{ color: 'var(--primary-color)', fontSize: '20px' }} className="mr-4 mt-1" />
                <div>
                  <Text strong className="block mb-1">Adress</Text>
                  <Paragraph>
                    Kanitas AB<br />
                    Almarevägen 13<br />
                    176 76 Järfälla<br />
                    Sverige
                  </Paragraph>
                </div>
              </div>
            </div>
            
            <Title level={4} className="mt-12 mb-6" style={{ color: 'var(--secondary-color)' }}>Organisationsinfo</Title>
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2"><Text strong>Org.nummer</Text></td>
                  <td className="py-2 text-right">556841-1010</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2"><Text strong>Grundat</Text></td>
                  <td className="py-2 text-right">2011</td>
                </tr>
                <tr>
                  <td className="py-2"><Text strong>Anställda</Text></td>
                  <td className="py-2 text-right">33</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ContactSection;