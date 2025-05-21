import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center w-full gap-4 border-b bg-background px-4 md:px-6 m-auto">
      <SidebarTrigger />
      <div className="w-full flex-1">
        <form className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Buscar..."
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-8 pr-4 text-sm outline-none focus:border-gray-300 focus:ring-0 md:w-2/3 lg:w-1/3"
          />
        </form>
      </div>
      <Avatar>
        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@coach" />
        <AvatarFallback>CF</AvatarFallback>
      </Avatar>
    </header>
  )
}
