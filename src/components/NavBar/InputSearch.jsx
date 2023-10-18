'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputSearch = () => {
  const searchRef = useRef();

  const router = useRouter();

  const handleSearchInput = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault;
      const keyword = searchRef.current.value;

      if (keyword.trim() !== '') {
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className='flex justify-between items-center gap'>
      <input
        className='p-1.5 rounded-l-md w-full outline-none text-slate-800'
        placeholder='Cari anime..'
        ref={searchRef}
        onKeyDown={handleSearchInput}
        id='inputSearch'
      />
      <button
        className='text-slate-600 bg-white p-2 m-0 rounded-r-md hover:text-slate-800 transition-all outline-none shadow-none'
        onClick={handleSearchInput}
      >
        <MagnifyingGlass size={20} />
      </button>
    </div>
  );
};

export default InputSearch;
