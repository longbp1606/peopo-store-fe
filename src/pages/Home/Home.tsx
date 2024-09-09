import useDocumentTitle from "@/hooks/useDocumentTitle";
import Banner from "./Component/Banner";
import ProductCategory from "./Component/ProductCategory";
import Title from "@/components/Title";

const Home = () => {
    useDocumentTitle('Home | Peopo Store');

    return (
        <>
            <Banner/>
            <ProductCategory/>
            <Title title="Hàng có sẵn"/>
        </>
    )
};

export default Home;