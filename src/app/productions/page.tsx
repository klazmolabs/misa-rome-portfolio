import Header from '@/components/Header';
import PortfolioGrid from '@/components/PortfolioGrid';
import VideoPlayer from '@/components/VideoPlayer';

const productionItems = [
  {
    id: '1',
    title: 'Brand Documentary',
    category: 'Productions',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop',
    href: '/work/brand-documentary',
  },
  {
    id: '2',
    title: 'Product Launch Film',
    category: 'Productions',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
    href: '/work/product-launch-film',
  },
  {
    id: '3',
    title: 'Commercial - Tech Startup',
    category: 'Productions',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    href: '/work/commercial-tech-startup',
  },
  {
    id: '4',
    title: 'Corporate Profile Video',
    category: 'Productions',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    href: '/work/corporate-profile',
  },
];

export default function Productions() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-4">Category</p>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              PRODUCTIONS
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Professional video production services for brands, commercials, and corporate content.
            </p>
          </div>
          
          <PortfolioGrid items={productionItems} className="pb-20" />
        </div>
      </main>
    </div>
  );
}
