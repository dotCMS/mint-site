"use client"

import Link from "next/link"
import { Zap, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when route changes or on larger screens
  useEffect(() => {
    setIsMenuOpen(false)
  }, [currentPath])

  // Close menu when screen size increases beyond mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="border-b border-gray-100 bg-gray-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Zap className="h-5 w-5 text-blue-500" />
            </div>
          </Link>
          <nav className="hidden space-x-8 sm:flex">
            <Link href="/" className={currentPath === "/" ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}>
              Home
            </Link>
            <Link
              href="/blog"
              className={
                currentPath === "/blog" || currentPath.startsWith("/blog/")
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={currentPath === "/about" ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}
            >
              About Us
            </Link>
          </nav>
        </div>

        {/* Desktop auth links */}
        <div className="hidden items-center gap-4 sm:flex">
          <Link
            href="/login"
            className={currentPath === "/login" ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className={
              currentPath === "/signup"
                ? "rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
                : "rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            }
          >
            Sign up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-600 sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs transform bg-white shadow-lg transition-transform duration-300 ease-in-out sm:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Zap className="h-5 w-5 text-blue-500" />
            </div>
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md text-gray-600"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          <Link
            href="/"
            className={`py-3 px-4 rounded-md ${
              currentPath === "/" ? "bg-blue-50 text-blue-500" : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`py-3 px-4 rounded-md ${
              currentPath === "/blog" || currentPath.startsWith("/blog/")
                ? "bg-blue-50 text-blue-500"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`py-3 px-4 rounded-md ${
              currentPath === "/about" ? "bg-blue-50 text-blue-500" : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>

          <div className="my-4 border-t border-gray-100"></div>

          <Link
            href="/login"
            className={`py-3 px-4 rounded-md ${
              currentPath === "/login" ? "bg-blue-50 text-blue-500" : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="mt-2 flex w-full items-center justify-center rounded-md bg-blue-500 py-3 px-4 text-center font-medium text-white hover:bg-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign up
          </Link>
        </nav>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  )
}
