import Link from 'next/link';
import Image from 'next/image';

export const CatEvent = ({ data, pageName }) => {
    return (
        <div className="cat_events">
            <h1>Events in {pageName}</h1>
            <div className="content">
                {data.map((item) => (
                    <Link
                        className="card"
                        key={item.id}
                        href={`/events/${item.city}/${item.id}`}
                        passHref
                    >
                        <Image
                            className="card"
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                        />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
