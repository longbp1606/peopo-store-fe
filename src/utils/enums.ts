export enum PageEnum {
    LOGIN = 'Login',
    REGISTER = 'Register',
    FORGOT_PASSWORD = 'ForgotPassword',
    SET_PASSWORD = 'SetPassword',
};

export const Role: { [key: string]: string } = {
    CUSTOMER: 'CUSTOMER',
    ADMIN: 'ADMIN'
};

export enum LinkEnum {
    LINK = 'Link',
    NAV_LINK = 'NavLink'
};

export enum AccountStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    BANNED = 'BANNED'
};

export enum AccountStatusLabel {
    ACTIVE = 'Đang hoạt động',
    INACTIVE = 'Ngừng hoạt động',
    BANNED = 'Đã bị cấm',
};

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER',
};

export enum OrderStatusEnum {
    PENDING = 'Pending',
    DELIVERING = 'Delivering',
    DELIVERED = 'Delivered',
    SUCESSFULLY = 'Successfully',
    CANCELLED = 'Cancellled',
};

export enum CustomerType {
    SUBCRIPTION = 'Đã đăng ký',
    NON_SUBCRIPTION = 'Chưa đăng ký',
    MEMBERSHIP = 'Thành viên',
}

export enum MembershipLevel {
    BRONZE = 'Đồng',
    SLIVER = 'Bạc',
    GOLD = 'Vàng',
    PLATIUM = 'Bạch kim',
    DIAMOND = 'Kim cương'
};

