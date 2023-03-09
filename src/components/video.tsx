/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import video from "../../public/video.jpg";

export default function Video() {
  return (
    <>
      <div id="apropos" className="container mx-auto">
        <div className="w-full">
          <div className="flex flex-col justify-center items-center text-center py-20">
            <h3 className="mb-14 text-4xl moret-bold">
              Nous decouvrir en video
            </h3>
            <Image src={video} alt="" className="w-[70%] mb-14" />
            <p className="w-[70%]">
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
              les années 1500, quand un imprimeur anonyme assembla ensemble des
              morceaux de texte pour réaliser un livre spécimen de polices de
              texte.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
