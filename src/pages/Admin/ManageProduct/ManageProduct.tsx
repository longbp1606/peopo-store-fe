import { Flex, Table, Typography } from 'antd';
import * as Styled from './ManageProduct.styled';
import { ManageProductDataType, ManageProductSampleData, ProductTableColumns } from './ManageProduct.data';
import Button, { ButtonType } from '@/components/Button/Button';
import { TbEdit, TbFileExport, TbPlus, TbReload } from 'react-icons/tb';
import { MdOutlineDelete } from 'react-icons/md';

const { Title } = Typography;

const ManageProduct = () => {
    const buttons: ButtonType[] = [
        {
            title: 'Làm mới',
            icon: TbReload,
            color: 'blue',
        },
        {
            title: 'Thêm sản phẩm',
            icon: TbPlus,
            color: 'cyan',
        },
        {
            title: 'Chỉnh sửa',
            icon: TbEdit,
            color: 'pink',
        },
        {
            title: 'Xóa',
            icon: MdOutlineDelete,
            color: 'red',
        },
        {
            title: 'Xuất Excel',
            icon: TbFileExport,
            color: 'green',
        },
    ];

    return (
        <>
            <Styled.ManageProductWrapper vertical>
                <Flex justify="space-between">
                    <Title level={3}>Quản lý sản phẩm</Title>

                    <Flex gap={8}>
                        {buttons.map((button) => (
                            <Button
                                key={button.title}
                                title={button.title}
                                icon={button.icon}
                                color={button.color}
                                onClick={button.onClick}
                            />
                        ))}
                    </Flex>
                </Flex>

                <Table<ManageProductDataType>
                    dataSource={ManageProductSampleData}
                    columns={ProductTableColumns}
                    rowSelection={{
                        type: 'checkbox',
                    }}
                />
            </Styled.ManageProductWrapper>
        </>
    )
}

export default ManageProduct;