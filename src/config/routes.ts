const routes = {
    public: {
        home: '/',
        login: '/login',
        register: '/register',
        product: '/product',
        productDetail: '/product/:id'
    },
    customer: {
        dashboard: '/dashboard',
        profile: '/profile',
        address: '/address',
        order: '/order',
        orderDetail: '/order/:id',
        voucher: '/voucher',
        point: '/point',
        notification: '/notification',
        cart: '/cart',
        schedule: '/schedule'
    },
    admin: {
        dashboard: '/admin',
        manageOrder: '/admin/manage/orders',
        manageProduct: '/admin/manage/products',
        manageCustomer: '/admin/manage/customers',
    },
    api: {
        
    }
}

export default routes;