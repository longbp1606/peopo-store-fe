import * as Styled from './Login.styled';

import AuthForm from "@/components/AuthForm";
import { loginFields } from "@/components/AuthForm/AuthForm.fields";
import Link from '@/components/Link';
import config from '@/config';
import useDocumentTitle from "@/hooks/useDocumentTitle"
import { accounts } from '@/sample/account';
import { PageEnum } from "@/utils/enums";
import { message, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const Login = () => {
    useDocumentTitle('Đăng nhập | Peopo Store');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values: any) => {
        setIsSubmitting(true);
        console.log('Received values of form: ', values);

        if (accounts.find((account) =>
            account.username === values.email &&
            account.password === values.password &&
            account.role === 'admin')) {
            navigate(config.routes.admin.dashboard);
        } else {
            messageApi.error('Tài khoản hoặc mật khẩu không đúng');
        }

        setIsSubmitting(false);
    };

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
            {contextHolder}
            <AuthForm
                page={PageEnum.LOGIN}
                formTitle="Chào mừng trở lại"
                buttonTitle="Đăng nhập"
                fields={loginFields}
                description={description}
                redirect={redirect}
                onFinish={onFinish}
                isSubmitting={isSubmitting}
            />
        </>
    )
}

export default Login