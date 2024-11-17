import { useOutletContext } from 'react-router-dom';

interface Van {
  imageUrl: string;
  name: string;
}

interface ContextType {
  van: Van;
}

export default function HostVanPhotos() {
  const { van } = useOutletContext<ContextType>();

  return (
    <img 
      src={van.imageUrl} 
      alt={van.name}
      className="w-32 h-32 object-cover rounded"
    />
  );
}