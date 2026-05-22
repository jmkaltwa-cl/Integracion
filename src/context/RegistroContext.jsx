import { createContext, useContext, useState } from "react";
import {
  createRegistroRequest,
  deleteRegistroRequest,
  getRegistroRequest,
  getRegistrosRequest,
  updateRegistroRequest,
} from "../api/registros";

export const RegistroContext = createContext();

export const useRegistro = () => {
  const context = useContext(RegistroContext);
  if (!context) {
    throw new Error("useRegistro debe usarse dentro de un RegistroProvider");
  }
  return context;
};

export const RegistroProvider = ({ children }) => {
  const [registros, setRegistros] = useState([]);

  const getRegistros = async () => {
    try {
      const res = await getRegistrosRequest();
      setRegistros(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createRegistro = async (registro) => {
    const res = await createRegistroRequest(registro);
    console.log(res);
    return res;
  };

  const deleteRegistro = async (id) => {
    const res = await deleteRegistroRequest(id);
    if (res.status === 200) {
      setRegistros((prev) => prev.filter((item) => item._id !== id));
    }
    console.log(res);
  };

  const getRegistro = async (id) => {
    try {
      const res = await getRegistroRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateRegistro = async (id, registro) => {
    try {
      await updateRegistroRequest(id, registro);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RegistroContext.Provider
      value={{
        registros,
        getRegistros,
        createRegistro,
        deleteRegistro,
        getRegistro,
        updateRegistro,
      }}
    >
      {children}
    </RegistroContext.Provider>
  );
};
