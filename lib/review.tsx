'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { BUILD_MODE, LOCKED, type ViewMode } from '@/lib/mode'

export { BUILD_MODE, LOCKED, type ViewMode }

const Ctx = createContext<{ mode: ViewMode; setMode: (m: ViewMode) => void }>({
  mode: 'review',
  setMode: () => {},
})


export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ViewMode>(BUILD_MODE)
  useEffect(() => {
    if (LOCKED) return
    try {
      const saved = localStorage.getItem('wp-view-mode')
      if (saved === 'production' || saved === 'review') setMode(saved)
    } catch {}
  }, [])
  const set = (m: ViewMode) => {
    if (LOCKED) return
    setMode(m)
    try { localStorage.setItem('wp-view-mode', m) } catch {}
  }
  return <Ctx.Provider value={{ mode, setMode: set }}>{children}</Ctx.Provider>
}

export const useView = () => useContext(Ctx)
