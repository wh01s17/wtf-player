'use client'
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark])

    return (
        <div className="flex items-center gap-2">
            <Sun className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
            <Switch checked={isDark} onCheckedChange={setIsDark} />
            <Moon className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
        </div>
    )
}