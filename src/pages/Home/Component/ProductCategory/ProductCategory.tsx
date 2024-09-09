import { Typography } from "antd"
import * as Styled from './PrroductCategory.styled';
import Container from "@/components/Container";
import { ProductCategoryData } from "./ProductCategory.data";
const { Text } = Typography;

const ProductCategory = () => {
  return (
    <Styled.ProductCategoryWrapper>
        <Container>
            <Styled.SectionTitle>
                <Text>Peopo Store</Text>
                <Text> - Chắp cánh niềm simp của bạn</Text>
            </Styled.SectionTitle>
            <Styled.CategoryContainer>
                <Styled.CategoryContainer>
                    {ProductCategoryData.map((category) => (
                        <Styled.CategoryElement key={category.id}>
                            <Styled.CategoryImageHolder>
                                <Styled.CategoryImage 
                                    src={category.img} 
                                    alt={category.title}
                                    preview={false}
                                />
                            </Styled.CategoryImageHolder>
                            <Text>{category.title}</Text>
                        </Styled.CategoryElement>
                    ))}
                </Styled.CategoryContainer>
            </Styled.CategoryContainer>
        </Container>
    </Styled.ProductCategoryWrapper>
  )
}

export default ProductCategory