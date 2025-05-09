import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    count: 28,
  },
  {
    id: 2,
    name: "Sedan",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=2069&auto=format&fit=crop",
    count: 42,
  },
  {
    id: 3,
    name: "Sports Car",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    count: 15,
  },
  {
    id: 4,
    name: "Electric",
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2070&auto=format&fit=crop",
    count: 32,
  },
];

const DynamicCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse By Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of vehicles by category to find the perfect match for your needs and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                <p className="text-gray-500 mt-2">{category.count} vehicles available</p>
                <Button variant="outline" className="mt-4 w-full text-red-600 border-red-600 hover:bg-red-50">View All</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicCategories; 