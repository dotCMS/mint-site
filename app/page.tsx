import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { Blog } from "@/components/blog"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar currentPath="/" />
      <main className="flex-grow">
        <Hero />
        <Destinations />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
