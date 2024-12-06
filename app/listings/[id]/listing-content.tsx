'use client'

import { PropertyGallery } from "@/components/property/property-gallery"
import { PropertyOverview } from "@/components/property/property-overview"
import { PropertyLocation } from "@/components/property/property-location"
import { PropertyApplication } from "@/components/property/property-application"
import { PropertyContact } from "@/components/property/property-contact"
import { Separator } from "@/components/ui/separator"
import { PropertyActions } from "@/components/property/property-actions"
import { PropertyReviews } from "@/components/property/property-reviews"
import { type SampleListing } from "@/lib/sample-data"

interface ListingContentProps {
  property: SampleListing & { 
    details: NonNullable<SampleListing['details']> 
  }
}

export function ListingContent({ property }: ListingContentProps) {
  return (
    <div className="min-h-screen pb-16">
      <PropertyGallery images={property.details.images} />
      
      <div className="container px-4 -mt-20">
        <div className="grid gap-8 lg:grid-cols-[1fr,380px]">
          <div className="space-y-8">
            <PropertyActions propertyId={property.id} />
            <PropertyOverview
              title={property.title}
              address={property.address}
              price={property.price}
              beds={property.beds}
              baths={property.baths}
              sqft={property.sqft}
              propertyType={property.propertyType}
              description={property.details.description}
              amenities={property.details.amenities}
              petPolicy={property.details.petPolicy}
              availability={property.details.availability}
              leaseTerms={property.details.leaseTerms}
            />
            <Separator />
            <PropertyLocation
              address={property.address}
              location={property.details.location}
            />
            <PropertyReviews propertyId={property.id} />
          </div>
          
          <div className="space-y-4">
            <PropertyApplication
              price={property.price}
              availability={property.details.availability}
              screeningFee={property.details.screeningFee}
              propertyId={property.id}
            />
            <PropertyContact />
          </div>
        </div>
      </div>
    </div>
  )
}