import { Flex, Table, Typography } from 'antd';
import * as Styled from './ManageOrder.styled';
import { ManageOrderDataType, ManageOrderSampleData, OrderTableColumns } from './ManageOrder.data';
import Button, { ButtonType } from '@/components/Button/Button';
import { TbEdit, TbFileExport, TbReload } from "react-icons/tb";

const { Title } = Typography;

const ManageOrder = () => {
    const buttons: ButtonType[] = [
        {
            title: 'Làm mới',
            icon: TbReload,
            color: 'blue',
        },
        {
            title: 'Xuất Excel',
            icon: TbFileExport,
            color: 'green',
        },
        {
            title: 'Chỉnh sửa',
            icon: TbEdit,
            color: 'pink',
        },
    ];

    return (
        <>
            <Styled.ManageOrderWrapper vertical justify='space-between'>
                <Flex vertical gap={16}>
                    <Title level={3}>Quản lý đơn hàng</Title>

                    <Table<ManageOrderDataType>
                        dataSource={ManageOrderSampleData}
                        columns={OrderTableColumns}
                        rowSelection={{
                            type: 'checkbox',
                        }}
                        size='middle'
                    />
                </Flex>

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
            </Styled.ManageOrderWrapper>
        </>
    )
}

export default ManageOrder;