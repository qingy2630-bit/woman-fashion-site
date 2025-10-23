import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CheckoutContainer = styled.div`
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

const PageTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-gray-200);
`

const SectionTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: var(--spacing-lg);
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

const Select = styled.select`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  background-color: var(--color-white);
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
  min-height: 100px;
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`

const AddressSection = styled.div`
  margin-bottom: var(--spacing-2xl);
`

const DeliverySection = styled.div`
  margin-bottom: var(--spacing-2xl);
`

const PaymentSection = styled.div`
  margin-bottom: var(--spacing-2xl);
`

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const PaymentOption = styled.label`
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all var(--transition-fast);
  
  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-gray-50);
  }
  
  input[type="radio"] {
    display: none;
  }
  
  input[type="radio"]:checked + & {
    border-color: var(--color-primary);
    background-color: var(--color-gray-50);
    position: relative;
  }
  
  input[type="radio"]:checked + &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: var(--color-primary);
    border-radius: 0 var(--border-radius-md) 0 var(--border-radius-md);
  }
`

const PaymentIcon = styled.div`
  margin-bottom: var(--spacing-sm);
  
  svg {
    width: 32px;
    height: 32px;
    color: var(--color-gray-700);
  }
`

const PaymentName = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-700);
`

const OrderSummary = styled.div`
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

const OrderItems = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: var(--spacing-lg);
`

const OrderItem = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-gray-200);
`

const ItemImage = styled.div`
  width: 60px;
  height: 80px;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ItemInfo = styled.div`
  flex: 1;
`

const ItemName = styled.div`
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-800);
  margin-bottom: var(--spacing-xs);
`

const ItemVariant = styled.div`
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-xs);
`

const ItemPrice = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-700);
`

const PlaceOrderButton = styled.button`
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
`

const BackToCartButton = styled.button`
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

const CheckoutPage = () => {
  const navigate = useNavigate()
  
  // 表单状态
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    addressType: 'home',
    notes: ''
  })
  
  const [paymentMethod, setPaymentMethod] = useState('alipay')
  
  // 模拟订单数据
  const orderItems = [
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
  ]
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handlePlaceOrder = () => {
    // 表单验证
    if (!formData.fullName || !formData.phone || !formData.address || !formData.city || !formData.province) {
      alert('请填写完整的收货地址信息')
      return
    }
    
    // 实际项目中这里应该有提交订单的逻辑
    alert('订单提交成功！')
    // 跳转到订单确认页面
    navigate('/order-confirmation')
  }
  
  const handleBackToCart = () => {
    navigate('/cart')
  }
  
  const calculateSubtotal = () => {
    return orderItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
  
  const calculateShipping = () => {
    const subtotal = calculateSubtotal()
    return subtotal >= 399 ? 0 : 15
  }
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping()
  }
  
  return (
    <CheckoutContainer>
      <ContentWrapper>
        <div>
          <PageTitle>结算</PageTitle>
          
          <AddressSection>
            <SectionTitle>收货地址</SectionTitle>
            <FormGroup>
              <Label htmlFor="fullName">姓名</Label>
              <Input 
                id="fullName" 
                name="fullName" 
                type="text" 
                value={formData.fullName} 
                onChange={handleInputChange}
                placeholder="请输入收货人姓名"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="phone">手机号码</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                value={formData.phone} 
                onChange={handleInputChange}
                placeholder="请输入手机号码"
              />
            </FormGroup>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
              <FormGroup>
                <Label htmlFor="province">省份</Label>
                <Select 
                  id="province" 
                  name="province" 
                  value={formData.province} 
                  onChange={handleInputChange}
                >
                  <option value="">请选择</option>
                  <option value="北京市">北京市</option>
                  <option value="上海市">上海市</option>
                  <option value="广东省">广东省</option>
                  <option value="江苏省">江苏省</option>
                  <option value="浙江省">浙江省</option>
                  <option value="其他">其他</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="city">城市</Label>
                <Input 
                  id="city" 
                  name="city" 
                  type="text" 
                  value={formData.city} 
                  onChange={handleInputChange}
                  placeholder="请输入城市"
                />
              </FormGroup>
            </div>
            
            <FormGroup>
              <Label htmlFor="address">详细地址</Label>
              <TextArea 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleInputChange}
                placeholder="请输入详细地址，如街道、门牌号等"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="zipCode">邮政编码 (选填)</Label>
              <Input 
                id="zipCode" 
                name="zipCode" 
                type="text" 
                value={formData.zipCode} 
                onChange={handleInputChange}
                placeholder="请输入邮政编码"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="notes">备注 (选填)</Label>
              <TextArea 
                id="notes" 
                name="notes" 
                value={formData.notes} 
                onChange={handleInputChange}
                placeholder="如有特殊要求，请在此备注"
              />
            </FormGroup>
          </AddressSection>
          
          <DeliverySection>
            <SectionTitle>配送方式</SectionTitle>
            <FormGroup>
              <Label htmlFor="deliveryMethod">选择配送方式</Label>
              <Select id="deliveryMethod" name="deliveryMethod">
                <option value="standard">标准配送 (3-5天)</option>
                <option value="express">加急配送 (1-2天) +¥20</option>
              </Select>
            </FormGroup>
          </DeliverySection>
          
          <PaymentSection>
            <SectionTitle>支付方式</SectionTitle>
            <PaymentOptions>
              <input 
                type="radio" 
                id="alipay" 
                name="paymentMethod" 
                value="alipay"
                checked={paymentMethod === 'alipay'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <PaymentOption htmlFor="alipay">
                <PaymentIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20M4 12h16" />
                  </svg>
                </PaymentIcon>
                <PaymentName>支付宝</PaymentName>
              </PaymentOption>
              
              <input 
                type="radio" 
                id="wechat" 
                name="paymentMethod" 
                value="wechat"
                checked={paymentMethod === 'wechat'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <PaymentOption htmlFor="wechat">
                <PaymentIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20M4 12h16" />
                  </svg>
                </PaymentIcon>
                <PaymentName>微信支付</PaymentName>
              </PaymentOption>
              
              <input 
                type="radio" 
                id="creditcard" 
                name="paymentMethod" 
                value="creditcard"
                checked={paymentMethod === 'creditcard'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <PaymentOption htmlFor="creditcard">
                <PaymentIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20M4 12h16" />
                  </svg>
                </PaymentIcon>
                <PaymentName>银行卡</PaymentName>
              </PaymentOption>
            </PaymentOptions>
          </PaymentSection>
        </div>
        
        <OrderSummary>
          <SummaryTitle>订单摘要</SummaryTitle>
          
          <OrderItems>
            {orderItems.map(item => (
              <OrderItem key={item.id}>
                <ItemImage>
                  <img src={item.image} alt={item.name} />
                </ItemImage>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemVariant>{item.variant}</ItemVariant>
                  <ItemPrice>¥{item.price} x {item.quantity}</ItemPrice>
                </ItemInfo>
              </OrderItem>
            ))}
          </OrderItems>
          
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
          
          <PlaceOrderButton onClick={handlePlaceOrder}>提交订单</PlaceOrderButton>
          <BackToCartButton onClick={handleBackToCart}>返回购物车</BackToCartButton>
        </OrderSummary>
      </ContentWrapper>
    </CheckoutContainer>
  )
}

export default CheckoutPage