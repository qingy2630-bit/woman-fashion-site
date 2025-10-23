import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const AccountContainer = styled.div`
  padding: var(--spacing-2xl) 0;
`

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Sidebar = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  height: fit-content;
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`

const UserInfo = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-gray-200);
`

const AvatarContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto var(--spacing-md);
  position: relative;
  cursor: pointer;
  border: 2px solid var(--color-gray-200);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &:hover .avatar-overlay {
    opacity: 1;
  }
`

const AvatarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-fast);
  
  svg {
    width: 32px;
    height: 32px;
    color: var(--color-white);
  }
`

const UserName = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-xs);
`

const UserEmail = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
`

const NavList = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: var(--spacing-sm);
  }
`

const NavItem = styled.button`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  background: none;
  border: none;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  color: var(--color-gray-700);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  &:hover {
    background-color: var(--color-gray-50);
    color: var(--color-primary);
  }
  
  &.active {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const MainContent = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`

const SectionTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-gray-200);
`

const ProfileForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  
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

const ButtonGroup = styled.div`
  grid-column: 1 / -1;
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
`

const SaveButton = styled(Button)`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  
  &:hover {
    background-color: var(--color-gray-900);
  }
`

const CancelButton = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-gray-700);
  border: 1px solid var(--color-gray-300);
  
  &:hover {
    background-color: var(--color-gray-50);
  }
`

const OrdersTab = styled.div`
  
`

const OrderFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
`

const FilterButtons = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const FilterButton = styled.button`
  padding: var(--spacing-xs) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  color: var(--color-gray-700);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  &.active {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-white);
  }
`

const SearchInput = styled.input`
  padding: var(--spacing-xs) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`

const OrderList = styled.div`
  
`

const OrderCard = styled.div`
  border: 1px solid var(--color-gray-200);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
`

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--color-gray-100);
`

const OrderNumber = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
`

const OrderStatus = styled.div`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: #10b981;
`

const OrderItems = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const OrderItem = styled.div`
  flex: 1;
  display: flex;
  gap: var(--spacing-md);
`

const ItemImage = styled.div`
  width: 60px;
  height: 80px;
  border-radius: var(--border-radius-sm);
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
  font-size: var(--font-size-sm);
  color: var(--color-gray-800);
`

const ItemDetails = styled.div`
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
`

const OrderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-gray-100);
`

const OrderTotal = styled.div`
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-900);
`

const OrderActions = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const ActionButton = styled.button`
  padding: var(--spacing-xs) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  color: var(--color-gray-700);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-3xl) 0;
  color: var(--color-gray-500);
`

const EmptyIcon = styled.div`
  margin-bottom: var(--spacing-lg);
  
  svg {
    width: 80px;
    height: 80px;
    color: var(--color-gray-300);
  }
`

const UserAccountPage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('profile')
  const [selectedFilter, setSelectedFilter] = useState('all')
  
  // 用户信息状态
  const [userInfo, setUserInfo] = useState({
    fullName: '张女士',
    phone: '138****6789',
    email: 'zhang***@example.com',
    birthday: '1995-01-15',
    gender: 'female'
  })
  
  // 模拟订单数据
  const orders = [
    {
      id: 'ORD123456',
      date: '2024-01-15',
      status: '已发货',
      total: 1498,
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
      ]
    },
    {
      id: 'ORD123455',
      date: '2024-01-10',
      status: '已完成',
      total: 899,
      items: [
        {
          id: 3,
          name: "羊毛大衣",
          price: 899,
          quantity: 1,
          image: "https://picsum.photos/id/28/300/400",
          variant: "米色, S"
        }
      ]
    }
  ]
  
  const handleAvatarUpload = () => {
    // 实际项目中这里应该触发文件选择
    alert('请选择要上传的头像图片')
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSaveProfile = () => {
    // 实际项目中这里应该有保存用户信息的逻辑
    alert('个人信息已保存')
  }
  
  const handleViewOrderDetails = (orderId) => {
    // 实际项目中这里应该跳转到订单详情页面
    alert(`查看订单 ${orderId} 的详细信息`)
  }
  
  const handleLogout = () => {
    // 实际项目中这里应该有登出逻辑
    alert('您已成功登出')
    navigate('/login')
  }
  
  // 根据筛选条件过滤订单
  const filteredOrders = selectedFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedFilter)
  
  const renderProfileTab = () => (
    <ProfileForm>
      <FormGroup>
        <Label htmlFor="fullName">姓名</Label>
        <Input 
          id="fullName" 
          name="fullName" 
          type="text" 
          value={userInfo.fullName} 
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="phone">手机号码</Label>
        <Input 
          id="phone" 
          name="phone" 
          type="tel" 
          value={userInfo.phone} 
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">电子邮箱</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          value={userInfo.email} 
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="birthday">出生日期</Label>
        <Input 
          id="birthday" 
          name="birthday" 
          type="date" 
          value={userInfo.birthday} 
          onChange={handleInputChange}
        />
      </FormGroup>
      <ButtonGroup>
        <SaveButton onClick={handleSaveProfile}>保存更改</SaveButton>
        <CancelButton>取消</CancelButton>
      </ButtonGroup>
    </ProfileForm>
  )
  
  const renderOrdersTab = () => (
    <OrdersTab>
      <OrderFilter>
        <FilterButtons>
          <FilterButton 
            className={selectedFilter === 'all' ? 'active' : ''}
            onClick={() => setSelectedFilter('all')}
          >
            全部订单
          </FilterButton>
          <FilterButton 
            className={selectedFilter === '待付款' ? 'active' : ''}
            onClick={() => setSelectedFilter('待付款')}
          >
            待付款
          </FilterButton>
          <FilterButton 
            className={selectedFilter === '待发货' ? 'active' : ''}
            onClick={() => setSelectedFilter('待发货')}
          >
            待发货
          </FilterButton>
          <FilterButton 
            className={selectedFilter === '已发货' ? 'active' : ''}
            onClick={() => setSelectedFilter('已发货')}
          >
            已发货
          </FilterButton>
          <FilterButton 
            className={selectedFilter === '已完成' ? 'active' : ''}
            onClick={() => setSelectedFilter('已完成')}
          >
            已完成
          </FilterButton>
        </FilterButtons>
        <SearchInput placeholder="搜索订单号" />
      </OrderFilter>
      
      {filteredOrders.length === 0 ? (
        <EmptyState>
          <EmptyIcon>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </EmptyIcon>
          <h3>暂无订单</h3>
          <p>您还没有相关订单</p>
        </EmptyState>
      ) : (
        <OrderList>
          {filteredOrders.map(order => (
            <OrderCard key={order.id}>
              <OrderHeader>
                <OrderNumber>订单号: {order.id}</OrderNumber>
                <OrderStatus>{order.status}</OrderStatus>
              </OrderHeader>
              
              <OrderItems>
                {order.items.map((item, index) => (
                  <OrderItem key={item.id}>
                    <ItemImage>
                      <img src={item.image} alt={item.name} />
                    </ItemImage>
                    <ItemInfo>
                      <ItemName>{item.name}</ItemName>
                      <ItemDetails>
                        {item.variant} x {item.quantity}
                      </ItemDetails>
                    </ItemInfo>
                  </OrderItem>
                ))}
              </OrderItems>
              
              <OrderFooter>
                <OrderTotal>共 {order.items.reduce((sum, item) => sum + item.quantity, 0)} 件商品 合计：¥{order.total}</OrderTotal>
                <OrderActions>
                  <ActionButton onClick={() => handleViewOrderDetails(order.id)}>查看详情</ActionButton>
                  {order.status === '已发货' && <ActionButton>确认收货</ActionButton>}
                  {order.status === '已完成' && <ActionButton>再次购买</ActionButton>}
                </OrderActions>
              </OrderFooter>
            </OrderCard>
          ))}
        </OrderList>
      )}
    </OrdersTab>
  )
  
  const renderWishlistTab = () => (
    <EmptyState>
      <EmptyIcon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </EmptyIcon>
      <h3>敬请期待</h3>
      <p>此功能即将上线</p>
    </EmptyState>
  )
  
  const renderAddressesTab = () => (
    <EmptyState>
      <EmptyIcon>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </EmptyIcon>
      <h3>敬请期待</h3>
      <p>此功能即将上线</p>
    </EmptyState>
  )
  
  return (
    <AccountContainer>
      <ContentWrapper>
        <Sidebar>
          <UserInfo>
            <AvatarContainer onClick={handleAvatarUpload}>
              <img src="https://picsum.photos/id/64/100/100" alt="用户头像" />
              <AvatarOverlay className="avatar-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l4 4m0-4l-4 4M12 12.8V2.5" />
                </svg>
              </AvatarOverlay>
            </AvatarContainer>
            <UserName>{userInfo.fullName}</UserName>
            <UserEmail>{userInfo.email}</UserEmail>
          </UserInfo>
          
          <NavList>
            <li>
              <NavItem 
                className={activeTab === 'profile' ? 'active' : ''}
                onClick={() => setActiveTab('profile')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                个人信息
              </NavItem>
            </li>
            <li>
              <NavItem 
                className={activeTab === 'orders' ? 'active' : ''}
                onClick={() => setActiveTab('orders')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                我的订单
              </NavItem>
            </li>
            <li>
              <NavItem 
                className={activeTab === 'wishlist' ? 'active' : ''}
                onClick={() => setActiveTab('wishlist')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                我的收藏
              </NavItem>
            </li>
            <li>
              <NavItem 
                className={activeTab === 'addresses' ? 'active' : ''}
                onClick={() => setActiveTab('addresses')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                收货地址
              </NavItem>
            </li>
            <li>
              <NavItem onClick={handleLogout}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
                </svg>
                退出登录
              </NavItem>
            </li>
          </NavList>
        </Sidebar>
        
        <MainContent>
          <SectionTitle>
            {activeTab === 'profile' && '个人信息'}
            {activeTab === 'orders' && '我的订单'}
            {activeTab === 'wishlist' && '我的收藏'}
            {activeTab === 'addresses' && '收货地址'}
          </SectionTitle>
          
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'orders' && renderOrdersTab()}
          {activeTab === 'wishlist' && renderWishlistTab()}
          {activeTab === 'addresses' && renderAddressesTab()}
        </MainContent>
      </ContentWrapper>
    </AccountContainer>
  )
}

export default UserAccountPage