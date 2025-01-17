import React, { useState } from "react";
import GeolocationIcon from "../../public/img/geolocation-icon.png";
import Modal from "./Modal";
function GetLocationUser({ onSuccess }) {
  const [modalShow, setModalShow] = useState({
    status: false,
    message: null,
  });
  const [result, setResult] = useState({
    latitude: null,
    longitude: null,
  });
  const getLocation = async () => {
    setModalShow({ status: true, message: null });
    if (navigator.geolocation) {
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setResult({
              latitude: latitude,
              longitude: longitude,
            });
            setModalShow({
              status: false,
              message: null,
            });
            setTimeout(() => {
              let map = L.map("map-preview").setView([latitude, longitude], 10);
              L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution:
                  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
              }).addTo(map);
              L.marker([latitude, longitude]).addTo(map);
            }, 1000);
            onSuccess(latitude, longitude);
          },
          (error) => {
            setModalShow({
              status: true,
              message: "Browser membutuhkan akses lokasi",
            });
          }
        );
      }, 1000);
    } else {
      setModalShow({
        status: false,
        message: "Browser anda tidak mendukung fitur ini ",
      });
    }
  };
  return (
    <>
      <div className="w-full my-2 rounded-md border border-slate-200">
        <div className="w-full h-[250px] bg-slate-50 flex items-center justify-center">
          {result.latitude && result.longitude ? (
            <div className="w-full h-full relative z-10" id="map-preview"></div>
          ) : (
            <img
              src={GeolocationIcon}
              className="w-[100px] h-[100px] block mx-auto "
            />
          )}
        </div>
        <div className="w-full p-2 bg-slate-200">
          <span className="text-sm my-2 block">
            Latitude ({result.latitude}) / Longitude ({result.longitude})
          </span>
          <button
            onClick={getLocation}
            className="w-full block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Dapatkan Lokasi Saya
          </button>
        </div>
      </div>
      <Modal isShow={modalShow.status}>
        <div className="mt-4 p-4 bg-white rounded-md">
          <p className="text-center">
            {modalShow.message
              ? modalShow.message
              : "Mendapatkan lokasi anda , jangan tutup browser atau refresh page ...."}
          </p>
        </div>
      </Modal>
    </>
  );
}

export default GetLocationUser;
