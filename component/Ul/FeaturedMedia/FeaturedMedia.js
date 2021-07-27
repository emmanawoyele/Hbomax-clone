

 function FeaturedMedia(props) {
    return (<div className="featured_media">
<iframe className="featured_media__video" width="100%" height="100%" src="https://www.youtube.com/embed/KPLWWIOCOOQ?autoplay=1&loop=1&start=10" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; autoplay; encrypted-media; gyroscope;picture-in-picture " allowFullScreen></iframe>
<div className="featured_media__bg">
<div className="featured_media__container">
<div className="featured_media__title">Game of thrones</div>
<div className="featured_media__playing">NOW PLAYING</div>
<div className="featured_media__location">In theaters and on HBO MAX.SStreaming throught July 23</div>
<div className="featured_media__buttons">
<div className="featured_media__play-btn">
    <i className="fas fa-play"/>
    </div>
    <div className="featured_media__info-btn">
        MORE INFO
    </div>
    </div>
</div>

    </div>
    </div>
        
    )
}
export default FeaturedMedia