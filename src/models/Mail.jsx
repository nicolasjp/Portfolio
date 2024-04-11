import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

//changer l'asset du contact ici
// import scene from '../assets/3d/fox.glb'
import scene from '../assets/3d/perso.glb'

/*const Mail = ({currentAnimation, ...props}) =>{
    const group = useRef()
    const { nodes, materials, animations } = useGLTF(scene)
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        Object.values(actions).forEach((action) => action.stop());
        if(actions[currentAnimation]){
            actions[currentAnimation].play();
        }
    }, [actions, currentAnimation]);

    return (
        <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
            name="Object_7"
            geometry={nodes.Object_7.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Object_7.skeleton}
            />
            <skinnedMesh
            name="Object_8"
            geometry={nodes.Object_8.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Object_8.skeleton}
            />
            <skinnedMesh
            name="Object_9"
            geometry={nodes.Object_9.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Object_9.skeleton}
            />
            <skinnedMesh
            name="Object_10"
            geometry={nodes.Object_10.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Object_10.skeleton}
            />
            <skinnedMesh
            name="Object_11"
            geometry={nodes.Object_11.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.Object_11.skeleton}
            />
        </group>
        </group>
    )
}*/

const Mail = ({currentAnimation, ...props}) =>{
    const group = useRef()
    const { nodes, materials, animations } = useGLTF(scene)
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        Object.values(actions).forEach((action) => action.stop());
        if(actions[currentAnimation]){
            actions[currentAnimation].play();
        }
    }, [actions, currentAnimation]);

    return (
        <group ref={group} {...props} dispose={null}>
        <group name="Scene">
            <group
            name="character-skate-boy"
            position={[1, -3.5, 0]}
            rotation={[0, 0, 0]}
            scale={6.5}>
            <skinnedMesh
                name="head-mesh"
                geometry={nodes['head-mesh'].geometry}
                material={materials.colormap}
                skeleton={nodes['head-mesh'].skeleton}
            />
            <primitive object={nodes.root} />
            </group>
        </group>
        </group>
    )
}

export default Mail;
