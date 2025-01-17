import React, { useContext, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useNavigate, Navigate } from "react-router-dom";
import GetLocationUser from "@/components/GetLocationUser";
import GetWebcamUser from "@/components/GetWebcamUser";
import { ToastContainer, toast } from "react-toastify";
import Modal from "@/components/Modal";
import Spiner from "@/components/Spiner";
import { postPresensiIn } from "@/lib/fetch/postPresensiIn";
import { PresensiTodayContext } from "@/context/PresensiTodayContext";
import { checkCanPresensiIn } from "@/lib/util/checkCanPresensi";
function MakePresensiInPage() {
  const { dataPresensiToday } = useContext(PresensiTodayContext);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [dataPresensi, setDataPresensi] = useState({
    latitude: null,
    longitude: null,
    webcam: {
      status: false,
      file: null,
    },
  });
  const onSuccessGeo = (lat, long) => {
    setDataPresensi({
      ...dataPresensi,
      latitude: lat,
      longitude: long,
    });
  };
  const onSuccessWebcam = (file) => {
    setDataPresensi({
      ...dataPresensi,
      webcam: {
        file: file,
        status: true,
      },
    });
  };
  const successCallback = (res) => {
    setModalShow(false);
    toast("Sukess");
    setTimeout(() => {
      navigate("/history-presensi");
    }, 1000);
  };
  const errorCallback = (res) => {
    setModalShow(false);
    alert(`Page error with ${res.message}`);
  };
  const handlePostPresensiIn = async (event) => {
    event.preventDefault();
    setModalShow(true);
    const data = new FormData();
    data.append("latitude_presensi_in", dataPresensi.latitude);
    data.append("longitude_presensi_in", dataPresensi.longitude);
    data.append(
      "webcam_presensi_in",
      dataPresensi.webcam.file,
      "webcam-presensi-in.jpg"
    );
    postPresensiIn(data, successCallback, errorCallback);
  };
  if (!checkCanPresensiIn(dataPresensiToday.data)) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <nav className="w-full p-2 bg-blue-500">
        <Link className="text-white " to={"/"}>
          <FaArrowCircleLeft />
        </Link>
      </nav>
      <div className="w-full my-4 px-2 py-4">
        <p>Buat Presensi Masuk</p>
        <GetLocationUser onSuccess={onSuccessGeo} />
        <GetWebcamUser onSuccess={onSuccessWebcam} />
      </div>
      <div className="w-full p-2">
        <button
          type="button"
          className="w-full block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 disabled:bg-gray-500"
          onClick={handlePostPresensiIn}
          disabled={
            dataPresensi.latitude &&
            dataPresensi.longitude &&
            dataPresensi.webcam.status
              ? false
              : true
          }
        >
          <span>Submit Data</span>
        </button>
      </div>
      <ToastContainer />
      <Modal isShow={modalShow}>
        <div className="w-full h-screen  my-5 flex flex-col items-center justify-center text-white">
          <Spiner />
          <span>Mengirim data ke server jangan tutup halaman in</span>
        </div>
      </Modal>
    </>
  );
}

export default MakePresensiInPage;
