import useDocumentTitle from "@/hooks/useDocumentTitle";
import Banner from "./Component/Banner";
import ProductCategory from "./Component/ProductCategory";
import ProductSection from "./Component/ProductSection";
import AboutMe from "./Component/AboutMe";

const Home = () => {
    useDocumentTitle('Home | Peopo Store');

    return (
        <>
            <Banner/>
            <ProductCategory/>
            <ProductSection/>
            <AboutMe/>
        </>
    )
};

export default Home;