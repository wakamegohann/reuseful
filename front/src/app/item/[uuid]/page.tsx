import ItemDetail from '@/components/item/item-detail';
import ItemCardList from '@/components/item/item-card';
import "@/styles/common-styles.scss"

export default function ItemDetailPage({ params }: { params: { uuid: string } }) {
  const { uuid } = params;
  
  const uuids = [
    '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'
  ]

  return (
    <main className='main-container'>
      <ItemDetail />
      <h1 className='title'>Suggest</h1>
      <div className='item-list'>
        <ItemCardList uuids={uuids}/>
      </div>
    </main>
  );
}