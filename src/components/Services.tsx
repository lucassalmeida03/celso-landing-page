import { CardServices } from './CardServices'
import electricitySvg from '@/assets/electricity-flash-svgrepo-com.svg'

export function Services() {
  return (
    <main className="bg-background py-10 flex flex-col items-center gap-4">
      <h1 className="text-black font-bold text-2xl uppercase">
        Principais serviços
      </h1>

      <div className="flex flex-col items-center gap-4 my-10">
        <CardServices
          title="Instalações Elétricas"
          description="residenciais, comerciais, condominais e industriais com qualidade."
          imageUrl={electricitySvg}
        />
        <CardServices
          title="Instalações Elétricas"
          description="residenciais, comerciais, condominais e industriais com qualidade."
          imageUrl={electricitySvg}
        />
        <CardServices
          title="Instalações Elétricas"
          description="residenciais, comerciais, condominais e industriais com qualidade."
          imageUrl={electricitySvg}
        />
        <CardServices
          title="Instalações Elétricas"
          description="residenciais, comerciais, condominais e industriais com qualidade."
          imageUrl={electricitySvg}
        />
        <CardServices
          title="Instalações Elétricas"
          description="residenciais, comerciais, condominais e industriais com qualidade."
          imageUrl={electricitySvg}
        />
        <CardServices
          title="Instalações Elétricas"
          description="residenciais, comerciais, condominais e industriais com qualidade."
          imageUrl={electricitySvg}
        />
        <CardServices
          title="Instalações Elétricas"
          description="residenciais, comerciais, condominais e industriais com qualidade."
          imageUrl={electricitySvg}
        />
      </div>
    </main>
  )
}
