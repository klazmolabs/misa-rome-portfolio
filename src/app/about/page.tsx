import Header from '@/components/Header';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-4">About</p>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                MISA ROME
              </h1>
              <div className="w-32 h-1 bg-white mb-8"></div>
            
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Misa Rome is a passionate videographer specializing in capturing authentic moments 
                  and creating compelling visual narratives. With years of experience in live events, 
                  commercial productions, and creative direction.
                </p>
                
                <p>
                  From intimate weddings to large-scale corporate events, Misa brings a unique eye 
                  for detail and storytelling that transforms ordinary moments into extraordinary 
                  visual experiences.
                </p>
                
                <p>
                  Based in [Location], Misa works with clients worldwide, bringing creative vision 
                  and technical expertise to every project.
                </p>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>• Live Event Coverage</li>
                  <li>• Commercial Video Production</li>
                  <li>• Music Video Direction</li>
                  <li>• Corporate Documentaries</li>
                  <li>• Wedding Videography</li>
                  <li>• Creative Direction</li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] relative bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                  alt="Misa Rome"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}