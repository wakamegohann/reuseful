import "@/styles/header.scss";
import Image from "next/image";

const Header = () => {
  const baseUrl = process.env.MEDIA_BASE_URL;
  return (
    <header className='header bg-base-orange'>
      <div className='logo'><Image src={`${baseUrl}/_system/reuseful_logo.svg`} className='images' loading='lazy' alt='logo'/></div>
      <div className='logo-txt'><Image src={`${baseUrl}/_system/reuseful_text.svg`} className='images' loading='lazy' alt='logo-text'/></div>
      <div className='buttons'><Image src={`${baseUrl}/_system/hart.svg`} className='images' loading='lazy' alt='favorite-button'/></div>
      <div className='buttons relative bottom-0.5'><Image src={`${baseUrl}/_system/cart.svg`} className='images' loading='lazy' alt='cart-button'/></div>
    </header>
  );
}

export default Header;