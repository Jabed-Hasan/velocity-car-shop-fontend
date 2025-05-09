import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Happy SUV Owner",
    rating: 5,
    content: "I couldn't be happier with my new SUV from Velocity Car Shop. The sales process was seamless, and the team really went above and beyond to find me the perfect vehicle for my family.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Repeat Customer",
    rating: 5,
    content: "This is my third car from Velocity, and they never disappoint. Their service department is equally impressive - always transparent and efficient with maintenance and repairs.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 3,
    name: "Emily Chen",
    title: "First-time Buyer",
    rating: 4,
    content: "As a first-time car buyer, I was nervous about the process, but the team at Velocity made everything so easy to understand. They helped me find a great car within my budget.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Luxury Car Enthusiast",
    rating: 5,
    content: "The selection of luxury vehicles is impressive, and the knowledge of the staff is unmatched. They knew every detail about the models I was interested in and helped me make an informed decision.",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - see what our valued customers have to say about their experience with Velocity Car Shop.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-red-400 fill-red-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="text-red-600 font-medium hover:underline">
            View all testimonials →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 