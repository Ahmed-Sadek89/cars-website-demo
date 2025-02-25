import React from 'react'

const FirstProps = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-4 text-custom-black bg-[#EEEEEE] rounded py-5 px-8'>
                <h2 className='font-bold text-2xl'>Product details</h2>
                <ul className='list-disc p-4'>
                    <li className='text-sm'>
                        CONTIPROCONTACT SSR (RUN FLAT) Tires by CONTINENTAL TIRES®. Season: All Season. Type: Run Flat. The ContiProContact SSR
                        tire provides all-season versatility and excellent traction while not sacrificing comfort and performance.
                        Its tread design greatly improves wet traction and multidirectional grip that also
                        significantly reduces road noise and increases fuel efficiency.
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 text-custom-black bg-[#EEEEEE] rounded py-5 px-8'>
                <h2 className='font-bold text-2xl'>Disclaimer</h2>
                <ul className='list-disc p-4 text-custom-blue'>
                    <li className='text-sm'>
                        This product is valid for exchange for 14 days from now
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-4 text-custom-black bg-[#EEEEEE] rounded py-5 px-8'>
                <h2 className='font-bold text-2xl'>Feature</h2>
                <ul className='list-disc p-4 flex flex-col gap-1'>
                    <li className='text-sm'>
                        Low Pressure Casting Production: Superior to gravity casting, this method ensures a lighter wheel with enhanced structural integrity
                    </li>
                    <li className='text-sm'>
                        Unique Design: 10 split spokes recessing towards the wheel center create a spider-like look, hence the name
                    </li>
                    <li className='text-sm'>
                        Large Diameters: Available in sizes ranging from 17 to 22 inches, fitting all popular bolt patterns of late-model vehicles
                    </li>
                    <li className='text-sm'>
                        JWL and VIA Compliant: These wheels adhere to industry standards, ensuring top-notch quality
                    </li>
                    <li className='text-sm'>
                        Thoroughly Tested: Each wheel undergoes rigorous quality control, including various stress and impact tests.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FirstProps
