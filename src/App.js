import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

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
    <Footer />
  </div>
  );
}

export default App;
