import { BASEURLFILTERPRESENSI } from "./baseURL";
export default async function historyPresensiFetch(month, year, onSuccess, onError) {
    const token = localStorage.getItem("_token");
    const res = await fetch(`${BASEURLFILTERPRESENSI}?month=${month}&year=${year}`, {
        headers: {
            "Authorization": `Bearear ${token}`
        }
    });
    const result = await res.json();
    if (res.ok) {
        onSuccess(result);
    }
    else {
        onError(result);
    }
}