import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/users/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <h1 className="text-2xl font-bold mb-4">Create New User</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
}
