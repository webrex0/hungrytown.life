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
                                <li class="has-submenu"><a href="products.html">PRODUCTS</a>
                                    <ul class="submenu-nav">
                                        <li class="has-submenu active"><a href="#/">Beauty Care</a>
                                            <ul class="submenu-nav">
                                                <li><a href="#">Bio FC Sanitary</a></li>
                                                <li><a href="#">SC Pantyliner</a></li>
                                                <li><a href="#">Lipstick</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu"><a href="#/">Personal Care</a>
                                            <ul class="submenu-nav">
                                                <li><a href="#">Body Wash</a></li>
                                                <li><a href="#">Body Lotion</a></li>
                                                <li><a href="#">Deodorant</a></li>
                                                <li><a href="#">Hair Shampoo</a></li>
                                                <li><a href="#">Hair Conditioner</a></li>
                                                <li><a href="#">Toothgel</a></li>
                                                <li><a href="#">Facial Cleanser</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu"><a href="#/">Supplement</a>
                                            <ul class="submenu-nav">
                                                <li><a href="#">I-Food</a></li>
                                                <li><a href="#">Pro-Polis</a></li>
                                                <li><a href="#">E-Chlorophyll</a></li>
                                                <li><a href="#">Green Fit</a></li>
                                                <li><a href="#">I-Kids</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu"><a href="#/">Beverage</a>
                                            <ul class="submenu-nav">
                                                <li><a href="#">Teh Tarik</a></li>
                                                <li><a href="#">Chocolate</a></li>
                                                <li><a href="#">Peach Tea</a></li>
                                                <li><a href="#">Tongkat Ali Cappuccino</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-submenu"><a href="#/">Household Care</a>
                                            <ul class="submenu-nav">
                                                <li><a href="#">Dish Wash</a></li>
                                                <li><a href="#">Cleaner</a></li>
                                                <li><a href="#">Laundry</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="about-us.html">ABOUT US</a></li>
                                <li><a href="contact.html">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-5 col-sm- col-lg-3">
                        <div class="header-action justify-content-end">
                            <a class="header-action-btn shop-icon" href="products.html">
                                <span class="icon">
                                <i class="ri-shopping-bag-4-line header-icon"></i>
                                </span>
                            </a>
                            <a class="header-action-btn live-icon" href="member-page.html">
                                <span class="icon">
                                <i class="ri-live-line header-icon"></i>
                                    <span class='badge badge-warning' id='lblLive'> LIVE </span>
                                </span>
                            </a>
                    
                            <button class="header-action-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasCart"
                                aria-controls="AsideOffcanvasCart">
                                <span class="icon">
                                <i class="ri-shopping-cart-2-fill header-icon"></i>
                                    <span class='badge badge-warning' id='lblCartCount'> 5 </span>
                                </span>
                            </button>
                    
                            <a class="header-action-btn" href="login.html">
                                <span class="icon">
                                <i class="ri-user-fill header-icon"></i>
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
                                    <a class="widget-logo" href="index.html">
                                        <img src="assets/images/logo-footer.png" width="110" height="68" alt="Logo">
                                    </a>
                                    <p class="desc">Wisma Avail,
                                        <br>No. 23, Jalan Kenari 17E,
                                        Bandar Puchong Jaya,
                                        47100 Puchong
                                        Selangor Darul Ehsan, Malaysia.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-5 mt-md-0 mt-9">
                            <div class="widget-item">
                                <h4 class="widget-title">Information</h4>
                                <ul class="widget-nav">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="products.html">Products</a></li>
                                    <li><a href="about-us.html">About us</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="faq.html">Privacy</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-lg-0 mt-6">
                            <div class="widget-item">
                                <h4 class="widget-title">FOLLOW US</h4>
                                <div class="widget-social">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i class="fa fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/availbeautyofficial/" target="_blank" rel="noopener"><i class="fa fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/@availsmartsystem" target="_blank" rel="noopener"><i class="fa fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container pt-0 pb-0">
                    <div class="footer-bottom-content">
                        <p class="copyright">© 2024 AvailBeauty.com. All rights reserved.©</a></p>
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
            <a href="index.html" class="appnav__link ">
                <i class="ri-home-smile-fill appnav__icon"></i>
                <span class="nav__text" data-localize="menu.home">HOME</span>
            </a>
            <a href="products.html" class="appnav__link">
                <i class="ri-shopping-bag-4-fill appnav__icon"></i>
                <span class="appnav__text" data-localize="menu.products">PRODUCTS</span>
            </a>
            <a href="#" class="appnav__link" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                <span class="got-mail">●</span>
                <i class="ri-mail-open-fill appnav__icon"></i>
                <span class="appnav__text" data-localize="menu.msg">NOTIFICATION</span>
            </a>
            <a href="member-page.html" class="appnav__link">
                <i class="ri-live-fill appnav__icon"></i>
                <span class="appnav__text" data-localize="menu.live">LIVE</span>
            </a>
            <a href="#" class="appnav__link ">
                <i class="ri-chat-smile-2-fill appnav__icon"></i>
                <span class="appnav__text" data-localize="menu.careline">CARELINE</span>
            </a>
        </appnav>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
customElements.define('special-appnav', SpecialAppnav)