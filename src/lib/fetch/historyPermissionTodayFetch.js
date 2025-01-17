import { BASEURLGETPERMISSIONTODAY } from "./baseURL";

export default async function historyPermissionTodayFetch(onSuccess, onError = () => { }) {
    const token = localStorage.getItem("_token");
    const res = await fetch(BASEURLGETPERMISSIONTODAY, {
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