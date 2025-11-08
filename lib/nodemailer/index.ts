import nodemailer from 'nodemailer';
import {WELCOME_EMAIL_TEMPLATE} from "@/lib/nodemailer/templates";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL!,
        pass: process.env.NODEMAIL_PASSWORD!,
    }
})

export const sendWelcomeEmail = async ({email, name, intro}: WelcomeEmailData) => {
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE
        .replace('{{name}}', name)
        .replace('{{intro}}', intro);

    const mailOptions = {
        from: `"Stox" <${process.env.NODEMAILER_EMAIL}>`, // Use actual Gmail
        to: email,
        subject: `Welcome to Stox - your stock market toolkit is ready!`,
        html: htmlTemplate,
    }

    await transporter.sendMail(mailOptions);
}