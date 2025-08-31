"use client"

import { TextBodyBase, TextBodyLg, TextBodySm, TextH2 } from "@/components/ui/texts";
import { ArrowLongRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@headlessui/react"
import * as motion from "motion/react-client"
import { cn } from "@/lib/helper";
import Image from "next/image";
import { useState } from "react";

const CardItemList = [
  {
    title: "Lorem Ipsum",
    price: "100",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy1.png",
  },
  {
    title: "Dolor Sit Amet",
    price: "10",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy2.png",
  },
  {
    title: "Consectetur Adipiscing",
    price: "80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy3.png",
  },
  {
    title: "Elit Dignissim",
    price: "120",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy4.png",
  },
  {
    title: "Lorem Ipsum",
    price: "100",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy1.png",
  },
  {
    title: "Dolor Sit Amet",
    price: "10",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy2.png",
  },
  {
    title: "Consectetur Adipiscing",
    price: "80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy3.png",
  },
  {
    title: "Elit Dignissim",
    price: "20",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy4.png",
  },
  {
    title: "Consectetur Adipiscing",
    price: "30",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy3.png",
  },
  {
    title: "Elit Dignissim",
    price: "40",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/toy/toy4.png",
  }
]

export default function TrendingProductsSection({title}: {title: string}) {
  // TODO: Link to server side
  const [currentCategory, setCurrentCategory] = useState("ALL");
  
  return <div className="py-10">

    <div className="flex flex-row items-center justify-between py-4 border-b-1 border-[#eeeeee] dark:border-[#555]">
      <TextH2 className="w-[30%] md:w-[50%]">{title}</TextH2>
      
      <div className="flex flex-row items-center gap-2">
        {["ALL", "LOREM IPSUM", "DOLOR SIT"].map((item, index) => (
          <Button 
            key={index}
            className={cn(
              "px-2 py-2 text-[#666666] text-sm md:text-base border-b-3 border-transparent",
              currentCategory === item && "border-b-orange-300 text-black dark:text-white",
              "hover:cursor-pointer hover:text-black", 
              "dark:text-[#999] dark:hover:text-white",
            )}
            onClick={() => setCurrentCategory(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center justify-between py-10 gap-6">
      {CardItemList.map((item, index) => (
        <div
          key={index}
          className="basis-[calc((100%_-_96px)/5)] shrink-0 grow-0"
        >
          <TrendingProductCard
            title={item.title}
            price={item.price}
            text={item.text}
            src={item.src}
          />
        </div>
      ))}
    </div>
    
  </div>;
}

const TrendingProductCard = ({ title, price, text, src }: { title: string, price:string, text: string, src: string }) => {
  const [count, setCount] = useState(1);

  return (
    <div className={cn(
      "flex flex-col items-center justify-start rounded-2xl w-auto bg-[#ffffff] hover:cursor-pointer p-4",
      "shadow-xl shadow-gray-200",
      "dark:bg-transparent dark:border dark:border-[#161616] dark:shadow-none dark:hover:drop-shadow-none",
    )}>
      <div className="shiny flex items-center justify-center w-full h-[200px] bg-[#efefef] dark:bg-[#333] rounded-xl">
        <Image src={src} alt="" width={200} height={200} className="w-40" />
      </div>

      <div className="flex flex-col items-start justify-center gap-2 p-4">
        <TextBodyBase className="font-bold">{title}</TextBodyBase>
        <TextBodyLg className="text-2xl font-bold">${price}</TextBodyLg>
        <TextBodyBase className="text-[#666666]">{text}</TextBodyBase>
        
        <div className="flex flex-row items-center justify-between gap-2 w-full mt-2">
          <div className="flex flex-row items-center gap-2">
            <Button className="items-center rounded-md bg-[#eeeeee] dark:bg-[#333] text-2xl shadow-white/10 w-8 h-8 hover:cursor-pointer" onClick={() => setCount(count - 1)}>-</Button>
            <TextBodyBase>{count}</TextBodyBase>
            <Button className="items-center rounded-md bg-[#eeeeee] dark:bg-[#333] text-2xl shadow-white/10 w-8 h-8 hover:cursor-pointer" onClick={() => setCount(count + 1)}>+</Button>
          </div>
          <TextBodyBase className="text-[#aaaaaa]">Add to Cart</TextBodyBase>
        </div>
      </div>
    </div>
  )
}
  