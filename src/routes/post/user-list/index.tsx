import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/user-list/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/post/user-list/"!</div>
}
