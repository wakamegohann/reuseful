import styles from "@/styles/search/mobile-search-bar.module.scss";

const MobileSearchBar = () => {
  return (
    <div className='relative text-center'>
      <input type='text' placeholder='何をお探しですか？'
      className={`${styles.input} placeholder-search-font-color rounded-full bg-base-orange`}>
      </input>
    </div>
  );
}

export default MobileSearchBar;