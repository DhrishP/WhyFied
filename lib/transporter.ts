import nodemailer from "nodemailer";
import aws from "aws-sdk";

const sesConfig = {
  apiVersion: "2010-12-01",
  region: process.env.AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || "",
    secretAccessKey: process.env.AWS_SECRET_KEY || "",
  },
};
console.log(sesConfig);

const transporter = nodemailer.createTransport({
    SES: new aws.SES(sesConfig),
  });

export default transporter;



// const sendEmail = async () => {
//   try {
  
//     const response = await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully", response.messageId);
//   } catch (error) {
//     console.log(error);
//   }
// };

// sendEmail();
