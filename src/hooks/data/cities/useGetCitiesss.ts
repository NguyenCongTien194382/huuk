import { useQuery } from '@tanstack/react-query';
import { getCities } from '@/services/api/cities';
import { ListCityApiResponse, CityApiResponse } from '@/types/api/cities';

const useGetCities = (search: string) => {

    const parseData = (data: ListCityApiResponse) => {
        const cities: CityApiResponse[] = data.cities.map((city) => {
            return {
                id: city.id,
                country: city.country,
            };
        });

        return { cities };
    };

    const { data, isSuccess, isLoading, isError } = useQuery({
        queryKey: ['cities', { search }],
        queryFn: () => getCities(search),
        staleTime: 10 * 1000,
        select: (data) => parseData(data.data),
    });

    return {
        cities: data?.cities,
        isSuccess,
        isLoading,
        isError
    }
};


export default useGetCities;