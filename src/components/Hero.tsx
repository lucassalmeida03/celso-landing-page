import Image from 'next/image'
import celsoImage from '@/public/celso foto sorrindo.jpg'
import { Button } from './Button'

export function Hero() {
  return (
    <main className=" bg-dark-gradient flex gap-43.5 py-[82.5px] pl-17.5 pr-[101.5px] justify-between">
      {/* <div className="relative h-123">
        <Image
          src={celsoImage}
          alt="Foto do Celso"
          width={602}
          height={492}
          className="rounded-lg h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-123 bg-dark/30 rounded-lg" />
      </div>

      <div className="flex flex-col items-center justify-between h-123 w-107.75">
        <h1 className="font-bold text-white text-4xl text-center uppercase">
          quem é celso?
        </h1>
        <h2 className="font-medium text-white text-2xl text-center">
          Profissional com mais de 15 anos de experiência na indústria, trazendo
          conhecimento técnico, organização e padrão profissional para cada
          serviço executado. Atendimento ágil, transparente e com foco na
          satisfação do cliente. Se você procura eletricista em Sorocaba para
          serviço rápido, seguro e com preço justo, entre em contato e solicite
          um orçamento.
        </h2>
        <Button>Solicitar Visíta Técnica</Button>
      </div> */}
    </main>
  )
}
