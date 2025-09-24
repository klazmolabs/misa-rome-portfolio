import Header from '@/components/Header';
import PortfolioGrid from '@/components/PortfolioGrid';
// import VideoPlayer from '@/components/VideoPlayer';

const liveEventItems = [
  {
    id: '1',
    title: 'Corporate Event Coverage',
    category: 'Live Event',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    href: '/work/corporate-event-coverage',
  },
  {
    id: '2',
    title: 'Conference Highlights',
    category: 'Live Event',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    href: '/work/conference-highlights',
  },
  {
    id: '3',
    title: 'Wedding Ceremony',
    category: 'Live Event',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    href: '/work/wedding-ceremony',
  },
  {
    id: '4',
    title: 'Music Festival Coverage',
    category: 'Live Event',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    href: '/work/music-festival',
  },
];

export default function LiveEvent() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-28">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-4">Category</p>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              LIVE EVENT
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Capturing the energy and emotion of live events, from corporate gatherings to intimate celebrations.
            </p>
          </div>
          
          <PortfolioGrid items={liveEventItems} className="pb-20" />
        </div>
      </main>
    </div>
  );
}
