'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import logo from '@/assets/Logo.svg'
import { useState } from 'react'
import { MenuHamburguer } from './MenuHamburguer'

const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Avaliações', href: '#avaliacoes' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="w-full bg-white">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 laptop-max:px-10 py-3"
      >
    
        <Link href="#inicio">
          <Image src={logo} alt="Celso" width={120} height={40} priority />
        </Link>

       
        <ul className="hidden items-center gap-10 bg-white px-4 py-2 text-black laptop-max:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block text-base font-medium transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="cursor-pointer p-1 text-black hover:text-brand laptop-max:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isOpen ? '#DC2626' : 'currentColor'}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <Link href="#contato">
            <Button>Solicitar Visita</Button>
          </Link>
        </div>
      </nav>

      {isOpen && <MenuHamburguer isOpen={isOpen} />}
    </header>
  )
}