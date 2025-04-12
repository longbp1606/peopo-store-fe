import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { ManageCustomerDataType } from '../ManageCustomer.data';
import styled from 'styled-components';

const { Option } = Select;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const AvatarUpload = styled(Upload)`
  .ant-upload-select {
    width: 100%;
  }
`;

interface AddCustomerFormProps {
    onFinish: (values: Omit<ManageCustomerDataType, 'key' | 'customerId'>) => void;
    onCancel: () => void;
    loading?: boolean;
}

const AddCustomerForm: React.FC<AddCustomerFormProps> = ({ onFinish, onCancel, loading = false }) => {
    const [form] = Form.useForm();
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [messageApi, contextHolder] = message.useMessage();
    console.log(avatarFile);

    const handleAvatarUpload = (info: any) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            setAvatarFile(info.file.originFileObj);
        } else if (info.file.status === 'error') {
            messageApi.error(`${info.file.name} file upload failed.`);
        }
    };

    const handleSubmit = (values: any) => {
        // Create a customer object from form values
        const customerData: Omit<ManageCustomerDataType, 'key' | 'customerId'> = {
            customerName: values.customerName,
            email: values.email,
            phoneNumber: values.phoneNumber?.replace(/-/g, ''), // Remove dashes if present
            type: values.type || 'registered',
            level: values.level || 'bronze',
            status: values.status || 'offline',
            // Avatar would be handled by a real backend
        };

        onFinish(customerData);
        form.resetFields();
    };

    return (
        <FormWrapper>
            {contextHolder}
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                    type: 'registered',
                    level: 'bronze',
                    status: 'offline'
                }}
            >
                <Form.Item
                    name="avatar"
                    label="Ảnh đại diện"
                >
                    <AvatarUpload
                        name="avatar"
                        listType="picture"
                        className="avatar-uploader"
                        showUploadList={false}
                        beforeUpload={(file) => {
                            const isImage = file.type.startsWith('image/');
                            if (!isImage) {
                                messageApi.error('Bạn chỉ có thể tải lên file hình ảnh!');
                            }
                            return isImage || Upload.LIST_IGNORE;
                        }}
                        onChange={handleAvatarUpload}
                        maxCount={1}
                    >
                        <Button icon={<UploadOutlined />}>Tải lên ảnh đại diện</Button>
                    </AvatarUpload>
                </Form.Item>

                <Form.Item
                    name="customerName"
                    label="Tên khách hàng"
                    rules={[{ required: true, message: 'Vui lòng nhập tên khách hàng!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Nhập tên khách hàng" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { type: 'email', message: 'Email không hợp lệ!' },
                        { required: true, message: 'Vui lòng nhập email!' }
                    ]}
                >
                    <Input prefix={<MailOutlined />} placeholder="Nhập email" />
                </Form.Item>

                <Form.Item
                    name="phoneNumber"
                    label="Số điện thoại"
                    rules={[
                        { required: true, message: 'Vui lòng nhập số điện thoại!' },
                        { pattern: /^[0-9]{10}$/, message: 'Số điện thoại phải có 10 chữ số!' }
                    ]}
                >
                    <Input
                        prefix={<PhoneOutlined />}
                        placeholder="Nhập số điện thoại"
                        maxLength={10}
                    />
                </Form.Item>

                <Form.Item
                    name="type"
                    label="Loại khách hàng"
                >
                    <Select placeholder="Chọn loại khách hàng">
                        <Option value="registered">Đã đăng ký</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="level"
                    label="Cấp độ"
                >
                    <Select placeholder="Chọn cấp độ">
                        <Option value="bronze">Bronze</Option>
                        <Option value="silver">Silver</Option>
                        <Option value="gold">Gold</Option>
                        <Option value="platinum">Platinum</Option>
                        <Option value="diamond">Diamond</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="status"
                    label="Trạng thái"
                >
                    <Select placeholder="Chọn trạng thái">
                        <Option value="online">Online</Option>
                        <Option value="offline">Offline</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: 8 }}>
                        Thêm khách hàng
                    </Button>
                    <Button onClick={onCancel}>
                        Hủy
                    </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default AddCustomerForm;