import { ButtonArrow } from "@/components/ui/buttons";
import { TextBodyLg, TextH2 } from "@/components/ui/texts";
import { ArrowLongRightIcon, BeakerIcon, BriefcaseIcon, BugAntIcon, BuildingStorefrontIcon, CakeIcon, CameraIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@headlessui/react"
import * as motion from "motion/react-client"
import { cn } from "@/lib/helper";

const CardItemList = [
  {
    title: "Lorem Ipsum",
    icon: <BriefcaseIcon className="w-10 h-10 stroke-[#4F6239] " />,
  },
  {
    title: "Dolor Sit Amet",
    icon: <BugAntIcon className="w-10 h-10 stroke-[#C5751C] " />,
  },
  {
    title: "Consectetur Adipiscing",
    icon: <CameraIcon className="w-10 h-10 stroke-[#F5C34F] " />,
  },
  {
    title: "Elit Dignissim",
    icon: <CakeIcon className="w-10 h-10 stroke-[#C83131] " />,
  },
  {
    title: "Massa Diam",
    icon: <BeakerIcon className="w-10 h-10 stroke-[#D75C15] " />,
  },
  {
    title: "Elementum",
    icon: <BuildingStorefrontIcon className="w-10 h-10 stroke-[#7AA02] " />,
  }
]

export default function CategorySection() {
  return <div className="pt-25 pb-10">

    <div className="flex flex-wrap items-center justify-between">
      <TextH2>Category</TextH2>
      <div className="flex flex-row items-center gap-2">
        <TextBodyLg>View ALL Categories</TextBodyLg>
        <ArrowLongRightIcon className="w-5 h-5" />
        <Button className="inline-flex items-center gap-2 rounded-md bg-[#eeeeee] px-2 py-2 text-sm/6 font-semibold text-[#999] data-hover:bg-gray-600 data-open:bg-gray-700 hover:cursor-pointer">
          <ChevronLeftIcon className="w-5 h-5" />
        </Button>
        <Button className="inline-flex items-center gap-2 rounded-md bg-[#eeeeee] px-2 py-2 text-sm/6 font-semibold text-[#999] data-hover:bg-gray-600 data-open:bg-gray-700 hover:cursor-pointer">
          <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center justify-between py-10 gap-5">
      {CardItemList.map((item, index) => (
        <CategoryCard key={index} title={item.title} icon={item.icon} />
      ))}
    </div>
  </div>;
}


const CategoryCard = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
  return <div
    className={cn("flex flex-col items-center justify-center rounded-2xl w-auto h-[230px] bg-[#ffffff]",
      "shadow-xl shadow-gray-100 text-center", 
      "hover:cursor-pointer hover:drop-shadow-xl hover:translate-y-[-10px] duration-[.5s]",
      "md:hover:translate-y-[-20px]"
    )}
  >
    {icon}
    <a href="#"><TextBodyLg>{title}</TextBodyLg></a>
  </div>;
}
  