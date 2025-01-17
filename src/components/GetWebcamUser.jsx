import React, { useState } from "react";
import { FaCameraRetro, FaSave } from "react-icons/fa";
import CameraIcon from "../../public/img/camera-icon.png";
import Modal from "./Modal";
function GetWebcamUser({ onSuccess }) {
  const [modalShow, setModalShow] = useState({
    status: false,
    message: null,
  });
  const [showButtonSave, setButtonSave] = useState(false);
  const [webcamData, setWebcamData] = useState({
    completed: false,
    stream: null,
  });
  const takeWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.querySelector("#webcam-preview");
      video.srcObject = stream;
      setButtonSave(true);
      setWebcamData({
        ...webcamData,
        stream: stream,
      });
    } catch (m) {
      setModalShow({ status: true, message: m.message });
    }
  };
  function base64ToBlob(base64, sliceSize = 512) {
    const contentType = base64.match(/data:(.*?);base64/)[1];

    const byteCharacters = atob(base64.split(",")[1]); // Decode Base64
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, { type: contentType });
  }
  const saveWebcam = () => {
    setWebcamData({
      ...webcamData,
      completed: true,
    });
    setTimeout(() => {
      const canvas = document.querySelector("#webcam-result");
      const context = canvas.getContext("2d");
      const video = document.querySelector("#webcam-preview");
      context.drawImage(video, 0, 0, canvas.clientWidth, canvas.height);
      let base64 = canvas.toDataURL("image/png");
      webcamData.stream.getTracks().forEach((track) => track.stop());
      setModalShow({ ...modalShow, status: false });
      setButtonSave(false);
      onSuccess(base64ToBlob(base64));
    }, 1000);
  };
  return (
    <>
      <div className="w-full my-2 rounded-md border border-slate-200">
        <div className="w-full h-[250px] bg-slate-50 flex items-center justify-center">
          {webcamData.completed ? (
            <canvas id="webcam-result" className="w-full h-[200px]"></canvas>
          ) : (
            <img
              src={CameraIcon}
              alt=""
              className="w-[100px] h-[100px] block mx-auto "
            />
          )}
        </div>
        <div className="w-full p-2 bg-slate-200">
          <button
            onClick={() => setModalShow({ ...modalShow, status: true })}
            className="w-full block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Dapatkan Webcam Saya
          </button>
        </div>
      </div>
      <Modal isShow={modalShow.status}>
        <div className="mt-4 p-4 bg-white rounded-md">
          {modalShow.message ? (
            <p className="text-red-500 mb-3 text-center">{modalShow.message}</p>
          ) : (
            <></>
          )}

          <video
            id="webcam-preview"
            className={`w-full h-[250px] mb-2`}
            autoPlay={true}
          ></video>

          <button
            onClick={takeWebcam}
            type="button"
            className="flex justify-center items-center space-x-2 w-full block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 disabled:bg-gray-500"
          >
            <FaCameraRetro />
            <span>Take Webcam</span>
          </button>
          {showButtonSave ? (
            <button
              onClick={saveWebcam}
              type="button"
              className="flex items-center justify-center space-x-2 w-full mt-4 block text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 disabled:bg-gray-500"
            >
              <FaSave />
              <span>Save Webcam</span>
            </button>
          ) : (
            <></>
          )}
        </div>
      </Modal>
    </>
  );
}

export default GetWebcamUser;
