import Title from "@/components/Title";
import PreProduct1 from '@/assets/example/product/ly_holo_tokinosora_7th_banner_en_2_1725513666_480x.webp';
import Product2 from '@/assets/example/product/HL_ASMR_8m_AZKi_cafe_JP_SQ_480x.webp';
import Product3 from '@/assets/example/product/holomini_Myth_bannar_JP_1_480x.webp';

export const ProductData = [
    {
        id: 1,
        key: "Pre-order",
        title: <Title title="Hàng đặt trước"/>,
        product: [
            {
                id: "pre-1",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: PreProduct1,
                price: 1100,
            },
            {
                id: "pre-2",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: PreProduct1,
                price: 1100,
            },
            {
                id: "pre-3",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: PreProduct1,
                price: 1100,
            },
            {
                id: "pre-4",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: PreProduct1,
                price: 1100,
            },
        ]
    },
    {
        id: 2,
        key: "Available Product",
        title: <Title title="Hàng có sẵn"/>,
        product: [
            {
                id: "able-1",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: Product3,
                price: 1100,
            },
            {
                id: "able-2",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: Product3,
                price: 1100,
            },
            {
                id: "able-3",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: Product3,
                price: 1100,
            },
            {
                id: "able-4",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: Product3,
                price: 1100,
            },
        ]
    },
    {
        id: 3,
        key: "Ending soon",
        title: <Title title="Sắp kết thúc"/>,
        product: [
            {
                id: "end-1",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: Product2,
                price: 1100,
            },
            {
                id: "end-2",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: Product2,
                price: 1100,
            },
            {
                id: "end-3",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: Product2,
                price: 1100,
            },
            {
                id: "end-4",
                name: "Tokino Sora 7th Anniversary Celebration",
                img: Product2,
                price: 1100,
            },
        ]
    },
]