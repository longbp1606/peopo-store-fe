import { Button, message, Table, Typography, Upload, Modal } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import * as Styled from './ManageCustomer.styled';
import { CustomerTableColumns, ManageCustomerDataType, ManageCustomerSampleData } from './ManageCustomer.data';
import { parseCustomerFile, validateFileType } from '@/utils/fileParser';
import { useState } from 'react';
import { AddCustomerForm } from './components';

const { Title, Text } = Typography;
// const { Dragger } = Upload;

const ManageCustomer = () => {
    const [customerData, setCustomerData] = useState<ManageCustomerDataType[]>(ManageCustomerSampleData);
    const [importedData, setImportedData] = useState<ManageCustomerDataType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isAddCustomerModalOpen, setIsAddCustomerModalOpen] = useState<boolean>(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [pageSize, setPageSize] = useState<number>(5);
    const [addCustomerLoading, setAddCustomerLoading] = useState<boolean>(false);

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

    const handleAddCustomer = (customerData: Omit<ManageCustomerDataType, 'key' | 'customerId'>) => {
        setAddCustomerLoading(true);

        // In a real application, this would be an API call
        // Simulate API call with timeout
        setTimeout(() => {
            // Generate a unique ID and key
            const newCustomerId = `CUS${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;

            const newCustomer: ManageCustomerDataType = {
                key: newCustomerId,
                customerId: newCustomerId,
                ...customerData
            };

            setCustomerData(prevData => [newCustomer, ...Array.from(prevData)]);
            setIsAddCustomerModalOpen(false);
            setAddCustomerLoading(false);
            messageApi.success('Thêm khách hàng thành công!');
        }, 1000);
    };

    const handleAddCustomerCancel = () => {
        setIsAddCustomerModalOpen(false);
    };

    return (
        <>
            {contextHolder}
            <Styled.ManageCustomerWrapper vertical>
                <Styled.HeaderWrapper>
                    <Title level={3}>Quản lý khách hàng</Title>

                    <Styled.ManageCustomerWrapper gap={8} justify='flex-end'>
                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={() => setIsAddCustomerModalOpen(true)}
                        >
                            Thêm khách hàng mới
                        </Button>

                        <Upload
                            accept=".xlsx,.xls,.csv"
                            showUploadList={false}
                            beforeUpload={handleFileUpload}
                        >
                            <Button icon={<UploadOutlined />} type="default">
                                Nhập từ file
                            </Button>
                        </Upload>
                    </Styled.ManageCustomerWrapper>
                </Styled.HeaderWrapper>

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
                            columns={CustomerTableColumns}
                            pagination={{ pageSize: 5 }}
                            size="small"
                            scroll={{ x: 'max-content' }}
                            bordered
                        />
                    )}
                </Modal>

                <Modal
                    title="Thêm khách hàng mới"
                    open={isAddCustomerModalOpen}
                    onCancel={handleAddCustomerCancel}
                    footer={null}
                    width={800}
                >
                    <AddCustomerForm
                        onFinish={handleAddCustomer}
                        onCancel={handleAddCustomerCancel}
                        loading={addCustomerLoading}
                    />
                </Modal>
            </Styled.ManageCustomerWrapper>
        </>
    )
}

export default ManageCustomer;