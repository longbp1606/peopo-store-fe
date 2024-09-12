import Container from '@/components/Container';
import * as Styled from './AboutMe.styled';
import Shop1 from '@/assets/example/shop/Shop1.jpg';
import Shop2 from '@/assets/example/shop/Shop2.jpg';
import Shop3 from '@/assets/example/shop/Shop3.jpg';

const AboutMe = () => {
  return (
    <Container>
      <Styled.AboutWrapper>
        <Styled.AboutContent>
          <Styled.AboutTitle>Về Peopo Store</Styled.AboutTitle>
          <Styled.AboutDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Harum ea velit enim repudiandae neque pariatur corporis ex.
            Aliquid incidunt reiciendis praesentium vero veritatis
            voluptatum obcaecati recusandae officia. Ad, optio repellat.
          </Styled.AboutDescription>
        </Styled.AboutContent>
        <Styled.ImageArea>
          <Styled.ImageHolder>
            <Styled.ImageHolderMain>
              <Styled.ImageMain
                src={Shop1}
                alt='main'
                preview={false}
              />
            </Styled.ImageHolderMain>
            
            <Styled.ImageHolderSub1>
              <Styled.ImageContainerSub>
                <Styled.ImageSub
                  src={Shop2}
                  alt='sub'
                  preview={false}
                />
              </Styled.ImageContainerSub>
            </Styled.ImageHolderSub1>

            <Styled.ImageHolderSub2>
              <Styled.ImageContainerSub>
                <Styled.ImageSub
                  src={Shop3}
                  alt='sub'
                  preview={false}
                />
              </Styled.ImageContainerSub>
            </Styled.ImageHolderSub2>
          </Styled.ImageHolder>
        </Styled.ImageArea>
      </Styled.AboutWrapper>
    </Container>
  )
}

export default AboutMe;