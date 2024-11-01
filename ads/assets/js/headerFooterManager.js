class SpecialAsideMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <aside class="off-canvas-wrapper offcanvas offcanvas-start" tabindex="-1" id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h1 class="d-none" id="offcanvasExampleLabel">Aside Menu</h1>
                <button class="btn-menu-close" data-bs-dismiss="offcanvas" aria-label="Close">menu <i class="fa fa-chevron-left"></i></button>
            </div>
            <div class="offcanvas-body">
                <div id="offcanvasNav" class="offcanvas-menu-nav">
                    <ul>
                        <li class="offcanvas-nav-parent"><a class="offcanvas-nav-item" href="index.html">home</a></li>
                        <li class="offcanvas-nav-parent"><a class="offcanvas-nav-item" href="about-us.html">About Us</a></li>
                        <li class="offcanvas-nav-parent"><a class="offcanvas-nav-item" href="#">ADS Space</a>
                            <ul>
                                <li><a href="ads-exchange.html" class="offcanvas-nav-item">ADS Exchange</a></li>
                                <li><a href="food&beverage.html" class="offcanvas-nav-item">Food & Beverage</a></li>
                                <li><a href="health&supp.html" class="offcanvas-nav-item">Health & Supplement</a></li>
                                <li><a href="tech&home.html" class="offcanvas-nav-item">Tech & Home</a></li>
                                <li><a href="fashion&beauty.html" class="offcanvas-nav-item">Fashion & Beauty</a></li>
                                <li><a href="others.html" class="offcanvas-nav-item">Others</a></li>
                            </ul>
                        </li>
                        <li class="offcanvas-nav-parent"><a class="offcanvas-nav-item" href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </aside>
        `
    }
}

class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header-area sticky-header">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-7 col-sm-6 col-lg-3">
                        <button class="header-menu-btn justify-content-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasMenu"
                                aria-controls="AsideOffcanvasMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        <div class="header-logo">
                            <a href="index.html">
                                <img class="logo-main" src="assets/images/logo-top.png" width="95" height="68" alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="header-navigation">
                            <ul class="main-nav justify-content-center">
                                <li class="has-submenu"><a href="index.html">HOME</a></li>
                                <li class="has-submenu"><a href="#/">CATEGORY</a>
                                    <ul class="submenu-nav">
                                        <li><a href="ads-exchange.html">ADS Exchange</a></li>
                                        <li><a href="food&beverage.html">Food & Beverage</a></li>
                                        <li><a href="health&supp.html">Health & Supplement</a></li>
                                        <li><a href="tech&home.html">Tech & Home</a></li>
                                        <li><a href="fashion&beauty.html">Fashion & Beauty</a></li>
                                        <li><a href="others.html">Others</a></li>
                                    </ul>
                                </li>
                                <li><a href="about-us.html">ABOUT US</a></li>
                                <li><a href="contact.html">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-5 col-sm- col-lg-3">
    <div class="header-action justify-content-end">

        <div class="dropdown">
            <a class="header-action-btn" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="icon">
                    <i class="ri-global-line header-icon"></i>
                </span>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Malaysia</a>
                <a class="dropdown-item" href="#">Singapore</a>
                <a class="dropdown-item" href="#">China</a>
                <a class="dropdown-item" href="#">India</a>
                <a class="dropdown-item" href="#">Indonesia</a>
                <a class="dropdown-item" href="#">Thailand</a>
                <a class="dropdown-item" href="#">Vietnam</a>
                <a class="dropdown-item" href="#">Hong Kong</a>
                <a class="dropdown-item" href="#">Taiwan</a>
            </div>
        </div>

        <a class="header-action-btn user-login-btn" href="https://app.ads13s.com/home/default.aspx">
            <span class="icon">
                <i class="ri-user-line header-icon"></i>
            </span>
        </a>

    </div>
</div>

                </div>
            </div>
        </header>
        `
    }
}

class SpecialCategory extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="section-space pt-0 wow slideInRight" data-wow-duration="1s">
                <div class="container">
                    <div class="catagories-nav-1">
                        <!-- Slider main container -->
                        <div class="swiper brand-logo-slider-container">
                            <div class="swiper-wrapper">
                                <!-- Slides -->
                                <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 4"
                                    style="margin-right: 12px;">
                                    <a href="ads-exchange.html" class="product-category-item">
                                        <img class="icon" src="assets/images/caticon/1-ADS.png" width="80" height="80"
                                            alt="Image-HasTech">
                                        <div class="product-cat-name">ADS Exchange</div>
                                    </a>
                                </div>
                                <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 4"
                                    style="margin-right: 12px;">
                                    <a href="food&beverage.html" class="product-category-item">
                                        <img class="icon" src="assets/images/caticon/2-food.png" width="80" height="80"
                                            alt="Image-HasTech">
                                        <div class="product-cat-name">Food & Beverage</div>
                                    </a>
                                </div>
                                <div class="swiper-slide" role="group" aria-label="3 / 4" style="margin-right: 12px;">
                                    <a href="tech&home.html" class="product-category-item">
                                        <img class="icon" src="assets/images/caticon/1-gadget.png" width="80" height="80"
                                            alt="Image-HasTech">
                                        <div class="product-cat-name">Tech & Home</div>
                                    </a>
                                </div>
                                <div class="swiper-slide swiper-slide-next" role="group" aria-label="2 / 4"
                                    style="margin-right: 12px;">
                                    <a href="health&supp.html" class="product-category-item">
                                        <img class="icon" src="assets/images/caticon/3-health.png" width="80" height="80"
                                            alt="Image-HasTech">
                                        <div class="product-cat-name">Health & Supplement</div>
                                    </a>
                                </div>
            
                                <div class="swiper-slide" role="group" aria-label="4 / 4" style="margin-right: 12px;">
                                    <a href="fashion&beauty.html" class="product-category-item">
                                        <img class="icon" src="assets/images/caticon/4-beauty.png" width="80" height="80"
                                            alt="Image-HasTech">
                                        <div class="product-cat-name">Fashion & Beauty</div>
                                    </a>
                                </div>
                                <div class="swiper-slide " role="group" aria-label="4 / 4" style="margin-right: 12px;">
                                    <a href="others.html" class="product-category-item" data-bg-color="#FFF">
                                        <img class="icon" src="assets/images/caticon/10-others.png" width="80" height="80"
                                            alt="Image-HasTech">
                                        <div class="product-cat-name">Others</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer-area">
        <div class="footer-main">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="widget-item">
                                <div class="widget-about">
                                    <a class="widget-logo wow slideInRight" data-wow-duration="1s" href="https://ads13s.com/">
                                        <img src="assets/images/logo-footer.png" width="110" height="68" alt="Logo">
                                    </a>
                                    <p class="desc">B-7-1, Northpoint, Mid Valley City,
                                    <br>No.1, Medan Syed Putra Utara,
                                    <br>59200 Kuala Lumpur</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-5 mt-md-0 mt-9">
                            <div class="widget-item" >
                                <h4 class="widget-title" style="color:#fff;">Information</h4>
                                <ul class="widget-nav" >
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="https://play.google.com/store/apps/details?id=com.magicnumber.mnchat" target="_blank">MNChat</a></li>
                                    <li><a href="https://ads13s.com/about-us">About Us</a></li>
                                    <li><a href="https://ads13s.com/contact">Contact</a></li>
                                    <li><a href="faq.html">Privacy</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-lg-0 mt-6">
                            <div class="widget-item">
                                <h4 class="widget-title">FOLLOW US</h4>
                                <div class="widget-social">
                                    <a href="https://www.facebook.com/people/ADS-Innovative-Solutions/61562256423591/" target="_blank" rel="noopener"><i class="ri-facebook-fill"></i></a>
                                    <a href="https://www.instagram.com/ads_innovative_solutions/" target="_blank" rel="noopener"><i class="ri-instagram-line"></i></a>
                                    <a href="https://x.com/ADS_I_S" target="_blank" rel="noopener"><i class="ri-twitter-x-fill"></i></a>
                                    <a href="https://www.tiktok.com/@ads.i.s" target="_blank" rel="noopener"><i class="ri-tiktok-fill"></i></a>
                                    <a href="https://www.youtube.com/@ADS13S" target="_blank" rel="noopener"><i class="ri-youtube-line"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container pt-0 pb-0">
                    <div class="footer-bottom-content">
                        <p class="copyright">© 2024 ADS Platform. All rights reserved.©</a></p>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
}
class SpecialAppnav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <appnav class="appnav">
            <a href="https://play.google.com/store/apps/details?id=com.magicnumber.mnchat" target="_blank" class="appnav__link">
                <img src="assets/images/icons/mnchat.png" alt="Home" class="mnchat appnav__icon">
                <span class="appnav__text" data-localize="nav.mnchat">MNCHAT</span>
            </a>
            <a href="index.html" class="appnav__link">
                <i class="ri-cpu-line appnav__icon"></i>
                <span class="appnav__text" data-localize="nav.ai">AI ADS</span>
            </a>
            <a href="https://app.ads13s.com/home/default.aspx" class="appnav__link">
                <i class="ri-user-line appnav__icon"></i>
                <span class="appnav__text" data-localize="nav.me">ME</span>
            </a>
        </appnav>
        `
    }
}

class SpecialBarBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="section-space pb-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 class="top-title">Great Deals</h5>
                <h3 class="title green-text">Latest Promotion</h3>
              </div>
            </div>
            <!-- Carousel-->
            <div id="carouselExampleInterval" class="carousel slide wow fadeInUp" data-wow-delay="0.1s"
              data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                  <img src="assets/images/bar-banner/Business Reminding.gif" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <img src="assets/images/bar-banner/Keep Reminding.gif" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <a href="https://play.google.com/store/apps/details?id=com.magicnumber.mnchat" target="_blank"> <img src="assets/images/bar-banner/ADS Care .gif" class="d-block w-100" alt="..."></a>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <img src="assets/images/bar-banner/No War.gif" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <img src="assets/images/bar-banner/Remind.gif" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
        `
    }
}



customElements.define('special-aside', SpecialAsideMenu)
customElements.define('special-header', SpecialHeader)
customElements.define('special-category', SpecialCategory)
customElements.define('special-footer', SpecialFooter)
customElements.define('special-appnav', SpecialAppnav)
customElements.define('special-barbanner', SpecialBarBanner)
