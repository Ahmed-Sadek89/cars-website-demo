import { Banner, BannerFooter, Logo } from '@/types'
import Advertisments from './Advertisments/Advertisments'
import CarCollections from './CarCollections/CarCollections'
import CarModels from './CarModels'
import MainSection from './MainSection/MainSection'
import TabsAndItems from './TabsAndItems/TabsAndItems'
import Vehicles from './Vehicles'

interface IHomepage {
  banners: Banner[]
  logos: Logo[]
  bannerFooter: BannerFooter[]
}
const Homepage = ({ banners, logos, bannerFooter }: IHomepage) => {
  return (
    <>
      <MainSection banners={banners} />
      <Vehicles />
      <CarCollections />
      <CarModels logos={logos} />
      <TabsAndItems />
      <Advertisments bannerFooter={bannerFooter}/>
    </>
  )
}

export default Homepage
