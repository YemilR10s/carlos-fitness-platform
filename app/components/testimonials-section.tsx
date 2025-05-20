"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/data"
import Image from "next/image"

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonios" className="py-20 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Historias reales de transformación y éxito con nuestros programas.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `${-100 * activeTestimonial}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <div className="h-24 w-24 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-1">
                            <Star className="h-4 w-4 text-white" fill="white" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg italic">{testimonial.quote}</p>
                        <div className="flex justify-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-yellow-500"
                              fill={i < testimonial.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        <p className="font-medium">{testimonial.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`h-2 w-2 rounded-full ${
                activeTestimonial === index ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-muted"
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
