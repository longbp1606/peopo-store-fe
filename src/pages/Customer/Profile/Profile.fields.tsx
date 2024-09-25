import { DatePicker, Input, Select } from "antd";
import { Rule } from "antd/es/form";
import locale from 'antd/es/date-picker/locale/vi_VN';
import { Gender } from "@/utils/enums";

type FieldType = {
    key: number;
    label: string;
    name: string;
    initialValue?: string;
    rules?: Rule[];
    component: JSX.Element;
    halfWidth?: boolean;
}

const validateWhitespace = (_: unknown, value: string) => {
    if (value && value.trim() === '') {
        return Promise.reject('Vui lòng không để trống');
    }
    return Promise.resolve();
};

export const fields: FieldType[] = [
    {
        key: 1,
        label: 'Họ và tên',
        name: 'fullname',
        rules: [
            {
                required: true,
                message: 'Vui lòng nhập họ và tên'
            },
            {
                min: 2,
                message: 'Họ và tên phải có ít nhất 2 ký tự'
            },
            {
                max: 50,
                message: 'Họ và tên không được dài quá 50 ký tự',
            },
            {
                validator: validateWhitespace,
            }
        ],
        component: <Input size="large" placeholder="Họ và tên"/>,
        halfWidth: false,
    },
    {
        key: 2,
        label: 'Ngày sinh',
        name: 'dateOfBirth',
        rules: [
            {
                required: true,
                message: 'Vui lòng cho biết ngày sinh'
            },
        ],
        component: (
            <DatePicker
                size="large"
                placeholder="Chọn ngày sinh"
                locale={locale}
                format="DD/MM/YYYY"
                style={{ width: '100%'}}
            />
        ),
        halfWidth: true,
    },
    {
        key: 3,
        label: 'Giới tính',
        name: 'gender',
        initialValue: Gender.MALE,
        rules: [
            {
                required: true,
                message: 'Vui lòng cho biết giới tính'
            },
        ],
        component: (
            <Select size="large" placeholder="Chọn giới tính" style={{ width: '100%'}}>
                <Select.Option value={Gender.MALE}>Nam</Select.Option>
                <Select.Option value={Gender.FEMALE}>Nữ</Select.Option>
                <Select.Option value={Gender.OTHER}>Khác</Select.Option>
            </Select>
        ),
        halfWidth: true,
    },
    {
        key: 4,
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
        halfWidth: false,
    },
    {
        key: 5,
        label: 'Email',
        name: 'emailAddress',
        rules: [
            {
                required: true,
                message: 'Vui lòng nhập địa chỉ email'
            },
            {
                type: 'email',
                message: 'Vui lòng nhập địa chỉ email hợp lệ'
            },
            {
                max: 50,
                message: 'Email không được dài quáy'
            },
        ],
        component: <Input size="large" placeholder="Nhập địa chỉ email" disabled/>,
        halfWidth: false,
    },
    {
        key: 6, 
        label: 'Địa chỉ thường trú',
        name: 'address',
        rules: [
            {
                required: true,
                message: 'Vui lòng nhập địa chỉ thường trú',
            },
            {
                validator: validateWhitespace,
            }
        ],
        component: <Input size="large" placeholder="Nhập địa chỉ thường trú" />,
        halfWidth: false,
    },
];

