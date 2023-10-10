"use strict";
const nodemailer = require("nodemailer");

interface FormData {
    name: string;
    email: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const data: FormData = await request.json();
        const { name, email, message } = data;
        const myEmail = 'lowzhekai.cpf@gmail.com'
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });
    
        const mailOptions = {
            from: myEmail,
            to: myEmail,
            subject: `Message from ${name} (${email})`,
            text: message
        };
    
        await transporter.sendMail(mailOptions);
        
        return Response.json({message:"Email sent successfully"}, {status: 200});
    } catch (error) {
        return Response.json({message:"Email failed to send"}, {status: 500});
    }

} 