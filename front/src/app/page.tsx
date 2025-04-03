import Search from "@/components/search-bar"
import ItemCardList from "@/components/item-card"
import "@/styles/item-list.scss"
import "@/styles/common-styles.scss"

export default function Home() {
  const uuids = [
    '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'
  ]

  return (
    <main className='main-container'>
      <div className='py-12'><Search /></div>
      <h1 className='title'>Suggest</h1>
      <div className='item-list'>
        <ItemCardList uuids={uuids}/>
      </div>
    </main>
  );
}