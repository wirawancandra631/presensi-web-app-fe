import { axiosInstanceTwo } from "./baseURL";


export default async function profilFetch(onSuccess, onError) {
    try {
        const res = await axiosInstanceTwo.get("/profil");
        onSuccess(res.data.data);
    }
    catch (m) {
        onError(m.response.data.message)
    }
}