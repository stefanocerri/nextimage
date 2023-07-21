import Image from 'next/image'

export default function Home() {
  return (
    <>
     <div className="relative aspect-[1/1] w-full">
      <Image
        src="https://evoluzione.fra1.cdn.digitaloceanspaces.com/media/schermata-2023-05-31-alle-20-02-52-1200x1200.png"
        alt="ciao"
        //style={{ objectFit: "cover" }}
        fill
        className=' '
        priority
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
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            />
          </div>
      </div>
    </div>
    </>
  )
}
