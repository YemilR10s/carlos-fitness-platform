"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=800&width=1600"
        >
          <source src="#" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      <div className="container relative z-20 py-20 md:py-32 lg:py-40 text-white  max-w-[1200px] m-auto px-5 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transforma Tu Cuerpo, Transforma Tu Vida
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Únete a la comunidad fitness más motivadora de Colombia. Entrenamiento personalizado, nutrición experta y
            resultados garantizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              asChild
            >
              <Link href="/agendar">Agendar llamada 1-1</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10">
              <Play className="mr-2 h-4 w-4" /> Ver video completo
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
