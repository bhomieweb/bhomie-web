"use client"

import { useState } from "react"
import Image from "next/image"
import { PropertySearchFilter } from "@/components/property-search-filter"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react"

export default function PropertySearchPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Mock property data
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: 1250,
      location: "Downtown",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 850,
      type: "Apartment",
      image: "/placeholder.svg?height=300&width=400&query=modern downtown apartment",
      features: ["Parking", "Gym", "Pool"],
      available: "Available Now",
    },
    {
      id: 2,
      title: "Spacious Westside House",
      price: 1850,
      location: "Westside",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1200,
      type: "House",
      image: "/placeholder.svg?height=300&width=400&query=spacious westside house",
      features: ["Garage", "Yard", "Fireplace"],
      available: "Available Dec 1",
    },
    {
      id: 3,
      title: "Luxury Northside Condo",
      price: 2100,
      location: "Northside",
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1500,
      type: "Condo",
      image: "/placeholder.svg?height=300&width=400&query=luxury northside condo",
      features: ["Balcony", "Concierge", "Rooftop"],
      available: "Available Now",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Find Your Perfect Property</h1>
          <p className="text-gray-600">Search through our extensive collection of rental properties</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <PropertySearchFilter variant="full" showResults={false} />
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-600">{properties.length} properties found</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  List
                </Button>
              </div>
            </div>

            {isLoading ? (
              <LoadingSkeleton variant="card" count={6} />
            ) : (
              <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3" : "space-y-6"}>
                {properties.map((property) => (
                  <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className={viewMode === "list" ? "flex" : ""}>
                      <div
                        className={`relative ${viewMode === "list" ? "w-80 flex-shrink-0" : "aspect-[4/3]"} overflow-hidden`}
                      >
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                          <Heart className="h-4 w-4" />
                        </button>
                        <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-700">
                          {property.available}
                        </Badge>
                      </div>
                      <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                        <div className="space-y-3">
                          <div>
                            <h3 className="text-lg font-semibold">{property.title}</h3>
                            <p className="text-gray-600 flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {property.location}
                            </p>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Bed className="h-4 w-4" />
                              {property.bedrooms} bed
                            </span>
                            <span className="flex items-center gap-1">
                              <Bath className="h-4 w-4" />
                              {property.bathrooms} bath
                            </span>
                            <span className="flex items-center gap-1">
                              <Square className="h-4 w-4" />
                              {property.sqft} sqft
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {property.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <div>
                              <p className="text-2xl font-bold text-maroon-700">${property.price}</p>
                              <p className="text-sm text-gray-500">per month</p>
                            </div>
                            <Button className="bg-maroon-700 hover:bg-maroon-800">View Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
