// import DuetWomanImage from "@public/duetwoman.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AboutPageHeader: React.FC = () => {
  const translation = useTranslations("About");

  return ( //bg-primary
    <div className="relative min-h-[calc(100vh-85px-200px)] sm:min-h-[724px] py-6 space-y-5 flex justify-center items-center lg:py-8 "
    style={{backgroundColor: "#F57F17"}}>
      <div className="relative w-full flex flex-col gap-10 md:max-w-[700px]  lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
          <div className="flex flex-col p-5 gap-10 mx-auto w-full lg:p-0 lg:gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[768px] p-6 text-justify">
              <h1 className="font-outfit text-center mt-0 mb-8 font-bold text-white text-3xl md:text-4xl lg:text-left xl:text-5xl">
              {/*translation("Title") O mnie*/}
              O naszym sklepie
            </h1>
            <p className="text-white text-center text-base md:text-lg lg:text-justify pr-8">
              {/*translation("Description-me1") W pierwszym wyjściu mojej duszy z ciała zobaczyłam mężczyznę w średnim wieku.*/}
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.<br/>
              The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me? " he thought. It wasn't a dream.<br/>
              His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.<br/>
          </p>
          </div>
          <div className="space-y-2 flex justify-between lg:justify-end ml-auto">
              <Image
                src="/clothes02-cottonbro.jpg"
                alt="Kopciuszek second hand"
                className="h-[544px]"
                width={1041}
                height={927}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageHeader;
