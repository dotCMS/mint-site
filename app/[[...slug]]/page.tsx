import { client } from "@/lib/dotcms"
import { DotCMSPage } from "@/components/dotcms-page"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const getPageData = async () => {
  try {
    const pageAsset = await client.page.get('/')
    return { pageAsset, error: null }
  } catch (error) {
    console.error('Error fetching page data:', error)
    return { pageAsset: null, error }
  }
}

export default async function Home() {
  const { pageAsset, error } = await getPageData()

  if (error) {
    return <div>Error loading page</div>
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar currentPath="/test" />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
            {pageAsset && <DotCMSPage initialPageAsset={pageAsset} />}
        </div>
      </main>
      <Footer />
    </div>
  )
} 