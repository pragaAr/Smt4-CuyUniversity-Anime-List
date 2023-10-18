import Link from 'next/link';
import InputSearch from './InputSearch';

const NavBar = () => {
  return (
    <header className='bg-slate-400 sticky top-0 z-10'>
      <div className='flex md:flex-row flex-col gap-2 justify-between md:items-center container mx-auto p-5'>
        <Link href='/' className='font-bold text-white text-2xl'>
          ANIMELIST
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default NavBar;
