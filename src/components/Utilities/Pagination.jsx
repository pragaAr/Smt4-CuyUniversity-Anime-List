const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handlePrevPage = () => {
    if (page <= 1) return;

    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleNextPage = () => {
    if (page >= lastPage) return;

    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  return (
    <div className='flex justify-center items-center gap-4 py-4 px-2'>
      <button
        className='text-slate-400 hover:text-white transition-all'
        onClick={handlePrevPage}
      >
        Prev...
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        className='text-slate-400 hover:text-white transition-all'
        onClick={handleNextPage}
      >
        ...Next
      </button>
    </div>
  );
};

export default Pagination;
