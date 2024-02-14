
import transporter from "./transporter";
import mailOptionsFunction from "./mailOptions";



const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
) => {
  const mailOptions = mailOptionsFunction({to: email, subject: "2FA Code", text: `Your 2FA code: ${token}`, html: `<p>Your 2FA code: ${token}</p>`})
   await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`
  const mailOptions = mailOptionsFunction({to: email, subject: "Reset your password", text: `Click ${resetLink} to reset password.`, html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`})
  await transporter.sendMail(mailOptions);
};

export const sendVerificationEmail = async (
  email: string, 
  token: string
) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;
  const mailOptions = mailOptionsFunction({to: email, subject: "Confirm your email", text: `Click ${confirmLink} to confirm email.`, html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`})
  await transporter.sendMail(mailOptions);
};
