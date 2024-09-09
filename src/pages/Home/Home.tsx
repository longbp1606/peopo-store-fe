import useDocumentTitle from "@/hooks/useDocumentTitle";
import Banner from "./Component/Banner";
import ProductCategory from "./Component/ProductCategory";

const Home = () => {
    useDocumentTitle('Home | Peopo Store');

    return (
        <>
            <Banner/>
            <ProductCategory/>
        </>
    )
};

export default Home;