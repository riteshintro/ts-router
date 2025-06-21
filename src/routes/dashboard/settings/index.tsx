import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <div>
      <h1 className="text-2xl font-bold mb-4">General Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Enable notifications
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Auto-save changes
            </label>
          </div>
        </div>
      </div>
    </div>
}
