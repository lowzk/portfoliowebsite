import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./contact_form.css";
import Image from "next/image";
import redpin from '../public/red_pin.png'

function ContactForm() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [nameError, setNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [messageError, setMessageError] = useState<string>('');

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    };

    const handleSubmit = async () => {
        if (!name) {
            setNameError('Please enter your name.');
        } else {
            setNameError('');
        }
        if (!email) {
            setEmailError('Please enter your email address.');
        } else if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
        if (!message) {
            setMessageError('Please enter a message.');
        } else {
            setMessageError('');
        }
        if (name && email && validateEmail(email) && message) {
            console.log("Name: " + name);
            console.log("Email: " + email);
            console.log("Message: " + message);
            // You can call your backend endpoint here to process the data
            const response = await fetch('./api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })

            console.log(await response.json());
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div className="container">
            <Image
                src={redpin}
                alt="red pin"
                width={40}
                height={40}
                className="absolute top-0 left-0"
            />
            <Image
                src={redpin}
                alt="red pin"
                width={40}
                height={40}
                className="absolute bottom-0 right-0"
            />
            <div style={{ display: 'flex' }}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Name"
                    variant="filled"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!nameError}
                    helperText={nameError}
                    style={{ flex: 1, marginRight: '1rem' }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    variant="filled"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!emailError}
                    helperText={emailError}
                    style={{ flex: 1 }}
                />
            </div>
            <TextField
                fullWidth
                margin="normal"
                label="Message"
                variant="filled"
                multiline
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!messageError}
                helperText={messageError}
            />
            <Button variant="contained" className="button" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
}

export default ContactForm;