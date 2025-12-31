"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"

function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // This is where you would trigger your analytics event
      // For example with Google Analytics:
      // window.gtag('config', 'GA_MEASUREMENT_ID', {
      //   page_path: pathname,
      // });

      console.log(`Page view: ${pathname}${searchParams ? `?${searchParams}` : ""}`)
    }
  }, [pathname, searchParams])

  return null
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  )
}
