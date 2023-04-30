import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

export const SingleEvent = ({ data }) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        //typically the chrome front-end doesn't allow the uncorrect format of email by defaul. but in case we add validRegex ourselves just for the record
        const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailValue.match(validRegex)) {
            setMessage('Please insert a correct email address');
        }

        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emailValue, eventId }),
            });

            if (!response.ok) throw new Error(`Error: ${response.status}`);
            const data = await response.json();
            console.log('POST', data);

            //POST fetch request
            //body emailValue and enentId
        } catch (e) {
            console.log('ERROR', e);
        }
    };

    return (
        <div className="event_single_page">
            <h1>{data.title}</h1>
            <Image
                priority
                src={data.image}
                width={1000}
                height={500}
                alt={data.title}
            />
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className="email_registration">
                <label>Get Registered for this event:</label>
                <input
                    id="email"
                    ref={inputEmail}
                    placeholder="Please Enter Your email"
                />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
};
