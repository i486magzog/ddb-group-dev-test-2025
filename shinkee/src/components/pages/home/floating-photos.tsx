'use client'

import EdgePopin from '@/components/ui/edge-popin'
import Image from 'next/image'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/helper';
import { useMediaQuery } from '@/hooks/media-query';

export default function FloatingPhotos() {
  const { scrollYProgress } = useScroll();
  const [isPopin, setIsPopin] = useState(true);
  // Check if window width is 1600px or less
  const isMdUp = useMediaQuery('(min-width: 1600px)')

  useMotionValueEvent(scrollYProgress, 'change', (v) =>{
    if(v < 0.1){ setIsPopin(true); } 
    else{ setIsPopin(false); }
  });
  //
  // Hide popin on click, keydown, touchstart events
  // 
  const lastEvtTs = useRef(0)
  useEffect(() => {
    const handler = () => {
      const now = Date.now()
      if (now - lastEvtTs.current < 200) return // Ignore events within 200ms 
      lastEvtTs.current = now
      setIsPopin(false)// Any event will toggle the value
    }
    const events: (keyof WindowEventMap)[] = ['click', 'keydown', 'touchstart']
    events.forEach(e => window.addEventListener(e, handler, { passive: true } as AddEventListenerOptions))
    return () => events.forEach(e => window.removeEventListener(e, handler as EventListener))
  }, [])

  return (
  <div>
    {isMdUp && 
      <EdgePopin
        edge="right" 
        distanceFromMiddle={0}
        isPopin={isPopin}
        className="h-[450px] rotate-[-30deg] translate-x-[300px]"
      >
        <Image 
          src="/home/kid1.png" 
          alt="kid" 
          width={500} 
          height={500}
          className="w-full h-full object-contain"
        />  
      </EdgePopin>
    }

    {isMdUp && 
      <EdgePopin 
        edge="left" 
        distanceFromMiddle={0} 
        isPopin={isPopin}
        className="h-[450px] w-[450px] rotate-[50deg] scale-150 translate-x-[-350px]"
      >
        <Image 
          src="/home/kid4.png" 
          alt="kid" 
          width={450} 
          height={500}
          className="w-full h-full object-contain"
        />
      </EdgePopin>
    }

    <EdgePopin  // Gird
      edge="bottom" 
      distanceFromMiddle={320} 
      isPopin={isPopin}
      className={cn("h-[350px] scale-75 ml-[-80px]",
        "md:h-[450px] md:scale-130 md:ml-0"
      )}
    >
      <Image 
        src="/home/kid2.png" 
        alt="kid" 
        width={500} 
        height={500}
        className="w-full h-full object-contain"
      />
    </EdgePopin>

    <EdgePopin // Boy in middle
      edge="bottom" 
      distanceFromMiddle={100} 
      isPopin={isPopin}
      className={cn("h-[400px] scale-80 ml-[-40px] mb-[-50px]",
        "md:h-[500px] md:scale-120 md:ml-0 md:mb-0"
      )}
    >
      <Image 
        src="/home/kid3.png" 
        alt="kid" 
        width={500} 
        height={500}
        className="w-full h-full object-contain"
      />
    </EdgePopin>

    <EdgePopin // Boy on left
      edge="bottom" 
      distanceFromMiddle={-80} 
      isPopin={isPopin}
      className="h-[400px] scale-100 md:h-[450px] rotate-[20deg] origin-center md:scale-150 translate-y-[260px]"
    >
      <Image 
        src="/home/kid6.png" 
        alt="kid" 
        width={500} 
        height={500}
        className="w-full h-full object-contain"
      />
    </EdgePopin>
  </div>
)}