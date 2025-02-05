import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          EasyDoers
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#services" className="text-blue-600 hover:text-blue-800 font-medium">
              Services
            </Link>
          </li>
          <li>
            <Link href="/#about" className="text-blue-600 hover:text-blue-800 font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

