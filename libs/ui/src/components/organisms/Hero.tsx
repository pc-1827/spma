import { Factory, Store, Warehouse } from 'lucide-react'
import { HeroLink } from '../molecules/HeroLink'
import Link from 'next/link'
import { buttonVariants } from '../../util/variants'

export const HeroBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground ">
      <div>
        <h1 className="text-4xl font-bold">
          Supply Chain Management Application
        </h1>
        <p className="max-w-md mb-10 text-2xl">
          Empower your supply chain journey using SPMA
        </p>
        <div className="flex gap-4 my-4">
          <HeroLink Icon={Factory} url={'/manufacturer'}>
            Manufacturer
          </HeroLink>
          <HeroLink Icon={Warehouse} url={'/distributor'}>
            Distributer
          </HeroLink>
          <HeroLink Icon={Store} url={'/retailer'}>
            Retailer
          </HeroLink>
        </div>
        <Link
          href="/register"
          className={buttonVariants({ variant: 'outline' })}
        >
          Register
        </Link>
      </div>
    </div>
  )
}
