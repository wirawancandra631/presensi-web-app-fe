import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderInfo from "@/components/HeaderInfo";
import BottomNavbar from "@/components/BottomNavbar";
import { ProfilContext } from "@/context/ProfilContext";
import Modal from "@/components/Modal";
import Spiner from "@/components/Spiner";
import { postProfil } from "../../lib/fetch/postProfil";
function ProfilPage() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const { profil, getProfil } = useContext(ProfilContext);
  const [disabledForm, setDisabledForm] = useState(true);
  const imageRef = useRef();
  const [showImage, setShowImage] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    image_user_profil: "",
  });
  const previewImage = (e) => {
    const reader = new FileReader();
    setShowImage(true);
    reader.onload = function (e) {
      imageRef.current.src = e.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
    setFormData({ ...formData, image_user_profil: e.target.files[0] });
  };
  const successCallback = () => {
    setModalShow(false);
    getProfil();
  };
  const errorCallback = (res) => {
    alert(`Page error ${res}`);
  };
  const changeProfil = async (event) => {
    setModalShow(true);
    event.preventDefault();
    const data = new FormData();
    data.append("username", formData.username);
    data.append("image_user_profil", formData.image_user_profil);
    postProfil(data, successCallback, errorCallback);
  };
  const logout = () => {
    localStorage.removeItem("_token");
    navigate("/login");
  };
  return (
    <>
      <HeaderInfo />
      <form
        className="w-full px-2 py-4 pb-16"
        id="form-edit-profil"
        onSubmit={changeProfil}
      >
        <div className="w-full flex justify-between">
          <button
            onClick={() => setDisabledForm(false)}
            id="btn-open-edit-profil"
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Edit
          </button>
          <Link
            to={""}
            onClick={logout}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Logout
          </Link>
        </div>
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-slate-200"
            disabled={disabledForm ? true : false}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        <div className="mb-6">
          {showImage ? (
            <img className="w-[100px] h-[100px] block my-2" ref={imageRef} />
          ) : (
            <></>
          )}
          <label
            htmlFor="image_profil"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image Profil
          </label>
          <input
            type="file"
            name="image_profil_user"
            id="image_profil"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-slate-200"
            disabled={disabledForm ? true : false}
            onChange={previewImage}
          />
        </div>

        <div className="my-4">
          <button
            type="submit"
            id="btn-submit-form"
            className="w-full px-2 py-1.5 bg-green-500 text-white disabled:bg-slate-400"
            disabled={disabledForm ? true : false}
          >
            Save Profil
          </button>
        </div>
      </form>
      <BottomNavbar />
      <Modal isShow={modalShow}>
        <div className="w-full h-screen  my-5 flex flex-col items-center justify-center text-white">
          <Spiner />
          <span>Mengirim data ke server jangan tutup halaman in</span>
        </div>
      </Modal>
    </>
  );
}

export default ProfilPage;
