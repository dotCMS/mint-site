import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  const posts = {
    "10-essential-items-for-your-hiking-adventure": {
      title: "10 Essential Items for Your Hiking Adventure",
      category: "Travel Tips",
      author: "Sarah Johnson",
      authorImage: "/placeholder.svg?height=100&width=100",
      date: "April 2, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg?height=600&width=1200",
      excerpt: "Discover the must-have gear that will make your next hiking trip safe and enjoyable.",
      content: `
        <p>Hiking is one of the most rewarding outdoor activities you can experience. Whether you're planning a short day hike or a multi-day adventure, having the right gear is essential for your safety and enjoyment.</p>
        
        <h2>1. Proper Footwear</h2>
        <p>Your choice of footwear can make or break your hiking experience. Invest in a good pair of hiking boots or trail runners that provide ankle support and have a good grip. Make sure to break them in before your hike to avoid blisters.</p>
        
        <h2>2. Navigation Tools</h2>
        <p>Even if you're hiking a well-marked trail, always bring a map and compass. While smartphone GPS apps are convenient, batteries can die, and signals can be lost in remote areas. Knowing how to use a map and compass is an essential skill for any hiker.</p>
        
        <h2>3. Water and Hydration System</h2>
        <p>Staying hydrated is crucial when hiking. Bring at least 2 liters of water for a day hike, and more for longer or more strenuous hikes. Consider a hydration bladder for easy access to water while on the move.</p>
        
        <h2>4. Weather-Appropriate Clothing</h2>
        <p>Dress in layers and be prepared for changing weather conditions. A moisture-wicking base layer, an insulating mid-layer, and a waterproof outer layer are essential. Don't forget a hat, gloves, and extra socks.</p>
        
        <h2>5. First Aid Kit</h2>
        <p>A basic first aid kit should include bandages, antiseptic wipes, pain relievers, blister treatment, personal medications, and emergency contact information. Familiarize yourself with the contents and how to use them before your hike.</p>
        
        <h2>6. Sun Protection</h2>
        <p>Protect yourself from the sun's harmful rays with sunscreen, sunglasses, and a hat. Even on cloudy days, UV rays can cause sunburn, especially at higher elevations.</p>
        
        <h2>7. Nutrition</h2>
        <p>Pack high-energy snacks and meals that are easy to eat on the trail. Trail mix, energy bars, jerky, and dried fruits are good options. For longer hikes, bring a lightweight stove and dehydrated meals.</p>
        
        <h2>8. Emergency Shelter</h2>
        <p>An emergency shelter can be a lifesaver if you get stranded overnight. A lightweight emergency bivy, tarp, or even a large garbage bag can provide protection from the elements.</p>
        
        <h2>9. Illumination</h2>
        <p>A headlamp or flashlight with extra batteries is essential, even for day hikes. If your hike takes longer than expected and you're caught after dark, you'll need a reliable light source to find your way.</p>
        
        <h2>10. Multi-tool or Knife</h2>
        <p>A multi-tool or knife can be useful for various tasks, from preparing food to making emergency repairs to your gear. Choose a lightweight option with the features you're most likely to need.</p>
        
        <p>Remember, the key to a successful hiking adventure is preparation. By packing these essential items, you'll be ready to handle most situations that arise on the trail. Happy hiking!</p>
      `,
    },
    "exploring-local-cuisines-a-foodies-guide": {
      title: "Exploring Local Cuisines: A Foodie's Guide",
      category: "Food & Culture",
      author: "Michael Chen",
      authorImage: "/placeholder.svg?height=100&width=100",
      date: "March 28, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg?height=600&width=1200",
      excerpt: "How to find authentic local food experiences that will make your travels unforgettable.",
      content: `
        <p>One of the most delightful aspects of traveling is experiencing the local cuisine. Food is a universal language that connects people across cultures and provides insight into a region's history, geography, and values.</p>
        
        <h2>Research Before You Go</h2>
        <p>Before your trip, research the signature dishes and food customs of your destination. Understanding what to expect and what to look for will enhance your culinary adventure. Look beyond tourist guides and seek recommendations from food bloggers who specialize in the region.</p>
        
        <h2>Visit Local Markets</h2>
        <p>Food markets are the heart of a community's culinary scene. They offer a glimpse into local ingredients, cooking methods, and daily life. Wake up early to see markets at their most authentic, when locals shop for their daily needs.</p>
        
        <h2>Take a Cooking Class</h2>
        <p>A cooking class is an excellent way to learn about local ingredients and techniques. Many classes include a market tour, where you'll learn how to select the best ingredients before preparing traditional dishes under expert guidance.</p>
        
        <h2>Street Food: Approach with Caution and Curiosity</h2>
        <p>Street food offers some of the most authentic and affordable culinary experiences. To enjoy it safely, look for stalls with long lines of locals, visible food preparation, and proper handling practices. Start with small portions to allow your stomach to adjust.</p>
        
        <h2>Dine Where the Locals Eat</h2>
        <p>Venture away from tourist areas to find restaurants frequented by locals. These establishments often offer more authentic flavors and better value. Don't be deterred by a lack of English menus – use translation apps or simply point to what others are enjoying.</p>
        
        <h2>Embrace Food Rituals and Etiquette</h2>
        <p>Food customs vary widely across cultures. In some places, it's customary to eat with your hands; in others, specific utensils are used. Learning and respecting these customs enhances your experience and shows respect for the local culture.</p>
        
        <h2>Connect with Local Food Enthusiasts</h2>
        <p>Social media and food apps can connect you with local food enthusiasts who might be willing to share their favorite spots or even join you for a meal. These personal connections often lead to the most memorable dining experiences.</p>
        
        <h2>Document Your Culinary Journey</h2>
        <p>Keep a food journal or photo diary of your culinary adventures. Note the names of dishes, ingredients, and your impressions. These memories will be a treasured souvenir of your travels.</p>
        
        <p>Remember, the goal isn't just to taste new foods but to understand the culture and people behind them. Be open to unfamiliar flavors and dining customs, and you'll be rewarded with a deeper connection to the places you visit. Bon appétit and happy travels!</p>
      `,
    },
    "capturing-memories-travel-photography-tips": {
      title: "Capturing Memories: Travel Photography Tips",
      category: "Photography",
      author: "Emma Rodriguez",
      authorImage: "/placeholder.svg?height=100&width=100",
      date: "March 15, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=600&width=1200",
      excerpt: "Learn how to take stunning travel photos that tell the story of your journey.",
      content: `
        <p>Travel photography is about capturing the essence of a place and the emotions it evokes. Whether you're using a professional camera or a smartphone, these tips will help you create compelling images that tell the story of your journey.</p>
        
        <h2>Research Your Destination</h2>
        <p>Before your trip, research iconic and lesser-known photo opportunities. While it's wonderful to capture famous landmarks, also look for unique perspectives and hidden gems that showcase the authentic character of your destination.</p>
        
        <h2>Master the Golden Hours</h2>
        <p>The hour after sunrise and before sunset offers the most flattering natural light for photography. Plan to be at key locations during these "golden hours" when the soft, warm light enhances colors and creates a magical atmosphere.</p>
        
        <h2>Tell a Story with Your Photos</h2>
        <p>Think of your travel photos as a visual narrative. Include wide shots that establish the scene, medium shots that show context, and close-ups that reveal details. Together, these images will tell a more complete story of your experience.</p>
        
        <h2>Include People in Your Photos</h2>
        <p>Photos of landscapes and architecture are beautiful, but including people adds scale, emotion, and human interest. Whether it's locals going about their daily lives or your travel companions experiencing a new place, people bring photos to life.</p>
        
        <h2>Embrace Spontaneity</h2>
        <p>While planning is important, some of the most memorable travel photos capture spontaneous moments. Keep your camera accessible and be ready to shoot when unexpected opportunities arise.</p>
        
        <h2>Focus on Details</h2>
        <p>The small details of a place—a weathered door, local food, traditional crafts—often reveal as much about a culture as the grand vistas. These intimate shots add depth and texture to your travel story.</p>
        
        <h2>Experiment with Composition</h2>
        <p>Apply compositional techniques like the rule of thirds, leading lines, and framing to create more dynamic images. Don't be afraid to experiment with different angles and perspectives to find fresh ways to capture familiar subjects.</p>
        
        <h2>Edit with Restraint</h2>
        <p>Post-processing can enhance your travel photos, but aim for natural-looking results that remain true to the place you visited. Simple adjustments to exposure, contrast, and color can make your images pop without looking artificial.</p>
        
        <h2>Backup Your Photos</h2>
        <p>Regularly backup your photos while traveling to prevent heartbreaking loss. Use cloud storage, external hard drives, or multiple memory cards to ensure your visual memories are safe.</p>
        
        <p>Remember, the best travel photography captures not just what a place looks like, but how it feels to be there. By approaching photography with curiosity, patience, and an eye for storytelling, you'll create images that transport you back to your travels for years to come.</p>
      `,
    },
    "solo-travel-embracing-the-unknown": {
      title: "Solo Travel: Embracing the Unknown",
      category: "Adventure",
      author: "Alex Thompson",
      authorImage: "/placeholder.svg?height=100&width=100",
      date: "March 10, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg?height=600&width=1200",
      excerpt: "Why traveling alone can be one of the most rewarding experiences of your life.",
      content: `
        <p>Solo travel is more than just a way to see the world—it's a journey of self-discovery and personal growth. When you travel alone, you're free to follow your own path, make spontaneous decisions, and connect with people and places in a more authentic way.</p>
        
        <h2>The Freedom of Solo Travel</h2>
        <p>One of the greatest joys of solo travel is the complete freedom it offers. Your itinerary is entirely your own—you can linger in places that captivate you and move on from those that don't. You can change plans on a whim, without needing to compromise or consult with anyone else.</p>
        
        <h2>Building Confidence and Resilience</h2>
        <p>Navigating unfamiliar places on your own builds confidence in your ability to handle challenges. From figuring out public transportation in a foreign city to overcoming language barriers, each obstacle you overcome strengthens your problem-solving skills and resilience.</p>
        
        <h2>Connecting with Locals and Fellow Travelers</h2>
        <p>When you travel alone, you're more approachable and more likely to engage with others. Without the comfort of a travel companion, you'll naturally seek connections with locals and fellow travelers, often leading to meaningful conversations and friendships that wouldn't have formed otherwise.</p>
        
        <h2>Self-Discovery Through Solitude</h2>
        <p>Solo travel provides valuable time for reflection and self-discovery. Free from the distractions and routines of everyday life, you can reconnect with yourself, clarify your values and priorities, and gain perspective on your life path.</p>
        
        <h2>Practical Tips for Solo Travelers</h2>
        <p>While solo travel is rewarding, it also requires careful planning and awareness. Research your destination thoroughly, stay in well-reviewed accommodations, keep loved ones informed of your whereabouts, and trust your instincts about people and situations.</p>
        
        <h2>Embracing Meals Alone</h2>
        <p>Dining alone is often one of the most intimidating aspects of solo travel. Embrace these moments by bringing a book, journaling about your day, or simply observing the local culture around you. Many solo travelers find that these meals become cherished moments of peace in busy travel days.</p>
        
        <h2>Capturing Your Journey</h2>
        <p>Document your solo adventures through photos, journals, or blogs. These records will not only preserve your memories but also allow you to share your experiences with others and perhaps inspire them to embark on their own solo journeys.</p>
        
        <p>Solo travel isn't just about the destinations you visit—it's about the person you become along the way. By stepping outside your comfort zone and embracing the unknown, you'll discover strengths, passions, and perspectives that will enrich your life long after you return home.</p>
      `,
    },
    "traveling-with-kids-a-survival-guide": {
      title: "Traveling with Kids: A Survival Guide",
      category: "Family Travel",
      author: "Jessica Miller",
      authorImage: "/placeholder.svg?height=100&width=100",
      date: "March 5, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg?height=600&width=1200",
      excerpt: "Tips and tricks for making family vacations enjoyable for everyone.",
      content: `
        <p>Family travel creates lasting memories and strengthens bonds, but it also presents unique challenges. With thoughtful planning and realistic expectations, you can create enriching travel experiences that the whole family will treasure.</p>
        
        <h2>Plan Together, Enjoy Together</h2>
        <p>Involve children in the planning process according to their age. Let them research activities or choose between options. When kids feel invested in the trip, they're more engaged and cooperative during the journey.</p>
        
        <h2>Pace Yourself</h2>
        <p>The key to successful family travel is a relaxed pace. Plan for one major activity per day, with plenty of downtime. Remember that everyday experiences—riding public transportation, visiting local playgrounds, or sampling street food—can be as memorable as major attractions.</p>
        
        <h2>Pack Strategically</h2>
        <p>Pack light but smart. Bring essential comfort items (favorite stuffed animals, blankets), basic medications, snacks, and entertainment for transit times. Consider the laundry options at your destination to minimize clothing.</p>
        
        <h2>Embrace Technology (In Moderation)</h2>
        <p>While the goal is to experience new places together, technology can be a valuable tool. Load tablets with educational games, e-books, and movies for long transit times. Use apps for language learning, navigation, and identifying plants, animals, or stars.</p>
        
        <h2>Prioritize Sleep and Nutrition</h2>
        <p>Overtired, hungry children (and adults) can't enjoy even the most amazing experiences. Try to maintain some consistency with sleep schedules and ensure regular, nutritious meals. Plan accommodations with separate sleeping areas when possible.</p>
        
        <h2>Build in Education Naturally</h2>
        <p>Travel is inherently educational, but you can enhance the learning without making it feel like school. Visit museums with interactive exhibits, take cooking classes, learn a few phrases in the local language, or connect with local families through community-based tourism.</p>
        
        <h2>Prepare for the Unexpected</h2>
        <p>Flexibility is essential when traveling with kids. Weather changes, attractions close, children get sick—having a backup plan and a positive attitude will help you navigate these challenges. Sometimes the unexpected detours lead to the most memorable adventures.</p>
        
        <h2>Capture Memories Together</h2>
        <p>Give children age-appropriate ways to document the journey. Younger kids can draw pictures of what they see, while older ones might keep a journal, create a digital photo album, or make short videos. These personal records will be treasured keepsakes.</p>
        
        <p>Remember that the goal of family travel isn't to see everything or to have a perfect, Instagram-worthy trip. It's about experiencing new places together, building resilience through challenges, and creating shared memories that strengthen your family bonds for years to come.</p>
      `,
    },
    "working-remotely-best-destinations-for-digital-nomads": {
      title: "Working Remotely: Best Destinations for Digital Nomads",
      category: "Digital Nomad",
      author: "David Park",
      authorImage: "/placeholder.svg?height=100&width=100",
      date: "February 28, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg?height=600&width=1200",
      excerpt: "Discover the top cities around the world that cater to remote workers.",
      content: `
        <p>The digital nomad lifestyle has exploded in popularity, allowing professionals to work from anywhere with a reliable internet connection. If you're considering joining this global community of remote workers, here are some of the best destinations that offer the perfect balance of infrastructure, affordability, community, and quality of life.</p>
        
        <h2>Lisbon, Portugal</h2>
        <p>With its affordable cost of living, vibrant culture, and excellent infrastructure, Lisbon has become a digital nomad hotspot. The city offers numerous co-working spaces, a thriving startup scene, and a digital nomad visa program. Add in the beautiful weather, stunning architecture, and delicious cuisine, and it's easy to see why Lisbon tops many remote workers' lists.</p>
        
        <h2>Chiang Mai, Thailand</h2>
        <p>Long a favorite among digital nomads, Chiang Mai offers an unbeatable combination of extremely low cost of living and high quality of life. The city features dozens of co-working spaces, a large expat community, fast internet, and delicious, affordable food. The laid-back atmosphere and proximity to beautiful natural areas make it ideal for those seeking work-life balance.</p>
        
        <h2>Medellín, Colombia</h2>
        <p>Once notorious for crime, Medellín has transformed into a tech-forward city with a perfect climate (earning it the nickname "City of Eternal Spring"), affordable living costs, and a growing digital nomad community. The city's efficient public transportation, innovative urban planning, and vibrant cultural scene make it an increasingly popular choice for remote workers.</p>
        
        <h2>Tallinn, Estonia</h2>
        <p>Estonia has positioned itself as a digital leader with its e-Residency program and digital nomad visa. The capital, Tallinn, combines medieval charm with cutting-edge technology infrastructure. While not as affordable as some Asian or Latin American destinations, it offers excellent quality of life, safety, and easy access to the rest of Europe.</p>
        
        <h2>Bali, Indonesia</h2>
        <p>Bali's appeal goes beyond its stunning beaches and lush landscapes. Areas like Canggu and Ubud have developed thriving digital nomad communities with numerous co-working spaces, networking events, and wellness activities. The low cost of living allows for a comfortable lifestyle that might include daily massages, healthy food, and beachfront accommodations.</p>
        
        <h2>Mexico City, Mexico</h2>
        <p>Mexico City offers a perfect blend of affordability, culture, and convenience for North American remote workers. The city's Roma and Condesa neighborhoods are filled with cafes, co-working spaces, and a growing community of international digital nomads. The reasonable time zone for U.S. and Canadian clients makes it particularly attractive for freelancers who need to maintain regular communication.</p>
        
        <h2>Practical Considerations</h2>
        <p>Before embarking on your digital nomad journey, research visa requirements, tax implications, healthcare options, and internet reliability in your chosen destinations. Join online communities like Nomad List or Facebook groups for specific locations to get current information and connect with others already living the lifestyle.</p>
        
        <p>The ideal digital nomad destination varies depending on your work requirements, budget, interests, and preferred lifestyle. Many remote workers find that slow travel—spending several months in each location—allows them to truly experience a place while maintaining productivity and avoiding burnout. Wherever you choose to set up your laptop, the freedom to combine work and travel is the true luxury of the digital nomad lifestyle.</p>
      `,
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Await the params object to access its properties
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
          <p className="mt-2">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <Navbar currentPath={`/blog/${slug}`} />

      <main className="flex-grow">
        <article className="py-8 md:py-12">
          {/* Back to blog link */}
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/blog" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            {/* Blog header */}
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-2">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-gray-700">{post.author}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="text-gray-500">{post.date}</div>
              </div>
            </div>

            {/* Featured image */}
            <div className="max-w-5xl mx-auto mb-10">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Blog content */}
            <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Author bio */}
            <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">About {post.author}</h3>
                  <p className="text-gray-600 mt-2">
                    {post.author} is a travel writer and photographer with a passion for exploring new cultures and
                    sharing travel tips with readers around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
