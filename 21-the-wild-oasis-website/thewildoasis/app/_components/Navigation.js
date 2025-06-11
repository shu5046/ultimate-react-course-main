import Link from "next/link"

function Navigation() {
    return (
       <ul>
        <li><Link href="/cabins">CABINS</Link></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/account">ACCOUNT</Link></li>
       </ul>
    )
}

export default Navigation
