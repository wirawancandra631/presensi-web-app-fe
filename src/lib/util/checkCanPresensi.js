// fungsi di gunakan untuk mengecek apakah user bisa melakukan presensi masuk atau tidak 
export function checkCanPresensiIn(data) {
    if (data) {
        return false;
    }
    else {
        return true;
    }
}
export function checkCanPresensiOut({ data }) {
    //cek apakah sudah absensi keluar
    if (!data) {
        return {
            status: false,
            message: "Belum absensi masuk"
        }
    }
    else if (data?.presensi_out_time) {
        return {
            status: false,
            message: "Sudah absensi "
        }

    }
    else {
        return {
            status: true,
            message: null
        }
    }
}