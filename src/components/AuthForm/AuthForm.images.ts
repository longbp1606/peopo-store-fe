export { default as fallbackImg } from '@/assets/images/fallback-img.png';
import formImg01 from '@/assets/images/form-banner-1.jpg';
import formImg02 from '@/assets/images/form-banner-2.jpg';
import formImg03 from '@/assets/images/form-banner-3.jpg';

type ImageType = {
    id: number;
    src: string;
}

export const images: ImageType[] = [
    {
        id: 1,
        src: formImg01,
    },
    {
        id: 2,
        src: formImg02,
    },
    {
        id: 3,
        src: formImg03,
    },
];

export default images;