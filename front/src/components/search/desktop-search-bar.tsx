import styles from "@/styles/search/desktop-search-bar.module.scss";

const DesktopSearchBar = () => {
  return (
    <input type='text' placeholder='何をお探しですか？'
      className={`${styles.input}`}>
    </input>
  );
}

export default DesktopSearchBar;