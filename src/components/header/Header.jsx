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
                        priority
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
                <p className="title">
                    Travel around the world and start you journy with us
                </p>
            </div>
        </header>
    );
};

export default Header;
