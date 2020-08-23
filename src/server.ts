import axios from "axios";
import dotenv from "dotenv";

dotenv.config({});
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "api-key": process.env.KEY,
};
const URL = "https://api.sendinblue.com/v3/smtp/email";

const templateIds = {
  test: 1,
};

export const sendTransactionEmail = (email: string, params: any) => {
  console.log("called");
  axios({
    method: "post",
    url: URL,
    headers: HEADERS,
    data: {
      to: [{ email: email, name: "JOHN" }],
      templateId: templateIds.test,
      params: params,
    },
  }).then((res) => {
    console.log(res);
  });

  return "pong";
};

sendTransactionEmail("akshyabansal1@gmail.com", {
  FIRSTNAME: "JASON",
  LASTNAME: "MARTIN",
});
