import { ENV } from "@/utils";

export class Auth {
    async register(data) {
        try {
            const url= `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.statusCode !== 200) {
                throw result;
            }

        } catch (error) {
            throw error;
        }
    }
    
    async login(data) {
        try {
            const url= `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
    
            const response = await fetch(url, params);
            const result = await response.json();
    
            if (response.statusCode !== 200) {
                throw result;
            }
    
        } catch (error) {
            throw error;
          }
    }
}