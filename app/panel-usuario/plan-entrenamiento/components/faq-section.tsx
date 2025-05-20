import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FaqSection() {
  const faqs = [
    {
      question: "¿Cuántas repeticiones debo hacer de cada ejercicio?",
      answer:
        "Para este entrenamiento, recomendamos 3 series de 12-15 repeticiones para cada ejercicio. Si sientes que es demasiado fácil, puedes aumentar el peso o las repeticiones.",
    },
    {
      question: "¿Qué equipamiento necesito para esta rutina?",
      answer:
        "Para el entrenamiento de hoy necesitarás mancuernas de peso medio, una colchoneta y opcionalmente una banda de resistencia. Todos los ejercicios pueden adaptarse si no tienes alguno de estos elementos.",
    },
    {
      question: "¿Debo calentar antes de comenzar?",
      answer:
        "Sí, es fundamental realizar un calentamiento de 5-10 minutos antes de comenzar la rutina. En el video se muestra un calentamiento básico que puedes seguir.",
    },
    {
      question: "¿Puedo hacer esta rutina si tengo lesiones previas?",
      answer:
        "Si tienes lesiones previas, especialmente en hombros o codos, consulta con tu médico antes de realizar esta rutina. Puedes modificar o saltar ejercicios específicos según tus necesidades.",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Preguntas frecuentes sobre esta lección</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-sm font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
