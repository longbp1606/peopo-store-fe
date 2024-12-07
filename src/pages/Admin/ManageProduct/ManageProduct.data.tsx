import Product1 from '@/assets/example/product/ly_holo_tokinosora_7th_banner_en_2_1725513666_480x.webp';
import Product2 from '@/assets/example/product/HL_ASMR_8m_AZKi_cafe_JP_SQ_480x.webp';
import Product3 from '@/assets/example/product/holomini_Myth_bannar_JP_1_480x.webp';

import Image4 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_5_1725513720_1024x1024.webp';
import Image5 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_6_1725513750_1024x1024.webp';
import Image6 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_7_1725513771_1024x1024.webp';
import Image7 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_8_1725513783_1024x1024.webp';

import { formatCurrency } from "@/utils/formatCurrency";
import { Image, TableProps } from "antd";
import Tag from "@/components/Tag";

export interface ManageProductDataType {
    key: string;
    productId: string;
    productImage: string;
    productName: string;
    categories: string[];
    amount?: number;
    price: number;
    children?: ManageProductDataType[];
};

export const ProductTableColumns: TableProps<ManageProductDataType>['columns'] = [
    {
        title: 'Mã sản phẩm',
        dataIndex: 'productId',
        key: 'productId',
    },
    {
        title: 'Ảnh sản phẩm',
        dataIndex: 'productImage',
        key: 'productImage',
        render: (productImage) => (
            <Image src={productImage} alt="Image" width={100} />
        ),
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'productName',
        key: 'productName',
    },
    {
        title: 'Danh mục',
        dataIndex: 'categories',
        key: 'categories',
        render: (categories: any) => (
            <>
                {
                    categories.map((category: any) => (
                        <Tag status={category} type="" />
                    ))
                }
            </>
        )
    },
    {
        title: 'Số lượng',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Đơn giá',
        dataIndex: 'price',
        key: 'price',
        render: (price) => formatCurrency(price),
    },
];

export const ManageProductSampleData: ManageProductDataType[] = [
    {
        key: '1',
        productId: '1234',
        productImage: Product1,
        productName: 'Test',
        categories: ['preorder'],
        amount: 5,
        price: 1200000,
        children: [
            {
                key: '1-1',
                productId: '1234',
                productImage: Image4,
                productName: 'Test',
                categories: ['preorder', 'merch'],
                amount: 5,
                price: 200000,
            },
            {
                key: '1-2',
                productId: '1234',
                productImage: Image5,
                productName: 'Test',
                categories: ['preorder', 'merch'],
                amount: 5,
                price: 200000,
            },
            {
                key: '1-3',
                productId: '1234',
                productImage: Image6,
                productName: 'Test',
                categories: ['preorder', 'merch'],
                amount: 5,
                price: 200000,
            },
            {
                key: '1-4',
                productId: '1234',
                productImage: Image7,
                productName: 'Test',
                categories: ['preorder', 'digital'],
                amount: 5,
                price: 200000,
            },
        ]
    },
    {
        key: '2',
        productId: '1234',
        productImage: Product2,
        productName: 'Test',
        categories: ['preorder'],
        amount: 5,
        price: 1200000,
    },
    {
        key: '3',
        productId: '1234',
        productImage: Product3,
        productName: 'Test',
        categories: ['preorder'],
        amount: 5,
        price: 1200000,
    },
    {
        key: '4',
        productId: '1234',
        productImage: Product1,
        productName: 'Test',
        categories: ['preorder'],
        amount: 5,
        price: 1200000,
    },
    {
        key: '5',
        productId: '1234',
        productImage: Product2,
        productName: 'Test',
        categories: ['preorder'],
        amount: 5,
        price: 1200000,
    },
    {
        key: '6',
        productId: '1234',
        productImage: Product3,
        productName: 'Test',
        categories: ['preorder'],
        amount: 5,
        price: 1200000,
    },
    {
        key: '7',
        productId: '1234',
        productImage: Product1,
        productName: 'Test',
        categories: ['preorder'],
        amount: 5,
        price: 1200000,
    },
    {
        key: '8',
        productId: '1234',
        productImage: Product2,
        productName: 'Test',
        categories: ['preorder'],
        amount: 5,
        price: 1200000,
    },
    {
        key: '9',
        productId: '1234',
        productImage: Product1,
        productName: 'Test',
        categories: ['preorder'],
        amount: 5,
        price: 1200000,
    },
    {
        key: '10',
        productId: '1234',
        productImage: Product1,
        productName: 'Test',
        categories: ['preorder'],
        amount: 5,
        price: 1200000,
    },
]