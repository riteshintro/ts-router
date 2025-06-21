import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/users/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <h1 className="text-2xl font-bold mb-4">Users Overview</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>Total active users: <span className="font-semibold">1,234</span></p>
        <p>New users this month: <span className="font-semibold">156</span></p>
      </div>
    </div>
}
