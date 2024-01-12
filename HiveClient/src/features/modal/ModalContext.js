
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <ModalContext.Provider value={{ isModalVisible, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
