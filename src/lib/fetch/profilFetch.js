import { BASEURLPROFIL } from "./baseURL";


export default async function profilFetch(onSuccess, onError) {
    const token = localStorage.getItem("_token");
    const res = await fetch(BASEURLPROFIL, {
        headers: {
            "Authorization": `Bearear ${token}`
        }
    })
    const result = await res.json();
    if (res.ok) {
        onSuccess(result);
    }
    else {
        onError(result);
    }
}