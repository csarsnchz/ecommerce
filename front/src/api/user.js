import { ENV, authFetch } from '@/utils';


export class User {
    async getMe() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

            const response = await authFetch(url);
            const data = await response.json();
    
            if (response.status !== 200) {
                return data;
            }
    
            return data;
        } catch (error) {
            throw error;
        }

    }
}