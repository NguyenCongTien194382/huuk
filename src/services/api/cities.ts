import { AxiosRequestConfig } from 'axios';

import publicApi from '../config/publicApi.config';

const SERVICE_PATH = '/cities';

export const getCities = (search: string) =>
    publicApi<any>({
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        url: 'http://huuk.site/api/v1/ai/cities',
        // url: SERVICE_PATH,
        params: {
            search,
        },
    });
