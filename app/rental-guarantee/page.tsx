import Image from "next/image"
import { EnhancedButton } from "@/components/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, DollarSign, Clock, Phone, Mail } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function RentalGuaranteePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/7cb661_0b60b655e27c47278f97e86fb83accd7~mv2.png"
            alt="Rental Guarantee"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Rental Guarantee Program
            </h1>
            <p className="text-xl text-gray-200">
              We'll pay your rent even if your property is vacant. That's our promise to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EnhancedButton variant="primary" size="lg">
                Get Started Today
              </EnhancedButton>
              <EnhancedButton variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Learn More
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Guaranteed Rent. <span className="text-maroon-700">Zero Worries.</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our Rental Guarantee Program ensures you receive your rent payment on time, every month, regardless of
                tenant status. We take on the risk so you don't have to.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Guaranteed monthly rent payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Protection against tenant non-payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Coverage during vacancy periods</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">No more chasing late payments</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=700&query=landlord receiving guaranteed rent payment"
                alt="Guaranteed rent payment"
                width={700}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Delinquent Tenants Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">The Real Cost of Delinquent Tenants</h2>
            <p className="text-lg text-gray-600">
              Delinquent tenants cost property owners much more than just missed rent payments
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="rounded-full bg-gradient-to-br from-maroon-100 to-maroon-200 p-4 w-fit group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-8 w-8 text-maroon-700" />
                </div>
                <h3 className="text-xl font-bold">Lost Rent</h3>
                <p className="text-gray-600">The average eviction results in 3-5 months of lost rental income.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="rounded-full bg-gradient-to-br from-maroon-100 to-maroon-200 p-4 w-fit group-hover:scale-110 transition-transform duration-300">
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
                    className="text-maroon-700"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Legal Fees</h3>
                <p className="text-gray-600">Eviction proceedings can cost $3,000-$10,000 in legal fees alone.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="rounded-full bg-gradient-to-br from-maroon-100 to-maroon-200 p-4 w-fit group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-maroon-700" />
                </div>
                <h3 className="text-xl font-bold">Time & Stress</h3>
                <p className="text-gray-600">Countless hours spent on paperwork, court appearances, and worry.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 space-y-4">
                <div className="rounded-full bg-gradient-to-br from-maroon-100 to-maroon-200 p-4 w-fit group-hover:scale-110 transition-transform duration-300">
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
                    className="text-maroon-700"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Property Damage</h3>
                <p className="text-gray-600">Problem tenants often leave behind significant property damage.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">What's Included</h2>
            <p className="text-lg text-gray-600">
              Our Rental Guarantee Program provides comprehensive protection for property owners
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-gradient-to-br from-amber-100 to-amber-200 p-6">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Eviction Costs Covered</h3>
              <p className="text-gray-600">
                We cover all legal fees and court costs associated with eviction proceedings.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-gradient-to-br from-amber-100 to-amber-200 p-6">
                <DollarSign className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold">Guaranteed Rent Payments</h3>
              <p className="text-gray-600">
                Receive your rent payment on the same day each month, regardless of tenant status.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-gradient-to-br from-amber-100 to-amber-200 p-6">
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Tenant Replacement</h3>
              <p className="text-gray-600">
                We'll find a new qualified tenant quickly if the current one needs to be replaced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">Choose the plan that works best for your property portfolio</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Basic Coverage</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-maroon-700">8%</span>
                    <span className="text-gray-600"> of monthly rent</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Guaranteed rent payments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Basic tenant screening</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Rent collection</span>
                  </li>
                </ul>
                <EnhancedButton variant="primary" className="w-full">
                  Get Started
                </EnhancedButton>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-2 text-sm font-medium rounded-bl-lg">
                Most Popular
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Standard Coverage</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-maroon-700">10%</span>
                    <span className="text-gray-600"> of monthly rent</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>All Basic features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Eviction cost coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Property inspections</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Maintenance coordination</span>
                  </li>
                </ul>
                <EnhancedButton variant="amber" className="w-full">
                  Get Started
                </EnhancedButton>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Premium Coverage</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-maroon-700">12%</span>
                    <span className="text-gray-600"> of monthly rent</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>All Standard features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Property damage protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Priority maintenance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Annual property assessment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Tax preparation assistance</span>
                  </li>
                </ul>
                <EnhancedButton variant="primary" className="w-full">
                  Get Started
                </EnhancedButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tenant Screening Process */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Rigorous Tenant Screening Process</h2>
              <p className="text-lg text-gray-600">
                We can offer our Rental Guarantee Program because we're extremely selective about the tenants we
                approve. Our comprehensive screening process includes:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Credit history verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Income and employment verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Rental history check</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Criminal background check</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Eviction history search</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Personal reference checks</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border shadow-xl">
              <Image
                src="https://static.wixstatic.com/media/7cb661_ec64dbbbe84545f0b0c6c4072f063607~mv2.jpg"
                alt="Tenant screening process"
                width={700}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Secure Your Rental Income?</h2>
              <p className="text-lg text-gray-600">
                Contact us today to learn more about our Rental Guarantee Program and how it can provide you with peace
                of mind and financial security.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-maroon-100 p-3">
                    <Phone className="h-6 w-6 text-maroon-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Call Us</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-maroon-100 p-3">
                    <Mail className="h-6 w-6 text-maroon-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email Us</p>
                    <p className="text-gray-600">guarantee@bhomie.com</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden mt-8">
                <Image
                  src="https://static.wixstatic.com/media/7cb661_fea217ffeece40b283420c9277e99ab2~mv2.png"
                  alt="Service areas map"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
