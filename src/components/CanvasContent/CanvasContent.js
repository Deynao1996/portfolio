const CanvasContent = () => {
  return (
    <mesh>
      <planeBufferGeometry args={[ 0.4, 0.6, 100, 100 ]} />
      <meshBasicMaterial color={'white'} />
    </mesh>
  )
}

export default CanvasContent