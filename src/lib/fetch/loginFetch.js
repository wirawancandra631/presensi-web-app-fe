import { axiosInstance } from "./baseURL";

async function loginFetch(data, onSuccess, onError) {
    const form = new FormData();
    form.append("email", data.email);
    form.append("password", data.password);
    try {
        const res = await axiosInstance.post("/login", form,);
        onSuccess(res.data.token)
    }
    catch (m) {
        onError(m.response.data.message);
    }

}

export default loginFetch;