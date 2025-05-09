import { CheckCircle, Settings, Truck, Shield, Headphones, Calendar } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Car Maintenance",
    description: "Professional maintenance services to keep your vehicle in top condition.",
    icon: <Settings className="w-10 h-10 text-red-500" />,
  },
  {
    id: 2,
    title: "Free Delivery",
    description: "Free delivery to your doorstep on all new vehicle purchases.",
    icon: <Truck className="w-10 h-10 text-red-500" />,
  },
  {
    id: 3,
    title: "Extended Warranty",
    description: "Comprehensive warranty packages to protect your investment.",
    icon: <Shield className="w-10 h-10 text-red-500" />,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our customer support team is available round the clock to assist you.",
    icon: <Headphones className="w-10 h-10 text-red-500" />,
  },
  {
    id: 5,
    title: "Easy Scheduling",
    description: "Convenient online scheduling for test drives and service appointments.",
    icon: <Calendar className="w-10 h-10 text-red-500" />,
  },
  {
    id: 6,
    title: "Quality Assurance",
    description: "All our vehicles undergo rigorous quality checks before delivery.",
    icon: <CheckCircle className="w-10 h-10 text-red-500" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of services to ensure the best experience for our customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 