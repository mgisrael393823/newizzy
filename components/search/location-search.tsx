"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { popularLocations } from "./location-data"

export function LocationSearch() {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")

  const filteredLocations = React.useMemo(() => {
    const searchTerm = query.toLowerCase().trim()
    if (!searchTerm) return popularLocations

    return popularLocations.filter(location => 
      location.name.toLowerCase().includes(searchTerm) ||
      location.region.toLowerCase().includes(searchTerm)
    )
  }, [query])

  const handleSelect = (locationId: string) => {
    router.push(`/listings?location=${locationId}`)
    setIsOpen(false)
  }

  return (
    <Command
      className="relative max-w-lg rounded-xl border bg-background shadow-md"
      shouldFilter={false}
    >
      <div className="flex h-12 items-center gap-2 border-b px-3">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Enter city, neighborhood, or address"
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+8px)] w-full rounded-lg border bg-background p-2 shadow-md">
          <Command.List>
            {filteredLocations.length === 0 && (
              <p className="p-4 text-center text-sm text-muted-foreground">
                No locations found. Please refine your search.
              </p>
            )}
            {filteredLocations.map((location) => (
              <Command.Item
                key={location.id}
                value={location.id}
                onSelect={handleSelect}
                className="flex cursor-pointer items-center justify-between rounded-md px-4 py-2 text-sm hover:bg-accent"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div>{location.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {location.region}
                    </div>
                  </div>
                </div>
                {location.badge && (
                  <Badge variant="secondary" className="ml-2">
                    {location.badge}
                  </Badge>
                )}
              </Command.Item>
            ))}
          </Command.List>
        </div>
      )}
    </Command>
  )
}