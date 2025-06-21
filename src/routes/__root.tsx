import Sidebar from '@/components/Sidebar'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Page content on the right */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>

      <TanStackRouterDevtools position="bottom-right" />
    </div>
  ),
})

