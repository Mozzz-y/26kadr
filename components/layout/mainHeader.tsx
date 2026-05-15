import Link from "next/link"
import Image from "next/image"

export default function MainHeader() {
    return (
        <div className="flex flex-row container mx-auto mt-4 justify-between">
        <Image src={"/mainLogo.svg"} alt="!" width={300} height={36}/>
        <nav className="flex">
          <Link className="flex justify-center items-center rounded-[9999] bg-white py-4 px-6 " href="#">Связаться</Link>
        </nav>
      </div>
    )
}