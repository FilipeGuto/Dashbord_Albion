import axios from "axios";

const BASE_URL = "https://sheets.googleapis.com/v4/spreadsheets/1scu3S-S3Tps8qZE_y-CV4GMVT1kA3bX2EKlwzFzLmTY/values/Tabela?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyD_egxjqvDAlKKiTFux7pkL5nSay7k_d6g"

const getData = async () => {
  try {
    const options = {
      method: 'GET',
      url: BASE_URL,
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    return console.log(error);
  }
};

export {
  getData,
};
