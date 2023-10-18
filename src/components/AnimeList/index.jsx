import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ api }) => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 py-4'>
      {api.data?.map((anime, index) => {
        return (
          <div
            className='shadow-md shadow-slate-600 bg-slate-600 p-2 rounded-md card'
            key={index}
          >
            <Link href={`/${anime.mal_id}`}>
              <Image
                src={anime.images.webp.image_url}
                alt='...'
                priority={true}
                width={350}
                height={350}
                className='w-full max-h-64 object-cover'
              />
              <h3 className='font-bold md:text-lg text-md text-center px-4 pt-2'>
                {anime.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
