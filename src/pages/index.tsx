import Accueil from "@/components/accueil";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Produits from "@/components/produits";
import Video from "@/components/video";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recif</title>
        <meta
          name="description"
          content="Plus qu'une tendance, un art de vivre"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Header />
      <main className="">
        <Accueil />
        <Produits />
        <Video />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
