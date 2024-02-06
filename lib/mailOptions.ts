import nodemailer from "nodemailer";

const mailOptionsFunction = ({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) => {
  const mailOptions: nodemailer.SendMailOptions = {
    from: {
      name: "Whyfied",
      address: "parekhdhrish.pg@gmail.com",
    },
    to: [to],
    subject: subject,
    text: text,
    html: html,
  };
  return mailOptions;
};
export default mailOptionsFunction;
// const mailOptions: nodemailer.SendMailOptions = {
//     from: {
//       name: "Whyfied",
//       address: "parekhdhrish.pg@gmail.com",
//     },
//     to: ["parekhdhrish.pg@gmail.com"],
//     subject: "Test Email",
//     text: "This is a test email",
//     html: "<b>This is a test email</b><br><p>Test</p>",
//   };
