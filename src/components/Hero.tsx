import Image from 'next/image'
import celsoImage from '@/public/celso foto sorrindo.jpg'
import { Button } from './Button'

export function Hero() {
  return (
    <main className="bg-dark-gradient px-4 py-8 flex flex-col gap-4 justify-center items-center laptop-max:flex-row laptop-max:gap-20 laptop-max:px-10">
      <div className="relative h-60 w-74 md-mobile-max:w-100 laptop-max:h-107.75 laptop-max:w-90 desktop-max:w-150.5">
        <Image
          src={celsoImage}
          alt="Foto do Celso"
          className="rounded-lg h-60 w-74 md-mobile-max:w-100 laptop-max:h-107.75 laptop-max:w-90 desktop-max:w-150.5"
        />

        <div className="absolute top-0 left-0 w-74 h-60 bg-dark/30 rounded-lg md-mobile-max:w-100 laptop-max:h-107.75 laptop-max:w-90 desktop-max:w-150.5" />
      </div>

      <div className="flex flex-col gap-4 items-center laptop-max:max-w-123">
        <h1 className="font-bold text-white text-center text-2xl uppercase laptop-max:text-4xl">
          quem é celso?
        </h1>
        <h2 className="font-medium text-white text-center laptop-max:text-2xl">
          Profissional com mais de 15 anos de experiência na indústria, trazendo
          conhecimento técnico, organização e padrão profissional para cada
          serviço executado. Atendimento ágil, transparente e com foco na
          satisfação do cliente. Se você procura eletricista em Sorocaba para
          serviço rápido, seguro e com preço justo, entre em contato e solicite
          um orçamento.
        </h2>
        <Button>Solicitar Visíta Técnica</Button>
      </div>
    </main>

    // <main className=" bg-dark-gradient justify-center flex gap-43.5 py-[82.5px] pl-17.5 pr-[101.5px]">
    //   <div className="relative h-123">
    //     <Image
    //       src={celsoImage}
    //       alt="Foto do Celso"
    //       width={602}
    //       height={492}
    //       className="rounded-lg h-full object-cover"
    //     />

    //     <div className="absolute top-0 left-0 w-full h-123 bg-dark/30 rounded-lg" />
    //   </div>

    //   <div className="flex flex-col items-center justify-between h-123 w-107.75">
    //     <h1 className="font-bold text-white text-4xl text-center uppercase">
    //       quem é celso?
    //     </h1>
    //     <h2 className="font-medium text-white text-2xl text-center">
    //       Profissional com mais de 15 anos de experiência na indústria, trazendo
    //       conhecimento técnico, organização e padrão profissional para cada
    //       serviço executado. Atendimento ágil, transparente e com foco na
    //       satisfação do cliente. Se você procura eletricista em Sorocaba para
    //       serviço rápido, seguro e com preço justo, entre em contato e solicite
    //       um orçamento.
    //     </h2>
    //     <Button>Solicitar Visíta Técnica</Button>
    //   </div>
    // </main>
  )
}
