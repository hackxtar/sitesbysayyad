
"use client"

import * as React from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const themes = [
    { name: "Default", value: "default" },
    { name: "Light", value: "light" },
    { name: "Forest", value: "forest" },
    { name: "Ocean", value: "ocean" },
    { name: "Sunset", value: "sunset" },
    { name: "Monochrome", value: "monochrome" },
    { name: "Matrix", value: "matrix" },
    { name: "Corporate", value: "corporate" },
    { name: "Vibrant", value: "vibrant" },
    { name: "Rose", value: "rose" },
]

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
            <DropdownMenuItem key={theme.value} onClick={() => setTheme(theme.value)}>
                {theme.name}
            </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
