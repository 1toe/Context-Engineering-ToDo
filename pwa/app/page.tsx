import { Hero } from '@/components/sections/hero';
import { FeaturedSections } from '@/components/sections/featured-sections';
import { QuickStart } from '@/components/sections/quick-start';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <FeaturedSections />
      <QuickStart />
    </main>
  );
}
