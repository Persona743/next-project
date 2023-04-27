import Image from 'next/image';
import Link from 'next/link';

export const AllEvents = ({ data }) => {
    return (
        <div className="events_page">
            {data.map((item) => (
                <Link
                    className="card"
                    href={`/events/${item.id}`}
                    key={item.id}
                    passHref
                >
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={450}
                    />
                    <h2>{item.title}</h2>
                </Link>
            ))}
        </div>
    );
};
