import { axiosInstanceTwo } from "./baseURL"
export const postPermission = async (data, onSuccess, onError) => {
    try {
        const res = await axiosInstanceTwo.post("/make-permission", data);
        onSuccess(res.data.data);
    }
    catch (m) {
        onError(m.response.data.message);
    }

}