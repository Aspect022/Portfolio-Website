"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder that matches the expected structure
    return (
      <div className="flex items-center space-x-2">
        <Switch id="theme-toggle" className="theme-switch" checked={false} disabled />
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-toggle"
        className="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  )
}
