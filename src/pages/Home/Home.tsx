import useDocumentTitle from "@/hooks/useDocumentTitle";
import Banner from "./Component/Banner";
import ProductCategory from "./Component/ProductCategory";
import ProductSection from "./Component/ProductSection";

const Home = () => {
    useDocumentTitle('Home | Peopo Store');

    return (
        <>
            <Banner/>
            <ProductCategory/>
            <ProductSection/>
        </>
    )
};

export default Home;