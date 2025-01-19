import { axiosInstanceTwo } from "./baseURL";

export default async function presensiDetailFetch(id, onSuccess, onError) {
    try {
        const res = await axiosInstanceTwo.get(`/get-presensi/${id}`);
        onSuccess(res.data.data)
    }
    catch (m) {
        onError(m.response.data.message);
    }
}