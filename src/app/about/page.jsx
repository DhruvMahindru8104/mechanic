import React from 'react'
import AboutTop from '@/components/ui/mycomponents/aboutcomponents/AboutTop'
import TeamSection from '@/components/ui/mycomponents/indexcomponents/Team'
function page() {
  return (
  <>
  <AboutTop/>
  <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
  <TeamSection/>
  </div>
  </>
  )
}

export default page