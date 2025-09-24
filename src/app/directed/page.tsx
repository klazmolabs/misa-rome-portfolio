import Header from '@/components/Header';
import PortfolioGrid from '@/components/PortfolioGrid';

const directedItems = [
  {
    id: '1',
    title: 'Music Video - "Midnight"',
    category: 'Directed',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    href: '/work/music-video-midnight',
  },
  {
    id: '2',
    title: 'Short Film - "Reflections"',
    category: 'Directed',
    imageUrl: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop',
    href: '/work/short-film-reflections',
  },
  {
    id: '3',
    title: 'Music Video - "Neon Dreams"',
    category: 'Directed',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    href: '/work/music-video-neon-dreams',
  },
  {
    id: '4',
    title: 'Experimental Film - "Urban"',
    category: 'Directed',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    href: '/work/experimental-urban',
  },
];

export default function Directed() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-4">Category</p>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              DIRECTED
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Creative direction and storytelling through music videos, short films, and experimental projects.
            </p>
          </div>
          
          <PortfolioGrid items={directedItems} className="pb-20" />
        </div>
      </main>
    </div>
  );
}
