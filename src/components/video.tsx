/* eslint-disable react/no-unescaped-entities */

export default function Video() {
  return (
    <>
      <div id="apropos" className="container mx-auto">
        <div className="w-full">
          <div className="flex flex-col justify-center items-center text-center py-20">
            <h3 className="mb-14 text-4xl moret-bold">
              Nous decouvrir en video
            </h3>
            <video className="w-[70%] mb-14" controls>
              <source src="/videos/presentation.mp4" type="video/mp4" />
            </video>
            {/* <video src="/videos/presentation.mp4"></video> */}
            {/* <Image src={video} alt="" className="w-[70%] mb-14" /> */}
            <p className="w-[70%]">
              L’application qui offre une alternative durable à la fast fashion.
              <br />
              Trouvez des vêtements de créateurs uniques et éthiques !
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
