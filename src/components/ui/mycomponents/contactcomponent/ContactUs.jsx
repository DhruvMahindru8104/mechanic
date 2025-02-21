'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="pt-8 lg:pt-24">
      <div className="">
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team would love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <Image src="/puppy.jpg" alt="Email Icon" width={20} height={20} />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">sareenrajesh@gmail.com</p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <Image src="/puppy.jpg" alt="Location Icon" width={20} height={20} />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Shop no,9,Opp,Andh Vidyala,Lohgarh, Amritsar, Punjab 143001</p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <Image src="/puppy.jpg" alt="Phone Icon" width={20} height={20} />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Sat from 8am to 8pm.</p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                <Link href="tel:+918427204050">+918427204050</Link>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.2856955881684!2d74.86484391112212!3d31.626027174058024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197b53424255f1%3A0x21fc655a00d77d09!2sSareen%20Motors!5e0!3m2!1sen!2sin!4v1739341171976!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>


  );
}


