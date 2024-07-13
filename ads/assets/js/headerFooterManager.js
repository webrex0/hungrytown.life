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
                                <li class="has-submenu"><a href="products.html">CATERGORY</a>
                                    <ul class="submenu-nav">
                                        <li><a href="#/">Food</a></li>
                                        <li><a href="#/">Beverage</a></li>
                                        <li><a href="#/">Gadget</a></li>
                                        <li><a href="#/">Beauty</a></li>
                                        <li><a href="#/">Household Care</a></li>
                                    </ul>
                                </li>
                                <li><a href="about-us.html">ABOUT US</a></li>
                                <li><a href="contact.html">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-5 col-sm- col-lg-3">
                        <div class="header-action justify-content-end">
                    
                            <a class="header-action-btn" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal" href="#">
                                <span class="icon">
                                <i class="ri-phone-fill header-icon"></i>
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
                                    <p class="desc">No. 1, Jalan AI Road,
                                        Bandar Teknology AI,
                                        47100 Puchong, Selangor Darul Ehsan, Malaysia.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-5 mt-md-0 mt-9">
                            <div class="widget-item" >
                                <h4 class="widget-title" style="color:#fff;">Information</h4>
                                <ul class="widget-nav" >
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
                                    <a href="#" target="_blank" rel="noopener"><i class="fa fa-instagram"></i></a>
                                    <a href="#" target="_blank" rel="noopener"><i class="fa fa-youtube"></i></a>
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
            <a href="#" class="appnav__link">
                <img src="assets/images/icons/mnchat.png" alt="Home" class="mnchat appnav__icon">
                <span class="appnav__text" data-localize="nav.mnchat">MNCHAT</span>
            </a>
            <a href="#" class="appnav__link">
                <i class="ri-cpu-line appnav__icon"></i>
                <span class="appnav__text" data-localize="nav.ai">AI ADS</span>
            </a>
            <a href="login.html" class="appnav__link">
                <span class="got-mail">●</span>
                <i class="ri-user-line appnav__icon"></i>
                <span class="appnav__text" data-localize="nav.me">ME</span>
            </a>
        </appnav>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
customElements.define('special-appnav', SpecialAppnav)