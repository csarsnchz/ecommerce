import { Token } from '@/api';

export async function authFetch(url, params) {
    const tokenCtrl = new Token();
    const token = tokenCtrl.getToken();

    const logout = () => {
        tokenCtrl.removeToken();
        window.location.replace("/");
    }

    if (!token) {
        logout();
        throw new Error("Token not found");
    } else {
        if (tokenCtrl.hasExpired(token)) {
            logout();
            throw new Error("Token expired");
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`,
                },
        };

        try {
            return await fetch(url, paramsTemp);
        } catch (error) {
            return error;
        }
    
        }
    }
}