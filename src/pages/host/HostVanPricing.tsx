import { useOutletContext } from 'react-router-dom';

interface Van {
  price: number;
}

interface ContextType {
  van: Van;
}

export default function HostVanPricing() {
  const { van } = useOutletContext<ContextType>();

  return (
    <h4 className="text-2xl">
      <span className="font-bold">${van.price}</span>/day
    </h4>
  );
}