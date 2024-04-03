import { ListCityApiResponse, CityApiResponse } from '@/types/api/cities';

const URL = process.env['API_ENDPOINT'] + 'cities'

interface ParamQueryProps {
    search: string;
}

const getCities = async (param: ParamQueryProps) => {
    const { search } = param;
    const queryParams = new URLSearchParams({
        search
    })
    const response = await fetch(`http://huuk.site/api/v1/ai/cities?search=h`);
    // const response = await fetch(`${URL}?${queryParams.toString()}`);

    const data = response.json()

    return data
};


export default getCities;