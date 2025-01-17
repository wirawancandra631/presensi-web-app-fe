import { BASEURLDETAILPRESENSI } from "./baseURL";

export default async function presensiDetailFetch(id, onSuccess, onError) {
    const token = localStorage.getItem("_token");
    const res = await fetch(BASEURLDETAILPRESENSI + id, {
        headers: {
            "Authorization": `Bearear ${token}`
        }
    });
    const result = await res.json();
    if (res.ok) {
        onSuccess(result)
    }
    else {
        onError(result)
    }
}