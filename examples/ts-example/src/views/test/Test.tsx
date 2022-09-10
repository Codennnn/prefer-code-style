import { FullScreen, useFullScreenHandle } from 'react-full-screen'

function App() {
  const handle = useFullScreenHandle()

  return (
    <div>
      <button onClick={handle.enter}>Enter fullscreen</button>

      <FullScreen handle={handle}>Any fullscreen content here</FullScreen>
    </div>
  )
}

export default App
