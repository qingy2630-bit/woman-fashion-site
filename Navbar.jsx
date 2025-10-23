import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow-sm);
`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-md);
  max-width: 1400px;
  margin: 0 auto;
`

const Logo = styled(Link)`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.5px;
`

const NavLinks = styled.div`
  display: flex;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  font-size: var(--font-size-base);
  color: var(--color-gray-800);
  position: relative;
  
  &:hover {
    color: var(--color-primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-primary);
    transition: width var(--transition-fast);
  }
  
  &:hover::after {
    width: 100%;
  }
`

const SearchContainer = styled.div`
  flex: 1;
  max-width: 400px;
  margin: 0 var(--spacing-xl);
  
  @media (max-width: 768px) {
    display: none;
  }
`

const SearchInput = styled.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
`

const IconButton = styled.button`
  background: none;
  color: var(--color-gray-800);
  position: relative;
  padding: var(--spacing-sm);
  
  &:hover {
    color: var(--color-primary);
  }
`

const CartCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: var(--font-size-xs);
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MobileMenuButton = styled.button`
  background: none;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const UserMenu = styled.div`
  position: relative;
`

const UserMenuDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--color-white);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-sm) 0;
  min-width: 180px;
  z-index: 1001;
  display: ${props => props.isOpen ? 'block' : 'none'};
`

const UserMenuItem = styled(Link)`
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-gray-800);
  font-size: var(--font-size-sm);
  
  &:hover {
    background-color: var(--color-gray-50);
    color: var(--color-primary);
  }
`

const UserMenuDivider = styled.div`
  height: 1px;
  background-color: var(--color-gray-200);
  margin: var(--spacing-xs) 0;
`

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(3)

  const handleLogout = () => {
    setIsLoggedIn(false)
    setIsUserMenuOpen(false)
    // 实际项目中这里应该清除登录状态
  }

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">LUXE</Logo>
        
        <NavLinks>
          <NavLink to="/">首页</NavLink>
          <NavLink to="/products">新品</NavLink>
          <NavLink to="/products?category=clothing">服装</NavLink>
          <NavLink to="/products?category=accessories">配饰</NavLink>
          <NavLink to="/products?collection=sale">特惠</NavLink>
        </NavLinks>
        
        <SearchContainer>
          <SearchInput placeholder="搜索商品..." />
        </SearchContainer>
        
        <RightSection>
          <IconButton>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 21l-4.35-4.35M16 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
            </svg>
          </IconButton>
          
          <UserMenu>
            <IconButton onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            </IconButton>
            <UserMenuDropdown isOpen={isUserMenuOpen}>
              {isLoggedIn ? (
                <>
                  <UserMenuItem to="/profile">个人中心</UserMenuItem>
                  <UserMenuItem to="/orders">订单历史</UserMenuItem>
                  <UserMenuDivider />
                  <UserMenuItem onClick={handleLogout} as="button">退出登录</UserMenuItem>
                </>
              ) : (
                <>
                  <UserMenuItem to="/login">登录</UserMenuItem>
                  <UserMenuItem to="/register">注册</UserMenuItem>
                </>
              )}
            </UserMenuDropdown>
          </UserMenu>
          
          <Link to="/cart">
            <IconButton>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
            </IconButton>
          </Link>
          
          <MobileMenuButton>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </MobileMenuButton>
        </RightSection>
      </NavContainer>
    </Nav>
  )
}

export default Navbar