import axios from "axios";

export const test = async () => {
  const data = await axios.get("http://localhost:3003/message/testing1");
  console.log("😊😊😊", data.data);
};
