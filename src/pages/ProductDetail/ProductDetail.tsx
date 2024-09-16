import Container from '@/components/Container';
import * as Styled from './ProductDetail.styled';
import { Alert, Button, Col, Collapse, CollapseProps, Divider, Flex, Image, Row, Tag, Typography } from 'antd';
import { ProductDataSample } from './ProductDetail.sample';
import { useState } from 'react';
import { theme } from '@/themes';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { FaCartPlus } from 'react-icons/fa';
import ProductSection from '../Home/Component/ProductSection';

const { Title, Text } = Typography;

const text = `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Fuga perferendis eaque dolorum ea distinctio quos accusamus, 
    fugit eum cumque fugiat illum aspernatur recusandae consectetur aliquam sit cupiditate. 
    Corrupti, quod beatae?
`;

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
      },
      {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
      },
      {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
      },
]

const ProductDetail = () => {
    useDocumentTitle('Product Detail | Peopo Store');

    const [categorySelected, setCategorySelected] = useState(ProductDataSample.products[0].key);
    const [imageSelected, setImageSelected] = useState(ProductDataSample.image[0].src);

    const handleCategorySelected = (category: string) => {
        setCategorySelected(category);
    }

    const handleImageSelected = (src: string) => {
        setImageSelected(src);
    }

    return (
        <>
            <Styled.ProductWrapper>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Styled.ImageHolderWrapper>
                                <Styled.ImageHolderMain>
                                    <Styled.ImageMain
                                        src={imageSelected}
                                        alt='Main'
                                        preview={false}
                                    />
                                </Styled.ImageHolderMain>
                                
                                <Styled.ImageHolderSub>
                                    {ProductDataSample.image.map((image) => (
                                        <Styled.ImageSub
                                            src={image.src}
                                            alt={image.alt}
                                            preview={false}
                                            key={image.key}
                                            onClick={() => handleImageSelected(image.src)}
                                            style={{
                                                border: imageSelected === image.src ? 
                                                `3px solid ${theme.colors.primary}` : 'none'  
                                            }}
                                        />
                                    ))}
                                </Styled.ImageHolderSub>

                                <Text>{ProductDataSample.description}</Text>

                                <Collapse items={items} defaultActiveKey={['1']}/>
                            </Styled.ImageHolderWrapper>
                        </Col>
                        <Col lg={12}>
                            <Styled.ProductContainer>
                                <Title>{ProductDataSample.name}</Title>
                                <Divider />
                                <Alert
                                    message={`Thời gian đặt hàng từ: ${ProductDataSample.orderStartDate} - ${ProductDataSample.orderEndDate}`}
                                    type='warning'
                                /><br />
                                {ProductDataSample.category.map((type) => (
                                    <Styled.ProductTag
                                        key={type.key}
                                    >
                                        {type.name}
                                    </Styled.ProductTag>
                                ))}
                                <Title level={2}>Loại mặt hàng</Title>
                                <Flex
                                    vertical
                                    gap={20}
                                >
                                    <Styled.CategoryGroupButton
                                        gap={15}
                                    >
                                        {ProductDataSample.products.map((category) => (
                                            <Styled.CategoryButton
                                                key={category.key}
                                                style={{
                                                    background: categorySelected === category.key ? `${theme.colors.primary}` : 'white',
                                                    color: categorySelected === category.key ? 'white' : `${theme.colors.textSecondary}`,
                                                    borderColor: categorySelected === category.key ? `${theme.colors.primary}` : '#d9d9d9',
                                                }}
                                                onClick={() => handleCategorySelected(category.key)}
                                            >
                                                {category.key} : {category.product.length}

                                            </Styled.CategoryButton>
                                        ))}
                                    </Styled.CategoryGroupButton>

                                    <Styled.ProductElementContainer>
                                        {
                                            ProductDataSample.products
                                                .find((type) => type.key === categorySelected)?.product
                                                .map((product) => (
                                                    <Row
                                                        justify="space-between"
                                                        align={'middle'}
                                                    >
                                                        <Col lg={16}>
                                                            <Title level={4}>{product.name}</Title>
                                                            {
                                                                product.status === false &&
                                                                <Tag color='error'>Sold out</Tag>
                                                            }
                                                            <Styled.AddToCartSection>
                                                                <Text>￥{product.price}</Text>
                                                                <Button
                                                                    disabled={!product.status}
                                                                    type='primary'
                                                                >
                                                                    <FaCartPlus /> Thêm vào giỏ hàng
                                                                </Button>
                                                            </Styled.AddToCartSection>
                                                        </Col>
                                                        <Col>
                                                            <Image
                                                                src={product.img}
                                                                alt={product.name}
                                                                width={100}
                                                            />
                                                        </Col>
                                                    </Row>
                                                ))
                                        }
                                    </Styled.ProductElementContainer>

                                    <Row
                                        justify='center'
                                    >
                                        <Styled.ProceedToCartButton
                                            type='primary'
                                        >
                                            Tiến hành thanh toán
                                        </Styled.ProceedToCartButton>
                                    </Row>
                                </Flex>
                            </Styled.ProductContainer>
                        </Col>
                    </Row>
                </Container>
                <ProductSection/>
            </Styled.ProductWrapper>
        </>
    )
}

export default ProductDetail;