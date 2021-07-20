<template>
  <div>
    <navigation-bay></navigation-bay>
    <img src="https://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F132.png" alt="" class="imgIcon">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="product-grid4">
            <div class="product-image4">
              <a href="#">
                <img class="pic-1" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e0708e8a078b46fb8ee1ab1f00d7823c_9366/Shorts_Local_FC_Bayern_Rojo_FQ2903_01_laydown.jpg"/>
                <img class="pic-2" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/3c0f2f3b40194ccf942aab1f00d7904d_9366/Shorts_Local_FC_Bayern_Rojo_FQ2903_02_laydown.jpg">
              </a>
              <span class="product-new-label">New</span>
              <span class="product-discount-label">-20%</span>
            </div>
            <div class="product-content">
              <h3 class="title"><a href="#">SHORT LOCAL FC BAYERN</a></h3>
              <div class="price">
                {{ discountPrice }}
                <span>{{ price }}</span>
              </div>
              <a class="add-to-cart" href="">ADD TO CART</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="product-grid4">
            <div class="product-image4">
              <a href="#">
                <img class="pic-1" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d2f8c742d85348a5a9a4abdc008503c1_9366/Buzo_de_Viaje_Cuello_Redondo_FC_Bayern_Gris_FR3989_01_laydown.jpg">
                <img class="pic-2" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/aa789addf20447fe8325abdc00851150_9366/Buzo_de_Viaje_Cuello_Redondo_FC_Bayern_Gris_FR3989_02_laydown.jpg">
              </a>
              <span class="product-new-label">New</span>
              <span class="product-discount-label">-20%</span>
            </div>
            <div class="product-content">
              <h3 class="title"><a href="#">BUZO FC BAYERN</a></h3>
              <div class="price">
                {{ discountPrice }}
                <span>{{ price }}</span>
              </div>
              <a class="add-to-cart" href="">ADD TO CART</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="product-grid4">
            <div class="product-image4">
              <a href="#">
                <img class="pic-1" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/028d446088624851a8deab1e012a6627_9366/Campera_FC_Bayern_Anthem_Rojo_FI6234_01_laydown.jpg">
                <img class="pic-2" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d167bcd0defc4f029ae5ab1e012a7673_9366/Campera_FC_Bayern_Anthem_Rojo_FI6234_02_laydown.jpg">                
              </a>
              <span class="product-new-label">New</span>
              <span class="product-discount-label">-20%</span>
            </div>
            <div class="product-content">
              <h3 class="title"><a href="#">CAMPERA FC BAYERN</a></h3>
              <div class="price">
                {{ discountPrice }}
                <span>{{ price }}</span>
              </div>
              <a class="add-to-cart" href="">ADD TO CART</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            price: '$16.00',
            discountPrice: '$14.40'

        }
    }
    
}
</script>

<style scoped>

.container {
  padding-bottom: 30px;
}

/* Second grid */

.product-grid4,
.product-grid4 .product-image4 {
  position: relative
}

.product-grid4 {
  font-family: Poppins, sans-serif;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
  transition: all .3s ease 0s
}

.product-grid4:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, .2)
}

.product-grid4 .product-image4 a {
  display: block
}

.product-grid4 .product-image4 img {
  width: 100%;
  height: auto
}

.product-grid4 .pic-1 {
  opacity: 1;
  transition: all .5s ease-out 0s
}

.product-grid4:hover .pic-1 {
  opacity: 0
}

.product-grid4 .pic-2 {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all .5s ease-out 0s
}

.product-grid4:hover .pic-2 {
  opacity: 1
}

.product-grid4 .product-discount-label,
.product-grid4 .product-new-label {
  color: #fff;
  background-color: #ef5777;
  font-size: 12px;
  text-transform: uppercase;
  padding: 2px 7px;
  display: block;
  position: absolute;
  top: 10px;
  left: 0
}

.product-grid4 .product-discount-label {
  background-color: #333;
  left: auto;
  right: 0
}

.product-grid4:hover .product-new-label {
  opacity: 0
}

.product-grid4 .product-content {
  padding: 25px
}

.product-grid4 .title {
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
  margin: 0 0 7px;
  transition: all .3s ease 0s
}

.product-grid4 .title a {
  color: #222
}

.product-grid4 .price {
  color: #424242;
  font-size: 17px;
  font-weight: 700;
  margin: 0 2px 15px 0;
  display: block
}

.product-grid4 .price span {
  color: #909090;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
  text-decoration: line-through;
  text-align: left;
  vertical-align: middle;
  display: inline-block;
  color: red;
}

.product-grid4 .add-to-cart {
  border: 1px solid #e5e5e5;
  display: inline-block;
  padding: 10px 20px;
  color: #888;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  transition: all .3s
}

.product-grid4:hover .add-to-cart {
  border: 1px solid transparent;
  background: #424242;
  color: #fff
}

.product-grid4 .add-to-cart:hover {
  background-color: #212121;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5)
}

.imgIcon {
  width: 120px;
  height: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width:990px) {
  .product-grid4 {
    margin-bottom: 30px
  }
}

</style>


