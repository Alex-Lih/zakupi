import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
  <div className="wrapper">
    <Header/>
    <main>
        <div className="slider-block">
            <a href="/index">
                <img src="/img/slider.png" alt="slider" />
            </a>
        </div>
        <div className="popular-block">
            <a href="/index" className="heading">Популярное</a>
                <div className="card-block">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
        </div>
        <div className="profit-block">
            <a href="/index" className="heading">Выгодные вложения</a>
            <div className="card-block">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="banners">
                <a className="promotion" href="/index">
                    <img src="/img/banner1.png" alt="banner"/>
                </a>
                <a className="promotion" href="/index">
                    <img src="/img/banner2.png" alt="banner"/>
                </a>
                <a className="promotion" href="/index">
                    <img src="/img/banner3.png" alt="banner"/>
                </a>
            </div>
        </div>
        <div className="news-block">
            <a href="/index" className="heading">Новые предложения</a>
            <div className="card-block">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="banners">
                <a className="promotion" href="/index">
                    <img src="/img/banner4.png" alt="banner"/>
                </a>
            </div>
        </div>

        <div className="big_present-block">
            <a href="/index" className="heading">Увеличенная ставка</a>
                <div className="card-block">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
        </div>
        <div className="promotions-block">
            <a href="/index" className="heading">Акции</a>
            <div className="banners">
            <a className="promotion" href="/index">
                <img src="/img/promotion1.png" alt="banner"/>
            </a>
            <a className="promotion" href="/index">
                <img src="/img/promotion2.png" alt="banner"/>
            </a>
            <a className="promotion" href="/index">
                <img src="/img/promotion3.png" alt="banner"/>
            </a>
            <a className="promotion" href="/index">
                <img src="/img/promotion4.png" alt="banner"/>
            </a>
            <a className="promotion" href="/index">
                <img src="/img/promotion5.png" alt="banner"/>
            </a>
          </div>
        </div>
        <div className="sees-block">
            <a href="/index" className="heading">Вы смотрели</a>
                <div className="card-block">
                      <Card />
                      <Card />
                      <Card />
                      <Card />
                      <Card />
                </div>
        </div>
    </main>
    <footer>
        <div className="footer-left">
            <div className="invest right">
                <h3>Инвесторам</h3>
                <div>
                    <a href="/index">Как стать инвестором</a>
                    <a href="/index">Каталог</a>
                    <a href="/index">Акции</a>
                    <a href="/index">Новинки</a>
                    <a href="/index">Вопросы и ответы</a>
                    <a href="/index">Договор займа</a>
                    <a href="/index">Пользовательское соглашение</a>
                </div>
            </div>
            <div className="partner right">
                <h3>Партнёрам</h3>
                <div>
                    <a href="/index">Войти в личный кабинет</a>
                    <a href="/index">Как стать партнёром</a>
                    <a href="/index">Партнёрская программа</a>
                    <a href="/index">Реклама на сайте</a>
                </div>
            </div>
            <div className="nas right">
                <h3>О нас</h3>
                <div>
                    <a href="/index">О компании</a>
                    <a href="/index">Вакансии</a>
                    <a href="/index">Контакты</a>
                </div>
            </div>
            <div className="information right">
                <h3>Правовая информация</h3>
                <div>
                    <a href="/index">Условия использования сайта</a>
                    <a href="/index">Политика обработки персональных данных</a>
                    <a href="/index">Публичная оферта</a>
                </div>
            </div>
            <div className="social right">
                <h3>Мы в социальных сетях</h3>
                <div className="social-network">
                    <a href="/index">
                        <img src="/img/icons/vk.svg" height={30} width={30} alt="vk" />
                    </a>
                    <a href="/index">
                        <img src="/img/icons/telegram.svg" height={30} width={30} alt="telegram" />
                    </a>
                    <a href="/index">
                        <img src="/img/icons/ok.svg" height={30} width={30} alt="ok" />
                    </a>
                    <a href="/index">
                        <img src="/img/icons/dzen.svg" height={30} width={30} alt="dzen" />
                    </a>
                    <a href="/index">
                        <img src="/img/icons/yarus.svg" height={30} width={30} alt="yarus" />
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-right">
            <img src="/img/icons/logo.svg" height={57} width={170} alt="logo" className="logo" />
            <span>2023 © Закупи</span>
        </div>
    </footer>
  </div>
  );
}

export default App;
