import { axiosInstanceTwo } from "./baseURL"

export default async function historyPermissionFetch(month = "", year = "", onSuccess, onError) {
    try {
        const res = await axiosInstanceTwo.get(`/make-permission?month=${month}&year=${year}`);
        onSuccess(res.data.data)
    }
    catch (m) {
        onError(m.response.data.message);
    }

}