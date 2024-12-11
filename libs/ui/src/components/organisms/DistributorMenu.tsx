import { DistributorQuery } from '@foundation/network/src/queries/generated'
import { Link } from '../molecules/CustomLink'
import { Title2 } from '../atoms/typography'
import { Sheet, SheetContent, SheetTrigger } from '../atoms/sheet'
import { Button } from '../atoms/button'
import { Menu } from 'lucide-react'

export const DistributorMenu = ({ distributor }: DistributorQuery) => {
  return (
    <div className="flex flex-col w-full max-w-xs gap-2">
      <div className="mb-2">
        <Title2 className="text-xl font-semibold">
          {distributor?.user.name}
        </Title2>
      </div>

      <div className="flex flex-col gap-2">
        <Link href="/distributor">Dashboard</Link>
        <Link href="/distributor/warehouses">Manage Warehouses</Link>
        {distributor?.warehouses.map((warehouse) => (
          <Link
            href={`/distributor/warehouses/${warehouse.id}`}
            className="pl-4"
          >
            {warehouse.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function DistributorSidebar({ distributor }: DistributorQuery) {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <DistributorMenu distributor={distributor} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
