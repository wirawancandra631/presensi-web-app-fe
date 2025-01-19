import { axiosInstanceTwo } from "./baseURL"
export const postPresensiIn = async (data, onSuccess, onError) => {
    try {
        const res = await axiosInstanceTwo.post("/presensi-in", data);
        onSuccess(res.data.data);
    }
    catch (m) {
        onError(m.response.data.message);
    }
}