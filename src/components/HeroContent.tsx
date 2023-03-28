import React from 'react'

const HeroContent =
    (): React.ReactElement => {
    return (
        <div className="h-[750px] items-center flex bg-no-repeat bg-cover bg-right" id="hero-content"  style={{backgroundImage:'url(./Banner.png)'}}>

        <div className="w-[1280px] mx-auto items-center justify-start flex">
            {/* -hero-txt */}
            <div className="flex flex-col justify-start text-left">
                <p className="text-[24px] font-normal">
                    New Arrival
                </p>
                <p className="text-[70px] font-normal">
                    LED DESK BRAND
                </p>
                <p className="text-[16px] font-normal">
                    Next generation LED lamp. A multi-function LED lamp that is environmentally<br/> friendly and soft on the eyes.
                </p>
            </div>
        </div>
    </div>
    )
    }
export default HeroContent
