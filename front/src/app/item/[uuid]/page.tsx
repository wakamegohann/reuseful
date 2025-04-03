import ItemDetail from '@/components/item-detail';
import "@/styles/common-styles.scss"

export default function ItemDetailPage({ params }: { params: { uuid: string } }) {
  const { uuid } = params;
  
  return (
    <main>
      <ItemDetail />
    </main>
  );
}