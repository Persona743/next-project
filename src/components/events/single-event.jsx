import Image from 'next/image';

export const SingleEvent = ({ data }) => {
    return (
        <div className="event_single_page">
            <h1>{data.title}</h1>
            <Image
                src={data.image}
                width={1000}
                height={500}
                alt={data.title}
            />
            <p>{data.description}</p>
            <div className="email_registration">
                <input type="email" />
                <button>Submit</button>
            </div>
        </div>
    );
};
