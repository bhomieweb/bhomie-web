import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Check } from "lucide-react"
import { EnhancedButton } from "@/components/enhanced-button"
import { ImageCarousel } from "@/components/image-carousel"
import { PropertySearchFilter } from "@/components/property-search-filter"

export default function LandingPage() {
  const heroImages = [
    {
      src: "/modern-city-sunset.png",
      alt: "Modern city skyline",
      title: "Professional Property Management",
      description: "Innovative solutions for your real estate portfolio",
    },
    {
      src: "/luxury-apartment-exterior.png",
      alt: "Luxury apartments",
      title: "Premium Properties",
      description: "Managing high-end residential properties",
    },
    {
      src: "/placeholder-f6b8d.png",
      alt: "Professional team",
      title: "Expert Team",
      description: "24+ years of industry experience",
    },
  ]

  const propertyImages = [
    {
      src: "/placeholder.svg?height=400&width=600&query=modern 2 bedroom apartment interior",
      alt: "2 bedroom apartment",
      title: "$1,250/month",
      description: "2 bed, 1 bath • 850 sqft • Downtown",
    },
    {
      src: "/placeholder.svg?height=400&width=600&query=spacious 3 bedroom house exterior",
      alt: "3 bedroom house",
      title: "$1,850/month",
      description: "3 bed, 2 bath • 1200 sqft • Westside",
    },
    {
      src: "/placeholder.svg?height=400&width=600&query=luxury 3 bedroom condo with balcony",
      alt: "3 bedroom condo",
      title: "$2,100/month",
      description: "3 bed, 2.5 bath • 1500 sqft • Northside",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <ImageCarousel images={heroImages} className="h-full" showDots={false} />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Innovative Property Management Solutions for Your Enterprise
            </h1>
            <p className="text-xl text-gray-200">
              Simplify your property management with Bhomie's comprehensive solutions. Over 24 years of experience
              managing $1.7B+ in properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EnhancedButton variant="primary" size="lg">
                Get Started Today
              </EnhancedButton>
              <EnhancedButton
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                Learn More
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-y border-gray-200 bg-gray-50 py-8">
        <div className="container px-4 md:px-6">
          <p className="text-center text-gray-600 mb-6 font-medium">Trusted by leading property owners and investors</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=60&width=120&query=real estate company logo ${i}`}
                  alt={`Partner logo ${i}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Own Properties Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Own Properties,
                <br />
                <span className="text-maroon-700">Not Problems.</span>
              </h2>
              <p className="text-lg text-gray-600">
                Focus on building your real estate portfolio while we take care of the day-to-day management. Our
                comprehensive property management solutions ensure your investments are well-maintained and profitable.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">24/7 maintenance support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Tenant screening and placement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Rent collection and financial reporting</span>
                </div>
              </div>
              <div className="rounded-xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Request Free Consultation</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input placeholder="Your Name" className="border-gray-300 focus:border-maroon-500" />
                    <Input placeholder="Phone Number" className="border-gray-300 focus:border-maroon-500" />
                  </div>
                  <Input placeholder="Email Address" className="border-gray-300 focus:border-maroon-500" />
                  <Input placeholder="Property Address" className="border-gray-300 focus:border-maroon-500" />
                  <EnhancedButton variant="primary" className="w-full">
                    Request Free Consultation
                  </EnhancedButton>
                </form>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700&query=property management dashboard interface"
                alt="Property management calendar"
                width={700}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Why Choose Bhomie?</h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive property management solutions that make your life easier and your properties more
              profitable.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="rounded-full bg-gradient-to-br from-amber-100 to-amber-200 p-4 w-fit group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Property Protection</h3>
                <p className="text-gray-600">
                  Our comprehensive property protection plans ensure your investments are safe and well-maintained.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="rounded-full bg-gradient-to-br from-amber-100 to-amber-200 p-4 w-fit group-hover:scale-110 transition-transform duration-300">
                  <CalendarDays className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Efficient Scheduling</h3>
                <p className="text-gray-600">
                  Our smart scheduling system ensures maintenance and inspections are performed on time, every time.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="rounded-full bg-gradient-to-br from-amber-100 to-amber-200 p-4 w-fit group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Tenant Screening</h3>
                <p className="text-gray-600">
                  Our rigorous tenant screening process ensures you get reliable, responsible tenants for your
                  properties.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <EnhancedButton variant="amber" size="lg">
              Learn More About Our Services
            </EnhancedButton>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Explore our comprehensive property management solutions</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&query=rental guarantee handshake agreement"
                  alt="Rental Guarantee"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4 bg-gradient-to-br from-amber-50 to-white">
                <h3 className="text-xl font-bold">Rental Guarantee</h3>
                <p className="text-gray-600 text-sm">
                  We'll pay your rent even if your property is vacant. That's our promise to you.
                </p>
                <Link href="/rental-guarantee">
                  <EnhancedButton variant="amber" className="w-full">
                    Learn More
                  </EnhancedButton>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&query=property management professional service"
                  alt="Property Management"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4 bg-gradient-to-br from-amber-50 to-white">
                <h3 className="text-xl font-bold">Property Management</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive management services to maximize your property's potential and minimize your stress.
                </p>
                <Link href="/property-management">
                  <EnhancedButton variant="amber" className="w-full">
                    Learn More
                  </EnhancedButton>
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&query=tenant placement screening interview"
                  alt="Tenant Placement"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4 bg-gradient-to-br from-amber-50 to-white">
                <h3 className="text-xl font-bold">Tenant Placement</h3>
                <p className="text-gray-600 text-sm">
                  Our rigorous screening process ensures you get reliable, responsible tenants for your properties.
                </p>
                <Link href="/tenant-placement">
                  <EnhancedButton variant="amber" className="w-full">
                    Learn More
                  </EnhancedButton>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-maroon-700 to-maroon-800 py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4 text-center text-white">
            <div className="space-y-2">
              <p className="text-4xl font-bold">$1.7B+</p>
              <p className="text-maroon-100">Properties Managed</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">2000+</p>
              <p className="text-maroon-100">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">92%</p>
              <p className="text-maroon-100">Tenant Retention</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold">24.1</p>
              <p className="text-maroon-100">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center md:text-4xl mb-12">Our Happy Landlords</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "Bhomie has transformed how I manage my properties. The guaranteed rent program gives me peace of
                    mind I never had before."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=48&width=48&query=professional headshot ${i}`}
                        alt="Client"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">John Smith</p>
                      <p className="text-xs text-gray-500">Property Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-maroon-50 to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600">
              Contact us today for a free consultation and discover how Bhomie can transform your property management
              experience.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-maroon-100 p-3">
                  <svg className="h-6 w-6 text-maroon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-maroon-100 p-3">
                  <svg className="h-6 w-6 text-maroon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-600">info@bhome.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-maroon-100 p-3">
                  <svg className="h-6 w-6 text-maroon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-gray-600">
                    123 Property Lane
                    <br />
                    Real Estate City, RE 12345
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Get Your Free Consultation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input placeholder="Your Name" className="border-gray-300 focus:border-maroon-500" />
                  <Input placeholder="Phone Number" className="border-gray-300 focus:border-maroon-500" />
                </div>
                <Input placeholder="Email Address" className="border-gray-300 focus:border-maroon-500" />
                <Input placeholder="Property Address (optional)" className="border-gray-300 focus:border-maroon-500" />
                <EnhancedButton variant="primary" className="w-full">
                  Request Free Consultation
                </EnhancedButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
