import Search from '@/components/Search/Search'
import { getCategoryTabsWithData } from '@/libs/get-category-tabs-with-data'
import { Metadata } from 'next'
import { Suspense } from 'react'

type props = {
  searchParams: {
    car_model: string
    car_year: string
    car_brand: string
  }
}

export async function generateMetadata ({
  searchParams
}: props): Promise<Metadata> {
  return {
    title: `3RABITK | ${searchParams.car_year} ${searchParams.car_brand} ${searchParams.car_model}`,
    description: `Generated for 3RABITK ${searchParams.car_year} ${searchParams.car_brand} ${searchParams.car_model} search`
  }
}

const Page = async () => {
  const { allCategoryItems, category_tabs } = await getCategoryTabsWithData()

  return (
    <Suspense>
      <Search
        category_tabs={category_tabs}
        allCategoryItems={allCategoryItems}
      />
    </Suspense>
  )
}

export default Page
