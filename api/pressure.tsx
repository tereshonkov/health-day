import axios from "axios";

const API_URL = "http://192.168.0.152:3000";

type PressureData = {
  userId: string;
  pressure: string;
  pulse: number;
};

export const postPressure = async (data: PressureData) => {
  try {
    const response = await axios.post(`${API_URL}/pressure/create`, data, {
      validateStatus: () => true,
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка отправки данных с главной страницы!", error);
    return { success: false };
  }
};
