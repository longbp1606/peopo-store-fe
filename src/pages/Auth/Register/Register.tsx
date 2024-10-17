import AuthForm from "@/components/AuthForm";
import { registerFields } from "@/components/AuthForm/AuthForm.fields";
import config from "@/config";
import { PageEnum } from "@/utils/enums";


const Register = () => {
    const redirect = {
        description: 'Đã có tài khoản?',
        title: 'Đăng nhập ngay',
        url: config.routes.public.login,
    };

    return (
        <>
            <AuthForm
                page={PageEnum.REGISTER}
                formTitle="Đăng ký"
                buttonTitle="Đăng ký"
                fields={registerFields}
                redirect={redirect}
                reverse
            />
        </>
    )
}

export default Register;