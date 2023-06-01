/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import logoCard from '../../public/logoCard.webp';
import waveCard from '../../public/waveCard.webp';

export default function Accueil() {
  return (
    <>
      <div className="container mx-auto relative">
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
              <div className="flex flex-col sm:flex-row">
                <Link
                  href={'/contact'}
                  className="p-4 bg-[#2E7265] text-white shadow-lg"
                >
                  Télécharger
                </Link>
                <div className="sm:ml-5 flex items-center justify-center sm:justify-start mt-5 sm:mt-0">
                  <Link target="_blank" href={'https://www.tiktok.com/@.recif'}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-[2rem]"
                    >
                      <path
                        fill="#2E7265"
                        d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                      />
                    </svg>
                  </Link>
                  <Link
                    target="_blank"
                    href={'https://www.instagram.com/recif.store/'}
                  >
                    <svg viewBox="0 0 512.1 512" className="h-[2rem] ml-3">
                      <path
                        fill="#2E7265"
                        d="M256.1,124.7c-72.7,0-131.3,58.6-131.3,131.3s58.6,131.3,131.3,131.3S387.4,328.7,387.4,256S328.8,124.7,256.1,124.7z
	 M256.1,341.3c-47,0-85.3-38.3-85.3-85.3s38.3-85.3,85.3-85.3s85.3,38.3,85.3,85.3S303.1,341.3,256.1,341.3L256.1,341.3z
	 M423.4,119.4c0,17-13.7,30.6-30.6,30.6c-17,0-30.6-13.7-30.6-30.6s13.7-30.6,30.6-30.6C409.7,88.7,423.4,102.5,423.4,119.4z
	 M510.3,150.4c-1.9-41-11.3-77.3-41.4-107.3C439,13.2,402.7,3.9,361.7,1.8c-42.3-2.4-169-2.4-211.2,0C109.5,3.7,73.2,13.1,43.2,43
	S3.9,109.3,1.8,150.3c-2.4,42.3-2.4,169,0,211.2c1.9,41,11.3,77.3,41.4,107.3c30,29.9,66.3,39.3,107.3,41.4
	c42.3,2.4,169,2.4,211.2,0c41-1.9,77.3-11.3,107.3-41.4c29.9-29.9,39.3-66.3,41.4-107.3C512.7,319.3,512.7,192.7,510.3,150.4
	L510.3,150.4z M455.7,406.9c-8.9,22.4-26.2,39.6-48.7,48.7c-33.7,13.4-113.7,10.3-150.9,10.3s-117.3,3-150.9-10.3
	c-22.4-8.9-39.6-26.2-48.7-48.7C43.2,373.2,46.2,293.2,46.2,256s-3-117.3,10.3-150.9c8.9-22.4,26.2-39.6,48.7-48.7
	C138.9,43,218.9,46.1,256.1,46.1s117.3-3,150.9,10.3c22.4,8.9,39.6,26.2,48.7,48.7C469.1,138.8,466,218.8,466,256
	S469.1,373.3,455.7,406.9z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="h-8 md:h-9 absolute right-5 md:right-0 arrowScroll"
        >
          <path
            fill="#76BCB0"
            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
          />
        </svg>
      </div>
    </>
  );
}
