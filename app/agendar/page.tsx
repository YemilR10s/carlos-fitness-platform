import MultiStepForm from "../components/forms/multi-step-form"

export default function AgendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12 ">
      <div className="container max-w-[1200px] m-auto px-5 md:px-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Agenda tu llamada 1-1</h1>
          <p className="text-muted-foreground">Cuéntanos un poco sobre ti para personalizar tu experiencia fitness</p>
        </div>
        <MultiStepForm />
      </div>
    </div>
  )
}
