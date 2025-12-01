import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to ALX Listing App</h1>

      <div className="flex justify-center mb-4">
        <Button label="Explore Listings" onClick={() => alert('Coming soon!')} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Cozy Apartment"
          description="A beautiful apartment in the city center."
          image="/assets/placeholder.jpg"
        />
        <Card
          title="Beach House"
          description="Enjoy your vacation near the ocean."
          image="/assets/placeholder.jpg"
        />
        <Card
          title="Mountain Cabin"
          description="Relax in the peaceful mountains."
          image="/assets/placeholder.jpg"
        />
      </div>
    </div>
  )
}
