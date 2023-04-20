import Image from 'next/image';
import Link from 'next/link';

const EventsCatPage = ({ data,pageName }) => {
    return (
        <div>
            <h1>Events in {pageName}</h1>
            <div>
                {data.map((item) => (
                    <Link
                        key={item.id}
                        href={`/events/${item.city}/${item.id}`}
                        passHref
                    >
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
            </div>
        </div>
    );
};

export default EventsCatPage;

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map((item) => {
        return {
            params: {
                cat: item.id.toString(),
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context?.params.cat;
    const { allEvents } = await import('/data/data.json');

    const data = allEvents.filter((item) => item.city === id);

    return {
        props: { data, pageName:id },
    };
}
