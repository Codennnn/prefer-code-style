import { useLocation } from 'react-router-dom'

export default function Page() {
  const { pathname } = useLocation()

  return (
    <>
      <p>{pathname}</p>
    </>
  )
}
