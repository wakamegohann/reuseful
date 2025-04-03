import "@/styles/search_bar.scss";

const Search = () => {
  return (
    <div className='relative text-center'>
      <input type='text' placeholder='何をお探しですか？'
      className='search-input placeholder-search-font-color rounded-full bg-base-orange'>
      </input>
    </div>
  );
}

export default Search;