import Image from "next/image"
import { EnhancedButton } from "@/components/enhanced-button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, BarChart, FileText, Phone, Mail } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function PropertyManagementPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600&query=professional property manager with tablet at building"
            alt="Property Management"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Professional Property Management
            </h1>
            <p className="text-lg text-gray-200">
              Maximize your rental income while we handle the day-to-day management of your properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EnhancedButton variant="primary">Get Started</EnhancedButton>
              <EnhancedButton variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-bold text-maroon-700">$1.7B+</p>
              <p className="text-gray-600 mt-1">Properties Managed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-maroon-700">2000+</p>
              <p className="text-gray-600 mt-1">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-maroon-700">92%</p>
              <p className="text-gray-600 mt-1">Tenant Retention</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-maroon-700">24.1</p>
              <p className="text-gray-600 mt-1">Years Experience</p>
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
                Comprehensive Property Management Services
              </h2>
              <p className="text-gray-600">
                At Bhomie, we handle every aspect of property management so you can focus on growing your investment
                portfolio. Our experienced team provides end-to-end solutions tailored to your specific needs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Tenant screening and placement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Rent collection and financial reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Property maintenance and repairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Legal compliance and eviction handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-maroon-700" />
                  <span>Regular property inspections</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600&query=property management software dashboard mobile"
                alt="Property management mobile app"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Reporting Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative rounded-xl overflow-hidden border shadow-lg md:order-first order-last">
              <Image
                src="/placeholder.svg?height=400&width=600&query=real estate financial analytics dashboard"
                alt="Financial reporting dashboard"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Detailed Financial Reporting</h2>
              <p className="text-gray-600">
                Stay informed about your property's financial performance with our comprehensive reporting tools. Access
                real-time data and insights to make informed investment decisions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-maroon-700" />
                  <span>Monthly income and expense statements</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-maroon-700" />
                  <span>Annual property performance reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-maroon-700" />
                  <span>Tax preparation documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-maroon-700" />
                  <span>Maintenance expense tracking</span>
                </div>
              </div>
              <EnhancedButton variant="primary">View Sample Report</EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Maintenance Services</h2>
            <p className="mt-2 text-gray-600">
              Keep your properties in top condition with our professional maintenance services
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden border-none shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&query=emergency maintenance repair van"
                  alt="Maintenance services"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3 bg-amber-50">
                <h3 className="text-xl font-bold">24/7 Emergency Repairs</h3>
                <p className="text-gray-600 text-sm">
                  Our maintenance team is available around the clock to handle any emergency repairs your property may
                  need.
                </p>
                <EnhancedButton variant="amber">Learn More</EnhancedButton>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&query=property inspection checklist"
                  alt="Preventative maintenance"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3 bg-amber-50">
                <h3 className="text-xl font-bold">Preventative Maintenance</h3>
                <p className="text-gray-600 text-sm">
                  Regular inspections and maintenance to prevent costly repairs and extend the life of your property.
                </p>
                <EnhancedButton variant="amber">Learn More</EnhancedButton>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500&query=home renovation before after"
                  alt="Renovation services"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-3 bg-amber-50">
                <h3 className="text-xl font-bold">Renovation Services</h3>
                <p className="text-gray-600 text-sm">
                  Upgrade your property to increase rental value and attract quality tenants with our renovation
                  services.
                </p>
                <EnhancedButton variant="amber">Learn More</EnhancedButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Transparent Pricing</h2>
            <p className="mt-2 text-gray-600">Choose the management plan that works best for your property portfolio</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Basic Management</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">6%</span>
                    <span className="text-gray-600"> of monthly rent</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Tenant screening</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Rent collection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Monthly statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Annual inspections</span>
                  </li>
                </ul>
                <EnhancedButton variant="primary" className="w-full">
                  Get Started
                </EnhancedButton>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md relative">
              <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Most Popular
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Full-Service Management</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">8%</span>
                    <span className="text-gray-600"> of monthly rent</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>All Basic features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Maintenance coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Quarterly inspections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Lease renewals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>24/7 emergency response</span>
                  </li>
                </ul>
                <EnhancedButton variant="amber" className="w-full">
                  Get Started
                </EnhancedButton>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold">Premium Management</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">10%</span>
                    <span className="text-gray-600"> of monthly rent</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>All Full-Service features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Rental guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Monthly inspections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Eviction protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Property marketing</span>
                  </li>
                  <li className="flex items-center gap-2">
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

      {/* Owner Portal Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Owner Portal Access</h2>
              <p className="text-gray-600">
                Stay connected to your property with our user-friendly owner portal. Access important information and
                documents anytime, anywhere.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-maroon-700" />
                  <span>View financial statements and reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-maroon-700" />
                  <span>Access property inspection reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-maroon-700" />
                  <span>Review and approve maintenance requests</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-maroon-700" />
                  <span>Download tax documents</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-maroon-700" />
                  <span>Communicate with your property manager</span>
                </div>
              </div>
              <EnhancedButton variant="primary">Request Demo</EnhancedButton>
            </div>
            <div className="relative rounded-xl overflow-hidden border shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600&query=owner portal property management interface"
                alt="Owner portal dashboard"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Ready to Simplify Your Property Management?
              </h2>
              <p className="text-gray-600">
                Contact us today to learn more about our property management services and how we can help maximize your
                rental income while minimizing your stress.
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
                    <p className="text-gray-600">management@bhomie.com</p>
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
