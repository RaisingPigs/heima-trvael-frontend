import requests from "@/api/requests";
import qs from "qs";

export const reqHotelList = (pageRequest) => {
    return requests.get('/hotel/page' + '?' + qs.stringify(pageRequest, {arrayFormat: 'repeat'}));
}
