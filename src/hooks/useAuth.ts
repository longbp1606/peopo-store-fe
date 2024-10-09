import cookiesUtils from "@/services/cookiesUtils";
import { AccountStatus, Gender, Role } from "@/utils/enums";
import { useCallback, useEffect, useState } from "react";

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

export type UserType = {
    avatar: string;
    emailAddress: string;
    emailValidationStatus: boolean;
    fullName: string;
    phoneNumber: string | null;
    role: string;
    userID: number;
    accountStatus: AccountStatus;
    createdAt: Date | string;
    identityCard: string | null;
    address: string | null;
    dateOfBirth: Date | string | null;
    gender: Gender;
}

const getRole = () => {
    const decoded = cookiesUtils.decodeJwt() as JwtType;

    if (!decoded || !decoded.payload || !decoded.payload.role) return null;

    return Role[decoded.payload.role];
}

const useAuth = () => {
    const [role, setRole] = useState<string | null>(getRole());
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<UserType>();

    const token = cookiesUtils.getToken();

    const checkTokenExpiration = useCallback(() => {
        if (token) {
            const decoded = cookiesUtils.decodeJwt() as JwtType;

            if (!decoded || decoded.exp < Date.now() / 1000) {
                setRole(null);
                cookiesUtils.deleteUser();
                return;
            }
        }
    }, [token]);

    useEffect(() => {
        const token = cookiesUtils.getToken();

        if (!token) {
            setRole(null);
            return;
        };

        try {
            setLoading(true);

            setUser(user);

            setRole(getRole());
        } finally {
            setLoading(false);
        };

        const intervalId = setInterval(checkTokenExpiration, 5000);

        return () => clearInterval(intervalId);
    }, [checkTokenExpiration]);

    return { loading, role, user };
};

export default useAuth;