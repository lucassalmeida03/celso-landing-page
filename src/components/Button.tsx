import Image from 'next/image'
import whatsSvg from '@/assets/WA_Logo.svg'

type Props = React.ComponentProps<'button'> & {
  isLoading?: boolean
}

export function Button({
  children,
  isLoading,
  type = 'button',
  ...rest
}: Props) {
  return (
    <button type={type} disabled={isLoading} className="btn-primary" {...rest}>
      {children}{' '}
      <Image
        src={whatsSvg}
        alt="icone do whatsapp"
        className="h-4 w-4 laptop-max:h-6 laptop-max:w-6 self-center"
      />
    </button>
  )
}
