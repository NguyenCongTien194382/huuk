export interface CityApiResponse {
    id?: number;
    name?: string;
    city_ascii?: string;
    lat?: number;
    lng?: number;
    country?: string;
    iso2?: string;
    iso3?: string;
    admin_name?: string;
    capital?: string;
    population?: number;
    trip_advisor_id?: number;
    created_at?: string | null;
    updated_at?: string | null;
}

export interface ListCityApiResponse {
    cities: CityApiResponse[];
}