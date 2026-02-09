import { Card, CardContent } from "@/components/ui/card"

export function CreditCard() {
  return (
    <Card className="w-[360px] rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 text-white shadow-xl">
      <CardContent className="p-6 space-y-6">

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center font-bold">
            PB
          </div>
          <span className="text-sm font-medium text-zinc-200">
            Kairos Bank
          </span>
        </div>

        {/* Chip */}
        <div className="h-10 w-14 rounded-md bg-gradient-to-br from-yellow-400 to-yellow-600" />

        {/* Card Number */}
        <div className="text-lg tracking-widest font-mono">
          4716 6109 5211 3010
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <div className="text-xs text-zinc-400">Expira em</div>
            <div className="font-mono">01/018</div>
            <div className="text-sm font-semibold">
              Leandro Guimarães Ribeiro
            </div>
          </div>

          {/* Visa */}
          <div className="text-lg font-bold tracking-wider">
            VISA
          </div>
        </div>

      </CardContent>
    </Card>
  )
}
