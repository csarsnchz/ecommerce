import { ENV } from '@/utils';

export class Platform {
    async getPlatforms() {
        try {
            const sort = "sort=order:asc"
            const populate = "populate=icon";
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${populate}&${sort}`;
            const response = await fetch(url);
            const result = await response.json();

            if (response.status !== 200) {
                return result;
            }
            return result;
        } catch (error) {
            console.error('Error fetching platforms', error);
        }
    
    }
}