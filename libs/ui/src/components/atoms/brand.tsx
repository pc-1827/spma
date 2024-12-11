import Link from 'next/link'

import { cn } from '../../util'

export const Brand = () => {
  return (
    <div>
      <Link
        href="/"
        className={cn('font-medium')}
      >
        SPMA
      </Link>
    </div>
  )
}
