/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/footer";
import Head from "next/head";
import Link from "next/link";

export default function Cookies() {
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
      <div className="w-full h-[10vh] flex justify-center items-center mb-10">
        <Link href={"/"} className="flex justify-start items-center">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
          >
            <path
              d="M47.8541 33.4644C47.3982 33.9779 47.4034 34.9434 47.8541 35.4826C48.1597 35.8523 48.6726 36.0064 50.1283 35.9602C51.7757 35.9037 52.7497 35.6623 53.8376 35.4826C56.4331 35.0666 57.7282 34.8561 58.6244 35.6007C59.5466 36.3659 59.7693 37.9013 59.3445 39.0414C58.7384 40.6744 56.9045 41.2136 56.231 41.4139C54.0345 42.061 52.7704 41.2342 47.6209 39.9914C43.4299 38.9798 42.114 39.0106 41.0416 39.1595C39.6843 39.3495 37.8452 39.863 36.4931 41.2958C35.5917 42.2561 35.4466 43.0572 35.4155 43.314C35.3119 44.074 35.4466 45.3065 36.2548 45.8046C36.5656 45.9946 37.1148 46.1641 39.1248 45.4503C41.1245 44.7365 41.3576 44.3 42.4715 43.9045C45.5228 42.8415 48.5897 44.4335 49.1751 44.7365C50.2475 45.2911 51.2421 45.8098 51.8068 46.9909C52.4389 48.3158 52.3456 50.0978 51.3302 51.3765C49.9107 53.1687 47.5018 52.9581 47.1443 52.9222C45.1446 52.7116 45.0099 51.4329 42.7201 50.904C42.3627 50.8218 39.8035 50.2724 37.8141 51.6178C37.0837 52.1108 37.0371 52.4446 35.659 54.4628C33.908 57.0253 33.0325 58.3092 31.9497 58.9716C31.6545 59.1565 28.7896 60.8512 26.6863 59.4492C25.5103 58.6635 24.7125 57.0099 25.1269 55.7723C25.4948 54.6836 26.5205 54.7504 28.2405 53.0454C28.8466 52.4446 30.4318 50.8681 30.0381 50.0772C29.7843 49.574 28.5927 49.6202 26.2097 49.7229C24.039 49.8204 22.9356 49.8769 22.0238 50.3186C20.6768 50.9708 20.7597 51.5973 19.2729 52.8092C18.2264 53.6617 16.0765 55.4077 13.652 54.9455C11.9942 54.6271 10.3883 53.3228 9.82357 51.5048C9.11902 49.2504 10.2795 47.0525 11.6212 45.933C13.1858 44.6184 15.1233 44.6697 17.9622 44.7467C21.656 44.8443 22.661 45.7635 25.6191 45.2243C26.3288 45.0959 29.0694 44.5927 29.204 43.4424C29.2973 42.6618 28.1628 41.7323 27.0541 41.4242C25.5984 41.0236 24.9042 41.8966 22.7439 42.251C22.3191 42.3229 18.5269 42.9545 17.4804 41.3009C16.6723 40.0274 17.8379 37.927 18.2005 37.2697C19.4594 35.005 21.1742 34.5069 20.9514 33.829C20.6924 33.0279 17.9778 32.6736 16.0506 33.829C15.3098 34.2706 15.0041 34.7431 13.6572 36.7921C10.8441 41.075 10.6939 41.2907 10.3054 41.6553C9.82875 42.1072 6.99499 44.7878 4.56531 43.7916C2.81946 43.0777 1.95948 40.736 2.17189 38.9284C2.35321 37.4186 3.41004 36.2786 5.51853 34.0652C8.34193 31.1073 9.98417 30.2343 9.70442 29.4434C9.4972 28.8683 8.01038 28.6937 5.04192 28.3753C1.98021 28.0466 1.43107 28.2058 0.856026 27.6615C-0.506462 26.3776 -0.252614 22.8394 1.6901 21.1396C4.07833 19.0495 8.057 20.5696 8.63205 20.7852C12.1134 22.105 12.1807 24.5032 15.8123 25.6433C17.4908 26.1722 20.1536 26.506 20.8374 25.407C21.6301 24.1232 19.3558 21.5042 19.0398 21.1344C17.4804 19.3422 15.5947 18.536 14.4913 18.1714L9.82875 19.2652C8.4041 19.0238 7.30582 18.12 7.07788 17.0108C6.78259 15.5831 8.0311 14.3404 8.87553 13.8115C10.497 12.7793 11.5539 13.8115 13.6624 12.8614C13.9059 12.7484 15.574 11.973 16.5324 10.2527C17.4494 8.61963 16.75 7.88527 17.61 6.45765C18.3663 5.19949 20.0966 3.79754 21.6767 4.20324C23.3604 4.6346 24.3602 6.96605 24.0701 8.71206C23.7489 10.6173 22.0601 10.7457 21.3192 13.2158C21.1379 13.832 20.6406 15.4702 21.4384 16.8978C22.1844 18.233 23.7852 19.3576 25.2668 19.1522C26.3392 18.9981 26.9453 18.2176 27.4893 17.4473C26.7122 16.3226 26.2045 15.0131 26.2719 13.755C26.3962 11.3516 28.5099 11.0949 28.2923 9.2256C28.085 7.43336 26.1009 7.32552 25.3445 4.91191C25.2513 4.61406 24.5519 2.25694 25.8574 0.911483C26.878 -0.146396 28.7948 -0.223426 30.1469 0.372273C32.903 1.59448 32.5092 5.29193 34.5348 5.70275C35.9699 5.99547 36.4827 4.19297 39.1248 3.76673C39.2906 3.74106 42.7512 3.22239 43.7821 5.07111C44.5437 6.43197 43.72 8.57854 42.3679 9.55426C41.0209 10.53 40.078 9.67751 36.7107 10.4016C34.9182 10.7867 33.2501 11.1668 32.587 12.5122C32.2554 13.1849 32.0275 14.3815 32.6284 15.0285C33.6801 16.1737 36.0372 14.2428 38.6068 15.4188C39.5496 15.8502 40.7412 16.8054 40.7101 17.8324C40.6634 19.4757 37.524 20.5285 35.9854 20.8263C35.6435 20.8931 33.9857 21.1909 32.0844 20.7082C31.3022 21.2731 29.8827 21.2731 28.743 22.6853C27.9866 23.6251 27.8364 24.6932 27.5463 26.8347C27.137 29.7978 27.5877 31.7697 27.7846 32.5246C28.256 34.3066 28.8414 34.9331 29.2196 35.2515C30.0796 35.9704 31.354 36.3505 31.7322 35.9653C31.8669 35.8215 31.7995 35.6675 31.8513 34.779C31.8824 34.2861 31.9083 34.2912 31.9705 33.5928C32.0534 32.6736 32.043 32.3244 32.0896 31.5746C32.0896 31.5232 32.1673 30.3627 32.3279 29.3202C32.4005 28.8529 32.6232 27.4971 33.1672 26.1209C33.7422 24.6676 34.338 23.168 35.7989 22.2077C37.0681 21.3707 39.4978 20.6055 41.0624 21.8534C42.5077 23.0088 42.5129 25.3198 42.0208 26.7166C41.6011 27.8926 40.9898 27.9644 40.5857 29.3253C40.2179 30.5732 40.1713 32.4117 40.9432 32.766C41.6167 33.0741 42.9014 32.2473 43.3366 31.2254C43.5387 30.7581 43.4143 30.5886 43.4558 28.8529C43.4558 28.8529 43.4765 27.9388 43.5749 26.7166C43.7044 25.1246 43.7666 24.3286 43.9324 23.8664C44.4919 22.3669 45.73 22.444 47.165 21.0215C48.7814 19.4141 47.9991 18.5206 49.6776 15.804C50.5169 14.4431 52.1954 11.7162 54.221 11.8908C55.7078 12.0192 56.8268 13.6523 57.2153 14.8539C57.6712 16.2867 57.2464 17.5757 56.7335 19.1214C56.2569 20.5593 55.6197 21.5453 55.4177 21.8483C54.3246 23.4813 53.6459 23.5429 52.185 25.1708C50.5013 27.0555 49.3564 29.2842 49.6724 29.5564C49.7812 29.6488 50.0195 29.464 50.9883 28.9607C52.128 28.3701 52.1487 28.4472 53.2626 27.8977C55.5835 26.7371 55.4125 26.4495 56.3761 26.2338C56.8164 26.1414 58.4224 25.7819 59.3653 26.7114C60.2719 27.5998 60.0698 29.1867 59.6088 30.1521C58.9767 31.4667 57.6868 31.9803 56.6144 32.4065C54.4748 33.259 52.1125 33.2949 50.8743 33.2384C49.2787 33.1665 48.4032 32.8995 47.8851 33.4747L47.8541 33.4644Z"
              fill="#76BCB0"
            />
          </svg>
          <p className="ml-3 moret-bold text-4xl text-[#76BCB0]">Recif</p>
        </Link>
      </div>
      <div className="container mx-auto px-10 mb-20 text-sm">
        <div>
          Cette politique de cookies explique comment notre site Web utilise les
          cookies et les technologies similaires pour améliorer votre expérience
          en ligne. En continuant à utiliser notre site Web, vous consentez à
          notre utilisation des cookies conformément à la présente politique.
          <br />
          <br />
          <br />
          <p className="font-bold text-lg">Qu'est-ce qu'un cookie ?</p>
          <br />
          Un cookie est un petit fichier texte qui est stocké sur votre
          ordinateur ou votre appareil mobile lorsque vous visitez un site Web.
          Les cookies sont largement utilisés pour faire fonctionner les sites
          Web, ou pour les faire fonctionner plus efficacement, ainsi que pour
          fournir des informations aux propriétaires du site Web.
          <br />
          <br />
          <br />
          <p className="font-bold text-lg">
            Comment utilisons-nous les cookies ?
          </p>
          <br />
          Notre site Web utilise Hotjar, un outil d'analyse de site Web, pour
          nous aider à comprendre comment les visiteurs utilisent notre site
          Web. Hotjar utilise des cookies pour collecter des informations
          anonymes sur les mouvements de souris, les clics, la durée de visite
          sur chaque page et les informations de base sur le dispositif utilisé
          pour accéder à notre site Web. Ces informations nous aident à
          améliorer la convivialité et la performance de notre site Web.
          <br />
          <br />
          <br />
          <p className="font-bold text-lg">Les cookies que nous utilisons</p>
          <br />
          <ul>
            <li>
              Cookies de session : ces cookies sont temporaires et expirent
              lorsque vous fermez votre navigateur Web.
            </li>
            <br />
            <li>
              Cookies persistants : ces cookies restent sur votre ordinateur ou
              votre appareil mobile jusqu'à leur expiration ou jusqu'à ce que
              vous les supprimiez.
            </li>
            <br />
            <li>
              Cookies de première partie : ces cookies sont placés par notre
              site Web.
            </li>
            <br />
            <li>
              Cookies de tiers : ces cookies sont placés par des tiers, tels que
              Hotjar.
            </li>
          </ul>
          <br />
          <br />
          <p className="font-bold text-lg">Comment contrôler les cookies</p>
          <br />
          La plupart des navigateurs Web acceptent automatiquement les cookies,
          mais vous pouvez modifier les paramètres de votre navigateur pour les
          refuser si vous le souhaitez. Toutefois, cela peut vous empêcher
          d'utiliser certaines fonctionnalités de notre site Web.
          <br />
          <br />
          <br />
          Pour plus d'informations sur la façon de contrôler les cookies,
          veuillez consulter les paramètres de votre navigateur Web.
        </div>
      </div>
      <Footer />
    </>
  );
}
