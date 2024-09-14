import useDocumentTitle from "@/hooks/useDocumentTitle"

const NotFound = () => {
    useDocumentTitle('Không tìm thấy trang | Peopo Store')

    return (
        <h1>Not Found Page</h1>
    )
};

NotFound.propTypes = {};

export default NotFound