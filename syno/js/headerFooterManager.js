class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Topbar Start -->
        <div class="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
            <div class="row gx-0 d-none d-lg-flex">
                <div class="col-lg-7 px-5 text-start">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-3">
                        <a class="text-body px-2" href="mailto:info@example.com"><i class="fa fa-envelope-open text-white me-2"></i>info@synogroup.com</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Topbar End -->
        
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <h1 class="text-primary m-0"><img class="me-3" src="img/icons/icon-1.png" alt="Icon">SYNO GROUP</h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about-us.html" class="nav-item nav-link">About Us</a>
                    <a href="portfolio.html" class="nav-item nav-link">Investment Portfolio</a>
                    <a href="business.html" class="nav-item nav-link">Business Proposals</a>
                    <a href="contact-us.html" class="nav-item nav-link">Contact Us</a>
                </div>
            </div>
        </nav>
        <!-- Navbar End -->
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-light mb-4">Address</h3>
                        <p class="mb-2"><i class="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                        <p class="mb-2"><i class="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-square btn-outline-body me-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square btn-outline-body me-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-outline-body me-1" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-square btn-outline-body me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-light mb-4">Services</h3>
                        <a class="btn btn-link text-white" href="portfolio.html">Investment Portfolio</a>
                        <a class="btn btn-link text-white" href="business.html">Business Proposal</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-light mb-4">Quick Links</h3>
                        <a class="btn btn-link text-white" href="about-us.html">About Us</a>
                        <a class="btn btn-link text-white" href="contact-us.html">Contact Us</a>
                        <a class="btn btn-link text-white" href="">Terms & Condition</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-light mb-4">Newsletter</h3>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div class="position-relative mx-auto" style="max-width: 400px;">
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a href="index.html">Copyright &copy;  2024 SYNO Group Capital Private Limited</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)