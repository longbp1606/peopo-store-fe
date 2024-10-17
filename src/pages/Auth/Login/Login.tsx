import * as Styled from './Login.styled';

import AuthForm from "@/components/AuthForm";
import { loginFields } from "@/components/AuthForm/AuthForm.fields";
import Link from '@/components/Link';
import config from '@/config';
import useDocumentTitle from "@/hooks/useDocumentTitle"
import { PageEnum } from "@/utils/enums";
import { Typography } from 'antd';

const { Text } = Typography;

const Login = () => {
    useDocumentTitle('Đăng nhập | Peopo Store');

    const redirect = {
        description: 'Chưa có tài khoản?',
        title: 'Đăng ký ngay',
        url: config.routes.public.register,
    };
    
    const description = (
        <Styled.LoginDesc>
            Dịch vụ đặt hàng tại Nhật được đơn giản hóa với
            <Link to={config.routes.public.home} underline scroll>
                <Text>Peopo Store</Text>
            </Link>
            bên cạnh bạn. Bắt đầu ngay.
        </Styled.LoginDesc>
    );

    return (
        <>
            <AuthForm
                page={PageEnum.LOGIN}
                formTitle="Chào mừng trở lại"
                buttonTitle="Đăng nhập"
                fields={loginFields}
                description={description}
                redirect={redirect}
            />
        </>
    )
}

export default Login