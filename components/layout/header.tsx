"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Search,
  Menu,
  Heart,
  MessageSquare,
  Settings,
  PlusCircle,
  LayoutDashboard,
  User,
  MapPin,
  Bell,
  LogOut,
  UserPlus,
} from "lucide-react"

interface NavItem {
  name: string
  href: string
  icon: React.ElementType
  description?: string
}

const renterNavigation: NavItem[] = [
  { 
    name: "Find a Home",
    href: "/listings",
    icon: Search,
    description: "Browse available properties"
  },
  { 
    name: "Saved Homes",
    href: "/saved",
    icon: Heart,
    description: "View your favorited properties"
  },
  { 
    name: "Applications",
    href: "/dashboard/applications",
    icon: Search,
    description: "Track your rental applications"
  },
]

const landlordNavigation: NavItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Manage your properties"
  },
  {
    name: "Properties",
    href: "/dashboard/properties",
    icon: Building2,
    description: "View and edit your listings"
  },
  {
    name: "Applications",
    href: "/dashboard/applications",
    icon: Search,
    description: "Review tenant applications"
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleNavigation = useCallback((path: string) => {
    router.push(path)
    setIsOpen(false)
  }, [router])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-primary transition-colors hover:text-primary/80" />
            <span className="hidden font-semibold sm:inline-block">
              RentSpace
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Find a Home
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[240px]">
                <DropdownMenuLabel>For Renters</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {renterNavigation.map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      {item.description && (
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  For Landlords
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[240px]">
                <DropdownMenuLabel>Property Management</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {landlordNavigation.map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      {item.description && (
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                    3
                  </span>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleNavigation("/inbox")}>
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">username</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        user@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => handleNavigation("/dashboard")}>
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleNavigation("/settings")}>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </div>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation("/sign-in")}
                >
                  Sign In
                </Button>
              </>
            )}
            <Button
              className={cn(
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "transition-all duration-200 ease-in-out",
                "shadow-sm hover:shadow-md"
              )}
              onClick={() => handleNavigation("/list-property")}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              List Property
            </Button>
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="flex flex-col h-full">
              <Link
                href="/"
                className="flex items-center space-x-2 mb-8"
                onClick={() => setIsOpen(false)}
              >
                <Building2 className="h-5 w-5 text-primary" />
                <span className="font-semibold">RentSpace</span>
              </Link>

              <div className="flex flex-col gap-6 flex-1">
                <div className="flex flex-col gap-2">
                  {!isLoggedIn && (
                    <>
                      <Button
                        className="w-full"
                        onClick={() => handleNavigation("/sign-in")}
                      >
                        <User className="mr-2 h-4 w-4" />
                        Sign In
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => handleNavigation("/sign-up")}
                      >
                        <UserPlus className="mr-2 h-4 w-4" />
                        Create Account
                      </Button>
                    </>
                  )}
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-2">For Renters</h3>
                  <nav className="flex flex-col space-y-1">
                    {[...renterNavigation, { name: "Messages", href: "/inbox", icon: MessageSquare }].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={cn(
                          "flex items-center gap-2 py-2 px-3 text-sm rounded-md",
                          "text-foreground/60 transition-colors hover:text-foreground",
                          "hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-2">For Landlords</h3>
                  <nav className="flex flex-col space-y-1">
                    {landlordNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={cn(
                          "flex items-center gap-2 py-2 px-3 text-sm rounded-md",
                          "text-foreground/60 transition-colors hover:text-foreground",
                          "hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="border-t pt-4 mt-auto">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleNavigation('/list-property')}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  List Your Property
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}