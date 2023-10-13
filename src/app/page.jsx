import dynamic from 'next/dynamic'

const Navigation = dynamic(() => import('@/components/Navigation'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const RootPage = () => {
  return (
    <>
      <Navigation />
    </>
  )
}

export default RootPage
