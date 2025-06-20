
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/lovable-uploads/31987f97-d69e-4b39-bb64-19ab83175b55.png')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <div className="relative z-10 text-center animate-fade-in">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-black text-2xl">★</span>
            </div>
            <h1 className="font-heading text-6xl md:text-8xl font-bold letter-spacing-wider mb-4">
              T A S T E
            </h1>
            <p className="text-gold text-lg letter-spacing-wide font-medium">
              MULTIFACETED MODERN EATERY
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Hours */}
            <div className="animate-slide-up">
              <h2 className="font-heading text-3xl font-semibold mb-8 text-gold">Opening Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Tuesday – Thursday</span>
                  <span className="text-white font-medium">8AM – 10PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Friday – Saturday</span>
                  <span className="text-white font-medium">9AM – 12AM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white font-medium">12PM – 9PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Monday</span>
                  <span className="text-red-400 font-medium">CLOSED</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="animate-slide-up">
              <h2 className="font-heading text-3xl font-semibold mb-8 text-gold">Location</h2>
              <div className="bg-gray-800/50 p-8 rounded-lg">
                <p className="text-gray-300 text-lg leading-relaxed">
                  40 Eros Road<br />
                  General Murtala Muhammed Ave.<br />
                  Windhoek, Namibia
                </p>
                <button className="mt-6 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-semibold text-gold mb-4">Experience TASTE</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Where modern culinary artistry meets sophisticated dining in the heart of Windhoek
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/lovable-uploads/19f502ff-724a-4bcf-a4af-42c09e6dadb8.png')`
              }}
            />
            <div 
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/lovable-uploads/76897ddf-11c6-4c4d-a6c4-161a79535687.png')`
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black text-xl">★</span>
            </div>
            <h3 className="font-heading text-2xl font-semibold letter-spacing-wide mb-2">
              T A S T E
            </h3>
            <p className="text-gray-400 text-sm">Multifaceted Modern Eatery</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
