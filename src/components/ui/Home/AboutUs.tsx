import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Velocity Car Shop</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Since 2005, Velocity Car Shop has been the premier destination for automotive excellence. 
                We pride ourselves on offering a curated selection of high-quality vehicles at competitive prices.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our mission is to provide an exceptional car buying experience through transparency, 
                expert guidance, and unparalleled customer service. We believe in building long-term 
                relationships with our customers based on trust and satisfaction.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Over 15 years of experience in the automotive industry</p>
              </div>
              <div className="flex items-start mb-4">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Team of certified automotive experts and consultants</p>
              </div>
              <div className="flex items-start mb-4">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Thousands of satisfied customers across the country</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">Comprehensive after-sales service and support</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">Learn More About Us</Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop" 
                alt="Car Showroom" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Established 2005</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 