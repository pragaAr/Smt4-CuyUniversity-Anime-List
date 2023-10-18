import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/header';

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ANIME}/top/anime?limit=8`
  );

  const topAnime = await response.json();

  return (
    <div className='container mx-auto'>
      <section className='p-5'>
        <Header
          title='Paling Populer'
          linkHref='/populer'
          linkTitle='Lihat semua'
        />
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
};

export default Page;
