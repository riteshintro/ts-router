import { createFileRoute,Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div className="flex h-full">
        {/* Nested Sidebar */}
        <aside className="w-56 bg-gray-50 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
          </div>
          
          <nav className="p-2">
            {/* Overview */}
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-blue-100 [&.active]:text-blue-700"
            >
              📊 Overview
            </Link>
  
            {/* Analytics Section */}
            <div className="mt-4">
              <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Analytics
              </div>
              <div className="mt-1 space-y-1">
                <Link
                  to="/dashboard/analytics"
                   search={{
      query: 'tanstack',
    }}
                  className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-blue-100 [&.active]:text-blue-700"
                >
                  📈 Overview
                </Link>
                <Link
                  to="/dashboard/analytics/reports"
                  className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-blue-100 [&.active]:text-blue-700"
                >
                  📋 Reports
                </Link>
                <Link
                  to="/dashboard/analytics/metrics"
                  className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-blue-100 [&.active]:text-blue-700"
                >
                  📊 Metrics
                </Link>
              </div>
            </div>
  
            {/* Users Section */}
            <div className="mt-4">
              <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Users
              </div>
              <div className="mt-1 space-y-1">
                <Link
                  to="/dashboard/users"
                  className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-blue-100 [&.active]:text-blue-700"
                >
                  👥 Overview
                </Link>
                <Link
                  to="/dashboard/users/list"
                  className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-blue-100 [&.active]:text-blue-700"
                >
                  📝 User List
                </Link>
                <Link
                  to="/dashboard/users/create"
                  className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-blue-100 [&.active]:text-blue-700"
                >
                  ➕ Create User
                </Link>
              </div>
            </div>
  
            {/* Settings Section */}
            <div className="mt-4">
              <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Settings
              </div>
              <div className="mt-1 space-y-1">
                <Link
                  to="/dashboard/settings"
                  className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-blue-100 [&.active]:text-blue-700"
                >
                  ⚙️ General
                </Link>
                <Link
                  to="/dashboard/settings/profile"
                  className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-blue-100 [&.active]:text-blue-700"
                >
                  👤 Profile
                </Link>
                <Link
                  to="/dashboard/settings/preferences"
                  className="block px-3 py-2 pl-6 rounded-md text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-blue-100 [&.active]:text-blue-700"
                >
                  🎨 Preferences
                </Link>
              </div>
            </div>
          </nav>
        </aside>
  
        {/* Dashboard Content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    )
}
