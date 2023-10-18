'use client';

import React, { useEffect, useState } from 'react';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import AnimeList from '@/components/AnimeList';

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ANIME}/top/anime?page=${page}`
    );

    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className='container mx-auto'>
      <section className='p-5'>
        <HeaderMenu title={`Top Anime Page: ${page}`} />
        <AnimeList api={topAnime} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </div>
  );
};

export default Page;
