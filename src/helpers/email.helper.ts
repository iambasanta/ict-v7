import nodemailer from "nodemailer";

import { sender } from "../utils/env";

export const sendEmail = async (
  receiver: string,
  subject: string,
  emailContent: string,
) => {
  const config = {
    service: "gmail",
    auth: {
      user: sender.address,
      pass: sender.password,
    },
  };

  const transporter = nodemailer.createTransport(config);

  const message = {
    from: sender.address,
    to: receiver,
    subject: subject,
    html: emailContent,
  };

  try {
    await transporter.sendMail(message);
  } catch (error) {
    console.error("ERROR: ", error);
    throw new Error("Failed to send email.");
  }
};
