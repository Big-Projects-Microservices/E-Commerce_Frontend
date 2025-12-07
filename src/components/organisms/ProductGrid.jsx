import { ProductCard } from '../molecules';

export default function ProductGrid ({ products }) {  
return(
<div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    gap: '20px', 
  }}>
    {(products || []).map((product) => (
      <ProductCard key={product.id} product={product} isHot={product.isHot} />
    ))}
    </div>
    )
  }

