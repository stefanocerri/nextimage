"use client"
import Image from 'next/image'

import { useEffect, useState } from 'react';

async function requestDeviceMotionEventPermission() {
  try {
    // @ts-ignore
    const response = await window.DeviceMotionEvent.requestPermission();
    return response;
  } catch (err) {}
}


export default function Home() {
  const [[a, b, g], setRotation] = useState([0, 0, 0]);
  useEffect(() => {
    const callback = (e: DeviceOrientationEvent): void => {
      setRotation([e.alpha || 0, e.beta || 0, e.gamma || 0]);
    };
    window.addEventListener("deviceorientation", callback, true);
    return () =>
      window.removeEventListener("deviceorientation", callback, true);
  }, []);

  return (
    <>

      <div className="App">
      <button
        onClick={() => {
          requestDeviceMotionEventPermission();
        }}
      >
        {"request permission"}
      </button>
      <h2>{a.toFixed(1)}</h2>
      <h2>{b.toFixed(1)}</h2>
      <h2>{g.toFixed(1)}</h2>
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
