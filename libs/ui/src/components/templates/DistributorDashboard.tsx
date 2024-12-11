import { DistributorQuery } from '@foundation/network/src/queries/generated'
import { StatCard } from '../molecules/StatCard'

export const DistributorDashboard = ({ distributor }: DistributorQuery) => {
  return (
    <div>
      Dashboard
      <div className="flex gap-2 mt-4">
        <StatCard
          title={'Warehouses'}
          href={'/distributor/warehouses'}
          count={distributor?.warehouses.length}
        />
      </div>
    </div>
  )
}
