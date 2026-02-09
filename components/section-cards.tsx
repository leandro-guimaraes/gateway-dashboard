import {
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const kpiCardClass =
  "border border-border bg-gradient-to-t from-primary/5 to-card dark:from-primary/10 dark:to-card shadow-xs"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-3 lg:px-6">

      {/* COLUNA ESQUERDA – KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">

        <Card className={kpiCardClass}>
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <IconTrendingUp />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="flex gap-2 font-medium">
              Trending up this month <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>

        <Card className={kpiCardClass}>
          <CardHeader>
            <CardDescription>New Customers</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              1,234
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <IconTrendingDown />
                -20%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="flex gap-2 font-medium">
              Down 20% this period <IconTrendingDown className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Acquisition needs attention
            </div>
          </CardFooter>
        </Card>

        <Card className={kpiCardClass}>
          <CardHeader>
            <CardDescription>Active Accounts</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              45,678
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <IconTrendingUp />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="flex gap-2 font-medium">
              Strong user retention <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Engagement exceed targets
            </div>
          </CardFooter>
        </Card>

        <Card className={kpiCardClass}>
          <CardHeader>
            <CardDescription>Growth Rate</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              4.5%
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <IconTrendingUp />
                +4.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="flex gap-2 font-medium">
              Steady performance increase <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Meets growth projections
            </div>
          </CardFooter>
        </Card>

      </div>

      {/* COLUNA DIREITA – CARTÃO */}
<div className="flex items-start justify-center lg:justify-end">
  <div
    className={`w-full max-w-md rounded-xl p-6 ${kpiCardClass}`}
  >

    {/* Header */}
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">
        CAIXA
      </span>
    </div>

    {/* Chip */}
    <div className="my-6 h-10 w-14 rounded-md bg-gradient-to-br from-yellow-400 to-yellow-600" />

    {/* Number */}
    <div className="mb-6 font-mono text-lg tracking-widest">
      4716 6109 5211 3010
    </div>

    {/* Footer */}
    <div className="flex items-end justify-between">
      <div className="space-y-1 text-sm">
        <div className="text-xs text-muted-foreground">
          Válido até
        </div>
        <div className="font-mono">
          01/2028
        </div>
        <div className="font-semibold">
          LEANDRO GUIMARÃES RIBEIRO
        </div>
      </div>

      <div className="text-lg font-bold tracking-wider">
        VISA
      </div>
    </div>

  </div>
</div>

    </div>
  )
}
