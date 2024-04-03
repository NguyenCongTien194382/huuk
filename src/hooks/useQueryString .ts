import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useMemo } from 'react';

const useQueryString = () => {
    const router = useRouter();

    const queryStringObject = useMemo(() => {
        return queryString.parse(router.asPath.split(/\?/)[1]);
    }, [router.asPath]);

    const setQueryString = (params: any) => {
        const newQueryString = queryString.stringify(params);
        router.push(`?${newQueryString}`, undefined, { shallow: true });
    };

    return {
        queryString: { ...queryStringObject },
        setQueryString,
    };
};

export default useQueryString;
