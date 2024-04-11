import {useRef, useEffect} from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

//changer l'asset du phoenix ici
import birdScene from '../assets/3d/phoenix.glb';

const Flying = () => {
    const {scene, animations} = useGLTF(birdScene);
    const flyRef = useRef();
    const {actions} = useAnimations(animations, flyRef);

    useEffect(() => {
        console.log(actions);
        actions['BoneStructure|BoneStructure|Armature.001|Armature.001|Armat'].play();
        // actions['Key|BoneStructure|Armature.001|Armature.001|Armature.001Act_f9c'].play();
    }, [])

    useFrame(({clock, camera}) => {
        //update the Y pos simulate the flight moving in a sin wave
        //flyRef.current.rotation.y += 0.5 * delta
        flyRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 1.5;

        if(flyRef.current.position.x > camera.position.x + 10){
            flyRef.current.rotation.y = Math.PI;
        }
        else if(flyRef.current.position.x < camera.position.x - 2){
            flyRef.current.rotation.y = 0;
        }

        if(flyRef.current.rotation.y === 0){
            flyRef.current.position.x += 0.0025;
            flyRef.current.position.z -= 0.0025;
        }
        else{
            flyRef.current.position.x -= 0.0025;
            flyRef.current.position.z += 0.0025;
        }   
    })

    return (
    <mesh 
        position={[1, 2, 1]} 
        scale={[0.3, 0.3, 0.3]} 
        rotation={[0.5, 0, 0]}
        ref={flyRef}
    >
        <primitive object={scene}/>
    </mesh>
    )
}

export default Flying