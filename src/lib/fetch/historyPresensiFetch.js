import { axiosInstanceTwo } from "./baseURL";
export default async function historyPresensiFetch(month, year, onSuccess, onError) {
    try {
        const res = await axiosInstanceTwo.get(`/filter-presensi?month=${month}&year=${year}`);
        onSuccess(res.data.data);
    }
    catch (m) {
        onError(m.response.data.message);
    }

}