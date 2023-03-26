function Card() {
    return (
        <div className="card">
            <img src="/img/Card-image/acustic.png" alt="acustic" height={250} width={250} />
            <div className="pay-block">
                <span>Мы вернём</span>
                <p>1 035 ₽ / шт</p>
            </div>
            <p className="title">Акустический поролон Волна 20, темно-серый, 200х100 см</p>
            <div className="statusbar">
                <span>0 ₽ / 90 000 ₽</span>
                <input
                    type='range'
                    min={1}
                    max={400}
                    step={1}
                    className='custom-slider'>
                </input>
            </div>
            <div className="card-bottom">
                <span>900 ₽ / шт</span>
                <button>В корзину</button>
            </div>
        </div>
    );
}

export default Card;