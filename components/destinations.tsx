import Image from "next/image"

export function Destinations() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-medium text-blue-500">Our Picks</h2>
          <h3 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Top Destinations this Year</h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array(4).fill(null).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt={`Destination ${index + 1}`}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 