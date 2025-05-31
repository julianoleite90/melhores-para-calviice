'use client'

import { useEffect, useState } from 'react'

export function useUtm() {
  const [utmParams, setUtmParams] = useState<Record<string, string>>({})

  useEffect(() => {
    // Pega os parâmetros UTM da URL atual
    const urlParams = new URLSearchParams(window.location.search)
    const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    const params: Record<string, string> = {}

    // Coleta todos os parâmetros UTM presentes
    utms.forEach(utm => {
      const value = urlParams.get(utm)
      if (value) {
        params[utm] = value
      }
    })

    // Se não houver UTMs na URL, tenta pegar do referrer
    if (Object.keys(params).length === 0 && document.referrer) {
      try {
        const referrerUrl = new URL(document.referrer)
        params.utm_source = referrerUrl.hostname
      } catch (e) {
        console.error('Error parsing referrer:', e)
      }
    }

    // Salva os UTMs no localStorage para persistência
    if (Object.keys(params).length > 0) {
      localStorage.setItem('utmParams', JSON.stringify(params))
    }

    // Tenta recuperar UTMs do localStorage se não houver na URL
    if (Object.keys(params).length === 0) {
      const storedUtms = localStorage.getItem('utmParams')
      if (storedUtms) {
        Object.assign(params, JSON.parse(storedUtms))
      }
    }

    setUtmParams(params)
  }, [])

  // Função para adicionar UTMs a uma URL
  const addUtmsToUrl = (baseUrl: string): string => {
    try {
      const url = new URL(baseUrl)
      Object.entries(utmParams).forEach(([key, value]) => {
        url.searchParams.set(key, value)
      })
      return url.toString()
    } catch (e) {
      console.error('Error adding UTMs to URL:', e)
      return baseUrl
    }
  }

  return { utmParams, addUtmsToUrl }
} 