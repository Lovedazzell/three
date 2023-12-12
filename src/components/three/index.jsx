import React, { useEffect, useRef ,useState} from 'react'
import { angleToRadius } from '../../utils/angle'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { gsap } from 'gsap';
import Model from './Model'

function Index() {

const orbitControlesRef =  useRef(null)
const [modelActions, setModelActions] = useState(null); // for animaiton play  set

const handleFlyAnimation = () => {
  if (modelActions && modelActions['fly']) {
    modelActions['fly'].play();
  }
};





// // run after every single frame
// useFrame((state)=>{
//   // console.log(state.mouse)
//   if(!!orbitControlesRef.current){

//     // console.log(orbitControlesRef.current)
//     const {x,y} = state.mouse;

//     // change camera accouding to mouse rotation 
//     orbitControlesRef.current.setAzimuthalAngle(-x * angleToRadius(90))

//     // 0.5 setup initial frame by adding angle valuesin y direction 
//     orbitControlesRef.current.setPolarAngle((y + 0.5) * angleToRadius(90 - 30))
//     orbitControlesRef.current.update()
//   }

  
// })

const ballref = useRef(null)

useEffect(()=>{

  if(!!ballref.current){
    console.log(ballref.current)
  }

  gsap.to



},[ballref.current])


// useEffect(()=>{

//   if(!!orbitControlesRef.current){
//     console.log(orbitControlesRef.current)
//   }



// },[orbitControlesRef.current])

// javascript function to get Frames
// requestAnimationFrame()

  return (
    <>
    {/* make camera default */}
    <PerspectiveCamera  makeDefault position={[0,3,10]}  />

    {/* minPolarAngle cant go up from 40deg */}
    <OrbitControls ref={orbitControlesRef}  minPolarAngle={angleToRadius(40)}  />



    {/* camera focus on mess with orbit cotroll */}
<OrbitControls/>







    {/* changep position in xyz */}


    {/* <mesh position={[0,1,0]}  castShadow  ref={ballref}>
      <sphereGeometry args={[1,32,32]} /> */}



      {/* look like metal `` */}


      {/* <meshStandardMaterial color="#a8dadc" metalness={0.6} roughness={0.4} />
    </mesh> */}



<Model onClick={handleFlyAnimation} setActions={setModelActions} />





{/* chnage rotaion in xyz */}
    <mesh rotation={[-angleToRadius(90),0,0]}  receiveShadow>
      <planeGeometry args={[40,40]} />
    {/* <meshStandardMaterial color="#ffcdb2" /> */}
    <meshPhongMaterial color="#ffcdb2" />
    </mesh>




   <ambientLight args={["#FFFFFF",0.2]}  />
   {/* <directionalLight args={["#ffffff", 1] }  position={[-4,1,0]}  /> */}
   <spotLight args={["#FFFFFF", 10, 10,angleToRadius(45),0.4] }  position={[-4,1,0]} castShadow  />


<Environment background>
  {/* to scalu up upto 100 X */}
  <mesh scale={100}>
    <sphereGeometry args={[1,63,63]} />
    {/* backside to shiw only backside of sphere */}
    <meshBasicMaterial side={THREE.BackSide}  color="#a8dadc" />
  </mesh>
</Environment>


    </>
  )
}

export default Index

// npx vite dev