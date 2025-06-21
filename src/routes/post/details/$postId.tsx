import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/details/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams();
  return <div>Hello "/post/details/$postId"!{postId}</div>
}
