// src/components/AutoManagerMarketplace.tsx
'use client'

import React, { useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Script from 'next/script'

// Widget-Komponente
export default function AutoManagerMarketplace() {
  const searchParams = useSearchParams()
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Erzeuge pro Mount ein eindeutiges Kennzeichen für das Skript.
  // Dadurch wird das Skript bei jedem Aufruf neu geladen und ausgeführt.
  const scriptKey = useMemo(() => {
    const paramsString = searchParams.toString() || 'default'
    return `${Date.now()}-${paramsString}`
  }, [searchParams])

  // Setze die erforderlichen Attribute am Host-DIV.
  useEffect(() => {
    const host = containerRef.current
    if (!host) return
    host.setAttribute('api-key', '0536fa11-99df-43f8-bf26-42af233f5478')
    host.setAttribute('urls-imprint', 'https://autogalerie-nord.de/impressum')
    host.setAttribute('urls-privacy', 'https://autogalerie-nord.de/datenschutz')
    host.setAttribute('urls-terms', JSON.stringify({ de: '', en: '', fr: '', es: '' }))
  }, [searchParams])

  return (
    <>
      {/* Zielcontainer, an dem die Marketplace-Börse gerendert wird */}
      <div id="am-marketplace" ref={containerRef} />

      {/* Third-Party-Skript mit dynamischem Schlüssel */}
      <Script
        id={`pxc-amm-loader-${scriptKey}`}
        key={scriptKey}
        src={`https://cdn.dein.auto/pxc-amm/loader.nocache?v=${scriptKey}`}
        strategy="afterInteractive"
        onReady={() => {
          // Optional: Hier könnte zusätzlicher Code ausgeführt werden,
          // z. B. Logging oder Kontrolle, ob das Widget geladen wurde.
        }}
      />
    </>
  )
}
