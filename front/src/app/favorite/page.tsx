import ItemCardList from "@/components/item/item-card"
import "@/styles/common-styles.scss"
import "@/styles/item-list.scss"

export default function FavoritePage() {
  const uuids = [
    '123','345','456','567','123','345','456','567','123','345','456','567','123','345','456','567'
  ]

  return (
    <main className='main-container'>
      <div className="h-10"></div>
      <h1 className='title'>Favorite</h1>
      <div className='item-list'>
        <ItemCardList uuids={uuids}/>
      </div>
    </main>
  );
}
