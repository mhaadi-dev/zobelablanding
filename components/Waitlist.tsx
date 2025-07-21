// components/Waitlist.tsx
export default function Waitlist() {
    return (
      <section id="waitlist" className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">JOIN THE MOVEMENT</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Zobelab is a significant step of progression in the tech realm for the independent music community.
          </p>
          
          <div className="max-w-md mx-auto bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">GET ON THE WAITLIST</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-medium hover:bg-indigo-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }