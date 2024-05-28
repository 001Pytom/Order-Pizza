import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item }) {
  // currently the ingredient doesnt seem to woek thats why i use =[] for nwo
  const {
    quantity,
    name,
    totalPrice,
    isLoadingIngredients,
    ingredients = [],
  } = item;
  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
