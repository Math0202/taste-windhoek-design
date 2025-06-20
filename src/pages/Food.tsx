
import { Navigation } from '@/components/Navigation';

const Food = () => {
  const menuCategories = [
    {
      title: "Grilled Cheese Sandwiches",
      items: [
        { name: "Mozarella, red onion, basil pesto, diced tomatoes, bacon", price: "N$60" },
        { name: "Cheddar, pit ham, Italian parsley aioli", price: "N$55" },
        { name: "Black pepper feta, pulled chicken, spicy coriander pesto", price: "N$65" },
        { name: "Gouda, salami, diced tomatoes, basil", price: "N$60" }
      ]
    },
    {
      title: "Lunch and Dinner (Japanese Inspired)",
      items: [
        { name: "Shio ramen", price: "N$200" },
        { name: "Miso kimchi ramen", price: "N$220" },
        { name: "Spicy miso tsukemen", price: "N$210" },
        { name: "Yakisoba", price: "N$230" }
      ]
    },
    {
      title: "Small Plates",
      items: [
        { name: "Lamb Skewers", price: "N$175" },
        { name: "Wingmen", price: "N$145" },
        { name: "Tiger prawns", price: "N$180" }
      ]
    },
    {
      title: "Pasta",
      items: [
        { name: "Seafood pasta", price: "N$265" },
        { name: "Wagyu beef pasta", price: "N$230" },
        { name: "Modena Pasta", price: "N$255" },
        { name: "Veggie pasta", price: "N$210" },
        { name: "Prawn Vermicelli", price: "N$270" }
      ]
    },
    {
      title: "Tress (Salads)",
      items: [
        { name: "Taste Caesar", price: "N$195" },
        { name: "Midnight Tokyo", price: "N$190" },
        { name: "Selma's Diet", price: "N$210" },
        { name: "No More Hunger", price: "N$210" }
      ]
    },
    {
      title: "Main Menu (Signature Boards)",
      items: [
        { name: "Once Upon a Time In Mexico", price: "N$180" },
        { name: "Istanbul", price: "N$165" }
      ]
    },
    {
      title: "Burgers",
      items: [
        { name: "Wagyu Burger", price: "N$250" },
        { name: "Wish You Were Here", price: "N$180" },
        { name: "Hiroshima", price: "N$175" }
      ]
    },
    {
      title: "Wagyu Café (Steaks SQ – market price)",
      items: [
        { name: "Rump Eye", price: "Market Price" },
        { name: "Chuck Eye", price: "Market Price" },
        { name: "Picanha", price: "Market Price" },
        { name: "Fillet", price: "Market Price" },
        { name: "Skirt Steak", price: "Market Price" }
      ]
    },
    {
      title: "Grill",
      items: [
        { name: "Lamb Ribs", price: "N$240" },
        { name: "Tomahawk (480g)", price: "N$340" },
        { name: "Beef Fillet (400g)", price: "N$265" },
        { name: "Beef Short Rib (400g)", price: "N$240" }
      ]
    },
    {
      title: "Détour (Specials)",
      items: [
        { name: "Vietnamese Quail", price: "N$220" },
        { name: "Baby Chicken", price: "N$265" },
        { name: "Duck Breast", price: "N$250" },
        { name: "Duck Leg", price: "N$245" }
      ]
    },
    {
      title: "Middle of the Ocean (Seafood, subject to availability)",
      items: [
        { name: "Sea Bass", price: "N$190" },
        { name: "Salmon", price: "N$285" },
        { name: "Argentinian Prawns", price: "N$340" },
        { name: "Clams", price: "N$200" },
        { name: "Kabeljou", price: "N$195" },
        { name: "Crayfish", price: "N$230" },
        { name: "Barramundi", price: "N$190" },
        { name: "Silver Fish", price: "N$220" }
      ]
    },
    {
      title: "Sides (All N$40)",
      items: [
        { name: "Italian Parsley Baby Potatoes", price: "N$40" },
        { name: "Homemade Fries", price: "N$40" },
        { name: "Corn & Feta", price: "N$40" },
        { name: "Taste Salad", price: "N$40" },
        { name: "Sweet Potato Fries", price: "N$40" },
        { name: "Fried Rice", price: "N$40" },
        { name: "Tomato Pesto Penne", price: "N$40" },
        { name: "Seasonal Veggies", price: "N$40" }
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
              FOOD MENU
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover our carefully curated selection of modern dishes, 
              from Japanese-inspired cuisine to premium steaks and fresh seafood
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid gap-16">
            {menuCategories.map((category, index) => (
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

      {/* Featured Image */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div 
            className="h-96 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url('/lovable-uploads/31987f97-d69e-4b39-bb64-19ab83175b55.png')`
            }}
          />
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

export default Food;
