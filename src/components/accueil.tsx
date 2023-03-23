/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import logoCard from "../../public/logoCard.webp";
import waveCard from "../../public/waveCard.webp";

export default function Accueil() {
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full h-[70vh] md:h-[80vh] flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
            <div className="flex flex-col items-center lg:items-start lg:pr-20 text-center lg:text-left px-4 md:px-0">
              <h1 className="text-7xl mb-10 moret-smbold">
                Bienvenue sur Recif
              </h1>
              <p className="mb-8">
                Vous découvrirez bientôt une expérience de shopping en ligne
                unique responsable et respectueuse de l'environnement sur notre
                application.
              </p>
              <Link
                href={"/contact"}
                className="p-4 bg-[#2E7265] text-white shadow-lg"
              >
                Télécharger
              </Link>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 h-full hidden md:block">
            <div className="w-full h-full flex justify-center items-center mt-8">
              <Image
                src={logoCard}
                alt=""
                className="z-[2] w-[30%] lg:w-[60%] absolute translate-x-[-2rem] translate-y-[2rem]"
              />
              <Image
                src={waveCard}
                alt=""
                className="z-[1] w-[30%] lg:w-[60%] absolute translate-x-[3rem] translate-y-[-3rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
