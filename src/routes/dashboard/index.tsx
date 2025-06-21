import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div className="flex h-full">
    <div>Dashboard Board Overview</div>
    </div>
  )
}
