import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <Navbar currentPath="/about" />

      <main className="flex-grow">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">About Us</h1>
              <p className="mt-4 text-xl text-gray-600">Helping travelers discover amazing destinations since 2010</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Team of travel experts"
                  className="rounded-lg"
                  width={800}
                  height={600}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-gray-600">
                  TravelExplorer was founded with a simple mission: to help people discover the world's most amazing
                  destinations and create unforgettable travel experiences.
                </p>
                <p className="text-gray-600">
                  What started as a small blog sharing travel tips has grown into a platform that connects travelers
                  with hundreds of destinations worldwide. Our team of passionate travelers and local experts curate the
                  best travel experiences, from hidden gems to popular attractions.
                </p>
                <p className="text-gray-600">
                  We believe that travel has the power to transform lives, broaden perspectives, and create lasting
                  memories. That's why we're committed to making travel accessible, enjoyable, and enriching for
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
