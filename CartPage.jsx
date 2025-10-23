import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CartContainer = styled.div`
  padding: var(--spacing-2xl) 0;
`

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CartTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-gray-200);
`

const EmptyCart = styled.div`
  text-align: center;
  padding: var(--spacing-3xl) 0;
  color: var(--color-gray-600);
`

const EmptyCartIcon = styled.div`
  margin-bottom: var(--spacing-lg);
  
  svg {
    width: 80px;
    height: 80px;
    color: var(--color-gray-300);
  }
`

const StartShoppingButton = styled.button`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-gray-900);
  }
`

const CartItemsList = styled.div`
  margin-bottom: var(--spacing-xl);
`

const CartItem = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid var(--color-gray-200);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ItemImage = styled.div`
  width: 120px;
  height: 160px;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ItemHeader = styled.div`
  margin-bottom: var(--spacing-sm);
`

const ItemName = styled.h3`
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-xs);
`

const ItemVariant = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
`

const ItemControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
`

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`

const QuantityDisplay = styled.span`
  min-width: 30px;
  text-align: center;
  font-size: var(--font-size-sm);
`

const ItemPrice = styled.div`
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-primary);
`

const RemoveButton = styled.button`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  background: none;
  border: none;
  cursor: pointer;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-gray-800);
  }
`

const CartSummary = styled.div`
  background-color: var(--color-gray-50);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  height: fit-content;
  position: sticky;
  top: var(--spacing-xl);
  
  @media (max-width: 768px) {
    position: static;
  }
`

const SummaryTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-lg);
`

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
  color: var(--color-gray-700);
`

const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: var(--spacing-lg) 0;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-gray-200);
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-gray-900);
`

const CheckoutButton = styled.button`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  transition: background-color var(--transition-fast);
  margin-bottom: var(--spacing-md);
  
  &:hover {
    background-color: var(--color-gray-900);
  }
  
  &:disabled {
    background-color: var(--color-gray-400);
    cursor: not-allowed;
  }
`

const ContinueShoppingButton = styled.button`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-white);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-gray-50);
  }
`

const CouponSection = styled.div`
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-gray-200);
`

const CouponInput = styled.input`
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

const ApplyCouponButton = styled.button`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-white);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-gray-50);
  }
`

const CartPage = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "真丝衬衫",
      price: 899,
      quantity: 1,
      image: "https://picsum.photos/id/21/300/400",
      variant: "黑色, M"
    },
    {
      id: 2,
      name: "高腰牛仔裤",
      price: 599,
      quantity: 1,
      image: "https://picsum.photos/id/26/300/400",
      variant: "蓝色, L"
    }
  ])
  const [couponCode, setCouponCode] = useState('')
  
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }
  
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }
  
  const handleCheckout = () => {
    // 实际项目中这里应该有登录检查逻辑
    navigate('/checkout')
  }
  
  const handleStartShopping = () => {
    navigate('/products')
  }
  
  const handleContinueShopping = () => {
    navigate('/products')
  }
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
  
  const calculateShipping = () => {
    const subtotal = calculateSubtotal()
    return subtotal >= 399 ? 0 : 15
  }
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping()
  }
  
  const handleApplyCoupon = () => {
    // 实际项目中这里应该有优惠券验证逻辑
    if (couponCode.toUpperCase() === 'NEW20') {
      alert('优惠券应用成功，全场8折！')
    } else if (couponCode) {
      alert('无效的优惠券代码')
    }
  }
  
  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <ContentWrapper>
          <EmptyCart>
            <EmptyCartIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </EmptyCartIcon>
            <h2>您的购物车是空的</h2>
            <p>添加一些商品到购物车吧</p>
            <StartShoppingButton onClick={handleStartShopping}>开始购物</StartShoppingButton>
          </EmptyCart>
        </ContentWrapper>
      </CartContainer>
    )
  }
  
  return (
    <CartContainer>
      <ContentWrapper>
        <div>
          <CartTitle>购物车 ({cartItems.length})</CartTitle>
          <CartItemsList>
            {cartItems.map(item => (
              <CartItem key={item.id}>
                <ItemImage>
                  <img src={item.image} alt={item.name} />
                </ItemImage>
                <ItemDetails>
                  <ItemHeader>
                    <ItemName>{item.name}</ItemName>
                    <ItemVariant>{item.variant}</ItemVariant>
                  </ItemHeader>
                  <ItemControls>
                    <div>
                      <QuantityControl>
                        <QuantityButton onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </QuantityButton>
                        <QuantityDisplay>{item.quantity}</QuantityDisplay>
                        <QuantityButton onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </QuantityButton>
                      </QuantityControl>
                      <RemoveButton onClick={() => handleRemoveItem(item.id)}>移除</RemoveButton>
                    </div>
                    <ItemPrice>¥{item.price * item.quantity}</ItemPrice>
                  </ItemControls>
                </ItemDetails>
              </CartItem>
            ))}
          </CartItemsList>
        </div>
        
        <CartSummary>
          <SummaryTitle>订单摘要</SummaryTitle>
          <SummaryRow>
            <span>商品小计</span>
            <span>¥{calculateSubtotal()}</span>
          </SummaryRow>
          <SummaryRow>
            <span>运费</span>
            <span>{calculateShipping() === 0 ? '免运费' : `¥${calculateShipping()}`}</span>
          </SummaryRow>
          <SummaryTotal>
            <span>总计</span>
            <span>¥{calculateTotal()}</span>
          </SummaryTotal>
          <CheckoutButton onClick={handleCheckout}>去结算</CheckoutButton>
          <ContinueShoppingButton onClick={handleContinueShopping}>继续购物</ContinueShoppingButton>
          
          <CouponSection>
            <CouponInput 
              type="text" 
              placeholder="输入优惠券代码"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <ApplyCouponButton onClick={handleApplyCoupon}>应用优惠券</ApplyCouponButton>
          </CouponSection>
        </CartSummary>
      </ContentWrapper>
    </CartContainer>
  )
}

export default CartPage