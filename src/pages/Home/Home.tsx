import useDocumentTitle from "@/hooks/useDocumentTitle";
import Banner from "./Component/Banner";

const Home = () => {
    useDocumentTitle('Home | Peopo Store');

    return (
        <>
            <Banner/>
        </>
    )
};

export default Home;