import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn var(--transition-fast);
`

const ModalContent = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  position: relative;
  animation: slideUp var(--transition-normal);
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: none;
  color: var(--color-gray-500);
  padding: var(--spacing-xs);
  
  &:hover {
    color: var(--color-primary);
  }
`

const ModalTitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-md);
  text-align: center;
`

const ModalDescription = styled.p`
  font-size: var(--font-size-base);
  color: var(--color-gray-600);
  text-align: center;
  margin-bottom: var(--spacing-xl);
`

const PromoCode = styled.div`
  background-color: var(--color-gray-50);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  text-align: center;
  margin-bottom: var(--spacing-xl);
`

const CodeText = styled.span`
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 2px;
`

const CodeDescription = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  margin-top: var(--spacing-xs);
`

const ActionButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
  flex-direction: column;
`

const PrimaryButton = styled(Link)`
  display: block;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  text-align: center;
  font-weight: 600;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-gray-900);
    color: var(--color-white);
  }
`

const SecondaryButton = styled.button`
  display: block;
  background-color: var(--color-white);
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  text-align: center;
  font-weight: 600;
  transition: all var(--transition-fast);
  
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`

const NewUserModal = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="关闭">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </CloseButton>
        
        <ModalTitle>欢迎来到 LUXE</ModalTitle>
        <ModalDescription>
          首次购物即可享受专属优惠，立即注册领取您的新用户福利
        </ModalDescription>
        
        <PromoCode>
          <CodeText>NEW20</CodeText>
          <CodeDescription>全场商品 8 折优惠</CodeDescription>
        </PromoCode>
        
        <ActionButtons>
          <PrimaryButton to="/register">立即注册</PrimaryButton>
          <SecondaryButton onClick={onClose}>暂不注册</SecondaryButton>
        </ActionButtons>
      </ModalContent>
    </ModalOverlay>
  )
}

export default NewUserModal