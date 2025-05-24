"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EnhancedButton } from "@/components/enhanced-button"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  return (
    <div className="rounded-lg border bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Input placeholder="Your Name" required />
          <Input placeholder="Phone Number" type="tel" required />
        </div>
        <Input placeholder="Email Address" type="email" required />
        <Input placeholder="Property Address (if applicable)" />
        <Textarea placeholder="How can we help you?" className="min-h-[120px]" required />
        <EnhancedButton variant="primary" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Request"
          )}
        </EnhancedButton>
      </form>
    </div>
  )
}
