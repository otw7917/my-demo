interface skillCardProps {
  language: string;
  description: string;
  url?: string;
}

function SkillCard({ skillCard }: { skillCard: skillCardProps }) {
  const { language, description, url } = skillCard;
  return (
    <div className='border-dotted border-2 p-8 flex flex-col min-h-[10rem]'>
      <div className='flex items-center gap-2'>
        {url ? <img className='w-12 h-12 rounded-md' src={url}></img> : <></>}
        <span className='text-lg font-bold'>{language}</span>
      </div>
      <div className='tracking-tight'>{description}</div>
    </div>
  );
}

export default SkillCard;
