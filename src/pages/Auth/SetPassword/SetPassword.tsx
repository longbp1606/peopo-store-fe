import AuthForm from '@/components/AuthForm';
import * as Styled from './SetPassword.styled';
import config from '@/config';
import { PageEnum } from '@/utils/enums';
import { setPasswordFields } from '@/components/AuthForm/AuthForm.fields';

const SetPassword = () => {
    const redirect = {
        description: 'Quay về đăng nhập?',
        title: 'Đăng nhập ngay',
        url: config.routes.public.login,
    };

    const description = (
        <Styled.SetPasswordDesc>
            Mật khẩu phải có ít nhất 8 ký tự bao gồm một số, một chữ cái in hoa
            và một chữ cái thường.
        </Styled.SetPasswordDesc>
    )
    
    return (
        <>
            <AuthForm
                page={PageEnum.SET_PASSWORD}
                formTitle="Đổi mật khẩu mới"
                buttonTitle='Đặt mật khẩu'
                fields={setPasswordFields}
                description={description}
                redirect={redirect}
            />
        </>
    )
}

export default SetPassword