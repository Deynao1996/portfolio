import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

import CanvasContent from "../CanvasContent/CanvasContent"


const Scene = () => {  
  return (
    <Canvas camera={{ position: [ 0, 0, 3 ], fov: 30 }}>
      <color attach="background" args={[ 'black' ]} />
      <Suspense fallback={null}>
        <CanvasContent />
      </Suspense>
    </Canvas>
  )
}

export default Scene