import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const RegisterContainer = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl) 0;
`

const RegisterForm = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-2xl);
  max-width: 450px;
  width: 90%;
  box-shadow: var(--shadow-md);
`

const FormTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-xl);
  text-align: center;
`

const InputGroup = styled.div`
  margin-bottom: var(--spacing-lg);
`

const Label = styled.label`
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-xs);
`

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`

const PasswordContainer = styled.div`
  position: relative;
`

const PasswordToggle = styled.button`
  position: absolute;
  right: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  color: var(--color-gray-500);
  
  &:hover {
    color: var(--color-primary);
  }
`

const RegisterButton = styled.button`
  width: 100%;
  padding: var(--spacing-md);
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-gray-900);
  }
`

const SocialRegister = styled.div`
  margin-top: var(--spacing-xl);
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  span {
    flex: 1;
    height: 1px;
    background-color: var(--color-gray-200);
  }
  
  p {
    padding: 0 var(--spacing-md);
    font-size: var(--font-size-sm);
    color: var(--color-gray-500);
    margin: 0;
  }
`

const SocialButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
`

const SocialButton = styled.button`
  flex: 1;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  transition: all var(--transition-fast);
  
  &:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-sm);
  }
`

const SocialIcon = styled.div`
  font-size: var(--font-size-lg);
`

const LoginLink = styled.div`
  text-align: center;
  margin-top: var(--spacing-xl);
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  
  a {
    color: var(--color-primary);
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const TermsAgreement = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  
  input[type="checkbox"] {
    margin-top: 2px;
  }
  
  a {
    color: var(--color-primary);
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const RegisterPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      alert('两次输入的密码不一致')
      return
    }
    
    if (!agreeToTerms) {
      alert('请阅读并同意用户协议和隐私政策')
      return
    }
    
    // 实际项目中这里应该有注册逻辑
    setIsLoggedIn(true)
    navigate('/')
  }

  const handleSocialRegister = (provider) => {
    // 模拟第三方注册
    console.log(`${provider} 注册`)
    setIsLoggedIn(true)
    navigate('/')
  }

  return (
    <RegisterContainer>
      <RegisterForm>
        <FormTitle>创建账号</FormTitle>
        
        <form onSubmit={handleRegister}>
          <InputGroup>
            <Label htmlFor="email">邮箱地址</Label>
            <Input
              id="email"
              type="email"
              placeholder="请输入您的邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="password">密码</Label>
            <PasswordContainer>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="请设置6-20位密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                )}
              </PasswordToggle>
            </PasswordContainer>
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="confirmPassword">确认密码</Label>
            <PasswordContainer>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="请再次输入密码"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <PasswordToggle onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                )}
              </PasswordToggle>
            </PasswordContainer>
          </InputGroup>
          
          <TermsAgreement>
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              required
            />
            <label htmlFor="terms">
              我已阅读并同意 <Link to="/terms">用户协议</Link> 和 <Link to="/privacy">隐私政策</Link>
            </label>
          </TermsAgreement>
          
          <RegisterButton type="submit">注册</RegisterButton>
        </form>
        
        <SocialRegister>
          <Divider>
            <span></span>
            <p>其他注册方式</p>
            <span></span>
          </Divider>
          
          <SocialButtons>
            <SocialButton onClick={() => handleSocialRegister('wechat')}>
              <SocialIcon>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5s-5-2.24-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3s3-1.34 3-3a3 3 0 0 0-3-3z"/>
                </svg>
              </SocialIcon>
              <span>微信</span>
            </SocialButton>
            
            <SocialButton onClick={() => handleSocialRegister('alipay')}>
              <SocialIcon>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1677FF">
                  <path d="M8 2v20h8V2H8z"/>
                  <path d="M14.5 15l-2.5-2-2.5 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </SocialIcon>
              <span>支付宝</span>
            </SocialButton>
          </SocialButtons>
        </SocialRegister>
        
        <LoginLink>
          已有账号？ <Link to="/login">立即登录</Link>
        </LoginLink>
      </RegisterForm>
    </RegisterContainer>
  )
}

export default RegisterPage