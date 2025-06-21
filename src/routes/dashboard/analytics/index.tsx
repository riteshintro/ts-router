import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/analytics/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <h1 className="text-2xl font-bold mb-4">Analytics Overview</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">85%</p>
            <p className="text-sm text-gray-600">User Engagement</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">12.5%</p>
            <p className="text-sm text-gray-600">Conversion Rate</p>
          </div>
        </div>
      </div>
    </div>
}
