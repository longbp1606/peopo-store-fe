import { Button, message, Table, Typography, Upload, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as Styled from './ManageCustomer.styled';
import { CustomerTableColumns, ManageCustomerDataType, ManageCustomerSampleData } from './ManageCustomer.data';
import { parseCustomerFile, validateFileType } from '@/utils/fileParser';
import { useState } from 'react';

const { Title, Text } = Typography;
// const { Dragger } = Upload;

const ManageCustomer = () => {
    const [customerData, setCustomerData] = useState<ManageCustomerDataType[]>(ManageCustomerSampleData);
    const [importedData, setImportedData] = useState<ManageCustomerDataType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [pageSize, setPageSize] = useState<number>(5);

    const handleFileUpload = async (file: File) => {
        if (!validateFileType(file)) {
            messageApi.error('Chỉ chấp nhận file Excel hoặc CSV');
            return false;
        }

        try {
            const parsedData = await parseCustomerFile(file);
            setImportedData(parsedData);
            setIsModalOpen(true);
            return false; // Prevent auto upload
        } catch (error) {
            messageApi.error('Lỗi khi đọc file. Vui lòng kiểm tra định dạng file.');
            return false;
        }
    };

    const handleImportConfirm = () => {
        setCustomerData([...customerData, ...importedData]);
        setIsModalOpen(false);
        setImportedData([]);
        messageApi.success('Nhập dữ liệu khách hàng thành công!');
    };

    const handleImportCancel = () => {
        setIsModalOpen(false);
        setImportedData([]);
    };

    return (
        <>
            {contextHolder}
            <Styled.ManageCustomerWrapper vertical>
                <Title level={3}>Quản lý khách hàng</Title>
                
                <Upload
                    accept=".xlsx,.xls,.csv"
                    showUploadList={false}
                    beforeUpload={handleFileUpload}
                >
                    <Button icon={<UploadOutlined />} type="primary">
                        Nhập danh sách khách hàng từ file
                    </Button>
                </Upload>

                <Table<ManageCustomerDataType>
                    dataSource={customerData}
                    columns={CustomerTableColumns}
                    rowSelection={{
                        type: 'checkbox',
                    }}
                    pagination={{
                        pageSize: pageSize,
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '20', '50'],
                        showTotal: (total, range) => `${range[0]}-${range[1]} của ${total} khách hàng`,
                        onChange: (_, pageSize) => {
                            setPageSize(pageSize);
                        },
                    }}
                    scroll={{ x: 'max-content' }}
                />

                <Modal
                    title="Xác nhận nhập dữ liệu"
                    open={isModalOpen}
                    onOk={handleImportConfirm}
                    onCancel={handleImportCancel}
                    okText="Xác nhận"
                    cancelText="Hủy"
                    width={1200}
                >
                    <Text>Đã tìm thấy {importedData.length} khách hàng từ file. Bạn có muốn nhập vào hệ thống?</Text>
                    
                    {importedData.length > 0 && (
                        <Table<ManageCustomerDataType>
                            dataSource={importedData}
                            columns={CustomerTableColumns }
                            pagination={{ pageSize: 5 }}
                            size="small"
                            scroll={{ x: 'max-content' }}
                            bordered
                        />
                    )}
                </Modal>
            </Styled.ManageCustomerWrapper>
        </>
    )
}

export default ManageCustomer;