import Image from 'next/image'

import useGyroscope from "react-hook-gyroscope";
import { motion } from "framer-motion";


export default function Home() {
  const state = useGyroscope({ frequency: 5000 });


  return (
    <>

    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        perspective: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#60f"
      }}
    >
      <motion.div
        animate={{
          ...state
          // x: acceleration.x * 10,
          // y: acceleration.y * 10,
          // z: acceleration.z * 10,
          // rotateX: rotationRate.alpha,
          // rotateY: rotationRate.beta,
          // rotateZ: rotationRate.gamma
        }}
      >
        <pre
          style={{
            width: 200,
            height: 200,
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            borderRadius: 15,
            background: "white",
            transform: "rotate3D(var(--rotate))"
          }}
        >
          {JSON.stringify(state, null, "\t")}
        </pre>
      </motion.div>
    </div>




     <div className="relative aspect-[1/1] w-full">
      <Image
        src="https://evoluzione.fra1.cdn.digitaloceanspaces.com/media/schermata-2023-05-31-alle-20-02-52-1200x1200.png"
        alt="ciao"
        //style={{ objectFit: "cover" }}
        fill
        className=' '
        priority
        quality={30}
      //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
      />
    </div>
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-4'>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="https://evoluzione.fra1.cdn.digitaloceanspaces.com/media/schermata-2023-05-31-alle-13-01-43-1600x1200.png"
              alt="ciao"
              //style={{ objectFit: "cover" }}
              fill
              className=' '
              quality={30}
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            />
          </div>
      </div>
      <div className='col-span-4'>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="https://evoluzione.fra1.cdn.digitaloceanspaces.com/media/schermata-2023-05-31-alle-12-58-17-1600x1200.png"
              alt="ciao"
              //style={{ objectFit: "cover" }}
              fill
              className=' '
              quality={30}
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            />
          </div>
      </div>
      <div className='col-span-4'>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="https://evoluzione.fra1.cdn.digitaloceanspaces.com/media/stil-243522-unsplash-1600x1200.jpg"
              alt="ciao"
              //style={{ objectFit: "cover" }}
              fill
              className=' '
              quality={30}
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            />
          </div>
      </div>
    </div>
    </>
  )
}
