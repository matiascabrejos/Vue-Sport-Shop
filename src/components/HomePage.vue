<template>
  <div class="bd-example">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/26151909/Argentina-vs-Nigeria-Mundial-Rusia-2018-74.jpg" class="d-block w-100 images-background"            alt="...">
          <div class="carousel-caption d-none d-md-block">
              <router-link to="/argcamisetas">
              <h5 class="black-text">ARGENTINA</h5>
              </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://img.bundesliga.com/tachyon/sites/2/2020/07/bayern-team-celebration-b04-fcb-pokal.jpg?crop=0px,0px,1920px,1080px" class="d-block w-100 images-background" alt="...">
          <div class="carousel-caption d-none d-md-block">
              <router-link to="/baycamisetas">
              <h5 class="black-text">BAYERN MUNICH</h5>
              </router-link>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<style scoped>

.black-text {
  display: inline-block;
  background: black;
  color: #fff;
  font-size: 2rem;
  padding: 16px;
  margin-bottom: 120px;
}

.images-background {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  height: 100vh;
}

.carousel-item {
  width: 100%
}

.carousel-control-next,
.carousel-control-prev

/*, .carousel-indicators */
  {
  filter: invert(100%);
}

</style>