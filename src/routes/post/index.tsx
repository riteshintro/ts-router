import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/post/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    Hello "/post/"!{' '}
    <Link to='/post/details/$postId' params={{ postId: '5' }}  
    mask={{
    to: '/post/details/$postId',
    params: {
      postId: '5',
    },
  }} >Click Me</Link>
     <Link to='/post/layout' params={{ postId: '5' }}  >Click Me 2</Link>
  </div>
}
