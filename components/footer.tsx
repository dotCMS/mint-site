import Link from "next/link"
import { Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">TravelExplorer</span>
          </div>

          <div className="flex gap-8 mb-4 md:mb-0">
            <Link href="/about" className="text-gray-300 hover:text-white">
              About Us
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
          </div>

          <div className="text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} TravelExplorer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
