import React from 'react'
import MainSectionForm from '../MainSectionForm/MainSectionForm'
import { Category } from '@/types'

const MainSection = ({ category }: { category: Category | null|undefined }) => {
  return (
    <>
      <section className="relative bg-cover bg-no-repeat bg-center mb-5 lg:mb-52 w-full h-[30vh] sm:h-[70vh]"
        style={{backgroundImage: category ? `url(${category.image_url})`: "url('/category_name/main-bg.png')"}}
      >
        <section className='hidden bottom-[-160px] absolute lg:flex justify-center items-center w-full'>
          <MainSectionForm setOpen={null} />
        </section>
      </section>
      <section className='lg:hidden flex justify-center items-center w-full'>
        <MainSectionForm setOpen={null} />
      </section>
    </>
  )
}

export default MainSection
