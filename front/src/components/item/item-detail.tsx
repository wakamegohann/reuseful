import "@/styles/item-detail.scss"
import Categorylist from "@/components/category-tag";
import Image from "next/image";

const ItemDetail = ({ uuid }: {uuid:string}) => {
  const categories = [
    { id: 1, text: 'スポーツ用品' },
    { id: 2, text: '家具' },
    { id: 3, text: '新生活' }
  ];

  return (
    <>
      <div className='item-image'>
        <Image src={`https://picsum.photos/500/500?random=${Math.random()}`} alt='item-image' width={500} height={500} /> 
      </div>
      <div className='padding-container'>
        <div className='item-base-info'>
          <p className='item-text'>{uuid}あいうえおあいうえおあいうえおあいうえおあいうえおあいうえお</p>
          
          <div className='category'>
            <Categorylist categories={categories} className='tag-design'/>
          </div>
          
          <div className='value'>￥1500</div>
          <div className='buttons'>
            <button className='cart'>カートに入れる</button>
            <button className='hart'>お気に入り</button>
          </div>
        </div>
        <div className='item-more-info'>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;