

export const Banner = () =>{

    return(
        <section className="home-banner" id="start">
            <div className="banner-img">
                {/*<img src={homeHero} alt={""}/>*/}
            </div>
            <div className="banner-data">
                <h1 className="banner-slogan">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div  className="banner-buttons">
                    <button className="banner-buttons-btn">Oddaj<br/> Rzeczy</button>
                    <button className="banner-buttons-btn">Zorganizuj Zbiorke</button>
                </div>
            </div>
        </section>
    )
}