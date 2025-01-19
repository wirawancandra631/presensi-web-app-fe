import { axiosInstanceTwo } from "./baseURL";

export default async function historyPresensiTodayFetch(onSuccess, onError = () => { }) {
    try {
        const res = await axiosInstanceTwo.get("/get-presensi-today");
        onSuccess(res.data.data)
    }
    catch (m) {
        onError(m.response.data.message)
    }

}