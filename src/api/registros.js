import axios from "./axios";

export const getRegistrosRequest = () => axios.get("/registro");
export const getRegistroRequest = (id) => axios.get(`/registro/${id}`);
export const createRegistroRequest = (registro) => axios.post("/registro", registro);
export const updateRegistroRequest = (id, registro) =>
  axios.put(`/registro/${id}`, registro);
export const deleteRegistroRequest = (id) => axios.delete(`/registro/${id}`);
