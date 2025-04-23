import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Blog post data
const blogPosts = [
  {
    slug: "10-essential-items-for-your-hiking-adventure",
    title: "10 Essential Items for Your Hiking Adventure",
    category: "Travel Tips",
    author: "Sarah Johnson",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "April 2, 2025",
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
    date: "March 28, 2025",
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
    date: "March 15, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Learn how to take stunning travel photos that tell the story of your journey.",
  },
  {
    slug: "solo-travel-embracing-the-unknown",
    title: "Solo Travel: Embracing the Unknown",
    category: "Adventure",
    author: "Alex Thompson",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 10, 2025",
    readTime: "7 min read",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Why traveling alone can be one of the most rewarding experiences of your life.",
  },
  {
    slug: "traveling-with-kids-a-survival-guide",
    title: "Traveling with Kids: A Survival Guide",
    category: "Family Travel",
    author: "Jessica Miller",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 5, 2025",
    readTime: "9 min read",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Tips and tricks for making family vacations enjoyable for everyone.",
  },
  {
    slug: "working-remotely-best-destinations-for-digital-nomads",
    title: "Working Remotely: Best Destinations for Digital Nomads",
    category: "Digital Nomad",
    author: "David Park",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 28, 2025",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=500",
    excerpt: "Discover the top cities around the world that cater to remote workers.",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <Navbar currentPath="/blog" />

      <main className="flex-grow">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Blog</h1>
              <p className="mt-4 text-xl text-gray-600">Travel tips, guides, and stories from around the world</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
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
