import axios from "axios";

const API_URL = "http://192.168.1.185:3000";

type PressureData = {
  userId: string;
  pressure: string;
  pulse: number;
};

export const postPressure = async (data: PressureData) => {
  try {
    const response = await axios.post(`${API_URL}/pressure/create`, data);
    return response.data;
  } catch (error) {
    console.error("Ошибка отправки данных с главной страницы!", error);
    throw error;
  }
};
