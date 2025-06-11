import Image from "next/image"
import { EnhancedButton } from "@/components/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Search, UserCheck, FileText, Phone, Mail } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function TenantPlacementPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/7cb661_3e60321bd5a9456cbaf0793aa11a544c~mv2.png"
            alt="Tenant Placement"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Professional Tenant Placement
            </h1>
            <p className="text-lg text-gray-200">
              Find qualified, reliable tenants for your rental properties with our comprehensive tenant placement
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EnhancedButton variant="primary">Get Started</EnhancedButton>
              <EnhancedButton variant="secondary">Learn More</EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-bold text-maroon-700">98%</p>
              <p className="text-gray-600 mt-1">Placement Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-maroon-700">14 Days</p>
              <p className="text-gray-600 mt-1">Average Time to Place</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-maroon-700">92%</p>
              <p className="text-gray-600 mt-1">Tenant Retention</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-maroon-700">5000+</p>
              <p className="text-gray-600 mt-1">Tenants Placed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Finding Quality Tenants for Your Properties
              </h2>
              <p className="text-gray-600">
                At Bhomie, we understand that finding the right tenant is crucial to your success as a property owner.
                Our comprehensive tenant placement service is designed to find reliable, responsible tenants who will
                care for your property and pay rent on time.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Thorough tenant screening process</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Professional property marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Showing coordination</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Application processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Lease preparation and signing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Move-in coordination</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600&query=tenant application review background check"
                alt="Tenant screening process"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Screening Process */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Our Tenant Screening Process</h2>
            <p className="mt-2 text-gray-600">
              We use a comprehensive screening process to ensure only qualified tenants are placed in your property
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 space-y-3">
                <div className="rounded-full bg-amber-100 p-3 w-fit">
                  <Search className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Background Checks</h3>
                <p className="text-gray-600">
                  Comprehensive criminal background checks at national, state, and county levels to ensure tenant
                  safety.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 space-y-3">
                <div className="rounded-full bg-amber-100 p-3 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                    <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
                    <path d="M14 6h0a6 6 0 0 1 6 6v3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Credit Verification</h3>
                <p className="text-gray-600">
                  Thorough credit history analysis to assess financial responsibility and payment reliability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 space-y-3">
                <div className="rounded-full bg-amber-100 p-3 w-fit">
                  <UserCheck className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold">Reference Checks</h3>
                <p className="text-gray-600">
                  Verification of employment, income, and previous landlord references to confirm reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Residential Leasing Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative rounded-xl overflow-hidden border shadow-lg md:order-first order-last">
              <Image
                src="https://static.wixstatic.com/media/7cb661_ec64dbbbe84545f0b0c6c4072f063607~mv2.jpg"
                alt="Residential leasing"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Professional Residential Leasing</h2>
              <p className="text-gray-600">
                Our leasing experts handle every aspect of the leasing process, from marketing your property to
                finalizing the lease agreement.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-maroon-700" />
                  <span>Professional property photography</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-maroon-700" />
                  <span>Compelling property listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-maroon-700" />
                  <span>Targeted marketing campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-maroon-700" />
                  <span>Scheduled property showings</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-maroon-700" />
                  <span>Legally compliant lease agreements</span>
                </div>
              </div>
              <EnhancedButton variant="primary" className="mt-2">
                Learn More
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Leasing Process Steps */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Our 4-Step Leasing Process</h2>
            <p className="mt-2 text-gray-600">A streamlined approach to finding the perfect tenant for your property</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 rounded-full bg-maroon-700 text-white w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold">Property Marketing</h3>
                <p className="text-gray-600 mt-2">
                  We create professional listings and market your property across multiple platforms.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 rounded-full bg-maroon-700 text-white w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold">Tenant Screening</h3>
                <p className="text-gray-600 mt-2">
                  Rigorous screening process to identify qualified, reliable tenants.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 rounded-full bg-maroon-700 text-white w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold">Lease Preparation</h3>
                <p className="text-gray-600 mt-2">
                  Legally compliant lease agreements tailored to your property and requirements.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 rounded-full bg-maroon-700 text-white w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold">Move-In Coordination</h3>
                <p className="text-gray-600 mt-2">
                  Smooth transition for tenants with detailed move-in inspections and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Protection Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Property Protection Guarantee</h2>
              <p className="text-gray-600">
                Our tenant placement service includes a Property Protection Guarantee to give you peace of mind. If a
                tenant we place defaults within the first 6 months, we'll find a replacement at no additional cost.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>6-month tenant guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Free replacement if tenant defaults</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Detailed move-in/move-out inspections</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Security deposit management</span>
                </div>
              </div>
              <EnhancedButton variant="primary" className="mt-2">
                Learn More
              </EnhancedButton>
            </div>
            <div className="relative rounded-xl overflow-hidden border shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/7cb661_ee01718c95bc4956912ee09000d1ef03~mv2.png"
                alt="Property protection"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Partners Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Our Marketing Partners</h2>
            <p className="mt-2 text-gray-600">
              We list your property on all major rental platforms to maximize exposure
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
                <Image
                  src={`/placeholder.svg?height=64&width=128&query=rental listing website logo ${i}`}
                  alt={`Marketing partner ${i}`}
                  width={128}
                  height={64}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realtor Referral Program */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="bg-maroon-50 rounded-xl p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Realtor Referral Program</h2>
                <p className="text-gray-600">
                  Are you a real estate agent with clients looking for property management or tenant placement services?
                  Join our referral program and earn competitive commissions for each successful referral.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-maroon-700" />
                    <span>Competitive commission structure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-maroon-700" />
                    <span>Quick payment processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-maroon-700" />
                    <span>Marketing materials provided</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-maroon-700" />
                    <span>Dedicated referral coordinator</span>
                  </div>
                </div>
                <EnhancedButton variant="primary" className="mt-2">
                  Join Referral Program
                </EnhancedButton>
              </div>
              <div className="relative rounded-xl overflow-hidden border shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/7cb661_61db95c0f5644a82b9bf40ab250ea70a~mv2.jpg"
                  alt="Realtor referral program"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to Find the Perfect Tenant?</h2>
              <p className="text-gray-600">
                Contact us today to learn more about our tenant placement services and how we can help you find
                reliable, responsible tenants for your rental properties.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-maroon-100 p-2">
                    <Phone className="h-5 w-5 text-maroon-700" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-maroon-100 p-2">
                    <Mail className="h-5 w-5 text-maroon-700" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-gray-600">leasing@bhomie.com</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
