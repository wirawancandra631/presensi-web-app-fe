import { BASEURLLOGIN } from "./baseURL";

async function loginFetch(data, onSuccess, onError) {
    const form = new FormData();
    form.append("email", data.email);
    form.append("password", data.password);
    const res = await fetch(BASEURLLOGIN, {
        method: "POST",
        body: form
    })
    const result = await res.json();
    if (res.ok) {
        onSuccess(result)
    }
    else {
        onError(result);
    }
}

export default loginFetch;