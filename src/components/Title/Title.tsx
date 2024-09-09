import * as Styled from './Title.styled';

const Title = ({ title }: { title: string }) => {
    return (
        <Styled.TitleWrapper>
            <Styled.LeftLineContainer>
                <Styled.LeftLineComponent/>
            </Styled.LeftLineContainer>
            <Styled.TitleContainer>
                <Styled.Content>
                    {title}
                </Styled.Content>
            </Styled.TitleContainer>
            <Styled.RightLineContainer>
                <Styled.RightLineComponent/>
            </Styled.RightLineContainer>
        </Styled.TitleWrapper>
    )
}

export default Title