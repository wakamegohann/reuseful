import "@/styles/header.scss";
import Image from "next/image";

const Header = () => {
  const baseUrl = process.env.MEDIA_BASE_URL;

  return (
    <header className='header bg-base-orange'>
      <div className='logo-container'>
        <div className='logo-icon'>
          <Image src={`${baseUrl}/_system/reuseful_logo.svg`} className='images' alt='logo' fill />
        </div>
        <div className='logo-text'>
          <Image src={`${baseUrl}/_system/reuseful_text.svg`} className='images' alt='logo-text' fill />
        </div>
      </div>
      <div className='button-container'>
        <div className='heart'>
          <Image src={`${baseUrl}/_system/hart.svg`} className='images' alt='favorite' fill  />
        </div>
        <div className='cart'>
          <Image src={`${baseUrl}/_system/cart.svg`} className='images' alt='cart' fill />
        </div>
      </div>
    </header>
  );
}

export default Header;