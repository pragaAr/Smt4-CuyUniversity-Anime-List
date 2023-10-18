import Link from 'next/link';

const header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl'>{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className='hover:text-slate-300 transition-all'>
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default header;
