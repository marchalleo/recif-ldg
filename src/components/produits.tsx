import Image from "next/image";
import Link from "next/link";
import produit1 from "../../public/products/product.png";
import wave from "../../public/wave.svg";

export default function Produits() {
  const products = [
    {
      name: "Nauco Shop",
      img: produit1,
      title: "Pochette zèbre",
      price: "14€",
    },
    {
      name: "Nauco Shop",
      img: produit1,
      title: "Pochette zèbre",
      price: "14€",
    },
    {
      name: "Nauco Shop",
      img: produit1,
      title: "Pochette zèbre",
      price: "14€",
    },
    {
      name: "Nauco Shop",
      img: produit1,
      title: "Pochette zèbre",
      price: "14€",
    },
    {
      name: "Nauco Shop",
      img: produit1,
      title: "Pochette zèbre",
      price: "14€",
    },
    {
      name: "Nauco Shop",
      img: produit1,
      title: "Pochette zèbre",
      price: "14€",
    },
    {
      name: "Nauco Shop",
      img: produit1,
      title: "Pochette zèbre",
      price: "14€",
    },
    {
      name: "Nauco Shop",
      img: produit1,
      title: "Pochette zèbre",
      price: "14€",
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
                className="bg-white w-[80%] sm:w-[45%] lg:w-[22%] flex flex-col justify-around rounded-lg m-1 my-5 px-4 lg:px-0 shadow-md"
              >
                <div className="flex justify-start items-center p-3 sm:p-5">
                  <span className="block w-9 h-9 bg-black rounded-full"></span>
                  <p className="ml-4">{p.name}</p>
                </div>
                <div className="flex justify-center items-center my-3 sm:my-5">
                  <Image src={p.img} alt="" className="max-w-[6rem]" />
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
