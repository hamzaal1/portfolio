import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";

function Navbar() {
    return (
        <nav className="bg-background border-b-[1px] border-primary">
            <div className="container py-3">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image src={'/images/logo.svg'} alt="me" width="25" height="35" />
                    </Link>
                    <Nav />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;