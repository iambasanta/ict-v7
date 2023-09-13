import { NextFunction, Request, Response } from "express";

import { isValidEmail } from "../helpers/validator";
import { sendEmail } from "../helpers/email.helper";

export const emailHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const receiver = req.body?.email;

  if (!receiver) {
    res.status(400).json({ message: "No email provided." });
    return next();
  }

  if (!isValidEmail(receiver)) {
    res.status(400).json({ error: "Invalid email format." });
    return next();
  }

  // email content in plain html and css
  const emailContent = `
    <html>
      <head>
        <style>
          /* add sytles*/
        </style>
      </head>
      <body>
        <h1>You received a test mail!</h1>
      </body>
    </html>
  `;

  const subject = "Test mail";

  try {
    await sendEmail(receiver, subject, emailContent);
    return res.status(201).json({ message: "Your email has been sent." });
  } catch (error) {
    console.error("ERROR: ", error);
    return res.status(500).json({ message: "Failed to send an email." });
  }
};
