import { SAMPLE_LISTINGS } from "@/lib/sample-data"
import { ListingContent } from "./listing-content"

// This must be a Server Component to use generateStaticParams
export function generateStaticParams() {
  return SAMPLE_LISTINGS.map((listing) => ({
    id: listing.id,
  }))
}

export default function ListingPage({ params }: { params: { id: string } }) {
  const property = SAMPLE_LISTINGS.find(listing => listing.id === params.id)

  if (!property || !property.details) {
    return null
  }

  const propertyData = {
    ...property,
    details: property.details
  }

  return <ListingContent property={propertyData} />
}