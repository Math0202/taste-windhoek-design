
import { Navigation } from '@/components/Navigation';

const Drinks = () => {
  const drinkCategories = [
    {
      title: "Coffee & Tea",
      items: [
        { name: "Americano", price: "N$42" },
        { name: "Espresso", price: "N$16/32" },
        { name: "Coffee", price: "N$29" },
        { name: "Cappuccino", price: "N$38" },
        { name: "Tea (Rooibos, Five Roses, Green)", price: "N$26" },
        { name: "Twinnings Tea (Camomile)", price: "N$31" }
      ]
    },
    {
      title: "Cool Drinks",
      items: [
        { name: "Soft Drinks", price: "N$25" },
        { name: "Red Bull", price: "N$35/42" },
        { name: "Appletiser", price: "N$35" },
        { name: "Juices", price: "N$30" },
        { name: "Ice Tea", price: "N$45" },
        { name: "Flavoured Sparkling Water", price: "N$58" }
      ]
    },
    {
      title: "Beers",
      items: [
        { name: "Windhoek Draught", price: "N$28" },
        { name: "Heineken", price: "N$32" },
        { name: "Castle Lite", price: "N$30" },
        { name: "Other Premium Beers", price: "N$35" }
      ]
    },
    {
      title: "Ciders",
      items: [
        { name: "Hunters", price: "N$35" },
        { name: "Savanna", price: "N$35" },
        { name: "Bernini", price: "N$35" },
        { name: "Brutal Fruit", price: "N$35" }
      ]
    },
    {
      title: "Liqueurs",
      items: [
        { name: "Jägermeister", price: "N$35" },
        { name: "Olmeca Tequila", price: "N$35" },
        { name: "Cactus Jack", price: "N$35" },
        { name: "Amarula", price: "N$30" }
      ]
    },
    {
      title: "Water",
      items: [
        { name: "Acqua Panna (500ml)", price: "N$35" },
        { name: "Acqua Panna (700ml)", price: "N$50" },
        { name: "Pellegrino (500ml)", price: "N$40" },
        { name: "Pellegrino (700ml)", price: "N$65" }
      ]
    },
    {
      title: "Cocktails",
      items: [
        { name: "Golden Night Margarita", price: "N$86/140" },
        { name: "Orange Gin Fizz", price: "N$90/140" },
        { name: "Isle of Lime", price: "N$85/140" },
        { name: "Sweet Whiskey Lemonade", price: "N$85/140" },
        { name: "Taste Signature", price: "N$80/140" },
        { name: "Jäger Fresh", price: "N$70/140" }
      ]
    },
    {
      title: "Mocktails",
      items: [
        { name: "Blue Summer Berry", price: "N$65" },
        { name: "Cucumber Spritzer", price: "N$60" },
        { name: "KoolAid Spritzer", price: "N$60" },
        { name: "Virgin Isle of Lime", price: "N$65" }
      ]
    },
    {
      title: "White Wines",
      items: [
        { name: "Chenin Blanc (House)", price: "N$200" },
        { name: "Sauvignon Blanc (Premium)", price: "N$350" },
        { name: "Chardonnay (Reserve)", price: "N$450" },
        { name: "Premium White Selection", price: "N$550" }
      ]
    },
    {
      title: "Red Wines",
      items: [
        { name: "Cabernet Sauvignon (House)", price: "N$250" },
        { name: "Merlot (Premium)", price: "N$400" },
        { name: "Shiraz (Reserve)", price: "N$500" },
        { name: "Pinotage (Premium)", price: "N$450" },
        { name: "Premium Red Blends", price: "N$600" },
        { name: "Vintage Collection", price: "N$800" }
      ]
    },
    {
      title: "Rosé and Sweet Wines",
      items: [
        { name: "Rosé (House)", price: "N$200" },
        { name: "Premium Rosé", price: "N$280" },
        { name: "Sweet Wine Selection", price: "N$300" }
      ]
    },
    {
      title: "Premium Spirits",
      items: [
        { name: "Ciroc Vodka", price: "N$2700" },
        { name: "Grey Goose Vodka", price: "N$2200" },
        { name: "Smirnoff Vodka", price: "N$800" },
        { name: "Bombay Sapphire Gin", price: "N$1200" },
        { name: "Tanqueray Gin", price: "N$900" },
        { name: "Jameson Whiskey", price: "N$1100" },
        { name: "Jack Daniel's", price: "N$1300" },
        { name: "Macallan 12", price: "N$2500" },
        { name: "Hennessy VS", price: "N$1800" },
        { name: "Rémy Martin VSOP", price: "N$2200" },
        { name: "House Spirits", price: "N$25" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-black text-xl">★</span>
            </div>
            <h1 className="font-heading text-5xl font-bold letter-spacing-wide mb-4 text-gold">
              DRINKS MENU
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From artisanal cocktails and premium wines to craft beers and specialty coffees, discover the perfect drink to complement your experience
            </p>
          </div>
        </div>
      </section>

      {/* Drinks Categories */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid gap-16">
            {drinkCategories.map((category, index) => (
              <div key={index} className="animate-slide-up">
                <h2 className="font-heading text-3xl font-semibold text-gold mb-8 pb-4 border-b border-gold/30">
                  {category.title}
                </h2>
                <div className="grid gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start py-4 border-b border-gray-700/50 hover:border-gold/30 transition-colors">
                      <div className="flex-1 pr-4">
                        <h3 className="text-white font-medium text-lg mb-1">
                          {item.name}
                        </h3>
                      </div>
                      <div className="text-gold font-semibold text-lg">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/lovable-uploads/76897ddf-11c6-4c4d-a6c4-161a79535687.png')`
              }}
            />
            <div 
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/lovable-uploads/6bc09f7b-feba-4361-8013-f31cedd5978f.png')`
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

export default Drinks;
