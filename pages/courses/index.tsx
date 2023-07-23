import Link from 'next/link';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/course1">
                        <a>Course 1</a>
                    </Link>
                </li>
                <li>
                    <Link href="/course2">
                        <a>Course 2</a>
                    </Link>
                </li>
                {/* Ajouter d'autres liens ici pour d'autres courses. */}
            </ul>
        </nav>
    );
}