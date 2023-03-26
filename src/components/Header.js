function Header() {
    return(
        <header>
            <img src="/img/icons/logo.svg" height={57} width={170} alt="logo" className="logo" />
            <div className="catalog-block">
                <button>
                    <img src="/img/icons/catalog.svg" alt="catalog"/>
                    <span>Каталог</span>
                </button>
            </div>
            <div className="search-block">
                <img src="/img/icons/search.svg" alt="Search" />
                <input placeholder="Найти товар" />
            </div>
            <div className="city-block">
                <img src="/img/icons/navigation.svg" alt="navigation"/>
                <p>Санкт-Петербург</p>
            </div>
            <div className="mainNav">
                <a href="/index">
                    <img src="/img/icons/cart.svg" height={23} width={23} alt="cart" />
                </a>
                <a href="/index">
                    <img src="/img/icons/like.svg" height={21} width={23} alt="like" />
                </a>
                <a href="/index">
                    <img src="/img/icons/profile.svg" height={22} width={18} alt="profile" />
                </a>
            </div>
        </header>
    );
}

export default Header;

