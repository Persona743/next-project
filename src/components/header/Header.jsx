import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <div>
                <div className="topNav">
                    <Image
                        src={'/images/logo.png'}
                        width={140}
                        height={100}
                        alt="logo"
                    />
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/events">Events</Link>
                            </li>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <h1 className="title">
                    Travel around the world and start you journy with us.
                </h1>
            </div>
        </header>
    );
};

export default Header;
