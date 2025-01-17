import React from "react";

function Modal({ children, isShow }) {
  if (isShow) {
    return (
      <section className="z-50 px-2  w-full fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)]">
        {children}
      </section>
    );
  }
  return null;
}

export default Modal;
