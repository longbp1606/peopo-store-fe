import { forgotPasswordFields } from '@/components/AuthForm/AuthForm.fields';
import * as Styled from './ForgotPassword.styled';

import config from '@/config';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { PageEnum } from '@/utils/enums';
import { useEffect, useState } from 'react'
import { Typography } from 'antd';

const { Text } = Typography;

const ForgotPassword = () => {
    useDocumentTitle('Quên mật khẩu | Peopo Store');

    const [seconds, setSeconds] = useState(0);

    //Handle countdown
    useEffect(() => {
        const timerId = setInterval(() => {
            if (seconds <= 0) return;

            setSeconds((prevSeconds) => {
                const updateSeconds = prevSeconds - 1;
                localStorage.setItem(config.localStorage.seconds, updateSeconds.toString());
                return updateSeconds;
            })
        }, 1000);

        return () => clearInterval(timerId);
    }, [seconds]);

    //Check if seconds already in localStorage
    useEffect(() => {
        const storedSeconds = localStorage.getItem(config.localStorage.seconds);
        if (storedSeconds) setSeconds(parseInt(storedSeconds));
    }, []);

    const redirect = {
        description: 'Trở về đăng nhập?',
        title: 'Đăng nhập ngay',
        url: config.routes.public.login,
    };

    const description = (
        <Styled.ForgotPasswordDescWrapper>
            <Styled.ForgotPasswordDesc>
                Nhập email của bạn để nhận hướng dẫn cài lại mật khẩu.
            </Styled.ForgotPasswordDesc>

            <Styled.ForgotPasswordText>
                {seconds !== 0 && (
                    <Text>
                        Không nhận được email? Gửi lại sau
                        <Styled.ForgotPasswordCountdown>{seconds}</Styled.ForgotPasswordCountdown>s
                    </Text>
                )}
            </Styled.ForgotPasswordText>
        </Styled.ForgotPasswordDescWrapper>
    );

    return (
        <>
            <Styled.AuthFormStyled
                page={PageEnum.FORGOT_PASSWORD}
                formTitle="Quên mật khẩu?"
                buttonTitle="Cài lại mật khẩu"
                fields={forgotPasswordFields}
                description={description}
                redirect={redirect}
                isSubmitting={seconds !== 0}
            />
        </>
    )
}

export default ForgotPassword