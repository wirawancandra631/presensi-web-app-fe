import { BASEURLPOSTPRESENSIIN } from "./baseURL"
const token = localStorage.getItem("_token");
export const postPresensiIn = async (data, onSuccess, onError) => {
    const res = await fetch(BASEURLPOSTPRESENSIIN, {
        method: "POST",
        headers: {
            Authorization: `Bearear ${token}`,
        },
        body: data
    });
    const result = await res.json();
    if (res.ok) {
        onSuccess(result)
    }
    else {
        onError(result)
    }
}