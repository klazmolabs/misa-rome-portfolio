import Header from '@/components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <p className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-4">Get In Touch</p>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                CONTACT
              </h1>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your vision to life? Let's create something amazing together.
              </p>
            </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:hello@misarome.com" className="text-lg hover:text-white transition-colors">
                      hello@misarome.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-lg hover:text-white transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-lg">Available Worldwide</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Social</h2>
                <div className="flex space-x-6">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    Instagram
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    Vimeo
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm text-gray-400 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="live-event">Live Event</option>
                    <option value="production">Production</option>
                    <option value="directed">Directed Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 tracking-widest uppercase hover:scale-[1.02] hover:shadow-lg hover:shadow-white/20"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
