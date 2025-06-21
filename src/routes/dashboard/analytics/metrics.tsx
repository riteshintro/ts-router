import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/analytics/metrics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <h1 className="text-2xl font-bold mb-4">Metrics Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Page Load Time</span>
              <span className="font-semibold">1.2s</span>
            </div>
            <div className="flex justify-between">
              <span>Server Response</span>
              <span className="font-semibold">200ms</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">User Metrics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Daily Active Users</span>
              <span className="font-semibold">892</span>
            </div>
            <div className="flex justify-between">
              <span>Session Duration</span>
              <span className="font-semibold">5.2min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
}
