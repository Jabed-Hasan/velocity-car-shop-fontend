import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Family SUV",
    excerpt: "Find out what features to look for when selecting an SUV that will meet all your family's needs and preferences.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop",
    date: "June 12, 2023",
    author: "David Miller",
    category: "Buying Guide",
  },
  {
    id: 2,
    title: "The Rise of Electric Vehicles: What You Need to Know",
    excerpt: "Explore the growing trend of electric vehicles and learn about the benefits, challenges, and future prospects.",
    image: "https://images.unsplash.com/photo-1593941707882-a56bbc142003?q=80&w=2072&auto=format&fit=crop",
    date: "May 28, 2023",
    author: "Sarah Thompson",
    category: "Industry Trends",
  },
  {
    id: 3,
    title: "Essential Car Maintenance Tips for Every Season",
    excerpt: "Discover the key maintenance tasks you should perform on your vehicle during each season to ensure optimal performance.",
    image: "https://images.unsplash.com/photo-1507894377075-88387e8a00da?q=80&w=1974&auto=format&fit=crop",
    date: "April 15, 2023",
    author: "Michael Chen",
    category: "Maintenance",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest From Our Blog</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest automotive news, buying guides, and maintenance tips from our experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium text-white bg-red-600 dark:bg-red-700 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <Button variant="ghost" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 p-0 hover:bg-transparent">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white">View All Articles</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 