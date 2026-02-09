"use client"

import * as React from "react"
import Image from "next/image"
import {
  IconChartBar,
  IconDashboard,
  IconCurrencyDollar,
  IconFolder,
  IconHelp,
  IconFileDollar,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
 
} from "@/components/ui/sidebar"


/* =========================================================
   Dados do usuário
========================================================= */
const user = {
  name: "Leandro Guimarães",
  email: "olamundo.ti@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/85081592?v=4&size=64",
}

/* =========================================================
   Grupos do menu principal
========================================================= */
const navGroups = [
  {
    label: "Visão Geral",
    items: [
      {
        title: "Dashboard",
        url: "#",
        icon: IconDashboard,
      },
    ],
  },
  {
    label: "Operação",
    items: [
      {
        title: "Produtores",
        url: "#",
        icon: IconUsers,
      },
      {
        title: "Produtos",
        url: "#",
        icon: IconFolder,
      },
    ],
  },
  {
    label: "Financeiro",
    items: [
      {
        title: "Financeiro",
        url: "#",
        icon: IconCurrencyDollar,
      },
      {
        title: "Faturas",
        url: "#",
        icon: IconFileDollar,
      },
      {
        title: "Relatórios",
        url: "#",
        icon: IconChartBar,
      },
    ],
  },
]


/* =========================================================
   Menu secundário
========================================================= */
const navSecondary = [
  {
    title: "Configurações",
    url: "#",
    icon: IconSettings,
  },
  {
    title: "Suporte",
    url: "#",
    icon: IconHelp,
  },
  {
    title: "Pesquisar",
    url: "#",
    icon: IconSearch,
  },
]

/* =========================================================
   Label de grupo
========================================================= */
function SidebarGroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-2 text-xs font-semibold uppercase text-muted-foreground">
      {children}
    </div>
  )
}

/* =========================================================
   Sidebar
========================================================= */
export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
    {/* Header */}
   <SidebarHeader className="flex items-start px-3 py-1.5">
  <a href="#" className="flex items-start gap-2">
    <div className="relative h-28 w-40">
      <Image
        src="/kairos-way.png"
        alt="Kairos Way"
        fill
        className="object-contain"
        priority
      />
    </div>
  </a>
</SidebarHeader>



      {/* Conteúdo */}
      <SidebarContent>
        {navGroups.map((group) => (
          <div key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <NavMain items={group.items} />
          </div>
        ))}

        <SidebarGroupLabel>Configurações & Suporte</SidebarGroupLabel>
        <NavSecondary items={navSecondary} />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
      {/* O footer pode ser usado para informações adicionais, links ou ações secundárias*/} 
      </SidebarFooter>
    </Sidebar>
  )
}
