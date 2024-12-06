"use client"

import { Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { LocationSearch } from "@/components/search/location-search"

export function HeroSection() {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <section className="relative flex min-h-[75vh] md:min-h-[80vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
          alt="Modern apartment building"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/80" />
      </div>
      
      <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
        <div className={cn(
          "transition-all duration-300 ease-in-out",
          isSearchFocused ? "mb-4 -translate-y-4" : "mb-8"
        )}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              RentSpace
            </h1>
          </div>
          <p className={cn(
            "mx-auto text-base text-muted-foreground sm:text-lg transition-all duration-300",
            isSearchFocused ? "opacity-0" : "opacity-100"
          )}>
            Find your next home with confidence
          </p>
        </div>
        
        <div className={cn(
          "mx-auto rounded-2xl bg-background/95 shadow-lg backdrop-blur-sm transition-all duration-300",
          "hover:shadow-xl",
          isSearchFocused ? "p-6" : "p-3 sm:p-4"
        )}>
          <LocationSearch />
          
          <div className={cn(
            "overflow-hidden transition-all duration-300",
            isSearchFocused ? "h-8 opacity-100 mt-3" : "h-0 opacity-0"
          )}>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              Advanced Search
              <ArrowRight className={cn(
                "ml-1 h-3 w-3 transition-transform",
                showAdvanced && "rotate-90"
              )} />
            </Button>
          </div>
        </div>
        
        <div className={cn(
          "mt-8 text-center transition-all duration-300",
          isSearchFocused ? "opacity-0" : "opacity-100"
        )}>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span>1M+ Active Listings</span>
            <span>•</span>
            <span>50K+ Happy Renters</span>
            <span>•</span>
            <span>100+ Cities</span>
          </div>
        </div>
      </div>
    </section>
  )
}