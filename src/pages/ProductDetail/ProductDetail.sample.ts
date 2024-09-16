import Image1 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_2_1725513666_1024x1024.webp'
import Image2 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_3_1725513706_1024x1024.webp';
import Image3 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_4_1725513687_1024x1024.webp';
import Image4 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_5_1725513720_1024x1024.webp';
import Image5 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_6_1725513750_1024x1024.webp';
import Image6 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_7_1725513771_1024x1024.webp';
import Image7 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_8_1725513783_1024x1024.webp';
import Image8 from '@/assets/example/product/ProductDetail/Product 1/ly_holo_tokinosora_7th_banner_en_9_1725513800_1024x1024.webp';

export const ProductDataSample =
{
    id: 1,
    name: 'Tokino Sora 7th Anniversary Celebration',
    type: 'Goods',
    brand: 'Cover',
    category: [
        {
            key: 1,
            name: 'Digital Content'
        },
        {
            key: 2,
            name: 'Pre-order products'
        }
    ],
    products: [
        {
            key: 'Set',
            product: [
                {
                    key: 'set-1',
                    name: '7th Anniversary Merch Complete Set Limited Edition',
                    price: 20900,
                    status: false,
                    img: Image3
                },
                {
                    key: 'set-2',
                    name: '7th Anniversary Merch Complete Set',
                    price: 20900,
                    status: true,
                    img: Image3
                }
            ]
        },
        {
            key: 'Merch',
            product: [
                {
                    key: 'merch-1',
                    name: 'Acrylic Diorama Stand',
                    price: 4950,
                    status: true,
                    img: Image4
                },
                {
                    key: 'merch-2',
                    name: 'Tokino Sora Plushie - Jacket & Mini Dress ver.',
                    price: 7150,
                    status: true,
                    img: Image5
                },
                {
                    key: 'merch-3',
                    name: 'Shoulder Bag',
                    price: 7700,
                    status: true,
                    img: Image6
                },
            ]
        },
        {
            key: 'Voice',
            product: [
                {
                    key: 'voice-1',
                    name: 'Situational Voice Pack "Good Morning"',
                    price: 1100,
                    status: true,
                    img: Image7
                }
            ]
        }
    ],
    image: [
        {
            key: 1,
            src: Image1,
            alt: 'Image1'
        },
        {
            key: 2,
            src: Image2,
            alt: 'Image2'
        },
        {
            key: 3,
            src: Image3,
            alt: 'Image3'
        },
        {
            key: 4,
            src: Image4,
            alt: 'Image4'
        },
        {
            key: 5,
            src: Image5,
            alt: 'Image5'
        },
        {
            key: 6,
            src: Image6,
            alt: 'Image6'
        },
        {
            key: 7,
            src: Image7,
            alt: 'Image7'
        },
        {
            key: 8,
            src: Image8,
            alt: 'Image8'
        },
    ],
    description: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Fuga perferendis eaque dolorum ea distinctio quos accusamus, 
        fugit eum cumque fugiat illum aspernatur recusandae consectetur aliquam sit cupiditate. 
        Corrupti, quod beatae?
    `
    ,
    orderStartDate: '07/09/2024',
    orderEndDate: '07/10/2024',
};
