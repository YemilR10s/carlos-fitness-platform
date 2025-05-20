"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function StickyBanner() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="sticky top-0 z-50 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4"
        >
          <div className="container flex justify-between items-center">
            <p className="text-sm font-medium">Tu suscripción vence pronto, renueva ahora</p>
            <button onClick={() => setShowBanner(false)} className="text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
