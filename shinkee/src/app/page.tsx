import FloatingPhotos from '@/components/pages/home/floating-photos'
import Hero from '@/components/pages/home/hero-section';
import CategorySection from '@/components/pages/home/category-section';
import BrandsSection from '@/components/pages/home/brands-section';
import TrendingProductsSection from '@/components/pages/home/trending-products-section';
import TicketSection from '@/components/pages/home/ticket-section';
import { cn } from '@/lib/helper';

export default function Home() {
  return <div className={cn(
    "flex flex-col gap-8 max-w-root mx-auto mt-10 px-8",
    "md:px-8 md:mt-15"
  )}>
    <Hero />
    <CategorySection />
    <BrandsSection />
    <TrendingProductsSection title="Trending Products" />
    <TicketSection />
    <FloatingPhotos />
    {/* Used it again for make a long page. */}
    <TrendingProductsSection title="New Arrivals" />
  </div>;
}
  