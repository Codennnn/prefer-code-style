import { useEffect, useState } from 'react'

export function Demo() {
  const handleClick = () => {
    alert('demo')
  }

  const [state, setState] = useState(0)

  useEffect(() => {
    console.log(state)
  }, [])

  return <div onClick={handleClick}>demo</div>
}
