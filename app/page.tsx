import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VideoShowcase from "@/components/video-showcase"
import { client } from "@/lib/dotcms"

// Blog post data for the homepage
const featuredBlogPosts = [
  {
    slug: "10-essential-items-for-your-hiking-adventure",
    title: "10 Essential Items for Your Hiking Adventure",
    category: "Travel Tips",
    author: "Sarah Johnson",
    authorImage: "/placeholder.svg?height=100&width=100",
    readTime: "5 min read",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Discover the must-have gear that will make your next hiking trip safe and enjoyable.",
  },
  {
    slug: "exploring-local-cuisines-a-foodies-guide",
    title: "Exploring Local Cuisines: A Foodie's Guide",
    category: "Food & Culture",
    author: "Michael Chen",
    authorImage: "/placeholder.svg?height=100&width=100",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "How to find authentic local food experiences that will make your travels unforgettable.",
  },
  {
    slug: "capturing-memories-travel-photography-tips",
    title: "Capturing Memories: Travel Photography Tips",
    category: "Photography",
    author: "Emma Rodriguez",
    authorImage: "/placeholder.svg?height=100&width=100",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Learn how to take stunning travel photos that tell the story of your journey.",
  },
]

export default async function Home() {
  // Test dotCMS client
  try {
    const pageData = await client.page.get('/', {
      languageId: '1'
    });
    console.log('dotCMS page data:', pageData);
  } catch (error) {
    console.error('Error fetching dotCMS page:', error);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <Navbar currentPath="/" />

      <main className="flex-grow">
        {/* Hero Section */}
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

        {/* Destinations Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-medium text-blue-500">Our Picks</h2>
              <h3 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Top Destinations this Year</h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="City view with historic building"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={400}
                  height={400}
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Waterfall in lush green forest"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={400}
                  height={400}
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Tropical beach with palm trees"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={400}
                  height={400}
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Modern green building with plants"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section - Added above blogs */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-medium text-blue-500">Travel Inspiration</h2>
              <h3 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Experience the Journey</h3>
            </div>
            <div className="mx-auto max-w-5xl">
              <VideoShowcase
                title="Discover Hidden Paradises"
                description="Join us on a journey to the world's most breathtaking destinations"
                videoSrc="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-turquoise-coast-with-white-sand-beach-41796-large.mp4"
                posterSrc="/placeholder.svg?height=720&width=1280"
              />
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-medium text-blue-500">Our Insights</h2>
              <h3 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Our Favourite Blogs</h3>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredBlogPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={500}
                      height={300}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm font-medium text-blue-500">{post.category}</div>
                    <h4 className="mb-2 text-xl font-bold">{post.title}</h4>
                    <p className="mb-4 text-gray-600">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
