import { axiosInstanceTwo } from "./baseURL";

export default async function historyPermissionTodayFetch(onSuccess, onError) {
    try {
        const res = await axiosInstanceTwo.get("/make-permission/get-today");
        onSuccess(res.data.data);
    }
    catch (m) {
        onError(m.response.data.message);
    }

}