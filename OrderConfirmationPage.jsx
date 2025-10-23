import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ConfirmationContainer = styled.div`
  padding: var(--spacing-2xl) 0;
`

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
`

const SuccessIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-xl);
  
  svg {
    width: 50px;
    height: 50px;
    color: var(--color-white);
  }
`

const Title = styled.h1`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-lg);
`

const Subtitle = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-2xl);
`

const OrderInfoCard = styled.div`
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
  text-align: left;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
  color: var(--color-gray-700);
  
  &:last-child {
    margin-bottom: 0;
  }
`

const InfoLabel = styled.span`
  font-weight: 500;
`

const InfoValue = styled.span`
  
`

const SectionTitle = styled.h3`
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--color-gray-200);
`

const OrderItems = styled.div`
  margin-bottom: var(--spacing-xl);
`

const OrderItem = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
`

const ItemImage = styled.div`
  width: 80px;
  height: 100px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ItemName = styled.div`
  font-size: var(--font-size-base);
  color: var(--color-gray-800);
`

const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
`

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-top: var(--spacing-lg);
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 400px;
  margin: 0 auto;
`

const Button = styled.button`
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  transition: all var(--transition-fast);
  cursor: pointer;
`

const PrimaryButton = styled(Button)`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  
  &:hover {
    background-color: var(--color-gray-900);
  }
`

const SecondaryButton = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  
  &:hover {
    background-color: var(--color-gray-50);
  }
`

const OrderConfirmationPage = () => {
  const navigate = useNavigate()
  
  // 模拟订单数据
  const orderData = {
    orderNumber: 'ORD' + Math.floor(Math.random() * 1000000),
    orderDate: new Date().toLocaleDateString('zh-CN'),
    orderTime: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
    totalAmount: 1498,
    paymentMethod: '支付宝',
    items: [
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
    ],
    shippingInfo: {
      address: "上海市浦东新区张江高科技园区博云路2号",
      name: "张女士",
      phone: "138****6789"
    }
  }
  
  const handleViewOrder = () => {
    // 实际项目中这里应该跳转到订单详情页面
    navigate('/user/orders')
  }
  
  const handleContinueShopping = () => {
    navigate('/')
  }
  
  return (
    <ConfirmationContainer>
      <ContentWrapper>
        <SuccessIcon>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </SuccessIcon>
        
        <Title>订单提交成功！</Title>
        <Subtitle>感谢您的购买，我们已收到您的订单</Subtitle>
        
        <OrderInfoCard>
          <SectionTitle>订单信息</SectionTitle>
          <InfoRow>
            <InfoLabel>订单编号：</InfoLabel>
            <InfoValue>{orderData.orderNumber}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>下单时间：</InfoLabel>
            <InfoValue>{orderData.orderDate} {orderData.orderTime}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>支付方式：</InfoLabel>
            <InfoValue>{orderData.paymentMethod}</InfoValue>
          </InfoRow>
          
          <SectionTitle>配送信息</SectionTitle>
          <InfoRow>
            <InfoLabel>收货人：</InfoLabel>
            <InfoValue>{orderData.shippingInfo.name}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>联系电话：</InfoLabel>
            <InfoValue>{orderData.shippingInfo.phone}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>收货地址：</InfoLabel>
            <InfoValue>{orderData.shippingInfo.address}</InfoValue>
          </InfoRow>
          
          <SectionTitle>订单商品</SectionTitle>
          <OrderItems>
            {orderData.items.map(item => (
              <OrderItem key={item.id}>
                <ItemImage>
                  <img src={item.image} alt={item.name} />
                </ItemImage>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemDetails>
                    <span>{item.variant}</span>
                    <span>¥{item.price} x {item.quantity}</span>
                  </ItemDetails>
                </ItemInfo>
              </OrderItem>
            ))}
          </OrderItems>
          
          <TotalRow>
            <span>总计：</span>
            <span>¥{orderData.totalAmount}</span>
          </TotalRow>
        </OrderInfoCard>
        
        <p style={{ color: '#606060', marginBottom: 'var(--spacing-xl)' }}>
          订单确认邮件已发送至您的邮箱，请查收。
          <br />预计3-5个工作日送达。
        </p>
        
        <ButtonGroup>
          <PrimaryButton onClick={handleViewOrder}>查看订单详情</PrimaryButton>
          <SecondaryButton onClick={handleContinueShopping}>继续购物</SecondaryButton>
        </ButtonGroup>
      </ContentWrapper>
    </ConfirmationContainer>
  )
}

export default OrderConfirmationPage