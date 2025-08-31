import { cn } from "@/lib/helper";
import Image from "next/image";
import { TextBodyBase, TextH1, TextH2, TextH3 } from "@/components/ui/texts";
import { ButtonArrow, ButtonHero } from "@/components/ui/buttons";

export default function TicketSection() {
  return (
  <div className={cn(
    "grid grid-cols-1 grid-rows-2 gap-8",
    "md:grid-cols-12 md:grid-rows-1"
  )}> 
    {/* Left Column */}
    <div className={cn(
      "overflow-hidden",
      "md:col-span-6 md:justify-stretch md:items-stretch md:justify-items-stretch",
    )}>
      {/* Slider Container */}
      <div className={cn(
        "relative flex items-start justify-start h-full w-full p-12 bg-[#E6F3FA] rounded-2xl",
        "",
      )}>
        {/* Left in Slider */}
        <div className={cn("relative flex flex-col gap-8 justify-center w-[70%]",)}>
          <TextH3>Lorem ipsum dolor sit amet.</TextH3>
          <TextH1>Lorem ipsum dolor sit amet consectetur.</TextH1>
          <TextBodyBase>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</TextBodyBase>
          <ButtonHero label="LOREM IPSUM" className="w-[150px] hover:bg-[#999] hover:text-white hover:border-0" />
        </div>

        {/* Right in Slider */}
        <div className={cn("absolute flex items-center justify-center",
          "right-[-25%] bottom-[-10%] w-[90%]",
          "md:right-[-30%] md:bottom-[-10%] md:w-[90%]"
        )}>
          <Image  
            src="/toy/toy6.png"
            alt=""
            width={500}
            height={1000}
            className="object-cover scale-70"
          />
        </div>
      </div>
    </div>

    {/* Right */}
    <div className={cn(
      "overflow-hidden",
      "md:col-[7/13] md:justify-stretch md:items-stretch md:justify-items-stretch",
    )}>
      {/* Slider Container */}
      <div className={cn(
        "relative flex items-start justify-start h-full w-full p-12 bg-[#E6F3FA] rounded-2xl",
        "",
      )}>
        {/* Left in Slider */}
        <div className={cn("relative flex flex-col gap-8 justify-center w-[70%]",)}>
          <TextH3>Lorem ipsum dolor sit amet.</TextH3>
          <TextH1>Lorem ipsum dolor sit amet consectetur.</TextH1>
          <TextBodyBase>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</TextBodyBase>
          <ButtonHero label="LOREM IPSUM" className="w-[150px] hover:bg-[#999] hover:text-white hover:border-0" />
        </div>

        {/* Right in Slider */}
        <div className={cn("absolute flex items-center justify-center",
          "right-[-20%] bottom-[-10%] w-[90%]",
          "md:right-[-30%] md:bottom-[-10%] md:w-[90%]"
        )}>
          <Image  
            src="/toy/toy7.png"
            alt=""
            width={500}
            height={1000}
            className="object-cover scale-70"
          />
        </div>
      </div>
    </div>
  </div>
)}