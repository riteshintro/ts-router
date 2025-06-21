import { createFileRoute, Link } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/post/layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <h2>Users Section</h2>
      <div><Link to='/post/comment'>Comment</Link><Link to='/post/user-list'>User List</Link></div>
      <Outlet />
    </div>
}
