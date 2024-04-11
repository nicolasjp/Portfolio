import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

//import islandScene from '../assets/3d/floating_island_temple.glb';
import islandScene from '../assets/3d/ileDragon.glb';

// const Island = (props) => {
//     const islandRef = useRef();

//     const { nodes, materials } = useGLTF(islandScene);

//     return (
//         // rotation={[-1.35, 0, -1.5]} scale={0.7}
//         <a.group ref={islandRef} {...props}>
//         <group>
//             <mesh
//             geometry={nodes.Object_2.geometry}
//             material={materials.Cartoon366E29}
//             />
//             <mesh
//             geometry={nodes.Object_3.geometry}
//             material={materials.Cartoon369037}
//             />
//             <mesh
//             geometry={nodes.Object_4.geometry}
//             material={materials.Cartoon545B97}
//             />
//             <mesh
//             geometry={nodes.Object_5.geometry}
//             material={materials.Cartoon70845A}
//             />
//             <mesh
//             geometry={nodes.Object_6.geometry}
//             material={materials.Cartoon42782F}
//             />
//             <mesh
//             geometry={nodes.Object_7.geometry}
//             material={materials.Cartoon71756A}
//             />
//             <mesh
//             geometry={nodes.Object_8.geometry}
//             material={materials.Cartoon72503C}
//             />
//             <mesh
//             geometry={nodes.Object_9.geometry}
//             material={materials.Cartoon748942}
//             />
//             <mesh
//             geometry={nodes.Object_10.geometry}
//             material={materials.Cartoon748942}
//             />
//             <mesh
//             geometry={nodes.Object_11.geometry}
//             material={materials.Cartoon74A358}
//             />
//             <mesh
//             geometry={nodes.Object_12.geometry}
//             material={materials.Cartoon369037} //dragon
//             />
//             <mesh
//             geometry={nodes.Object_13.geometry}
//             material={materials.Cartoon99C666}
//             />
//             <mesh
//             geometry={nodes.Object_14.geometry}
//             material={materials.Cartoon99C666}
//             />
//             <mesh
//             geometry={nodes.Object_15.geometry}
//             material={materials.Cartoon9F825D}
//             />
//             <mesh
//             geometry={nodes.Object_16.geometry}
//             material={materials.CartoonCE3519} //GOOD
//             />
//             <mesh
//             geometry={nodes.Object_17.geometry}
//             material={materials.CartoonD03382} //GOOD
//             />
//             <mesh
//             geometry={nodes.Object_18.geometry}
//             material={materials.CartoonEBEBEB} //GOOD
//             />
//             <mesh
//             geometry={nodes.Object_19.geometry}
//             material={materials.CartoonFFFFFF} //GOOD
//             />
//             <mesh
//             geometry={nodes.Object_20.geometry}
//             material={materials.CartoonFFFFFF} //GOOD
//             />
//             <mesh
//             geometry={nodes.Object_21.geometry}
//             material={materials.CartoonFFFFFF} //GOOD
//             />
//         </group>
//         </a.group>
//     );
// }

// export default Island;

const Island = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
    const islandRef = useRef();
    const {gl, viewport} = useThree();
    const { nodes, materials } = useGLTF(islandScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        const clientX = e.touches 
            ? e.touches[0].clientX 
            : e.clientX;

        lastX.current = clientX;
    }

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if(isRotating){
            const clientX = e.touches 
            ? e.touches[0].clientX 
            : e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;
            islandRef.current.rotation.z += delta * 0.005 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft'){
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.z += 0.01 * Math.PI;
            rotationSpeed.current = 0.0125;
        }
        else if(e.key === 'ArrowRight'){
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.z -= 0.01 * Math.PI;
            rotationSpeed.current = -0.0125;
        }
    }

    const handleKeyUp = (e) => {
        if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
            setIsRotating(false);
        }
    }

    useFrame(() => {
        if(!isRotating){
            rotationSpeed.current *= dampingFactor;

            if(Math.abs(rotationSpeed.current) < 0.001){
                rotationSpeed.current = 0;
            }

            islandRef.current.rotation.z += rotationSpeed.current;
        }
        else{
            const rotation = islandRef.current.rotation.z;

            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            switch (true){
                case normalizedRotation >= 5.85 && normalizedRotation <= 6.25:
                    setCurrentStage(4);
                    break;
                case normalizedRotation >= 0.95 && normalizedRotation <= 1.5:
                    setCurrentStage(3);
                    break; 
                case normalizedRotation >= 2.65 && normalizedRotation <= 3.10:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }
        }
    })

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp])

    return (
        <a.group ref={islandRef} {...props}>
            <group>
                <mesh
                geometry={nodes.Object_10.geometry}
                material={materials.Cartoon748942}
                />
                <mesh
                geometry={nodes.Object_11.geometry}
                material={materials.Cartoon74A358}
                />
                <mesh
                geometry={nodes.Object_12.geometry}
                material={materials.Cartoon7BA5AD}
                />
                <mesh
                geometry={nodes.Object_13.geometry}
                material={materials.Cartoon99C666}
                />
                <mesh
                geometry={nodes.Object_14.geometry}
                material={materials.Cartoon99C666}
                />
                <mesh
                geometry={nodes.Object_15.geometry}
                material={materials.Cartoon9F825D}
                />
                <mesh
                geometry={nodes.Object_16.geometry}
                material={materials.CartoonCE3519}
                />
                <mesh
                geometry={nodes.Object_17.geometry}
                material={materials.CartoonD03382}
                />
                <mesh
                geometry={nodes.Object_18.geometry}
                material={materials.CartoonEBEBEB}
                />
                <mesh
                geometry={nodes.Object_19.geometry}
                material={materials.CartoonFFFFFF}
                />
                <mesh
                geometry={nodes.Object_2.geometry}
                material={materials.Cartoon366E29}
                />
                <mesh
                geometry={nodes.Object_20.geometry}
                material={materials.CartoonFFFFFF}
                />
                <mesh
                geometry={nodes.Object_21.geometry}
                material={materials.CartoonFFFFFF}
                />
                <mesh
                geometry={nodes.Object_3.geometry}
                material={materials.Cartoon369037}
                />
                <mesh
                geometry={nodes.Object_4.geometry}
                material={materials.Cartoon545B97}
                />
                <mesh
                geometry={nodes.Object_5.geometry}
                material={materials.Cartoon70845A}
                />
                <mesh
                geometry={nodes.Object_6.geometry}
                material={materials.Cartoon42782F}
                />
                <mesh
                geometry={nodes.Object_7.geometry}
                material={materials.Cartoon71756A}
                />
                <mesh
                geometry={nodes.Object_8.geometry}
                material={materials.Cartoon72503C}
                />
                <mesh
                geometry={nodes.Object_9.geometry}
                material={materials.Cartoon748942}
                />
            </group>
        </a.group>
    )
}

export default Island;