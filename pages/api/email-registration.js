import path from 'path';
import fs from 'fs';

function biuldPath() {
    return path.join(process.cwd(), 'data', 'data.json');
}

function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export default function handler(req, res) {
    const { method } = req;

    //? heres is what we do:
    //access our data
    //extract our data (allEvents)
    //res 404 if there are no allEvents
    //allEvents - loop through them and identify the eventId
    //add the email into emails_registered
    //only if that email doesn't exist
    //check the format if the email is ok

    const filePath = biuldPath();
    const { events_categories, allEvents } = extractData(filePath);

    if (!allEvents) {
        return res.status(404).json({
            message: 'There are no Events data found here',
        });
    }

    if (method === 'POST') {
        const { email, eventId } = req.body;

        if (!email | !email.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
            return;
        }

        const newAllEvents = allEvents.map((ev) => {
            if (ev.id === eventId) {
                if (ev.emails_registered.includes(email)) {
                    res.status(409).json({
                        message: 'This email has already been registered',
                    });
                    return ev;
                }
                return {
                    ...ev,
                    emails_registered: [...ev.emails_registered, email],
                };
            }
            return ev;
        });

        fs.writeFileSync(
            filePath,
            JSON.stringify({ events_categories, allEvents: newAllEvents })
        );

        res.status(200).json({
            message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
        });
    }
}
