import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings/preferences')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <h1 className="text-2xl font-bold mb-4">Preferences</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Theme</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="theme" value="light" className="mr-2" />
                Light
              </label>
              <label className="flex items-center">
                <input type="radio" name="theme" value="dark" className="mr-2" />
                Dark
              </label>
              <label className="flex items-center">
                <input type="radio" name="theme" value="auto" className="mr-2" defaultChecked />
                Auto
              </label>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Language</h3>
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
}
