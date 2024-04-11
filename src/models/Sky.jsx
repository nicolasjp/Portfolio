import { useGLTF } from '@react-three/drei'
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber';

//changer l'asset du ciel ici
import skyScene from '../assets/3d/fond2.glb';

const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef();

  useFrame((_, delta) => {
    if(isRotating){
      skyRef.current.rotation.y += 0.3 * delta;
    }
  })

  return (
    <mesh 
      //position={[1, 2, 1]} 
      scale={[0.01, 0.01, 0.01]} 
      rotation={[0.2, 0, 0]}
      ref={skyRef}
    >
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky