import Image from 'next/image';
import Link from 'next/link';

const HomePage = ({ data }) => {
    return (
        <div className="home_body">
            {data.map((item) => (
                <Link
                    className="card"
                    href={`/events/${item.id}`}
                    key={item.id}
                    passHref
                >
                    <div className="image">
                        <Image
                            priority
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="content">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default HomePage;
