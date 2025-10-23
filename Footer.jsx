import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: var(--color-gray-50);
  padding: var(--spacing-2xl) 0;
  margin-top: var(--spacing-2xl);
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`

const FooterSection = styled.div`
  
`

const SectionTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  color: var(--color-gray-900);
`

const FooterLinks = styled.ul`
  list-style: none;
`

const FooterLink = styled(Link)`
  display: block;
  color: var(--color-gray-600);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-sm);
  
  &:hover {
    color: var(--color-primary);
    transform: translateX(4px);
  }
`

const ContactInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
`

const ContactText = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  margin: 0;
`

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`

const SocialLink = styled.a`
  color: var(--color-gray-600);
  
  &:hover {
    color: var(--color-primary);
    transform: translateY(-2px);
  }
`

const Newsletter = styled.div`
  margin-top: var(--spacing-lg);
`

const NewsletterInput = styled.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-sm);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`

const NewsletterButton = styled.button`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  
  &:hover {
    background-color: var(--color-gray-900);
  }
`

const BottomFooter = styled.div`
  border-top: 1px solid var(--color-gray-200);
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  text-align: center;
`

const BottomText = styled.p`
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  margin: 0;
`

const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>关于我们</SectionTitle>
          <FooterLinks>
            <li><FooterLink to="/about">品牌故事</FooterLink></li>
            <li><FooterLink to="/stores">线下门店</FooterLink></li>
            <li><FooterLink to="/careers">加入我们</FooterLink></li>
            <li><FooterLink to="/sustainability">可持续发展</FooterLink></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <SectionTitle>客户服务</SectionTitle>
          <FooterLinks>
            <li><FooterLink to="/faq">常见问题</FooterLink></li>
            <li><FooterLink to="/shipping">配送信息</FooterLink></li>
            <li><FooterLink to="/returns">退换政策</FooterLink></li>
            <li><FooterLink to="/contact">联系我们</FooterLink></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <SectionTitle>联系我们</SectionTitle>
          <ContactInfo>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <ContactText>客服电话：400-123-4567</ContactText>
          </ContactInfo>
          <ContactInfo>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <ContactText>邮箱：service@luxe.com</ContactText>
          </ContactInfo>
          <SocialLinks>
            <SocialLink href="#" aria-label="微信">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5s-5-2.24-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3s3-1.34 3-3a3 3 0 0 0-3-3z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" aria-label="微博">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.25 4.5a2.25 2.25 0 0 0-1.883-2.205c-1.734-.324-5.365-.324-7.099 0A2.25 2.25 0 0 0 3.75 4.5c-1.073 1.143-1.5 3.01-1.5 6.75 0 3.74 1.145 6.259 2.964 7.529.2.146.316.411.27.663a48.294 48.294 0 0 1-.493 3.175c0 .42.34.759.75.759h.303c.403 0 .724-.325.75-.747a48.214 48.214 0 0 1-.493-3.175c-.046-.252.07-.517.27-.663C9.855 17.509 11 15 11 11.25c0-3.74-1.145-6.259-2.964-7.529a2.25 2.25 0 0 1-.27-.663A24.86 24.86 0 0 0 12 3c2.991 0 7.084.104 8.75.514.152.03.277.186.27.348V4.5m-8.625 0a2.25 2.25 0 0 0-2.25-2.25h-.303a2.25 2.25 0 0 0-2.25 2.25v.303a2.25 2.25 0 0 0 2.25 2.25h.303a2.25 2.25 0 0 0 2.25-2.25V4.5zm8.625 0a2.25 2.25 0 0 1 2.25 2.25v.303a2.25 2.25 0 0 1-2.25 2.25h-.303a2.25 2.25 0 0 1-2.25-2.25V4.5a2.25 2.25 0 0 1 2.25-2.25h.303z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" aria-label="抖音">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"/>
                <path d="M16.5 7.5c0-2.485-2.015-4.5-4.5-4.5s-4.5 2.015-4.5 4.5 2.015 4.5 4.5 4.5c.882 0 1.709-.224 2.439-.614l-1.377 4.132c-.163.488.283 1.013.771.85l4.133-1.377a4.5 4.5 0 0 0-.614-2.439z"/>
                <circle cx="15.5" cy="8.5" r="1"/>
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <SectionTitle>订阅邮件</SectionTitle>
          <p style={{ fontSize: '0.875rem', color: '#606060', marginBottom: '1rem' }}>订阅我们的邮件，获取最新优惠和新品信息</p>
          <Newsletter>
            <NewsletterInput type="email" placeholder="请输入您的邮箱" />
            <NewsletterButton>订阅</NewsletterButton>
          </Newsletter>
        </FooterSection>
      </FooterContent>
      
      <BottomFooter>
        <BottomText>© 2024 LUXE. 保留所有权利。</BottomText>
        <PaymentMethods>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <line x1="10" y1="13" x2="14" y2="13" />
            <line x1="10" y1="9" x2="14" y2="9" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M6 10h12" />
            <path d="M6 14h12" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 12h12M6 6h12M6 18h12" />
          </svg>
        </PaymentMethods>
      </BottomFooter>
    </FooterContainer>
  )
}

export default Footer