import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

//import islandScene from '../assets/3d/floating_island_temple.glb';
// import islandScene from '../assets/3d/ileDragon.glb';
import islandScene from '../assets/3d/ileDragonV2.glb';

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

// const Island = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
//     const islandRef = useRef();
//     const {gl, viewport} = useThree();
//     const { nodes, materials } = useGLTF(islandScene);

//     const lastX = useRef(0);
//     const rotationSpeed = useRef(0);
//     const dampingFactor = 0.95;

//     const handlePointerDown = (e) => {
//         e.stopPropagation();
//         e.preventDefault();
//         setIsRotating(true);
//         const clientX = e.touches 
//             ? e.touches[0].clientX 
//             : e.clientX;

//         lastX.current = clientX;
//     }

//     const handlePointerUp = (e) => {
//         e.stopPropagation();
//         e.preventDefault();
//         setIsRotating(false);
//     }

//     const handlePointerMove = (e) => {
//         e.stopPropagation();
//         e.preventDefault();

//         if(isRotating){
//             const clientX = e.touches 
//             ? e.touches[0].clientX 
//             : e.clientX;

//             const delta = (clientX - lastX.current) / viewport.width;
//             islandRef.current.rotation.z += delta * 0.005 * Math.PI;
//             lastX.current = clientX;
//             rotationSpeed.current = delta * 0.01 * Math.PI;
//         }
//     }

//     const handleKeyDown = (e) => {
//         if(e.key === 'ArrowLeft'){
//             if(!isRotating) setIsRotating(true);
//             islandRef.current.rotation.z += 0.01 * Math.PI;
//             rotationSpeed.current = 0.0125;
//         }
//         else if(e.key === 'ArrowRight'){
//             if(!isRotating) setIsRotating(true);
//             islandRef.current.rotation.z -= 0.01 * Math.PI;
//             rotationSpeed.current = -0.0125;
//         }
//     }

//     const handleKeyUp = (e) => {
//         if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
//             setIsRotating(false);
//         }
//     }

//     useFrame(() => {
//         if(!isRotating){
//             rotationSpeed.current *= dampingFactor;

//             if(Math.abs(rotationSpeed.current) < 0.001){
//                 rotationSpeed.current = 0;
//             }

//             islandRef.current.rotation.z += rotationSpeed.current;
//         }
//         else{
//             const rotation = islandRef.current.rotation.z;

//             const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

//             switch (true){
//                 case normalizedRotation >= 5.85 && normalizedRotation <= 6.25:
//                     setCurrentStage(4);
//                     break;
//                 case normalizedRotation >= 0.95 && normalizedRotation <= 1.5:
//                     setCurrentStage(3);
//                     break; 
//                 case normalizedRotation >= 2.65 && normalizedRotation <= 3.10:
//                     setCurrentStage(2);
//                     break;
//                 case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
//                     setCurrentStage(1);
//                     break;
//                 default:
//                     setCurrentStage(null);
//             }
//         }
//     })

//     useEffect(() => {
//         const canvas = gl.domElement;
//         canvas.addEventListener('pointerdown', handlePointerDown);
//         canvas.addEventListener('pointerup', handlePointerUp);
//         canvas.addEventListener('pointermove', handlePointerMove);
//         document.addEventListener('keydown', handleKeyDown);
//         document.addEventListener('keyup', handleKeyUp);

//         return () => {
//             canvas.removeEventListener('pointerdown', handlePointerDown);
//             canvas.removeEventListener('pointerup', handlePointerUp);
//             canvas.removeEventListener('pointermove', handlePointerMove);
//             document.removeEventListener('keydown', handleKeyDown);
//             document.removeEventListener('keyup', handleKeyUp);
//         }
//     }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp])

//     return (
//         <a.group ref={islandRef} {...props}>
//             <group>
//                 <mesh
//                 geometry={nodes.Object_10.geometry}
//                 material={materials.Cartoon748942}
//                 />
//                 <mesh
//                 geometry={nodes.Object_11.geometry}
//                 material={materials.Cartoon74A358}
//                 />
//                 <mesh
//                 geometry={nodes.Object_12.geometry}
//                 material={materials.Cartoon7BA5AD}
//                 />
//                 <mesh
//                 geometry={nodes.Object_13.geometry}
//                 material={materials.Cartoon99C666}
//                 />
//                 <mesh
//                 geometry={nodes.Object_14.geometry}
//                 material={materials.Cartoon99C666}
//                 />
//                 <mesh
//                 geometry={nodes.Object_15.geometry}
//                 material={materials.Cartoon9F825D}
//                 />
//                 <mesh
//                 geometry={nodes.Object_16.geometry}
//                 material={materials.CartoonCE3519}
//                 />
//                 <mesh
//                 geometry={nodes.Object_17.geometry}
//                 material={materials.CartoonD03382}
//                 />
//                 <mesh
//                 geometry={nodes.Object_18.geometry}
//                 material={materials.CartoonEBEBEB}
//                 />
//                 <mesh
//                 geometry={nodes.Object_19.geometry}
//                 material={materials.CartoonFFFFFF}
//                 />
//                 <mesh
//                 geometry={nodes.Object_2.geometry}
//                 material={materials.Cartoon366E29}
//                 />
//                 <mesh
//                 geometry={nodes.Object_20.geometry}
//                 material={materials.CartoonFFFFFF}
//                 />
//                 <mesh
//                 geometry={nodes.Object_21.geometry}
//                 material={materials.CartoonFFFFFF}
//                 />
//                 <mesh
//                 geometry={nodes.Object_3.geometry}
//                 material={materials.Cartoon369037}
//                 />
//                 <mesh
//                 geometry={nodes.Object_4.geometry}
//                 material={materials.Cartoon545B97}
//                 />
//                 <mesh
//                 geometry={nodes.Object_5.geometry}
//                 material={materials.Cartoon70845A}
//                 />
//                 <mesh
//                 geometry={nodes.Object_6.geometry}
//                 material={materials.Cartoon42782F}
//                 />
//                 <mesh
//                 geometry={nodes.Object_7.geometry}
//                 material={materials.Cartoon71756A}
//                 />
//                 <mesh
//                 geometry={nodes.Object_8.geometry}
//                 material={materials.Cartoon72503C}
//                 />
//                 <mesh
//                 geometry={nodes.Object_9.geometry}
//                 material={materials.Cartoon748942}
//                 />
//             </group>
//         </a.group>
//     )
// }

// export default Island;




const Island = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
    const islandRef = useRef();
    const { nodes, materials, animations } = useGLTF(islandScene)
    const { actions } = useAnimations(animations, islandRef)
    const {gl, viewport} = useThree();

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        // console.log(actions);
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
            islandRef.current.rotation.y += delta * 0.005 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === 'ArrowLeft'){
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01 * Math.PI;
            rotationSpeed.current = 0.0125;
        }
        else if(e.key === 'ArrowRight'){
            if(!isRotating) setIsRotating(true);
            islandRef.current.rotation.y -= 0.01 * Math.PI;
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

            islandRef.current.rotation.y += rotationSpeed.current;
        }
        else{
            const rotation = islandRef.current.rotation.y;

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
        // console.log(animations[0]);
        // console.log(actions);
        if(actions){
            actions['Animation'].play();
            actions['CubeAction.002'].play();
        }
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
    <a.group ref={islandRef} {...props} dispose={null} rotation={[0.25, -1.6, 0]}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[0.008, 0.02, -0.003]}
          rotation={[-1.549, -0.04, 0]}
          scale={0.936}>
          <group name="floatingislandobjcleanermaterialmergergles">
            <mesh
              name="Object_15001"
              castShadow
              receiveShadow
              geometry={nodes.Object_15001.geometry}
              material={materials.Cartoon9F825D}
              position={[-1.86, 1.046, 0.169]}
              scale={2.624}
            />
          </group>
        </group>
        <group
          name="Sketchfab_model002"
          position={[0, 4.129, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.154}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_3" />
              <group name="Star001_1">
                <mesh
                  name="Object_4001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4001.geometry}
                  material={materials.Cartoon9F825D}
                  position={[28.828, -25.467, 13.833]}
                  scale={-0.713}
                />
                <mesh
                  name="Object_4002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4002.geometry}
                  material={materials.Cartoon9F825D}
                  position={[0, -30.158, -9.865]}
                  scale={-0.14}
                />
                <mesh
                  name="Object_4003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4003.geometry}
                  material={materials.Cartoon9F825D}
                  position={[-6.443, -28.041, -8.32]}
                  scale={-0.14}
                />
                <mesh
                  name="Object_4004"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4004.geometry}
                  material={materials.Cartoon9F825D}
                  position={[-6.443, -23.95, -4.437]}
                  scale={-0.14}
                />
                <mesh
                  name="Object_4005"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4005.geometry}
                  material={materials.Cartoon9F825D}
                  position={[7.151, -23.95, -4.437]}
                  scale={-0.14}
                />
                <mesh
                  name="Object_4006"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4006.geometry}
                  material={materials.Cartoon9F825D}
                  position={[7.151, -25.467, 2.131]}
                  scale={-0.315}
                />
                <mesh
                  name="Object_4007"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4007.geometry}
                  material={materials.Cartoon9F825D}
                  position={[5.135, -24.691, 7.248]}
                  scale={-0.14}
                />
                <mesh
                  name="Object_4008"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4008.geometry}
                  material={materials.Cartoon9F825D}
                  position={[-10.787, -24.691, 4.467]}
                  scale={-0.186}
                />
                <mesh
                  name="Object_4009"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4009.geometry}
                  material={materials.Cartoon9F825D}
                  position={[-29.124, -35.241, -25.012]}
                  scale={-0.479}
                />
                <mesh
                  name="Object_4011"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4011.geometry}
                  material={materials.Cartoon9F825D}
                  position={[-39.353, -22.524, 15.443]}
                  scale={-1.105}
                />
              </group>
              <group name="Star004_2" />
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[0.008, 0.02, -0.003]}
          rotation={[-1.549, -0.04, 0]}
          scale={0.936}>
          <group name="floatingislandobjcleanermaterialmergergles001">
            <mesh
              name="Object_15002"
              castShadow
              receiveShadow
              geometry={nodes.Object_15002.geometry}
              material={materials['Cartoon9F825D.001']}
            />
          </group>
        </group>
        <group
          name="Sketchfab_model003"
          position={[0.008, 0.02, -0.003]}
          rotation={[-1.549, -0.04, 0]}
          scale={0.936}>
          <group name="floatingislandobjcleanermaterialmergergles002">
            <mesh
              name="Object_15003"
              castShadow
              receiveShadow
              geometry={nodes.Object_15003.geometry}
              material={materials['Cartoon9F825D.002']}
            />
          </group>
        </group>
        <group
          name="Sketchfab_model004"
          position={[0.008, 0.02, -0.003]}
          rotation={[-1.549, -0.04, 0]}
          scale={0.936}>
          <group name="floatingislandobjcleanermaterialmergergles003">
            <mesh
              name="Object_15005"
              castShadow
              receiveShadow
              geometry={nodes.Object_15005.geometry}
              material={materials['Cartoon9F825D.003']}
            />
          </group>
        </group>
        <group
          name="Sketchfab_model005"
          position={[0.008, 0.02, -0.003]}
          rotation={[-1.549, -0.04, 0]}
          scale={0.936}>
          <group name="floatingislandobjcleanermaterialmergergles004">
            <mesh
              name="Object_15007"
              castShadow
              receiveShadow
              geometry={nodes.Object_15007.geometry}
              material={materials['Cartoon9F825D.004']}
            />
          </group>
        </group>
        <group
          name="Sketchfab_model006"
          position={[0, 4.129, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.154}>
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Star001_1001">
                <group name="Object_4010" position={[0, -26.564, -8.32]} scale={-0.14}>
                  <mesh
                    name="Object_0003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003.geometry}
                    material={materials['Cartoon9F825D.005']}
                  />
                  <mesh
                    name="Object_0003_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_1.geometry}
                    material={materials.Cartoon366E29}
                  />
                  <mesh
                    name="Object_0003_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_2.geometry}
                    material={materials.Cartoon369037}
                  />
                  <mesh
                    name="Object_0003_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_3.geometry}
                    material={materials.Cartoon545B97}
                  />
                  <mesh
                    name="Object_0003_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_4.geometry}
                    material={materials.Cartoon70845A}
                  />
                  <mesh
                    name="Object_0003_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_5.geometry}
                    material={materials.Cartoon42782F}
                  />
                  <mesh
                    name="Object_0003_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_6.geometry}
                    material={materials.Cartoon71756A}
                  />
                  <mesh
                    name="Object_0003_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_7.geometry}
                    material={materials.Cartoon72503C}
                  />
                  <mesh
                    name="Object_0003_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_8.geometry}
                    material={materials.Cartoon748942}
                  />
                  <mesh
                    name="Object_0003_9"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_9.geometry}
                    material={materials.Cartoon74A358}
                  />
                  <mesh
                    name="Object_0003_10"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_10.geometry}
                    material={materials.Cartoon7BA5AD}
                  />
                  <mesh
                    name="Object_0003_11"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_11.geometry}
                    material={materials.Cartoon99C666}
                  />
                  <mesh
                    name="Object_0003_12"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_12.geometry}
                    material={materials.Cartoon9F825D}
                  />
                  <mesh
                    name="Object_0003_13"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_13.geometry}
                    material={materials.CartoonCE3519}
                  />
                  <mesh
                    name="Object_0003_14"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_14.geometry}
                    material={materials.CartoonD03382}
                  />
                  <mesh
                    name="Object_0003_15"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_15.geometry}
                    material={materials.CartoonEBEBEB}
                  />
                  <mesh
                    name="Object_0003_16"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_16.geometry}
                    material={materials.CartoonFFFFFF}
                  />
                  <mesh
                    name="Object_0003_17"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0003_17.geometry}
                    material={materials['CartoonFFFFFF.001']}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Cartoon9F825D}
          position={[2.955, -1.133, -1.486]}
          scale={0.074}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Cartoon9F825D}
          position={[0, 0.997, -4.792]}
          scale={0.058}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Cartoon9F825D}
          position={[0, -0.027, 4.042]}
          scale={0.046}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Cartoon9F825D}
          position={[-6.357, 0.76, -1.486]}
          scale={0.11}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.Cartoon9F825D}
          position={[0, 1.512, 2.491]}
          scale={0.046}
        />
        <group
          name="Sketchfab_model007"
          position={[0.008, 0.02, -0.003]}
          rotation={[-1.549, -0.04, 0]}
          scale={0.936}>
          <group name="floatingislandobjcleanermaterialmergergles005" />
        </group>
        <group
          name="Sketchfab_model008"
          position={[0.008, -0.65, -0.003]}
          rotation={[-1.549, -0.04, 0]}
          scale={0.936}>
          <group name="floatingislandobjcleanermaterialmergergles006" />
        </group>
        <group
          name="Sketchfab_model009"
          position={[0, 4.129, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.154}>
          <group name="root002">
            <group name="GLTF_SceneRootNode002" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Star001_1002">
                <mesh
                  name="Object_4012"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4012.geometry}
                  material={materials['CartoonFFFFFF.002']}
                  position={[-1.519, -35.241, -25.012]}
                  scale={-0.479}
                />
                <mesh
                  name="Object_4013"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4013.geometry}
                  material={materials['CartoonFFFFFF.002']}
                  position={[-12.165, -25.342, 28.013]}
                  rotation={[Math.PI, -0.191, Math.PI]}
                  scale={-0.479}
                />
                <mesh
                  name="Object_4014"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4014.geometry}
                  material={materials['CartoonFFFFFF.002']}
                  position={[-35.312, -24.217, -16.826]}
                  rotation={[0, 1.022, 0]}
                  scale={-0.479}
                />
                <mesh
                  name="Object_4015"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4015.geometry}
                  material={materials['CartoonFFFFFF.002']}
                  position={[15.621, -40.338, 12.31]}
                  rotation={[Math.PI, -0.769, Math.PI]}
                  scale={-0.479}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

useGLTF.preload('/ileDragonV2.glb')

export default Island;