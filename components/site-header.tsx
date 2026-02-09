import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ToggleTheme } from "./toggle-theme"
import { NavUser } from "./nav-user"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-2 px-4 py-3 lg:px-6">
        <SidebarTrigger className="-ml-1" />

        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <h1 className="text-2xl font-semibold">Transações</h1>

        <div className="ml-auto flex items-center gap-2">
          <ToggleTheme />
          <NavUser
            user={{
              name: "Leandro",
              email: "olamundo.ti@gmail.com",
              avatar: "",
            }}
          />
        </div>
      </div>
    </header>
  )
}

