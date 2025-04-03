import "@/styles/header.scss";

const Header = () => {
  const baseUrl = process.env.MEDIA_BASE_URL;
  return (
    <header className='header bg-base-orange'>
      <div className='logo'><img src={`${baseUrl}/_system/reuseful_logo.svg`} className='images' /></div>
      <div className='logo-txt'><img src={`${baseUrl}/_system/reuseful_text.svg`} className='images' /></div>
      <div className='buttons'><img src={`${baseUrl}/_system/hart.svg`} className='images' /></div>
      <div className='buttons relative bottom-0.5'><img src={`${baseUrl}/_system/cart.svg`} className='images' /></div>
    </header>
  );
}

export default Header;