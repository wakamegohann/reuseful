import Categorylist from "./category-tag";
import Link from 'next/link';
import "@/styles/item-card.scss";
import Image from "next/image";


const ItemCardList = ({ uuids }: { uuids: string[] }) => {
  return (
    <>
      {uuids.map((uuid, index) => (
        <ItemCard key={uuid} uuid={uuid} priority={index < 4} />
      ))}
    </>
  );
};

const ItemCard = ({ uuid, priority = false }: { uuid: string, priority?: boolean }) => {
    const categories = [
      { id: 1, text: 'スポーツ用品'},
      { id: 2, text: '家具'},
      { id: 3, text: '新生活'}
    ];

  return (
    <article className='article'>

      <Link href={`/item/${uuid}`}>
        <div className='image'>
          <Image src={`https://picsum.photos/250/250?random=${Math.random()}`}
            alt='item-image'
            className='image'
            width={250} height={250}
            priority={priority}
          />
        </div>
      </Link>
      <div className='detail bg-gray-100'>
        <div className='category'>
            <Categorylist categories={categories} className='tag-design' />
        </div>
        <div className='property'>
          <div className='value'>1500</div>
          <div className='favorite'>
            <button><Image src={`${process.env.MEDIA_BASE_URL}/_system/hart.svg`} alt='favorite-button' fill /></button>
          </div>
        </div>
      </div>

    </article>
  );
}

export default ItemCardList;