import { createTransport } from "nodemailer";

export const sendMail= async (text) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.SMPT_USER,
          pass: process.env.SMPT_PASSWORD
        },
      });
        // send mail with defined transport object
        await transporter.sendMail({
          from: process.env.SMPT_MYMAIL, // sender address
          to: process.env.SMPT_RECVMAIL, // list of receivers
          subject: "this is testing mail", // Subject line
          text, // plain text body
        });
};







