import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  return (
    <section className=" body-font mt-8 lg:mt-24">
      <h1 className="text-center text-5xl">Gallery</h1>
      <div className="mt-8 flex flex-wrap">

        <div className="flex flex-wrap md:-m-2 -m-1 ">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/battery.jpg"
                width={500}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/carengine.jpg"
                width={501}
                height={301}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/paint.jpg"
                width={600}
                height={360}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/brake.jpg"
                width={601}
                height={361}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/carchecking.jpg"
                width={502}
                height={302}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/outside.jpg"
                width={503}
                height={303}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}