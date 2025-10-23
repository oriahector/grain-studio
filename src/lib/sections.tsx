import React, { createContext, useContext, useMemo } from 'react'

export const SECTION_IDS = ['works','services','clients','contact'] as const
export type SectionId = typeof SECTION_IDS[number]

type Ctx = {
  ids: SectionId[]
}

const SectionCtx = createContext<Ctx | null>(null)

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo<Ctx>(() => ({ ids: [...SECTION_IDS] as SectionId[] }), [])
  return <SectionCtx.Provider value={value}>{children}</SectionCtx.Provider>
}

export function useSections() {
  const ctx = useContext(SectionCtx)
  if (!ctx) throw new Error('useSections must be used within SectionProvider')
  return ctx
}