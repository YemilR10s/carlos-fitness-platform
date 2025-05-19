"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/data"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-[1200px] m-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "linear" }}
            className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white"
          >
            C
          </motion.div>
          Carlos Fitness
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <Button
            variant="default"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          >
            Agendar llamada 1-1
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cambiar tema"
          >
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cambiar tema"
          >
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Abrir menú">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
