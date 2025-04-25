"use client"
import { client } from "@/lib/dotcms"
import { DotCMSPage } from "@/components/dotcms-page"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default async function TestPage() {
  const pageData = await client.page.get('/', { languageId: '1' })

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar currentPath="/test" />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">dotCMS Test Page</h1>
          <div className="border rounded-lg p-4">
            <DotCMSPage initialPageAsset={pageData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 