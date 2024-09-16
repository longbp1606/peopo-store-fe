import * as Styled from './ProductSection.styled';
import { ProductData } from './ProductSection.data';
import Container from '@/components/Container';
import { useNavigate } from 'react-router-dom';
import routes from '@/config/routes';

const ProductSection = () => {
    const navigate = useNavigate();
    
    return (
        <>
            {ProductData.map((products) => (
                <Styled.ProductWrapper key={products.key}>
                    {products.title}
                    <Container>
                        <Styled.ProductContainer>
                            {products.product.map((product) => (
                                <Styled.ProductElement key={product.id}>
                                    <Styled.ProductImageHolder>
                                        <Styled.ProductImage
                                            src={product.img}
                                            alt={product.name}
                                            preview={false}
                                            onClick={() => navigate(`${routes.public.productDetail.replace(':id','1')}`)}
                                        />
                                    </Styled.ProductImageHolder>
                                    <Styled.ProductName>
                                        {product.name}
                                    </Styled.ProductName>
                                    <Styled.ProductPrice>
                                        ¥ {product.price}
                                    </Styled.ProductPrice>
                                </Styled.ProductElement>
                            ))}
                        </Styled.ProductContainer>
                        <Styled.ButtonContainer>
                            <Styled.MoreButton>
                                Xem tất cả ➤
                            </Styled.MoreButton>
                        </Styled.ButtonContainer>
                    </Container>
                </Styled.ProductWrapper>
            ))}
        </>
    )
}

export default ProductSection;