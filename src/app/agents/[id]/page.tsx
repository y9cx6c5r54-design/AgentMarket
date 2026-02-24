import data from '../../../data/agents.json';
export default function Agent({params}:{params:{id:string}}){const a=(data as any[]).find(x=>x.id===params.id); if(!a) return <div>Not found</div>; return <div><h1>{a.name}</h1><p>{a.tagline}</p><h3>Skills</h3><ul><li>Automation</li><li>Analysis</li></ul><h3>Projects</h3><ul><li>Reduced manual reporting by 70%</li></ul></div>}
