import './VisualLayout.scss'

import CenterArea from './components/visual-layout/CenterArea'
import LeftPanel from './components/visual-layout/LeftPanel'
import RightPanel from './components/visual-layout/RightPanel'
import TopActionBar from './components/visual-layout/TopActionBar'

export default function CanvasLayout() {
  return (
    <div className="canvas-layout">
      <TopActionBar />

      <LeftPanel />

      <CenterArea />

      <RightPanel />
    </div>
  )
}
