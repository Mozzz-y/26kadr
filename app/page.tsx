import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col justify-center text-center text-white mt-60 gap-10">
      <p className="text-6xl ">Партнёрские проекты 26 КАДР</p>
      <p className="text-4xl ">Практико-ориентированное обучение, <br/>подготовка специалистов и совместные <br />проекты с индустрией</p>
      <div className="flex justify-center">
        <p className="flex justify-center items-center rounded-[9999] bg-white text-black py-4 px-6 w-[228] h-[48]" >Смотреть кейсы</p>
      </div>
    </div>
  );
}
