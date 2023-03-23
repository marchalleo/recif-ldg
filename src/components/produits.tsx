import Image from "next/image";
import Link from "next/link";
import bob1 from "../../public/products/bob1.webp";
import bob2 from "../../public/products/bob2.webp";
import cabaslacoste from "../../public/products/cabas-lacoste.webp";
import nauco from "../../public/products/nauco.png";
import wearmisa from "../../public/products/wearmisa.png";
import pochette from "../../public/products/product.png";
import ralph from "../../public/products/sacra-la.webp";
import trousse from "../../public/products/trousse.webp";
import wave from "../../public/wave.svg";

export default function Produits() {
  const products = [
    {
      name: "Nauco Shop",
      img: bob1,
      title: "Le bob - bleu",
      price: "28€",
      artist: nauco,
    },
    {
      name: "Wearmisa",
      img: ralph,
      title: "Le cabas Ralph Lauren",
      price: "90€",
      artist: wearmisa,
    },
    {
      name: "Nauco Shop",
      img: pochette,
      title: "Pochette",
      price: "14€",
      artist: nauco,
    },
    {
      name: "Wearmisa",
      img: cabaslacoste,
      title: "Le cabas Lacoste",
      price: "90€",
      artist: wearmisa,
    },
    {
      name: "Nauco Shop",
      img: bob2,
      title: "Le bob - blanc",
      price: "28€",
      artist: nauco,
    },
    {
      name: "Nauco Shop",
      img: trousse,
      title: "Trousse",
      price: "18€",
      artist: nauco,
    },
  ];
  return (
    <div>
      <Image
        src={wave}
        alt=""
        className="relative w-full h-full z-[1] translate-y-[1px]"
      />
      <div className="relative w-full h-full bg-[#76BCB0] z-[2] py-8">
        <div id="produits" className="container mx-auto">
          <h3 className="text-4xl mb-5 moret-bold pb-5 text-center md:text-left">
            Decouvrez nos produits
          </h3>
          <div className="w-full h-full flex flex-wrap justify-around pb-8">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-white w-[80%] sm:w-[45%] lg:w-[30%] flex flex-col justify-between rounded-lg m-1 my-5 px-4 lg:px-0 shadow-md"
              >
                <div className="flex justify-start items-center p-3 sm:p-5">
                  <span
                    className="block w-9 h-9 rounded-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${p.artist.src})` }}
                  ></span>
                  <p className="ml-4">{p.name}</p>
                </div>
                <div className="flex justify-center items-center my-3 sm:my-5">
                  <Image src={p.img} alt="" className="w-[7rem] max-w-[8rem]" />
                </div>
                <div className="p-5 flex flex-col">
                  <div className="flex justify-between mb-4">
                    <p className="font-light">{p.title}</p>
                    <p className="font-semibold text-lg">{p.price}</p>
                  </div>
                  <Link
                    href={"/achat"}
                    className="bg-[#2E7265] text-white px-4 py-3 text-center"
                  >
                    Acheter
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
