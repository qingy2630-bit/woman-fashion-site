import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  height: 80vh;
  min-height: 600px;
`

const Carousel = styled.div`
  display: flex;
  height: 100%;
  transition: transform var(--transition-slow);
  transform: translateX(-${props => props.currentIndex * 100}%);
`

const CarouselItem = styled.div`
  flex: 0 0 100%;
  height: 100%;
  position: relative;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CarouselContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  max-width: 500px;
  color: var(--color-white);
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    line-height: 1.2;
  }
  
  p {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-xl);
    opacity: 0.9;
  }
`

const ShopButton = styled(Link)`
  display: inline-block;
  background-color: var(--color-white);
  color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-gray-100);
    transform: translateY(-2px);
  }
`

const CarouselDots = styled.div`
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-sm);
`

const CarouselDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all var(--transition-fast);
  
  &.active {
    background-color: var(--color-white);
    width: 24px;
    border-radius: 6px;
  }
`

const Section = styled.section`
  padding: var(--spacing-2xl) 0;
`

const SectionTitle = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: var(--color-gray-900);
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
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

const CollectionSection = styled.section`
  padding: var(--spacing-2xl) 0;
  background-color: var(--color-gray-50);
`

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`

const CollectionCard = styled(Link)`
  display: block;
  position: relative;
  height: 500px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`

const CollectionOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  padding: var(--spacing-2xl) var(--spacing-xl);
  color: var(--color-white);
  
  h3 {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-md);
    opacity: 0.9;
  }
`

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const carouselItems = [
    {
      image: "https://picsum.photos/id/64/1600/900",
      title: "2024 春夏新品",
      description: "探索轻盈飘逸的春夏系列，展现自信魅力",
      link: "/products?collection=spring"
    },
    {
      image: "https://picsum.photos/id/65/1600/900",
      title: "限时特惠活动",
      description: "全场精选商品低至 5 折，即刻选购",
      link: "/products?collection=sale"
    },
    {
      image: "https://picsum.photos/id/68/1600/900",
      title: "独家联名系列",
      description: "限量发售，打造独特时尚风格",
      link: "/products?collection=collaboration"
    }
  ]
  
  const newProducts = [
    { id: 1, name: "真丝衬衫", price: 899, image: "https://picsum.photos/id/21/400/500", badge: "新品" },
    { id: 2, name: "高腰牛仔裤", price: 699, image: "https://picsum.photos/id/22/400/500", badge: "新品" },
    { id: 3, name: "针织连衣裙", price: 1299, image: "https://picsum.photos/id/23/400/500", badge: "新品" },
    { id: 4, name: "西装外套", price: 1599, image: "https://picsum.photos/id/24/400/500", badge: "新品" },
    { id: 5, name: "休闲卫衣", price: 599, image: "https://picsum.photos/id/25/400/500", badge: "新品" },
    { id: 6, name: "短款风衣", price: 1499, image: "https://picsum.photos/id/26/400/500", badge: "新品" }
  ]
  
  const bestSellers = [
    { id: 7, name: "经典T恤", price: 299, image: "https://picsum.photos/id/27/400/500", badge: "热销" },
    { id: 8, name: "小脚裤", price: 499, image: "https://picsum.photos/id/28/400/500", badge: "热销" },
    { id: 9, name: "羊毛开衫", price: 799, image: "https://picsum.photos/id/29/400/500", badge: "热销" },
    { id: 10, name: "连衣裙", price: 999, image: "https://picsum.photos/id/30/400/500", badge: "热销" }
  ]
  
  const collections = [
    { id: 1, name: "通勤系列", description: "优雅干练的职场装扮", image: "https://picsum.photos/id/31/800/1000", link: "/products?collection=office" },
    { id: 2, name: "休闲周末", description: "舒适自在的休闲风格", image: "https://picsum.photos/id/32/800/1000", link: "/products?collection=weekend" }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % carouselItems.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [carouselItems.length])
  
  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }
  
  return (
    <div>
      <HeroSection>
        <Carousel currentIndex={currentIndex}>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <CarouselImage src={item.image} alt={item.title} />
              <CarouselContent>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <ShopButton to={item.link}>立即选购</ShopButton>
              </CarouselContent>
            </CarouselItem>
          ))}
        </Carousel>
        <CarouselDots>
          {carouselItems.map((_, index) => (
            <CarouselDot 
              key={index} 
              className={currentIndex === index ? 'active' : ''}
              onClick={() => handleDotClick(index)}
              aria-label={`转到轮播图第${index + 1}张`}
            />
          ))}
        </CarouselDots>
      </HeroSection>
      
      <Section>
        <SectionTitle>新品推荐</SectionTitle>
        <ProductGrid>
          {newProducts.map(product => (
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
      </Section>
      
      <CollectionSection>
        <CollectionGrid>
          {collections.map(collection => (
            <CollectionCard key={collection.id} to={collection.link}>
              <img src={collection.image} alt={collection.name} />
              <CollectionOverlay>
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
                <ShopButton to={collection.link} style={{ backgroundColor: 'transparent', border: '1px solid white', color: 'white' }}>探索系列</ShopButton>
              </CollectionOverlay>
            </CollectionCard>
          ))}
        </CollectionGrid>
      </CollectionSection>
      
      <Section>
        <SectionTitle>热销商品</SectionTitle>
        <ProductGrid>
          {bestSellers.map(product => (
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
      </Section>
    </div>
  )
}

export default HomePage