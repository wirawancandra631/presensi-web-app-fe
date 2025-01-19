
import { axiosInstanceTwo } from "./baseURL";
export const postPresensiOut = async (data, onSuccess, onError) => {
    try {
        const res = await axiosInstanceTwo.post("/presensi-out", data);
        onSuccess(res.data);
    }
    catch (m) {
        onError(m.response);
    }
}