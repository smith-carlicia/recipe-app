'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Nav() {
    const pathname = usePathname()

    return (
        <nav className='pt-5 pb-5 pl-3 sticky top-0'>
            <div className="bg-transparent list-none flex flex-row justify-content-start font-[europa] space-x-4">
                <ul>
                    <li>
                        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`link ${pathname === '/about' ? 'active' : ''}`}
                            href="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`link ${pathname === '/recipes' ? 'active' : ''}`}
                            href="/recipes"
                        >
                            Recipes
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}