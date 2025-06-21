import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/analytics/reports')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <h1 className="text-2xl font-bold mb-4">Analytics Reports</h1>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Monthly Report</h3>
          <p className="text-gray-600">Generated on 2024-01-15</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Quarterly Report</h3>
          <p className="text-gray-600">Generated on 2024-01-01</p>
        </div>
      </div>
    </div>
}
