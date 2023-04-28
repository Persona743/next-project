import { SingleEvent } from '@/src/components/events/single-event';

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage;

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json');

    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                //? name of this object should be the same as the file. like id for [id]
                id: path.id,
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const { allEvents } = await import('/data/data.json');
    const eventData = allEvents.find((item) => id === item.id);

    return {
        props: { data: eventData },
    };
}
