import Image from "next/image"
import Link from "next/link"
 
const OurServices = () => {
return (
    <section className="pb-20 pt-0 ">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
            <div className="max-w-2xl space-y-3">
                <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 dark:text-white">
                    Take a look to our amazing works
                </h1>
                <p className="text-gray-700 dark:text-gray-300">
                We take care of your car like it’s our own. From minor tune-ups to major repairs, our expert mechanics ensure your vehicle runs smoothly and safely. Check out our top services below!
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
                    <Image src="/carchecking.jpg" alt="project cover" width={1300} height={900} className="w-full aspect-[4/3.3] rounded object-cover" />
                    <div className="flex flex-col justify-end space-y-5 text-gray-300">
                        <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                        🔧 Full Car Servicing & Maintenance
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                        Keep your car in peak condition with routine check-ups, oil changes, and filter replacements.
                        </p>
                        
                    </div>
                </div>
                <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
                    <Image src="/carengine.jpg" alt="project cover" width={1300} height={900} className="w-full aspect-[4/3.3] rounded object-cover" />
                    <div className="flex flex-col justify-end space-y-5 text-gray-300">
                        <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                        ⚙️ Engine Diagnostics & Repair
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                        Check engine light on? We’ll diagnose the issue and fix it before it gets worse.
</p>
                       
                    </div>
                </div>
                <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
                <Image src="/battery.jpg" alt="project cover" width={1300} height={900} className="w-full aspect-[4/3.3] rounded object-cover" />
                    <div className="flex flex-col justify-end space-y-5 text-gray-300">
                        <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                        🔋 Battery Replacement
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                        Dead battery? Get a quick and reliable replacement with top-brand batteries.
                        </p>
                       
                    </div>
                </div>
                <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
                <Image src="/paint.jpg" alt="project cover" width={1300} height={900} className="w-full aspect-[4/3.3] rounded object-cover" />
                    <div className="flex flex-col justify-end space-y-5 text-gray-300">
                        <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                        🚗 Denting & Painting
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                        From scratches to full-body paint jobs, we restore your car’s showroom shine.
                        </p>
                      
                    </div>
                </div>
                <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
                <Image src="/outside.jpg" alt="project cover" width={1300} height={900} className="w-full aspect-[4/3.3] rounded object-cover" />
                    <div className="flex flex-col justify-end space-y-5 text-gray-300">
                        <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                        🚨 Emergency Roadside Assistance
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                        Stranded? We offer quick jump-starts, flat tire fixes, and towing services.
                        </p>
                       
                    </div>
                </div>
                <div className="relative p-5 sm:p-6 md:p-8 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 space-y-6">
                <Image src="/brake.jpg" alt="project cover" width={1300} height={900} className="w-full aspect-[4/3.3] rounded object-cover" />
                    <div className="flex flex-col justify-end space-y-5 text-gray-300">
                        <h1 className="font-semibold text-2xl text-gray-900 dark:text-white">
                        🛠️ Brake & Suspension Repair
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                        Your safety matters! We inspect and repair brakes, shock absorbers, and suspension systems.
                        </p>
                     
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
 
export default OurServices