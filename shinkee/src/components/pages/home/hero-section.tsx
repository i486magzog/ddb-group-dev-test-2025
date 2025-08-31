import { cn } from "@/lib/helper";
import Image from "next/image";
import { TextBodyBase, TextH1, TextH2, TextH3 } from "@/components/ui/texts";
import { ButtonArrow, ButtonHero } from "@/components/ui/buttons";

export default function Hero() {
  return (
  <div className={cn(
    "grid grid-cols-1 gap-8",
    "md:grid-cols-12 md:grid-rows-2"
  )}> 
    {/* Left Column */}
    <div className={cn(
      "overflow-hidden col-[1/1]",
      "md:col-span-7 md:row-span-2 md:justify-stretch md:items-stretch md:justify-items-stretch",
    )}>
      {/* 
        Slider Container
        TODO: Add Slider Component in the future.
      */}
      <div className={cn(
        "relative flex items-start justify-start h-full w-full p-12 bg-[#E6F3FA] rounded-2xl",
        "dark:bg-transparent dark:border dark:border-[#161616]",
      )}>
        {/* Right in Slider */}
        <div className={cn("absolute right-[-20%] md:right-[-20%] bottom-[0%] w-[90%] flex items-center justify-center",)}>
          <Image  
            src="/toy/toy6.png"
            alt=""
            width={500}
            height={1000}
            className="object-cover w-[80%] md:w-[60%] scale-x-[-1]"
          />
        </div>

        {/* Left in Slider */}
        <div className={cn("relative flex flex-col gap-8 justify-center w-[70%]",)}>
          <TextH3>Lorem ipsum dolor sit amet.</TextH3>
          <TextH1>Lorem ipsum dolor sit amet consectetur.</TextH1>
          <TextBodyBase className="w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</TextBodyBase>
          <ButtonHero label="LOREM IPSUM" className="w-[150px]" />
        </div>
      </div>
    </div>

    {/* Right Top Row */}
    <div className={cn(
      "relative flex flex-col gap-8 justify-between w-full p-12 bg-[#EEF5E5] rounded-2xl",
      "bg-[url('/toy/toy2.png')] bg-no-repeat bg-[length:50%] bg-right ", // Background Image
      "dark:bg-transparent dark:border dark:border-[#161616]",
      "md:col-start-8 md:col-span-5 md:row-[1/1]",
    )}>
      <TextH3>Lorem ipsum.</TextH3>        
      <TextH2>Lorem ipsum <br/> dolor sit amet.</TextH2>
      <ButtonArrow label="LOREM IPSUM" />
    </div>

    {/* Right Bottom Row */}
    <div className={cn(
      "relative flex flex-col gap-8 justify-start p-12 bg-[#F9EBE7] rounded-2xl",
      "bg-[url('/toy/toy1.png')] bg-no-repeat bg-[length:45%] bg-[position:right_10px_center]",
      "dark:bg-transparent dark:border dark:border-[#161616]",
      "md:col-start-8 md:col-span-5 md:row-[2/2]",
    )}>
      <TextH3>Lorem ipsum.</TextH3>
        
      <TextH2>
        Lorem ipsum 
        <br/> 
        dolor sit amet.
      </TextH2>
      
      <ButtonArrow label="LOREM IPSUM"/>
      
    </div>
  </div>
)}