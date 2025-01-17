import { BASEURLCHANGEPROFIL } from "@/lib/fetch/baseURL"
const token = localStorage.getItem("_token");
export const postProfil = async (data, onSuccess, onError) => {
    const res = await fetch(BASEURLCHANGEPROFIL, {
        method: "POST",
        headers: {
            Authorization: `Bearear ${token}`,
        },
        body: data,
    });
    const result = await res.json();
    if (res.ok) {
        onSuccess(result);
    }
    else {
        onError(result);
    }
}