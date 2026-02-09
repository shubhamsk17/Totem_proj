import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="nav">
      <h1>Project Aatmanirbhar</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">The Movement</Link></li>
        <li><Link href="/problems">Problems</Link></li>
        <li><Link href="/act">How You Can Act</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
