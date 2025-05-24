"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MapPin, Home, DollarSign, Bed } from "lucide-react"
import Link from "next/link"

interface PropertySearchFilterProps {
  variant?: "compact" | "full"
  showResults?: boolean
}

export function PropertySearchFilter({ variant = "compact", showResults = false }: PropertySearchFilterProps) {
  const [priceRange, setPriceRange] = useState([500, 3000])
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [bathrooms, setBathrooms] = useState("")

  const handleSearch = () => {
    // Handle search logic here
    console.log("Search filters:", { priceRange, location, propertyType, bedrooms, bathrooms })
  }

  if (variant === "compact") {
    return (
      <Card className="w-full max-w-4xl mx-auto shadow-lg border-none bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-center">Find Your Perfect Property</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5 items-end">
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </Label>
              <Input
                id="location"
                placeholder="Enter city or area"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="property-type" className="text-sm font-medium flex items-center gap-2">
                <Home className="h-4 w-4" />
                Property Type
              </Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Any type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bedrooms" className="text-sm font-medium flex items-center gap-2">
                <Bed className="h-4 w-4" />
                Bedrooms
              </Label>
              <Select value={bedrooms} onValueChange={setBedrooms}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Price Range
              </Label>
              <div className="px-2">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={5000}
                  min={500}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSearch} className="flex-1 bg-maroon-700 hover:bg-maroon-800">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Link href="/property-search">
                <Button variant="outline" className="border-maroon-700 text-maroon-700 hover:bg-maroon-50">
                  Advanced
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="location-full">Location</Label>
              <Input
                id="location-full"
                placeholder="Enter city, neighborhood, or ZIP code"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="property-type-full">Property Type</Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Bedrooms</Label>
              <Select value={bedrooms} onValueChange={setBedrooms}>
                <SelectTrigger>
                  <SelectValue placeholder="Any bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="1">1 Bedroom</SelectItem>
                  <SelectItem value="2">2 Bedrooms</SelectItem>
                  <SelectItem value="3">3 Bedrooms</SelectItem>
                  <SelectItem value="4">4+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Bathrooms</Label>
              <Select value={bathrooms} onValueChange={setBathrooms}>
                <SelectTrigger>
                  <SelectValue placeholder="Any bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+ Bathroom</SelectItem>
                  <SelectItem value="1.5">1.5+ Bathrooms</SelectItem>
                  <SelectItem value="2">2+ Bathrooms</SelectItem>
                  <SelectItem value="2.5">2.5+ Bathrooms</SelectItem>
                  <SelectItem value="3">3+ Bathrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Label>
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </Label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={5000}
              min={500}
              step={50}
              className="w-full"
            />
          </div>

          <Button onClick={handleSearch} className="w-full bg-maroon-700 hover:bg-maroon-800">
            <Search className="h-4 w-4 mr-2" />
            Search Properties
          </Button>
        </CardContent>
      </Card>

      {showResults && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Search Results</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Property results would be rendered here */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200"></div>
              <CardContent className="p-4">
                <h4 className="font-semibold">Sample Property</h4>
                <p className="text-sm text-gray-600">2 bed, 1 bath • 850 sqft</p>
                <p className="text-lg font-bold text-maroon-700">$1,250/month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
