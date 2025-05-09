import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Tag } from "lucide-react";

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Special Offers</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take advantage of our limited-time offers and exclusive deals on select vehicles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Offer */}
          <div className="bg-gradient-to-r from-red-500 to-red-700 rounded-xl overflow-hidden shadow-lg">
            <div className="p-8 text-white">
              <div className="flex items-center mb-4">
                <Tag className="w-5 h-5 mr-2" />
                <span className="font-semibold">HOT DEAL</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Summer Sale: 15% Off All SUVs</h3>
              <p className="mb-6 opacity-90">
                Beat the heat with our summer special. Get 15% off on all SUV models, plus free servicing for the first year.
              </p>
              <div className="flex items-center mb-6">
                <Clock className="w-5 h-5 mr-2" />
                <span>Offer ends in 7 days</span>
              </div>
              <Button className="bg-white text-red-600 hover:bg-red-50">
                View Offer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Offer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Zero Down Payment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Drive home your dream car with zero down payment on select models.</p>
              <Button variant="outline" className="text-sm text-red-600 dark:text-red-400 border-red-600 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">Learn More</Button>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Low Interest Rate</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Get financing at just 2.99% APR for qualified buyers.</p>
              <Button variant="outline" className="text-sm text-red-600 dark:text-red-400 border-red-600 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">Learn More</Button>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Extended Warranty</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Get an additional 2-year warranty on all new purchases.</p>
              <Button variant="outline" className="text-sm text-red-600 dark:text-red-400 border-red-600 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">Learn More</Button>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Trade-in Bonus</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Extra $1,000 on your trade-in value towards a new vehicle.</p>
              <Button variant="outline" className="text-sm text-red-600 dark:text-red-400 border-red-600 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers; 