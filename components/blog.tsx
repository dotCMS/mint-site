import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  authorImage: string;
  readTime: string;
  image: string;
  excerpt: string;
}

interface BlogProps {
  posts?: BlogPost[];
}

const defaultPosts = [
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

export function Blog({ posts = defaultPosts }: BlogProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-medium text-blue-500">Our Insights</h2>
          <h3 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Our Favourite Blogs</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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
  )
} 