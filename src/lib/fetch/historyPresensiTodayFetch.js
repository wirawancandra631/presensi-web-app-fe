import { BASEURLGETPRESENSITODAY } from "./baseURL";

export default async function historyPresensiTodayFetch(onSuccess, onError = () => { }) {
    const token = localStorage.getItem("_token");
    const res = await fetch(BASEURLGETPRESENSITODAY, {
        headers: {
            "Authorization": `Bearear ${token}`
        }
    })
    const result = await res.json();
    if (res.ok) {
        onSuccess(result)
    }
    else {
        onError(result)
    }
}