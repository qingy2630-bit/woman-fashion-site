import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const DetailContainer = styled.div`
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

const ImageSection = styled.div`
  
`

const MainImage = styled.div`
  position: relative;
  padding-top: 133%; /* 3:4 比例 */
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  margin-bottom: var(--spacing-lg);
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageThumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-sm);
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Thumbnail = styled.button`
  position: relative;
  padding-top: 133%;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color var(--transition-fast);
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &.active {
    border-color: var(--color-primary);
  }
`

const InfoSection = styled.div`
  
`

const ProductCategory = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-sm);
`

const ProductTitle = styled.h1`
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-lg);
`

const ProductPrice = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
`

const ProductDescription = styled.div`
  margin-bottom: var(--spacing-xl);
  color: var(--color-gray-700);
  line-height: 1.6;
`

const SizeSection = styled.div`
  margin-bottom: var(--spacing-xl);
`

const SectionTitle = styled.h3`
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: var(--spacing-md);
`

const SizeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`

const SizeButton = styled.button`
  padding: var(--spacing-sm) var(--spacing-lg);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  font-size: var(--font-size-sm);
  color: var(--color-gray-700);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  &.active {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  
  &.out-of-stock {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      border-color: var(--color-gray-300);
      color: var(--color-gray-700);
    }
  }
`

const ColorSection = styled.div`
  margin-bottom: var(--spacing-xl);
`

const ColorOptions = styled.div`
  display: flex;
  gap: var(--spacing-md);
`

const ColorButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color var(--transition-fast);
  background-color: ${props => props.color};
  
  &:hover {
    border-color: var(--color-gray-400);
  }
  
  &.active {
    border-color: var(--color-primary);
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const AddToCartButton = styled.button`
  flex: 1;
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

const BuyNowButton = styled.button`
  flex: 1;
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

const AiTryOnSection = styled.div`
  border: 1px solid var(--color-gray-200);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  background-color: var(--color-gray-50);
`

const AiTryOnTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: var(--spacing-md);
`

const AiTryOnDescription = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-md);
`

const AiTryOnButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
`

const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  color: var(--color-gray-700);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: var(--font-size-sm);
  
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  
  input[type="file"] {
    display: none;
  }
`

const CameraButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  color: var(--color-gray-700);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: var(--font-size-sm);
  
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`

const TryOnResult = styled.div`
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  text-align: center;
`

const ReviewsSection = styled.div`
  margin-top: var(--spacing-2xl);
  border-top: 1px solid var(--color-gray-200);
  padding-top: var(--spacing-2xl);
`

const ReviewsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-xl);
`

const ReviewsTitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-gray-900);
`

const ReviewsCount = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  margin-left: var(--spacing-sm);
`

const ReviewCard = styled.div`
  border-bottom: 1px solid var(--color-gray-200);
  padding-bottom: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
`

const ReviewerName = styled.div`
  font-weight: 600;
  color: var(--color-gray-800);
`

const ReviewDate = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
`

const ReviewRating = styled.div`
  display: flex;
  gap: 2px;
  
  svg {
    color: #f59e0b;
  }
`

const ReviewContent = styled.p`
  color: var(--color-gray-700);
  line-height: 1.6;
`

const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('#000000')
  const [hasUserImage, setHasUserImage] = useState(false)
  const [tryOnResult, setTryOnResult] = useState(null)
  
  // 模拟商品数据
  const product = {
    id: id,
    name: "真丝衬衫",
    price: 899,
    category: "女装 / 上衣",
    description: "这款优雅的真丝衬衫采用优质桑蚕丝面料，触感柔软顺滑，透气性好。经典的翻领设计，简约而不失时尚感。袖口处的细节处理彰显品质，无论是搭配西裤还是牛仔裤，都能展现出不同的风格。",
    images: [
      "https://picsum.photos/id/21/800/1000",
      "https://picsum.photos/id/22/800/1000",
      "https://picsum.photos/id/23/800/1000",
      "https://picsum.photos/id/24/800/1000"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "黑色", value: "#000000", inStock: true },
      { name: "白色", value: "#ffffff", inStock: true },
      { name: "米色", value: "#f5f0e5", inStock: false },
      { name: "藏青色", value: "#1a365d", inStock: true }
    ],
    reviews: [
      {
        id: 1,
        name: "李小姐",
        date: "2024-01-15",
        rating: 5,
        content: "质量非常好，面料很舒适，穿上很有气质。尺码也很标准，推荐购买！"
      },
      {
        id: 2,
        name: "张女士",
        date: "2024-01-10",
        rating: 4,
        content: "衣服很漂亮，就是有点透，需要搭配内衣。整体很满意。"
      }
    ]
  }
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('请选择尺码')
      return
    }
    // 实际项目中这里应该有添加到购物车的逻辑
    alert('已成功添加到购物车')
  }
  
  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('请选择尺码')
      return
    }
    // 实际项目中这里应该直接跳转到结算页面
    navigate('/checkout')
  }
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // 实际项目中这里应该有图片上传的逻辑
      setHasUserImage(true)
      // 模拟AI换衣结果
      setTimeout(() => {
        setTryOnResult("https://picsum.photos/id/33/800/1000")
      }, 1500)
    }
  }
  
  const handleCameraClick = () => {
    // 实际项目中这里应该调用摄像头API
    alert('请允许使用摄像头')
  }
  
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <svg key={index} width="16" height="16" viewBox="0 0 24 24" fill={index < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))
  }
  
  return (
    <DetailContainer>
      <ContentWrapper>
        <ImageSection>
          <MainImage>
            <img src={product.images[selectedImage]} alt={product.name} />
          </MainImage>
          <ImageThumbnails>
            {product.images.map((image, index) => (
              <Thumbnail 
                key={index} 
                className={selectedImage === index ? 'active' : ''}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} 缩略图 ${index + 1}`} />
              </Thumbnail>
            ))}
          </ImageThumbnails>
        </ImageSection>
        
        <InfoSection>
          <ProductCategory>{product.category}</ProductCategory>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>¥{product.price}</ProductPrice>
          <ProductDescription>
            {product.description}
          </ProductDescription>
          
          <ColorSection>
            <SectionTitle>颜色</SectionTitle>
            <ColorOptions>
              {product.colors.map((color, index) => (
                <ColorButton 
                  key={index} 
                  color={color.value}
                  className={selectedColor === color.value && color.inStock ? 'active' : ''}
                  onClick={() => color.inStock && setSelectedColor(color.value)}
                  disabled={!color.inStock}
                  title={color.name + (color.inStock ? '' : ' - 缺货')}
                />
              ))}
            </ColorOptions>
          </ColorSection>
          
          <SizeSection>
            <SectionTitle>尺码</SectionTitle>
            <SizeOptions>
              {product.sizes.map((size) => (
                <SizeButton 
                  key={size}
                  className={selectedSize === size ? 'active' : ''}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </SizeButton>
              ))}
            </SizeOptions>
          </SizeSection>
          
          <AiTryOnSection>
            <AiTryOnTitle>AI 试衣间</AiTryOnTitle>
            <AiTryOnDescription>上传您的照片或拍照，体验虚拟试衣效果</AiTryOnDescription>
            <AiTryOnButtons>
              <UploadButton>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l4 4m0-4l-4 4M12 12.8V2.5" />
                </svg>
                上传照片
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </UploadButton>
              <CameraButton onClick={handleCameraClick}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                拍照
              </CameraButton>
            </AiTryOnButtons>
            {tryOnResult && (
              <TryOnResult>
                <h4>AI 试衣效果</h4>
                <img src={tryOnResult} alt="AI 试衣效果" style={{ maxWidth: '100%', marginTop: '10px' }} />
              </TryOnResult>
            )}
          </AiTryOnSection>
          
          <ActionButtons>
            <AddToCartButton onClick={handleAddToCart}>加入购物车</AddToCartButton>
            <BuyNowButton onClick={handleBuyNow}>立即购买</BuyNowButton>
          </ActionButtons>
          
          <div style={{ fontSize: '0.875rem', color: '#606060' }}>
            <p>• 全场满 399 免运费</p>
            <p>• 7 天无理由退换</p>
            <p>• 正品保障</p>
          </div>
        </InfoSection>
      </ContentWrapper>
      
      <ReviewsSection>
        <ReviewsHeader>
          <div>
            <ReviewsTitle>用户评价</ReviewsTitle>
            <ReviewsCount>({product.reviews.length} 条评价)</ReviewsCount>
          </div>
        </ReviewsHeader>
        
        {product.reviews.map(review => (
          <ReviewCard key={review.id}>
            <ReviewHeader>
              <ReviewerName>{review.name}</ReviewerName>
              <ReviewDate>{review.date}</ReviewDate>
              <ReviewRating>{renderStars(review.rating)}</ReviewRating>
            </ReviewHeader>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewCard>
        ))}
      </ReviewsSection>
    </DetailContainer>
  )
}

export default ProductDetailPage