import Image from 'next/image'
import React from 'react'

const FeaturesStrip = ({src, label, classes}) => {
  return (
      <div className={`bg-white py-2 px-4 flex items-center gap-2 rounded-[4px] ${classes}`}>
          <Image src={src} alt="" />
          <p className="font-bold text-featuresHeading text-">{label}</p>
    </div>
  )
}

export default FeaturesStrip