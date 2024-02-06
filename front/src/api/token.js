import { ENV } from '@/utils';
import jwtDecode from 'jwt-decode';

export class Token {
    setToken(token) {
        console.log('token', token);
        localStorage.setItem(ENV.TOKEN, token);
    }

    getToken() {
        return localStorage.getItem(ENV.TOKEN);
    }

    hasExpired( token ) {
        const tokenDecoded = jwtDecode(token);
        const expired = tokenDecoded.exp * 1000;
        const now = new Date().getTime();
        if (now > expired) {
            return true;
        }

        return false;
    }

    removeToken() {
        localStorage.removeItem(ENV.TOKEN);
    }
}