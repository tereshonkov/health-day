import axios from "axios";
import * as FileSystem from "expo-file-system/legacy";
// import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Buffer } from "buffer";

// const API_URL = "http://192.168.0.152:3000";
const API_URL = "https://project-n7j0.onrender.com";

type PressureData = {
  userId: string;
  pressure: string;
  pulse: number;
};

type PdfRequestData = {
  userId: string;
  date: string[];
}

export const handlePulse = async (userId: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/pressure/${userId}/all-records`,
      { validateStatus: () => true }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка получения пульса!", error);
    return { success: false };
  }
}

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

// export const downloadPressurePdf = async (data: PdfRequestData) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/report/${data.userId}/pdf`,
//       { date: data.date },
//       { responseType: "arraybuffer", validateStatus: () => true }
//     );

//     if (response.status !== 200 && response.status !== 201) {
//       console.error("Ошибка загрузки PDF:", response.status);
//       return { success: false };
//     }

//     // Конвертируем ArrayBuffer в base64 через Buffer
//     const base64Data = Buffer.from(new Uint8Array(response.data)).toString("base64");

//     // Сохраняем PDF в кэш
//     const fileUri = FileSystem.cacheDirectory + `report_${data.userId}.pdf`;
//     await FileSystem.writeAsStringAsync(fileUri, base64Data, {
//       encoding: FileSystem.EncodingType.BASE64,
//     });

//     // Расшариваем/открываем PDF
//     await Sharing.shareAsync(fileUri, {
//       mimeType: "application/pdf",
//       dialogTitle: "Скачать PDF",
//       UTI: "com.adobe.pdf",
//     });

//     return { success: true };
//   } catch (error) {
//     console.error("Ошибка загрузки PDF файла!", error);
//     return { success: false };
//   }
// };

export const downloadPressurePdf = async (data: PdfRequestData) => {
  try {
    const response = await axios.post(
      `${API_URL}/report/${data.userId}/pdf`,
      { date: data.date },
      { responseType: "arraybuffer", validateStatus: () => true }
    );

    if (response.status !== 200 && response.status !== 201) {
      console.error("Ошибка загрузки PDF:", response.status);
      return { success: false };
    }

    // Конвертируем ArrayBuffer в base64 вручную
    const buffer = new Uint8Array(response.data);
    let binary = '';
    for (let i = 0; i < buffer.length; i++) {
      binary += String.fromCharCode(buffer[i]);
    }
    const base64Data = btoa(binary);

    // Сохраняем PDF в кэш
    const fileUri = FileSystem.cacheDirectory + `report_${data.userId}.pdf`;
    await FileSystem.writeAsStringAsync(fileUri, base64Data, {
      encoding: 'base64',
    });

    // Открываем / расшариваем PDF
    await Sharing.shareAsync(fileUri, {
      mimeType: "application/pdf",
      dialogTitle: "Скачать PDF",
      UTI: "com.adobe.pdf",
    });

    console.log("PDF успешно сохранён и открыт:", fileUri);
    return { success: true };
  } catch (error) {
    console.error("Ошибка загрузки PDF файла!", error);
    return { success: false };
  }
};

