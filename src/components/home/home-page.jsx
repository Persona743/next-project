import Image from 'next/image';
import Link from 'next/link';

const HomePage = ({ data }) => {
    return (
        <main>
            {data.map((item) => (
                <Link href={`/events/${item.id}`} key={item.id} passHref>
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={300}
                    />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </Link>
            ))}
        </main>
    );
};

export default HomePage;
