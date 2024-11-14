'use client'
import image1 from '@public/clothes06-sam-lion.jpg'
import image2 from '@public/buying03-cottonbro.jpg'
import image3 from '@public/kids01-polina-tankilevitch.jpg'
import image4 from '@public/clothes08-markus-winkler.jpg'
import image5 from '@public/clothes07-kowalievska.jpg'
import image6 from '@public/clothes09-jonathanborba-28919276.jpg'
import image7 from '@public/bags01-diego-f-parra.jpg'
import image8 from '@public/sign-onorblog.jpg'
import { useState } from 'react'
import LayoutSection from '~/layout/section'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
// import { useTranslations } from "next-intl";

type props = {
    title:string
}

export default function Gallery(props:props)
{
    // const translation = useTranslations("Offer");
  const [selectedImage,setSelectedImage] = useState<null|StaticImageData>()
  return (
    <>
      <LayoutSection
        title={props.title}
        sectionClassName="py-12 pb-20"
      >
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4" onClick={()=>setSelectedImage(image1)}>
                <label>Ubrania damskie</label>
                {/* {translation('Gallery01')} */}
                <Image  
                    src={image1.src}
                    alt="hanging clothes"
                    className="w-full h-auto"
                    width={image8.width}
                    height={image8.height}
                    placeholder="blur"
                    blurDataURL={image1.blurDataURL}
                />
            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image2)}>
                <label>Wyprzedaże</label>
                {/* {translation('Gallery02')} */}
                <Image  
                    src={image2.src}
                    alt="cloth bag"
                    className="w-full h-auto"
                    width={image8.width}
                    height={image8.height}
                    placeholder="blur"
                    blurDataURL={image2.blurDataURL}
                />
            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image3)}>
                <label>Ubranka i&nbsp;akcesoria dla dzieci</label>
                {/* {translation('Gallery03')} */}
                <Image  
                    src={image3.src}
                    alt="kids clothes"
                    className="w-full h-auto"
                    width={image8.width}
                    height={image8.height}
                    placeholder="blur"
                    blurDataURL={image3.blurDataURL}
                />
                </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image4)}>
                <label>Ubrania męskie</label>
                {/* {translation('Gallery04')} */}
                <Image  
                    src={image4.src}
                    alt="men clothes"
                    className="w-full h-auto"
                    width={image8.width}
                    height={image8.height}
                    placeholder="blur"
                    blurDataURL={image4.blurDataURL}
                />
            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image5)}>
                <label>Wystawa sezonowa</label>
                {/* {translation('Gallery05')} */}
                <Image  
                    src={image5.src}
                    alt="women clothes"
                    className="w-full h-auto"
                    width={image8.width}
                    height={image8.height}
                    placeholder="blur"
                    blurDataURL={image5.blurDataURL}
                />
            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image6)}>
                <label>Okrycia wierzchnie</label>
                {/* {translation('Gallery06')} */}
                <Image  
                    src={image6.src}
                    alt="jacket" 
                    className="w-full h-auto"
                    width={image8.width}
                    height={image8.height}
                    placeholder="blur"
                    blurDataURL={image6.blurDataURL}
                />
            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image7)}>
                <label>Torebki i&nbsp;pozostałe akcesoria</label>
                {/* {translation('Gallery07')} */}
                <Image  
                    src={image7.src}
                    alt="colorful bags" 
                    className="w-full h-auto"
                    width={image8.width}
                    height={image8.height}
                    placeholder="blur"
                    blurDataURL={image7.blurDataURL}
                />
            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image8)}>
                <label>Skup odzieży i&nbsp;innych używanych przedmiotów</label>
                {/* {translation('Gallery08')} */}
                <Image  
                    src={image8.src}
                    alt="second hand clothes" 
                    className="w-full h-auto"
                    width={image8.width}
                    height={image8.height}
                    placeholder="blur"
                    blurDataURL={image7.blurDataURL}
                />
            </div>
        </div>
      </LayoutSection>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
        onClick={() => setSelectedImage(null)}>
          
          <div className="relative max-w-[100vw] max-h-[100vh] p-0">
            <span className="absolute end-[-50px] top-[-18px] m-4 rounded-full bg-gray-900/40 h-[25px] 
            w-[25px] text-center text-white cursor-pointer">X</span>
            <Image  
                src={selectedImage.src}
                alt="product photo" 
                className="w-auto max-h-[90vh]"
                width={selectedImage.width}
                height={selectedImage.height}
                placeholder="blur"
                blurDataURL={selectedImage.blurDataURL}
                />
          </div>
        </div>
      )}
     
    </>
  );
}