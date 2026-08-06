import Link from 'next/link'

type Props = {
  isOpen: boolean
}

export function MenuHamburguer({ isOpen }: Props) {
  const NAV_ITEMS = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
  ]

  return (
    <ul className="flex flex-col animate-fade-down items-center gap-4 bg-white shadow-sm inset-shadow-sm mx-auto rounded-lg px-4 py-6 text-black mb-6">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="block font-medium text-base hover:text-brand transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
