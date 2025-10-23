import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const ListContainer = styled.div`
  padding: var(--spacing-xl) 0;
`

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Filters = styled.div`
  
  @media (max-width: 768px) {
    display: none;
  }
`

const FilterTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  color: var(--color-gray-900);
`

const FilterSection = styled.div`
  margin-bottom: var(--spacing-xl);
`

const SectionTitle = styled.h4`
  font-size: var(--font-size-base);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--color-gray-800);
`

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`

const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  
  input[type="checkbox"] {
    cursor: pointer;
  }
  
  &:hover {
    color: var(--color-primary);
  }
`

const PriceRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`

const PriceInput = styled.input`
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
`

const PriceRangeInput = styled.input`
  width: 100%;
  margin-top: var(--spacing-sm);
`

const ClearFilters = styled.button`
  width: 100%;
  padding: var(--spacing-sm);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`

const ProductsSection = styled.div`
  
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
`

const PageTitle = styled.h1`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-gray-900);
`

const SortAndView = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`

const SortSelect = styled.select`
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  background-color: var(--color-white);
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`

const ViewToggle = styled.div`
  display: flex;
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`

const ViewButton = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${props => props.active ? 'var(--color-gray-100)' : 'var(--color-white)'};
  color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-gray-600)'};
  
  &:hover {
    background-color: var(--color-gray-50);
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-xl);
`

const ProductCard = styled(Link)`
  display: block;
  background-color: var(--color-white);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
`

const ProductImage = styled.div`
  position: relative;
  padding-top: 133%; /* 3:4 比例 */
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }
  
  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`

const ProductBadge = styled.div`
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-xs);
  font-weight: 600;
`

const ProductInfo = styled.div`
  padding: var(--spacing-md);
`

const ProductName = styled.h3`
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-xs);
  height: 44px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ProductPrice = styled.p`
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-2xl);
`

const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-white)'};
  color: ${props => props.active ? 'var(--color-white)' : 'var(--color-gray-600)'};
  border: 1px solid ${props => props.active ? 'var(--color-primary)' : 'var(--color-gray-300)'};
  
  &:hover:not(:disabled) {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ProductListPage = () => {
  const [sort, setSort] = useState('newest')
  const [view, setView] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()
  
  // 模拟商品数据
  const products = [
    { id: 1, name: "真丝衬衫", price: 899, image: "https://picsum.photos/id/21/400/500", category: "clothing", color: "white", size: ["S", "M", "L"], badge: "新品" },
    { id: 2, name: "高腰牛仔裤", price: 699, image: "https://picsum.photos/id/22/400/500", category: "clothing", color: "blue", size: ["S", "M", "L", "XL"], badge: "新品" },
    { id: 3, name: "针织连衣裙", price: 1299, image: "https://picsum.photos/id/23/400/500", category: "clothing", color: "beige", size: ["S", "M", "L"], badge: "新品" },
    { id: 4, name: "西装外套", price: 1599, image: "https://picsum.photos/id/24/400/500", category: "clothing", color: "black", size: ["M", "L", "XL"], badge: "新品" },
    { id: 5, name: "休闲卫衣", price: 599, image: "https://picsum.photos/id/25/400/500", category: "clothing", color: "gray", size: ["S", "M", "L", "XL"], badge: "新品" },
    { id: 6, name: "短款风衣", price: 1499, image: "https://picsum.photos/id/26/400/500", category: "clothing", color: "navy", size: ["S", "M", "L"], badge: "新品" },
    { id: 7, name: "经典T恤", price: 299, image: "https://picsum.photos/id/27/400/500", category: "clothing", color: "white", size: ["S", "M", "L", "XL"], badge: "热销" },
    { id: 8, name: "小脚裤", price: 499, image: "https://picsum.photos/id/28/400/500", category: "clothing", color: "black", size: ["S", "M", "L", "XL"], badge: "热销" }
  ]
  
  // 根据URL参数过滤商品
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    // 这里可以根据参数过滤商品
  }, [location.search])
  
  const filteredProducts = products // 实际项目中应该根据过滤条件筛选
  const totalPages = Math.ceil(filteredProducts.length / 8)
  
  return (
    <ListContainer>
      <ContentWrapper>
        <Filters>
          <FilterTitle>筛选</FilterTitle>
          
          <FilterSection>
            <SectionTitle>类别</SectionTitle>
            <FilterOptions>
              <FilterOption>
                <input type="checkbox" id="clothing" />
                <span>服装</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="dresses" />
                <span>连衣裙</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="tops" />
                <span>上衣</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="pants" />
                <span>裤装</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="accessories" />
                <span>配饰</span>
              </FilterOption>
            </FilterOptions>
          </FilterSection>
          
          <FilterSection>
            <SectionTitle>颜色</SectionTitle>
            <FilterOptions>
              <FilterOption>
                <input type="checkbox" id="black" />
                <span>黑色</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="white" />
                <span>白色</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="navy" />
                <span>藏青色</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="beige" />
                <span>米色</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="gray" />
                <span>灰色</span>
              </FilterOption>
            </FilterOptions>
          </FilterSection>
          
          <FilterSection>
            <SectionTitle>尺码</SectionTitle>
            <FilterOptions>
              <FilterOption>
                <input type="checkbox" id="size-s" />
                <span>S</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="size-m" />
                <span>M</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="size-l" />
                <span>L</span>
              </FilterOption>
              <FilterOption>
                <input type="checkbox" id="size-xl" />
                <span>XL</span>
              </FilterOption>
            </FilterOptions>
          </FilterSection>
          
          <FilterSection>
            <SectionTitle>价格范围</SectionTitle>
            <PriceRange>
              <PriceRangeInput type="range" min="0" max="5000" defaultValue="2000" />
              <div style={{ display: 'flex', gap: '8px' }}>
                <PriceInput type="number" placeholder="最低价" />
                <PriceInput type="number" placeholder="最高价" />
              </div>
            </PriceRange>
          </FilterSection>
          
          <ClearFilters>清除筛选</ClearFilters>
        </Filters>
        
        <ProductsSection>
          <TopBar>
            <PageTitle>全部商品</PageTitle>
            <SortAndView>
              <SortSelect value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="newest">最新上架</option>
                <option value="price-asc">价格从低到高</option>
                <option value="price-desc">价格从高到低</option>
                <option value="popular">最受欢迎</option>
              </SortSelect>
              <ViewToggle>
                <ViewButton active={view === 'grid'} onClick={() => setView('grid')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </ViewButton>
                <ViewButton active={view === 'list'} onClick={() => setView('list')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </ViewButton>
              </ViewToggle>
            </SortAndView>
          </TopBar>
          
          <ProductGrid>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} to={`/products/${product.id}`}>
                <ProductImage>
                  <img src={product.image} alt={product.name} />
                  {product.badge && <ProductBadge>{product.badge}</ProductBadge>}
                </ProductImage>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>¥{product.price}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
          
          <Pagination>
            <PaginationButton 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </PaginationButton>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationButton 
                key={index} 
                active={currentPage === index + 1}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PaginationButton>
            ))}
            <PaginationButton 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </PaginationButton>
          </Pagination>
        </ProductsSection>
      </ContentWrapper>
    </ListContainer>
  )
}

export default ProductListPage