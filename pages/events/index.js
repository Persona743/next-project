import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ data }) => {
    return (
        <div>
            <h1>Event page</h1>
            <div>
                {data.map((item) => (
                    <Link href={`/events/${item.id}`} key={item.id} passHref>
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={300}
                            height={300}
                        />
                        <h2>{item.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;

export async function getStaticProps() {
    const { events_categories } = await import('/data/data.json');

    return {
        props: {
            data: events_categories,
        },
    };
}
