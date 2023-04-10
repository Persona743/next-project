import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Events App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <nav>
                    <img />
                    <a href="/">Home</a>
                    <a href="/events">Events</a>
                    <a href="/about-us">About Us</a>
                </nav>
            </header>

            <main className={styles.main}>
                <a href="">
                    <img />
                    <h2>Events in Liverpool</h2>
                    <p>
                        Sint voluptate duis sunt qui magna proident laborum est
                        et. Labore consequat esse velit nisi fugiat et
                        exercitation non aliqua. Velit nostrud cupidatat laborum
                        sint minim excepteur ad Lorem commodo deserunt quis.
                    </p>
                </a>
                <a href="">
                    <img />
                    <h2>Events in Florida</h2>
                    <p>
                        Sint voluptate duis sunt qui magna proident laborum est
                        et. Labore consequat esse velit nisi fugiat et
                        exercitation non aliqua. Velit nostrud cupidatat laborum
                        sint minim excepteur ad Lorem commodo deserunt quis.
                    </p>
                </a>
                <a href="">
                    <img />
                    <h2>Events in Tokyo</h2>
                    <p>
                        Sint voluptate duis sunt qui magna proident laborum est
                        et. Labore consequat esse velit nisi fugiat et
                        exercitation non aliqua. Velit nostrud cupidatat laborum
                        sint minim excepteur ad Lorem commodo deserunt quis.
                    </p>
                </a>
            </main>

            <footer className={styles.footer}>
                <p>
                    &copy; 2023 Code with Sia - A self project for NextJS
                    framework
                </p>
            </footer>
        </>
    );
}
