import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/header';

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeywod = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ANIME}/anime?q=${decodedKeywod}`
  );

  const searchAnime = await response.json();

  return (
    <div className='container mx-auto'>
      <section className='p-5'>
        <Header title={`Pencarian untuk ${decodedKeywod}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default Page;
