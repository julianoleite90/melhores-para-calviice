'use client'

import Image from 'next/image'
import { useState } from 'react'

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="relative w-[180px] h-8">
          <Image
            src="/images/logo.png"
            alt="Emagrecedores"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  )
}