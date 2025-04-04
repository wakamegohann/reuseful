import Categorylist from "./category-tag";
import Link from 'next/link';
import "@/styles/item-card.scss";


const ItemCardList = ({ uuids }: { uuids: string[] }) => {
  return (
    <>
      {uuids.map((uuid) => (
        <ItemCard key={uuid} uuid={uuid} />
      ))}
    </>
  );
};

const ItemCard = (
    { uuid }:{ uuid:string,}
  ) => {
    const categories = [
      { id: 1, text: 'スポーツ用品'},
      { id: 2, text: '家具'},
      { id: 3, text: '新生活'}
    ];

  return (
    <article className='article'>

      <Link href={`/item/${uuid}`}>
        <img src={`https://picsum.photos/250/250?random=${Math.random()}`}
        loading='lazy'
        className='image'
        ></img>
      </Link>
      <div className='detail bg-gray-100'>
        <div className='category'>
            <Categorylist categories={categories} className='tag-design' />
        </div>
        <div className='property'>
          <div className='value'>￥1500</div>
          <button className='favorite'><img src={`${process.env.MEDIA_BASE_URL}/_system/hart.svg`} loading='lazy'></img></button>
        </div>
      </div>

    </article>
  );
}

export default ItemCardList;