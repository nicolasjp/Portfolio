import {useEffect, useRef} from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

//changer l'asset de l'avion ici
// import planeScene from '../assets/3d/plane.glb';
import planeScene from '../assets/3d/perso2.glb';

const Cloud = ({isRotating, ...props}) => {
  const ref = useRef();
  const {scene, animations} = useGLTF(planeScene); 
  const {actions} = useAnimations(animations, ref);

  useEffect(() => {
    if(isRotating){
      // actions['Take 001'].play();
      actions['Sphere|SphereAction'].play();
      actions['idle'].stop();
      actions['fall'].play();
    }
    else{
      // actions['Take 001'].stop();
      actions['Sphere|SphereAction'].stop();
      actions['idle'].play();
      actions['fall'].stop();
    }
  }, [actions, isRotating])

  return (
    <mesh {...props} ref={ref}> 
        <primitive object={scene}
          // scale={[0.5, 0.5, 0.5]}
          // position={[-0.2, 0, 0]}
          // rotation={[0.1, 0, 0.1]}
        />
    </mesh>
  )
}

export default Cloud