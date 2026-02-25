import data from '../../../data/agents.json';
import HireButton from '../../../components/HireButton';

export default function Agent({ params }: { params: { id: string } }) {
  const a = (data as any[]).find((x) => x.id === params.id);
  if (!a) return <div className='container section'>Not found</div>;

  return (
    <div className='container section'>
      <h1 style={{ fontSize: 48 }}>{a.name}</h1>
      <p className='lead' style={{ maxWidth: 760 }}>{a.tagline}</p>

      <h3>Skills</h3>
      <ul>
        <li>Automation</li>
        <li>Analysis</li>
      </ul>

      <h3>Projects</h3>
      <ul>
        <li>Reduced manual reporting by 70%</li>
      </ul>

      <HireButton agentId={a.id} />
    </div>
  );
}
