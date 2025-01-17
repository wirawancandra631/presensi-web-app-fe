
import { BASEURLPOSTPRESENSIOUT } from "./baseURL";
const token = localStorage.getItem("_token");
export const postPresensiOut = async (data, onSuccess, onError) => {
    const res = await fetch(BASEURLPOSTPRESENSIOUT, {
        method: "POST",
        headers: {
            Authorization: `Bearear ${token}`,
        },
        body: data,
    });;

    const result = await res.json();
    if (res.ok) {
        onSuccess(result)
    }
    else {
        onError(res)

    }
}