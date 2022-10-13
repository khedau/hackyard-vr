/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: ShineyFX (https://sketchfab.com/ShineyFX)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/star-wars-the-clone-wars-venator-prefab-8a1e1760391c4ac6a50373c2bf5efa2e
title: Star Wars: The Clone Wars: Venator Prefab
*/
import { useRef, useMemo, useLayoutEffect } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export function Hall(props) {
  const { nodes } = useGLTF('/starwars-transformed.glb')
  const instances = useMemo(
    () => ({
      LDoorPartVenatorVLargeDoor: nodes.L_Door_Part1_VenatorV3_LargeDoor_0,
      LDoorPartVenatorVLargeDoor1: nodes.L_Door_Part10_VenatorV3_LargeDoor_0,
      LargeDoorEndVenatorVLargeDoor: nodes.LargeDoor_End_VenatorV3_LargeDoor_0,
      LargeDoorFrameVenatorVLargeDoor: nodes.LargeDoorFrame_VenatorV3_LargeDoor_0,
      SmallDoorFrameVenatorVSmallDoorWallLight: nodes.Small_DoorFrame_VenatorV3_SmallDoor_WallLight_0,
      VenatorDoorVenatorVSmallDoorWallLight: nodes.Venator_Door_VenatorV3_SmallDoor_WallLight_0,
      VenatorLightVenatorVSmallDoorWallLight: nodes.VenatorLight_VenatorV3_SmallDoor_WallLight_0,
      VenatorLightsVenatorVSmallDoorWallLight6: nodes.VenatorLights18_VenatorV3_SmallDoor_WallLight_0,
      VenatorLightsVenatorVSmallDoorWallLight7: nodes.VenatorLights19_VenatorV3_SmallDoor_WallLight_0,
      VenatorLightsVenatorVSmallDoorWallLight9: nodes.VenatorLights20_VenatorV3_SmallDoor_WallLight_0,
      VenatorLightsVenatorVSmallDoorWallLight10: nodes.VenatorLights21_VenatorV3_SmallDoor_WallLight_0,
      VenatorPipeVenatorVSmallDoorWallLight: nodes.VenatorPipe_VenatorV3_SmallDoor_WallLight_0,
      WallPanelVenatorVWallPanels5: nodes.WallPanel15_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels6: nodes.WallPanel16_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels7: nodes.WallPanel18_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels8: nodes.WallPanel19_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels10: nodes.WallPanel20_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels11: nodes.WallPanel21_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels12: nodes.WallPanel23_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels13: nodes.WallPanel24_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels14: nodes.WallPanel26_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels15: nodes.WallPanel28_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels16: nodes.WallPanel29_VenatorV3_WallPanels_0,
      WallPanelVenatorVWallPanels17: nodes.WallPanel31_VenatorV3_WallPanels_0
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <Model instances={instances} />}
    </Merged>
  )
}

function Model({ instances, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/starwars-transformed.glb')
  useLayoutEffect(() => {
    Object.assign(materials.VenatorV3_SmallDoor_WallLight, { emissiveIntensity: 10, toneMapped: false })
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0, 0]} scale={0.01}>
        <instances.LDoorPartVenatorVLargeDoor position={[-731.9, 0, 89.8]} rotation={[0, Math.PI / 2, 0]} />
        <instances.LDoorPartVenatorVLargeDoor1 position={[-1180.34, 0, 200]} />
        <instances.LDoorPartVenatorVLargeDoor position={[-931.9, 0, 467.47]} rotation={[0, Math.PI / 2, 0]} />
        <instances.LDoorPartVenatorVLargeDoor1 position={[-531.9, 0, 467.47]} rotation={[0, Math.PI / 2, 0]} />
        <instances.LDoorPartVenatorVLargeDoor1 position={[-731.9, 0, 89.8]} rotation={[0, Math.PI / 2, 0]} />
        <instances.LDoorPartVenatorVLargeDoor position={[-92.85, 0, -200]} />
        <instances.LDoorPartVenatorVLargeDoor1 position={[-92.85, 0, 200]} />
        <instances.LDoorPartVenatorVLargeDoor position={[-802.44, 0, -200]} />
        <instances.LDoorPartVenatorVLargeDoor1 position={[-802.44, 0, 200]} />
        <instances.LDoorPartVenatorVLargeDoor position={[-1180.34, 0, -200]} />
        <instances.LargeDoorEndVenatorVLargeDoor position={[314.66, 0, 0]} />
        <instances.LargeDoorEndVenatorVLargeDoor position={[-712.84, 0, 337.76]} rotation={[0, -Math.PI / 2, 0]} />
        <instances.LargeDoorEndVenatorVLargeDoor position={[-1050.97, 0, 19.29]} rotation={[Math.PI, 0, Math.PI]} />
        <instances.LargeDoorFrameVenatorVLargeDoor position={[-802.44, 0, 0]} />
        <instances.LargeDoorFrameVenatorVLargeDoor position={[-1180.34, 0, 0]} />
        <instances.LargeDoorFrameVenatorVLargeDoor position={[-731.9, 0, 89.8]} rotation={[0, Math.PI / 2, 0]} />
        <instances.LargeDoorFrameVenatorVLargeDoor position={[-731.9, 0, 467.47]} rotation={[0, Math.PI / 2, 0]} />
        <instances.LargeDoorFrameVenatorVLargeDoor position={[-92.85, 0, 0]} />
        <mesh
          geometry={nodes.pPlane28_Venator_Floor_0.geometry}
          material={materials.Venator_Floor}
          position={[705.33, -108.78, 9.31]}
          scale={[335.27, 1, 338.93]}
        />
        <mesh
          geometry={nodes.pPlane29_Venator_Floor_0.geometry}
          material={materials.Venator_Floor}
          position={[-722.74, -108.78, -1123.52]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[335.27, 1, 338.93]}
        />
        <instances.SmallDoorFrameVenatorVSmallDoorWallLight position={[-178.48, -5.23, -169.44]} scale={6.46} />
        <instances.SmallDoorFrameVenatorVSmallDoorWallLight position={[530.97, -5.23, -169.44]} scale={6.46} />
        <instances.SmallDoorFrameVenatorVSmallDoorWallLight
          position={[-901.57, -5.23, 553.07]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.SmallDoorFrameVenatorVSmallDoorWallLight
          position={[-544.2, -5.23, 553.07]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.SmallDoorFrameVenatorVSmallDoorWallLight
          position={[-178.48, -5.23, 187.93]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={6.46}
        />
        <instances.SmallDoorFrameVenatorVSmallDoorWallLight
          position={[530.97, -5.23, 187.93]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={6.46}
        />
        <instances.SmallDoorFrameVenatorVSmallDoorWallLight
          position={[-1266.28, -5.23, 187.93]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={6.46}
        />
        <instances.SmallDoorFrameVenatorVSmallDoorWallLight position={[-1266.28, -5.23, -169.44]} scale={6.46} />
        <instances.VenatorDoorVenatorVSmallDoorWallLight
          position={[-535.42, -18.11, 553.07]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorDoorVenatorVSmallDoorWallLight position={[-178.47, -18.11, -178.22]} scale={6.46} />
        <instances.VenatorDoorVenatorVSmallDoorWallLight position={[-910.34, -18.11, 553.07]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.VenatorDoorVenatorVSmallDoorWallLight position={[530.97, -18.11, -178.22]} scale={6.46} />
        <instances.VenatorDoorVenatorVSmallDoorWallLight position={[530.97, -18.11, 196.7]} rotation={[Math.PI, 0, Math.PI]} scale={6.46} />
        <instances.VenatorDoorVenatorVSmallDoorWallLight
          position={[-178.48, -18.11, 196.7]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={6.46}
        />
        <instances.VenatorDoorVenatorVSmallDoorWallLight
          position={[-1266.28, -18.11, 196.7]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={6.46}
        />
        <instances.VenatorDoorVenatorVSmallDoorWallLight position={[-1266.28, -18.11, -178.22]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-56.45, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[4.37, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[64.69, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[835.01, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[774.18, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[713.86, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[653.04, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[592.06, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[531.24, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[470.54, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[409.71, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[348.74, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-178.25, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[288.19, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[227.65, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight
          position={[-722.51, 103.76, 248.83]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorLightVenatorVSmallDoorWallLight
          position={[-722.51, 103.76, 309.66]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-1083.18, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-722.51, 103.76, 430.8]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight
          position={[-722.51, 103.76, 491.78]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-722.51, 103.76, 552.6]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-722.51, 103.76, 613.3]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight
          position={[-722.51, 103.76, 674.13]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-117.43, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-722.51, 103.76, 735.1]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight
          position={[-722.51, 103.76, 795.65]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorLightVenatorVSmallDoorWallLight
          position={[-722.51, 103.76, 856.19]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-766.13, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-705.59, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-645.04, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-584.07, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-826.95, 103.76, 9.61]} scale={6.46} />
        <mesh
          geometry={nodes.VenatorLight39_VenatorV3_SmallDoor_WallLight_0.geometry}
          material={materials.VenatorV3_SmallDoor_WallLight}
          position={[-888, 103.76, 9.61]}
          scale={6.46}
        />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-421.3, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-1326.51, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-1022.87, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight
          position={[-722.51, 103.76, 369.97]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-1448.31, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-962.04, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-1204.98, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-1569.4, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-1144.01, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-1508.86, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-1265.81, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-360.75, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-1387.34, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-299.78, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-238.95, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[-481.84, 103.76, 9.61]} scale={6.46} />
        <instances.VenatorLightVenatorVSmallDoorWallLight position={[125.52, 103.76, 9.61]} scale={6.46} />
        <mesh
          geometry={nodes.VenatorLights_VenatorV3_SmallDoor_WallLight_0.geometry}
          material={materials.VenatorV3_SmallDoor_WallLight}
          position={[-56.79, -5.34, -159.23]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.VenatorLights1_VenatorV3_SmallDoor_WallLight_0.geometry}
          material={materials.VenatorV3_SmallDoor_WallLight}
          position={[-300.39, -5.34, -159.23]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.VenatorLights11_VenatorV3_SmallDoor_WallLight_0.geometry}
          material={materials.VenatorV3_SmallDoor_WallLight}
          position={[-300.39, -5.34, -140.5]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.VenatorLights13_VenatorV3_SmallDoor_WallLight_0.geometry}
          material={materials.VenatorV3_SmallDoor_WallLight}
          position={[-56.79, -5.34, -140.5]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.VenatorLights15_VenatorV3_SmallDoor_WallLight_0.geometry}
          material={materials.VenatorV3_SmallDoor_WallLight}
          position={[409.22, -5.34, -140.5]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.VenatorLights17_VenatorV3_SmallDoor_WallLight_0.geometry}
          material={materials.VenatorV3_SmallDoor_WallLight}
          position={[652.67, -5.34, -140.5]}
          scale={6.46}
        />
        <instances.VenatorLightsVenatorVSmallDoorWallLight6 position={[-1144.47, -5.34, -140.5]} scale={6.46} />
        <instances.VenatorLightsVenatorVSmallDoorWallLight7
          position={[-891.36, -5.34, 674.84]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.VenatorLights2_VenatorV3_SmallDoor_WallLight_0.geometry}
          material={materials.VenatorV3_SmallDoor_WallLight}
          position={[409.22, -5.34, -159.23]}
          scale={6.46}
        />
        <instances.VenatorLightsVenatorVSmallDoorWallLight9 position={[-1388.05, -5.34, -140.5]} scale={6.46} />
        <instances.VenatorLightsVenatorVSmallDoorWallLight10 position={[-1144.47, -5.34, -159.23]} scale={6.46} />
        <mesh
          geometry={nodes.VenatorLights3_VenatorV3_SmallDoor_WallLight_0.geometry}
          material={materials.VenatorV3_SmallDoor_WallLight}
          position={[652.67, -5.34, -159.23]}
          scale={6.46}
        />
        <instances.VenatorLightsVenatorVSmallDoorWallLight10
          position={[-891.36, -5.34, 431.26]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorLightsVenatorVSmallDoorWallLight7 position={[-1388.05, -5.34, -159.23]} scale={6.46} />
        <instances.VenatorLightsVenatorVSmallDoorWallLight6
          position={[-872.62, -5.34, 431.26]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorLightsVenatorVSmallDoorWallLight9
          position={[-872.62, -5.34, 674.84]}
          rotation={[0, Math.PI / 2, 0]}
          scale={6.46}
        />
        <instances.VenatorPipeVenatorVSmallDoorWallLight position={[-396.35, -5.51, -142.88]} scale={6.46} />
        <instances.VenatorPipeVenatorVSmallDoorWallLight position={[19.92, -5.51, 163.19]} scale={6.46} />
        <instances.VenatorPipeVenatorVSmallDoorWallLight position={[-875, -5.51, 299.17]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.VenatorPipeVenatorVSmallDoorWallLight position={[-567.46, -5.51, 783.48]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.VenatorPipeVenatorVSmallDoorWallLight position={[608.16, -5.51, 163.19]} scale={6.46} />
        <instances.VenatorPipeVenatorVSmallDoorWallLight position={[304.93, -5.51, -142.88]} scale={6.46} />
        <instances.VenatorPipeVenatorVSmallDoorWallLight position={[-1496.69, -5.51, 164.67]} scale={6.46} />
        <instances.VenatorPipeVenatorVSmallDoorWallLight position={[-1012.37, -5.51, -142.88]} scale={6.46} />
        <mesh
          geometry={nodes.WallPanel10_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[287.87, -5.34, -157.64]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel11_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[226.97, -5.34, -159.37]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel12_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[348.53, -5.34, -159.37]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel13_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[1421.75, -5.86, 23.75]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel14_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[1421.75, -5.86, 23.75]}
          scale={6.46}
        />
        <instances.WallPanelVenatorVWallPanels5 position={[-891.49, -5.34, 249]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels6 position={[-889.77, -5.34, 309.78]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels7 position={[-708.37, -5.86, -277.75]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels8 position={[-891.49, -5.34, 857.25]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <mesh
          geometry={nodes.WallPanel2_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[712.84, -5.86, 23.75]}
          scale={6.46}
        />
        <instances.WallPanelVenatorVWallPanels10 position={[-889.77, -5.34, 796.5]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels11 position={[-891.49, -5.34, 735.72]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels12 position={[-872.75, -5.34, 249]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels13 position={[-871.03, -5.34, 309.78]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels14 position={[-689.64, -5.86, -277.75]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels15 position={[-872.75, -5.34, 735.72]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels16 position={[-871.03, -5.34, 796.5]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels17 position={[-872.75, -5.34, 857.25]} rotation={[0, Math.PI / 2, 0]} scale={6.46} />
        <mesh
          geometry={nodes.WallPanel33_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[-482.77, -5.34, -140.63]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel34_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[-422.02, -5.34, -138.91]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel36_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[-361.25, -5.34, -140.63]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel38_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[3.76, -5.34, -140.63]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel4_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[712.79, -5.86, 23.75]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel40_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[712.79, -5.86, 42.49]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel41_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[712.84, -5.86, 42.49]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel42_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[287.87, -5.34, -138.91]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel44_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[226.97, -5.34, -140.63]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel46_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[348.53, -5.34, -140.63]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel47_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[1300.69, -5.86, 42.49]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel49_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[1421.75, -5.86, 42.49]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel5_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[3.76, -5.34, -159.37]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel50_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[1421.75, -5.86, 42.49]}
          scale={6.46}
        />
        <instances.WallPanelVenatorVWallPanels8 position={[-1570.45, -5.34, -159.37]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels16 position={[-1509.71, -5.34, -138.91]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels13 position={[-1022.99, -5.34, -138.91]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels14 position={[-435.46, -5.86, 42.49]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels5 position={[-962.21, -5.34, -159.37]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels6 position={[-1022.99, -5.34, -157.64]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels12 position={[-962.21, -5.34, -140.63]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels15 position={[-1448.93, -5.34, -140.63]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels10 position={[-1509.71, -5.34, -157.64]} scale={6.46} />
        <mesh
          geometry={nodes.WallPanel6_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[-482.77, -5.34, -159.37]}
          scale={6.46}
        />
        <instances.WallPanelVenatorVWallPanels7 position={[-435.46, -5.86, 23.75]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels17 position={[-1570.45, -5.34, -140.63]} scale={6.46} />
        <instances.WallPanelVenatorVWallPanels11 position={[-1448.93, -5.34, -159.37]} scale={6.46} />
        <mesh
          geometry={nodes.WallPanel7_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[-361.25, -5.34, -159.37]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel8_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[-422.02, -5.34, -157.64]}
          scale={6.46}
        />
        <mesh
          geometry={nodes.WallPanel9_VenatorV3_WallPanels_0.geometry}
          material={materials.VenatorV3_WallPanels}
          position={[1300.69, -5.86, 23.75]}
          scale={6.46}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/starwars-transformed.glb')
