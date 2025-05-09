import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "2023 Tesla Model 3",
    image: "https://images.unsplash.com/photo-1619849183219-98cee3f81f01?q=80&w=2070&auto=format&fit=crop",
    price: 39990,
    rating: 4.9,
    reviewCount: 124,
    category: "Electric",
    description: "The Tesla Model 3 is an electric four-door sedan with minimalist styling and impressive performance."
  },
  {
    id: 2,
    title: "2023 Audi Q5 SUV",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=2071&auto=format&fit=crop",
    price: 45990,
    rating: 4.7,
    reviewCount: 89,
    category: "SUV",
    description: "The Audi Q5 combines luxury features with practical space in a well-built, refined package."
  },
  {
    id: 3,
    title: "2023 BMW 5 Series",
    image: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=2070&auto=format&fit=crop",
    price: 55990,
    rating: 4.8,
    reviewCount: 103,
    category: "Sedan",
    description: "The BMW 5 Series offers a perfect blend of luxury, technology, and driving dynamics."
  },
  {
    id: 4,
    title: "2023 Ford Mustang GT",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f2?q=80&w=2070&auto=format&fit=crop",
    price: 38990,
    rating: 4.6,
    reviewCount: 76,
    category: "Sports Car",
    description: "The Ford Mustang GT delivers thrilling performance and iconic styling at an accessible price point."
  },
  {
    id: 5,
    title: "2023 Toyota RAV4 Hybrid",
    image: "https://images.unsplash.com/photo-1549275301-41e3372e9a00?q=80&w=2070&auto=format&fit=crop",
    price: 32990,
    rating: 4.5,
    reviewCount: 118,
    category: "SUV",
    description: "The Toyota RAV4 Hybrid offers excellent fuel economy without sacrificing power or versatility."
  },
  {
    id: 6,
    title: "2023 Mercedes-Benz E-Class",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2148&auto=format&fit=crop",
    price: 59990,
    rating: 4.8,
    reviewCount: 92,
    category: "Sedan",
    description: "The Mercedes-Benz E-Class exemplifies luxury with cutting-edge technology and refined comfort."
  },
  {
    id: 7,
    title: "2023 Porsche 911 Carrera",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=2070&auto=format&fit=crop",
    price: 106990,
    rating: 5.0,
    reviewCount: 58,
    category: "Sports Car",
    description: "The Porsche 911 Carrera continues to define the sports car category with exceptional performance."
  },
  {
    id: 8,
    title: "2023 Honda CR-V",
    image: "https://images.unsplash.com/photo-1673745834327-e244fffe9173?q=80&w=2036&auto=format&fit=crop",
    price: 29990,
    rating: 4.6,
    reviewCount: 145,
    category: "SUV",
    description: "The Honda CR-V offers excellent reliability, practicality, and comfort for everyday driving."
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
};

const ProductSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Vehicles</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our selection of premium vehicles, each offering exceptional quality, performance, and value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <span className="absolute top-2 right-2 z-10 bg-red-600 text-white text-xs px-2 py-1 rounded-md font-medium">
                  {product.category}
                </span>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">{product.title}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-red-400 fill-red-400' : 'text-gray-300 dark:text-gray-500'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">({product.reviewCount})</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-red-600">{formatPrice(product.price)}</span>
                    <Button variant="outline" size="sm" className="text-xs text-red-600 dark:text-red-400 border-red-600 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 dark:hover:text-white">
                      Details <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection; 