import { axiosInstanceTwo } from "./baseURL";
export const postProfil = async (data, onSuccess, onError) => {
    try {
        const res = await axiosInstanceTwo.post("/profil", data);
        onSuccess(res.data.message);
    }
    catch (m) {
        onError(m.response.data.message);
    }
}