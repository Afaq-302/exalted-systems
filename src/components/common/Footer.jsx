import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
            © {new Date().getFullYear()} Exalted Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
