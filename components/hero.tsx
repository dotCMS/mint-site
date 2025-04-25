import Image from "next/image"

export function Hero() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Your next adventure is on us
          </h1>
          <p className="text-xl text-gray-600">Discover hundreds of travel destinations around the world</p>
          <div className="flex w-full max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <input
              type="text"
              placeholder="Search your next vacation destination"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-600 focus:border-blue-500 focus:outline-none"
            />
            <button className="whitespace-nowrap rounded-md bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>
        <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
          <Image
            src="/images/desert-road.jpg"
            alt="Red convertible car driving through white sand dunes under a blue sky"
            className="h-full w-full object-cover rounded-lg"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  )
} 