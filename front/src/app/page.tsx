import ItemCardList from "@/components/item/item-card"
import MobileSearchBar from "@/components/search/mobile-search-bar";
import "@/styles/common-styles.scss"

export default function Home() {
  const uuids = [
    '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'
  ]

  return (
    <main className='main-container'>
      <div className='block md:hidden'>
        <MobileSearchBar />
      </div>
      <h1 className='title'>Suggest</h1>
      <ItemCardList uuids={uuids}/>
    </main>
  );
}