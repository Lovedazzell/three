import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Index from './components/three'


function App() {

  return (
    <>
     <Canvas style={{width:'100vw',height:"100vh", }} shadows >
      {/* to write another code  */}
{/* <Html>
  <div>hello</div>
</Html> */} 


      {/* for loading whis model is downloading in background */}
      <Suspense fallback={null} >


      <Index/>
      </Suspense>
    </Canvas>
    </>
  )
}

export default App
