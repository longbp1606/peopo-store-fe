import { Input } from "antd";
import { Rule } from "antd/es/form";

type FieldType = {
    key: number;
    label: string;
    name: string;
    rules?: Rule[];
    component: JSX.Element;
}

const validateWhitespace = (_: unknown, value: string) => {
    if (value && value.trim() === '') {
        return Promise.reject('Vui lòng không để trống');
    }
    return Promise.resolve();
}

export const fields: FieldType[] = [
    {
        key: 1,
        label: 'Người nhận hàng',
        name: 'receiver',
        rules: [
            {
                required: true,
                message: 'Vui lòng nhập họ và tên người nhận'
            },
            {
                min: 2,
                message: 'Họ và tên phải có ít nhất 2 ký tự'
            },
            {
                max: 50,
                message: 'Họ và tên không được dài quá 50 ký tự'
            },
            {
                validator: validateWhitespace,
            }
        ],
        component: <Input size="large" placeholder="Họ và tên" />
    },
    {
        key: 2,
        label: 'Số điện thoại',
        name: 'phoneNumber',
        rules: [
            {
                required: true,
                message: 'Vui lòng nhập số điện thoại'
            },
            {
                pattern: /^(0|\+?84)(3|5|7|8|9)[0-9]{8}$/,
                message: 'Vui lòng nhập số điện thoại hợp lệ',
            }
        ],
        component: (
            <Input 
                size="large" 
                placeholder="Nhập số điện thoại"
                style={{ width: '100%'}}
            />
        ),
    },
    {
        key: 3, 
        label: 'Địa chỉ nhận hàng',
        name: 'address',
        rules: [
            {
                required: true,
                message: 'Vui lòng nhập địa chỉ nhận hàng',
            },
            {
                validator: validateWhitespace,
            }
        ],
        component: <Input size="large" placeholder="Nhập địa chỉ thường trú" />,
    }
]