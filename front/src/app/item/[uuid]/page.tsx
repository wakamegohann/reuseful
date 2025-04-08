import ItemDetail from '@/components/item/item-detail';
import ItemCardList from '@/components/item/item-card';
import "@/styles/common-styles.scss"

export async function generateStaticParams() {
  const uuids = ['1', '2', '3', '4', '5']; // ← ここに生成したいuuidを列挙

  return uuids.map((uuid) => ({ uuid }));
}

type Params = Promise<{ [uuid: string]: string }>
type Props = {
  params: Params
}

export default async function ItemDetailPage({ params }: Props) {
  const { uuid } = await params;
  
  const uuids = [
    '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'
  ]

  return (
    <main className='main-container'>
      <ItemDetail uuid={uuid} />
      <h1 className='title'>Suggest</h1>
      <div className='item-list'>
        <ItemCardList uuids={uuids}/>
      </div>
    </main>
  );
}