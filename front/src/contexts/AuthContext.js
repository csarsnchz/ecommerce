import { useState, useEffect,createContext } from 'react';
import { Token, User } from '@/api';

const tokenCtrl = new Token();
const userCtrl = new User();
export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    useEffect(() => {
        (async () => {
            const token = tokenCtrl.getToken();
            if (!token) {
                logout();
                setLoading(false);
                return;
            } 
            if (tokenCtrl.hasExpired(token)) {
                logout();
                setLoading(false);
            } else {
                await login(token);
            }
        })()
    }, []);
    const login = async (token) => {
        try {
            tokenCtrl.setToken(token);
            const response = await userCtrl.getMe();
            setUser(response)
            setAccessToken(token);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }    
    const data = {
        accessToken: accessToken,
        user: user,
        login: login,
        logout: logout,
        updateUser: updateUser,
    };

    const logout = () => {
        tokenCtrl.removeToken();
        setUser(null);
        setAccessToken(null);
    }

    const updateUser = (key, value) => {
        setUser(
            {
                ...user, 
                [key]: value
            });
    }

    if (loading) return <p>Loading...</p>;

    return (
        <AuthContext.Provider value={data}>
           {children}
        </AuthContext.Provider>
    )
}