import {Suspense, useState, useEffect, useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island';
import Sky from '../models/Sky';
import Flying from '../models/Flying';
import Cloud from '../models/Cloud';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if(isPlaying){
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    } 
  }, [isPlaying])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, -2];
    let screenRotation = [-1.3, 0, -1.5]; //[-0.9, 0, -1.8]

    if(window.innerWidth < 768){
      //à ajuster
      screenScale = [0.5, 0.5, 0.5];
    }
    else{
      //à ajuster
      screenScale = [0.7, 0.7, 0.7];
    }
    
    return [screenScale, screenPosition, screenRotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-0.75, 0, 2.5];
    let screenRotation = [0, 1.2, 0]; 

    if(window.innerWidth < 768){
      //à ajuster
      screenScale = [0.25, 0.25, 0.25];
    }
    else{
      //à ajuster
      screenScale = [0.35, 0.35, 0.35];
    }
    
    return [screenScale, screenPosition, screenRotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas className={`w-full h-screen bg-transparent"
              ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
              camera={{near:0.1, far:1000}}
      >
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1, 1, 1]} intensity={1}/>
          <ambientLight intensity={1}/>
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={2}/>

          <Flying/>
          <Sky isRotating={isRotating}/>
          <Island 
            position={islandPosition} 
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Cloud
            isRotating={isRotating}
            position={planePosition} 
            scale={planeScale}
            rotation={planeRotation}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img 
          src={!isPlaying ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlaying(!isPlaying)}
        />
      </div>
    </section>
  )
}

export default Home