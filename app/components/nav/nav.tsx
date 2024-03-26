'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Nav() {

    return (
        <nav className='flex flex-row justify-content-start pt-4 pb-4 pl-3 sticky top-0 shadow-xl'>
            <div className="bg-transparent list-none flex flex-row justify-content-start space-x-4">
                <ul>
                    <li>
                        <Link href="/" className='font-extrabold tracking-wide text-2xl no-underline ml-1 hover:underline decoration-4 underline-offset-4	'>Home</Link>

                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/pages/students" className='font-extrabold tracking-wide text-2xl no-underline ml-1 hover:underline decoration-4 underline-offset-4	'>About</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/pages/staff" className='font-extrabold tracking-wide text-2xl no-underline ml-1 hover:underline decoration-4 underline-offset-4'>Recipes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}