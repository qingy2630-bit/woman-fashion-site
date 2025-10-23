import React, { useState } from 'react'
import styled from 'styled-components'

const ContactContainer = styled.div`
  padding: var(--spacing-2xl) 0;
`

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-xl);
  grid-column: 1 / -1;
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-gray-200);
`

const ContactForm = styled.div`
  
`

const FormGroup = styled.div`
  margin-bottom: var(--spacing-lg);
`

const Label = styled.label`
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-xs);
`

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  resize: vertical;
  min-height: 200px;
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`

const SubmitButton = styled.button`
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-gray-900);
  }
  
  &:disabled {
    background-color: var(--color-gray-400);
    cursor: not-allowed;
  }
`

const ContactInfo = styled.div`
  background-color: var(--color-gray-50);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  height: fit-content;
  
  @media (max-width: 768px) {
    order: -1;
  }
`

const InfoTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-lg);
`

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  svg {
    width: 20px;
    height: 20px;
    color: var(--color-primary);
  }
`

const InfoContent = styled.div`
  
`

const InfoLabel = styled.h3`
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: var(--spacing-xs);
`

const InfoText = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  line-height: 1.6;
`

const WorkingHours = styled.div`
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-gray-200);
`

const HoursTitle = styled.h3`
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: var(--spacing-md);
`

const HoursList = styled.div`
  
`

const HourItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
`

const SuccessMessage = styled.div`
  background-color: #dcfce7;
  border: 1px solid #bbf7d0;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  color: #166534;
`

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // 表单验证
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('请填写完整的联系信息')
      return
    }
    
    // 实际项目中这里应该有发送邮件的逻辑
    setIsSubmitting(true)
    
    // 模拟API调用
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      // 重置表单
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // 5秒后清除成功消息
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }
  
  return (
    <ContactContainer>
      <ContentWrapper>
        <SectionTitle>联系我们</SectionTitle>
        
        <ContactForm>
          {submitSuccess ? (
            <SuccessMessage>
              <h3>消息发送成功！</h3>
              <p>感谢您的留言，我们会尽快回复您。</p>
            </SuccessMessage>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">姓名</Label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  value={formData.name} 
                  onChange={handleInputChange}
                  placeholder="请输入您的姓名"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">电子邮箱</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                  placeholder="请输入您的电子邮箱"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">主题</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  type="text" 
                  value={formData.subject} 
                  onChange={handleInputChange}
                  placeholder="请输入留言主题"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">留言内容</Label>
                <TextArea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange}
                  placeholder="请详细描述您的问题或建议..."
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? '发送中...' : '发送消息'}
              </SubmitButton>
            </form>
          )}
        </ContactForm>
        
        <ContactInfo>
          <InfoTitle>联系方式</InfoTitle>
          
          <InfoItem>
            <InfoIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </InfoIcon>
            <InfoContent>
              <InfoLabel>电话</InfoLabel>
              <InfoText>400-123-4567</InfoText>
              <InfoText>周一至周日 9:00-21:00</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </InfoIcon>
            <InfoContent>
              <InfoLabel>电子邮箱</InfoLabel>
              <InfoText>service@luxe-fashion.com</InfoText>
              <InfoText>24小时内回复</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </InfoIcon>
            <InfoContent>
              <InfoLabel>总部地址</InfoLabel>
              <InfoText>上海市浦东新区张江高科技园区</InfoText>
              <InfoText>博云路2号 智慧大厦 15楼</InfoText>
            </InfoContent>
          </InfoItem>
          
          <WorkingHours>
            <HoursTitle>工作时间</HoursTitle>
            <HoursList>
              <HourItem>
                <span>周一至周五</span>
                <span>9:00 - 21:00</span>
              </HourItem>
              <HourItem>
                <span>周六至周日</span>
                <span>10:00 - 20:00</span>
              </HourItem>
              <HourItem>
                <span>法定节假日</span>
                <span>10:00 - 18:00</span>
              </HourItem>
            </HoursList>
          </WorkingHours>
        </ContactInfo>
      </ContentWrapper>
    </ContactContainer>
  )
}

export default ContactPage