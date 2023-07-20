import Image from 'next/image'

export default function Home() {
  return (
     <div className="relative">
      <Image
        src="https://evoluzione.fra1.cdn.digitaloceanspaces.com/media/schermata-2023-05-31-alle-20-02-52-1200x1200.png"
        alt="ciao"
        style={{ objectFit: "cover" }}
        fill
        className=''
      //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
      />
    </div>
  )
}
