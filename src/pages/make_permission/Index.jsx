import React, { useRef, useState, useContext } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Modal from "@/components/Modal";
import Spiner from "@/components/Spiner";
import { postPermission } from "@/lib/fetch/postPermission";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { PermissionTodayContext } from "@/context/PermissionTodayContext";
import { checkCanMakePermission } from "@/lib/util/checkCanMakePermission";

function MakePermissionPage() {
  const { permissionToday } = useContext(PermissionTodayContext);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    date: null,
    reason: null,
    envelope_file: null,
  });
  const fileRef = useRef();
  const previewEnvelope = (e) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      fileRef.current.src = e.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const successCallback = (res) => {
    toast("Success");
    setTimeout(() => {
      navigate("/history-permission");
    }, 1000);
    setModalShow(false);
  };
  const errorCallback = (res) => {
    setModalShow(false);

    alert(`Page error ${res.message}`);
  };
  const sendPermission = async (event) => {
    event.preventDefault();
    setModalShow(true);
    const data = new FormData();
    data.append("date", form.date);
    data.append("reason", form.reason);
    data.append("envelope_file", form.envelope_file);
    postPermission(data, successCallback, errorCallback);
  };
  if (!checkCanMakePermission(permissionToday)) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <nav className="w-full p-2 bg-blue-500">
        <Link className="text-white " to={"/"}>
          <FaArrowCircleLeft />
        </Link>
      </nav>
      <section className="w-full px-2 py-4">
        <p>Buat Pengajuan Cuti</p>
        <form action="" className="mt-4" onSubmit={sendPermission}>
          <div className="mb-6">
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pilih Tanggal
            </label>
            <input
              required
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              type="date"
              name="date"
              id="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="reason"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Alasan
            </label>
            <select
              required
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              name="reason"
              id="reason"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={""}
            >
              <option>Pilih Alasan</option>
              <option value="Sakit">Sakit</option>
              <option value="Ijin">Ijin</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div className="mb-6">
            {form.envelope_file ? (
              <img
                src={form.envelope_file}
                className="w-[100px] h-[100px] block my-3"
                ref={fileRef}
              />
            ) : (
              <></>
            )}

            <label
              htmlFor="envelope_file"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Unggah Lampiran
            </label>
            <input
              required
              onChange={(e) => {
                setForm({ ...form, envelope_file: e.target.files[0] });
                previewEnvelope(e);
              }}
              type="file"
              name="envelope_file"
              id="envelope_file"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <BottomNavbar />
      <ToastContainer></ToastContainer>
      <Modal isShow={modalShow}>
        <div className="w-full h-screen  my-5 flex flex-col items-center justify-center text-white">
          <Spiner />
          <span>Mengirim data ke server jangan tutup halaman in</span>
        </div>
      </Modal>
    </>
  );
}

export default MakePermissionPage;
