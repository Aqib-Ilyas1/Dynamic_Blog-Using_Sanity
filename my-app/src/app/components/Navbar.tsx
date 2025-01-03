import Link from "next/link";

const Navbar = () =>{
    return(
        <main>
            <div className="bg-black h-14 flex items-center justify-center">
                <ul className="flex gap-5 text-lg font-semibold text-white">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Navbar;