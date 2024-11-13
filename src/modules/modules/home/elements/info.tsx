import { useTranslations } from 'next-intl';
import Image from 'next/image'
import {Link} from '~/navigation';

type Props = {
    locale: string;
  };
  
  const HomePageInfo: React.FC<Props> = (props) => {
    const { locale } = props;
    const translation = useTranslations("Home.Info");
  
    return ( 
        <div className="relative min-h-[calc(100vh-85px-200px)] pt-6 pb-12 space-y-5 flex justify-center items-center lg:pt-24">
            <div className="relative w-full flex flex-col gap-10 md:max-w-[700px]  lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
                {/* <Link href="/services/forgiveness"> */}
                    <div className="flex flex-col p-5 gap-10 mx-auto w-full lg:p-0 lg:gap-5 lg:flex-row lg:items-center lg:justify-between  py-[50px]">
                        <div className="lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[850px] p-4">
                                <h1 className="font-outfit text-center mb-4 font-bold text-black text-3xl md:text-4xl lg:text-left xl:text-5xl">
                                    {
                                        // translation("Title1") Seans regresyjno-szamański
                                        locale === "pl" ? "Co tydzień zmiana towaru" 
                                        : locale === "de" ? "Warenwechsel jede Woche" 
                                        : "Weekly change of goods"
                                    }
                                </h1>
                                <p className="text-black text-center text-base md:text-lg lg:text-left">
                                    {
                                        // translation("Description1") W stanie relaksu poprowadzę cię
                                        locale === "pl" ? <>Nuda? U&nbsp;nas nie! W&nbsp;każdy poniedziałek odświeżamy asortyment. 
                                        Nie&nbsp;znaczy to&nbsp;jednak, że&nbsp;niesprzedane rzeczy trafiają do&nbsp;śmieci. Część 
                                        z&nbsp;nich znajdziecie w&nbsp;specjalnym koszyku z&nbsp;promocjami, a&nbsp;część 
                                        być może już wkrótce wróci na&nbsp;półki.</>
                                        : locale === "de" ? <>Langeweile? Nicht bei uns! Jeden Montag aktualisieren wir 
                                        das Sortiment. Das bedeutet jedoch nicht, dass nicht verkaufte Artikel im Müll 
                                        landen. Einige davon finden Sie in einem speziellen Warenkorb mit Sonderaktionen, 
                                        andere sind möglicherweise bald wieder in den Regalen erhältlich.</>
                                        : <>Boredom? Not with us! Every Monday we refresh our assortment. However, this 
                                        does not mean that unsold items end up in the trash. You will find some of them in a&nbsp;
                                        special basket with promotions, and some may soon return to the shelves.</>
                                    }
                                </p>
                        </div>
                        <div className="space-y-2 flex justify-center lg:justify-end lg:w-[400px] xl:w-[500px] 2xl:w-[550px]">
                            <Image
                                src="/clothes03-kaip.jpg"
                                alt="clothes hanging"
                                className="max-w-[300px] lg:max-w-[470px] max-h-[300px]"
                                width={4032}
                                height={3024}
                            />
                        </div>
                    </div>
                {/* </Link> */}
                {/* <Link href="/services/journey"> */}
                    <div className="flex flex-col p-5 gap-10 mx-auto w-full lg:p-0 lg:gap-5 lg:flex-row lg:items-center lg:justify-between py-[50px] mt-8">
                        <div className="space-y-2 flex justify-center lg:justify-end lg:w-[400px] xl:w-[500px] 2xl:w-[550px] p-4">
                            <Image
                                src="/miscelaneous01-lum3n7.jpg"
                                alt="clothes and accessories"
                                className="max-w-[300px] lg:max-w-[470px] max-h-[300px]"
                                width={4032}
                                height={3024}
                            />
                        </div>
                        <div className="lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[850px] order-first lg:order-last">
                            <h1 className="font-outfit text-center mb-4 font-bold text-black text-3xl md:text-4xl lg:text-left xl:text-5xl">
                                {
                                    // translation("Title2") Szamańska podróż
                                    locale === "pl" ? "Nie tylko ubrania" 
                                    : locale === "de" ? "Nicht nur Kleidung" 
                                    : "Not just clothes"
                                }
                            </h1>
                            <p className="text-black text-center text-base md:text-lg lg:text-left">
                                {
                                // translation("Description2") Szamanizm nie jest religią
                                        locale === "pl" ? <>Oprócz szerokiego wyboru sukienek, spodni, bluzek, koszul 
                                        czy spodenek oferujemy także okrycia wierzchnie, obuwie oraz akcesoria. U&nbsp;nas 
                                        znajdziesz paski, broszki, chustki, czapki, kurtki i&nbsp;wiele innych rzeczy. 
                                        Oferujemy odzież zarówno dla dorosłych, jak i&nbsp;dzieci.</>
                                        : locale === "de" ? <>Neben einer großen Auswahl an Kleidern, Hosen, Blusen, 
                                        Hemden und Shorts bieten wir auch Oberbekleidung, Schuhe und Accessoires an. 
                                        Hier finden Sie Gürtel, Broschen, Schals, Mützen, Jacken und viele andere Dinge. 
                                        Wir bieten Kleidung sowohl für Erwachsene als auch für Kinder an.</>
                                        : <>In addition to a wide selection of dresses, trousers, blouses, shirts and 
                                        shorts, we also offer outerwear, footwear and accessories. With us you will 
                                        find belts, brooches, scarves, hats, jackets and many other things. We offer 
                                        clothing for both adults and children.</>
                                }
                            </p>
                        </div>
                
                    </div>
                {/* </Link> */}
            </div>
        </div>)
}

export default HomePageInfo