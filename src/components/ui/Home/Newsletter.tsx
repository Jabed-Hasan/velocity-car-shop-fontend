import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-red-600 text-white dark:bg-red-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-2">
            <Mail className="w-12 h-12 mx-auto mb-4" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Velocity</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, special offers, and automotive insights. 
            We'll keep you informed about new arrivals, promotional events, and expert tips.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-red-200 focus-visible:ring-white dark:bg-white/5 dark:border-white/10"
              required
            />
            <Button className="bg-white text-red-600 hover:bg-red-50 dark:bg-white dark:hover:bg-red-50 px-6">
              Subscribe
            </Button>
          </form>
          
          <p className="text-red-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 