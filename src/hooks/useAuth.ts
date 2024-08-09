type PayloadType = {
    id: number;
    role: string;
    fullname: string;
    email: string;
}

type JwtType = {
    exp: number;
    payload: PayloadType;
}
