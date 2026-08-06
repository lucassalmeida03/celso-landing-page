import Image from 'next/image'

type CardProps = {
  title: string
  description: string
  imageUrl: string
}

export function CardServices({ title, description, imageUrl }: CardProps) {
  return (
    <div className="flex flex-col items-center w-74 h-40 drop-shadow-lg rounded-lg gap-2 p-6 bg-white">
      <Image className="w-10 h-10" src={imageUrl} alt={title} />
      <h1 className="font-semibold text-[14px]">{title}</h1>
      <p className="text-[12px]">{description}</p>
    </div>
  )
}
