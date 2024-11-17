import { useOutletContext } from 'react-router-dom';

interface Van {
  name: string;
  type: string;
  description: string;
}

interface ContextType {
  van: Van;
}

export default function HostVanInfo() {
  const { van } = useOutletContext<ContextType>();

  return (
    <div className="space-y-4">
      <h4 className="font-bold">Name: <span className="font-normal">{van.name}</span></h4>
      <h4 className="font-bold">Category: <span className="font-normal">{van.type}</span></h4>
      <h4 className="font-bold">Description: <span className="font-normal">{van.description}</span></h4>
    </div>
  );
}