'use client'
import image1 from '@public/certificates/Inhalt-Frauensem.-2012 2.jpg'
import image2 from '@public/certificates/Psychologie-Frauensem-2012 1.jpg'
import image3 from '@public/certificates/Reiki-1-2006[3487].jpg'
import image4 from '@public/certificates/Reiki-2-2006[3488].jpg'
import image5 from '@public/certificates/Rueckfuehrungstechnik_JES2017[3489].jpg'
import image6 from '@public/certificates/Schamanische-Reinkarnation-BF-2008[3490].jpg'
import image7 from '@public/sign.png'
import image8 from '@public/sign.png'
import { useState } from 'react'
import LayoutSection from '~/layout/section'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

type props = {
    title:string
}

export default function Gallery(props:props)
{
  const [selectedImage,setSelectedImage] = useState<null|StaticImageData>()
  return (
    <>
      <LayoutSection
        title={props.title}
        sectionClassName="py-12 pb-20"
      >
       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4" onClick={()=>setSelectedImage(image1)}>
                <Image  
                    src={image1.src}
                    alt="Zdjęcie 6" 
                    className="w-full h-auto"
                    width={image1.width}
                    height={image1.height}
                    placeholder="blur"
                    blurDataURL={image1.blurDataURL}
                />
            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image2)}>
                <Image  
                    src={image2.src}
                    alt="Zdjęcie 6" 
                    className="w-full h-auto"
                    width={image2.width}
                    height={image2.height}
                    placeholder="blur"
                    blurDataURL={image2.blurDataURL}
                />            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image3)}>
                <Image  
                    src={image3.src}
                    alt="Zdjęcie 6" 
                    className="w-full h-auto"
                    width={image3.width}
                    height={image3.height}
                    placeholder="blur"
                    blurDataURL={image3.blurDataURL}
                />            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image4)}>
                <Image  
                    src={image4.src}
                    alt="Zdjęcie 6" 
                    className="w-full h-auto"
                    width={image4.width}
                    height={image4.height}
                    placeholder="blur"
                    blurDataURL={image4.blurDataURL}
                />            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image5)}>
                <Image  
                        src={image5.src}
                        alt="Zdjęcie 6" 
                        className="w-full h-auto"
                        width={image5.width}
                        height={image5.height}
                        placeholder="blur"
                        blurDataURL={image5.blurDataURL}
                    />            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image6)}>
                <Image  
                    src={image6.src}
                    alt="Zdjęcie 6" 
                    className="w-full h-auto"
                    width={image6.width}
                    height={image6.height}
                    placeholder="blur"
                    blurDataURL={image6.blurDataURL}
                />
            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image7)}>
                <label>Skup odzieży i&nbsp;innych używanych przedmiotów</label>
                <Image  
                    src={image7.src}
                    alt="second hand clothes" 
                    width={606}
                    height={970}
                    placeholder="blur"
                    blurDataURL={image7.blurDataURL}
                />
            </div>
            <div className="bg-gray-200 p-4"  onClick={()=>setSelectedImage(image8)}>
                <label>Skup odzieży i&nbsp;innych używanych przedmiotów</label>
                <Image  
                    src={image8.src}
                    alt="second hand clothes" 
                    // className="w-full h-auto"
                    width={606}
                    height={970}
                    // width={image8.width}
                    // height={image8.height}
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