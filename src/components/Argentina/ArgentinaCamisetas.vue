<template>
  <div>
    <navigation-arg></navigation-arg>
    <img src="https://i.pinimg.com/originals/a7/0a/0e/a70a0e2431a1f94288c686e3a41c0db7.png" alt="" class="imgIcon">
    <div class="container-fluid mt-6">
      <div class="row">
        <h1>CAMISETA SELECCIÓN ARGENTINA</h1>
        <div class="price"><span class="mr-2"><i class="fa fa-rupee text-success"></i>&nbsp;$4800</span><span
              class="mr-2 cut">$6000</span><span class="text-success">20% OFF</span></div>
        <div class="col-md-6">
          <div class="carousel slide" data-ride="carousel" id="carousel-1">
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active"><img class="img-thumbnail w-100 d-block"
                  src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e5b2a8726a8d4e07bd6aa9d8010d21ee_9366/Camiseta_Titular_Seleccion_Argentina_Blanco_DN6716_01_laydown.jpg" alt="Slide Image"
                  loading="lazy"></div>
              <div class="carousel-item"><img class="img-thumbnail w-100 d-block"
                  src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/115d4efc03ad4e7a8443a9d8010d2e9b_9366/Camiseta_Titular_Seleccion_Argentina_Blanco_DN6716_02_laydown_hover.jpg"
                  alt="Slide Image"></div>
            </div>
            <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span
                  class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a
                class="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span
                  class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
            <ol class="carousel-indicators">
              <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-1" data-slide-to="1"></li>
              <li data-target="#carousel-1" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
            <div class="price">
          <h4>Talle</h4>
          <div class="d-flex align-items-center mt-2 center-button"> <label class="radio"> <input type="radio" name="ram"
                 checked> <span>S</span> </label> <label class="radio"> <input type="radio" name="ram"
                > <span>M</span> </label> <label class="radio"> <input type="radio" name="ram"
                > <span>L</span> </label> <label class="radio"> <input type="radio" name="ram"
                > <span>XL</span> </label> </div>
          <div class="mt-3"><button class="btn" type="button">Comprar</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.imgIcon {
  width: 120px;
  height: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.col-md-6 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
}

.carousel-control-next,
.carousel-control-prev

  {
  filter: invert(100%);
}

h1 {
    text-align: center;
}

.center-button {    
    justify-content: center;
}

.price {
    text-align: center;
}

.price span {
  font-size: 18px
}

.cut {
  text-decoration: line-through;
  color: red
}

.icons i {
  font-size: 17px;
  color: green;
  margin-right: 2px
}

.offers i {
  color: green
}


label.radio {
  cursor: pointer
}

label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none
}

label.radio span {
  padding: 2px 11px;
  margin-right: 3px;
  border: 1px solid #424242;
  display: inline-block;
  color: #424242;
  border-radius: 3px;
  text-transform: uppercase
}

label.radio input:checked+span {
  border-color: #424242;
  background-color: #424242;
  color: #fff
}

h4 {
  padding-bottom: 10px;
  padding-top: 10px;
}

h3 {
  padding-top: 10px;
}

.btn {
  background: #424242;
  color: #fff;
  margin-bottom: 20px;
}

.btn:hover {
  background: #212121;
  color: #fff;
}

</style>
