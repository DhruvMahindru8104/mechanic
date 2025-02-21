'use client';

import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: '⚡ Rajesh Sareen ',
    role: 'Expert Car Electrician',
    description:
      'When it comes to car electrical systems, there’s no one better than Rajesh Sareen. With over 25 years of experience, Rajesh has mastered everything from faulty wiring to complex ECU diagnostics.',
    image: '/BrakeMechanic.jpg',
  },
  {
    name: '⚙️ Sandeep Kumar ',
    role: 'Brake & Suspension Specialist',
    description: 'From brake pad replacements to shock absorber fixes, Sandeep ensures your vehicle rides smoothly and safely.',
    image: '/leadmechanic.jpg',
  },
  {
    name: '🔧 Rajinder Singh',
    role: 'Lead Mechanic',
    description:
      'With 15+ years of experience, Rajinder specializes in engine repairs, diagnostics, and performance tuning. Your car is in safe hands.',
    image: '/BrakeMechanic.jpg',
  },
];

export default function TeamSection() {
  return (
    <section className="">
      <div className="container flex flex-col items-center text-center ">
       
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">Meet our team</h2>
      
      </div>
      <div className="container mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg bg-zinc-100 md:mb-5">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="w-full text-left font-bold">{member.name}</p>
            <p className="w-full text-left text-zinc-600">{member.role}</p>
            <p className="w-full py-3 text-sm text-zinc-600">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}