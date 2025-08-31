import { TextBodyBase, TextBodyLg, TextBodySm, TextH2 } from "@/components/ui/texts";
import { ArrowLongRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@headlessui/react"
import * as motion from "motion/react-client"
import { cn } from "@/lib/helper";
import Image from "next/image";

const CardItemList = [
  {
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy1.png",
  },
  {
    title: "Dolor Sit Amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy2.png",
  },
  {
    title: "Consectetur Adipiscing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy3.png",
  },
  {
    title: "Elit Dignissim",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy4.png",
  }
]

export default function BrandsSection() {
  return <div className="py-10">

    <div className="flex flex-wrap items-center justify-between">
      <TextH2>Brands</TextH2>
      
      <div className="flex flex-row items-center gap-2">
        <TextBodyLg>View All Brands</TextBodyLg>
        <ArrowLongRightIcon className="w-5 h-5" />
        <Button className="inline-flex items-center gap-2 rounded-md bg-[#eeeeee] px-2 py-2 text-sm/6 font-semibold text-[#999] data-hover:bg-gray-600 data-open:bg-gray-700 hover:cursor-pointer">
          <ChevronLeftIcon className="w-5 h-5" />
        </Button>
        <Button className="inline-flex items-center gap-2 rounded-md bg-[#eeeeee] px-2 py-2 text-sm/6 font-semibold text-[#999] data-hover:bg-gray-600 data-open:bg-gray-700 hover:cursor-pointer">
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </div>
    
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-between py-10 gap-5">
      {CardItemList.map((item, index) => (
        <BrandCard key={index} title={item.title} text={item.text} src={item.src} />
      ))}
    </div>
  </div>;
}

const BrandCard = ({ title, text, src }: { title: string, text: string, src: string }) => {
  return <div
    className={cn("flex flex-row items-center justify-start rounded-2xl w-auto bg-[#ffffff] hover:cursor-pointer p-4",
      "shadow-xl",
      "hover:cursor-pointer hover:drop-shadow-xl hover:translate-y-[-10px] duration-[.5s]",
      "md:hover:translate-y-[-15px]"
    )}
  >
    <div className="flex items-center justify-center w-[200px] h-[100px] bg-[#eeeeee] rounded-xl">
      <Image src={src} alt="" width={200} height={200} className="w-20" />
    </div>

    <div className="flex flex-col items-start justify-center gap-2 pl-4">
      <TextBodySm>{title}</TextBodySm>
      <TextBodyBase className="text-[#666666] font-bold">{text}</TextBodyBase>
    </div>
  </div>;
}
  