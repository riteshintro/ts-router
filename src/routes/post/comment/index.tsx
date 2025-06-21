import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/comment/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/post/comment/"!</div>
}
