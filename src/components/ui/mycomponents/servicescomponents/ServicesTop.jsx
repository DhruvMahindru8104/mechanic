import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="pt-8 lg:pt-24">
      <div className="">
        <div className="grid grid-cols-1 gap-8  xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div key={index}>
              <Link href={item.link}>
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg"
                  />
                </div>
              </Link>
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const portfolioItems = [
  {
    image: '/carchecking.jpg',
    title: 'Full Car Servicing',
    category: 'Maintenance',
    description: 'Oil changes, engine tuning, and routine maintenance.',
    link: '#',
  },
  {
    image: '/carengine.jpg',
    title: 'Engine Diagnostics & Repair',
    category: 'Engine Care',
    description: 'Advanced fault detection & engine fixes.',
    link: '#',
  },
  {
    image: '/brake.jpg',
    title: 'Brake & Suspension Repair',
    category: 'Safety',
    description: 'Safety check-ups, brake pad replacements, and shock absorber repairs.',
    link: '#',
  },
  {
    image: '/battery.jpg',
    title: 'Battery & Electrical Repairs',
    category: 'Electrical',
    description: 'Battery replacements, wiring fixes, and electrical troubleshooting.',
    link: '#',
  },
  {
    image: '/carac.jpg',
    title: 'AC & Cooling System Services',
    category: 'Cooling',
    description: 'Car air conditioning repair and coolant refills.',
    link: '#',
  },
  {
    image: '/paint.jpg',
    title: 'Denting & Painting',
    category: 'Body Work',
    description: 'Restoring the car’s exterior to a showroom finish.',
    link: '#',
  },
  {
    image: '/outside.jpg',
    title: 'Emergency Roadside Assistance',
    category: 'Roadside Help',
    description: 'Quick help for breakdowns, flat tires, or dead batteries.',
    link: '#',
  },
];

