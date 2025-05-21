export default function Footer() {
    return (
      <footer className="bg-muted py-12 border-t">
        <div className="container max-w-[1200px] m-auto px-5 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                  C
                </div>
                Carlos Fitness
              </div>
              <p className="text-sm text-muted-foreground">
                Transformando vidas a través del fitness desde 2010. Tres gimnasios en Colombia con la mejor experiencia
                de entrenamiento.
              </p>
            </div>
  
            <div>
              <h3 className="font-medium mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#planes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Planes
                  </a>
                </li>
                <li>
                  <a href="#horarios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Horarios
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonios"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#nutricion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Nutrición
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-medium mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">info@carlosfitness.co</li>
                <li className="text-sm text-muted-foreground">+57 300 123 4567</li>
                <li className="text-sm text-muted-foreground">Bucaramanga, Medellín, Cali</li>
              </ul>
            </div>
  
            <div>
              <h3 className="font-medium mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-muted-foreground/10 flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-muted-foreground/10 flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-muted-foreground/10 flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-muted-foreground/10 flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Carlos Fitness. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  