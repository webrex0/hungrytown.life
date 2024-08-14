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
            <a href="zh-home.html" class="navbar-brand ms-4 ms-lg-0">
                <h1 class="text-primary m-0"><img class="me-3" src="img/icons/icon-1.png" alt="Icon">信诺集团</h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="zh-home.html" class="nav-item nav-link">首页</a>
                    <a href="zh-about.html" class="nav-item nav-link">关于我们</a>
                    <a href="zh-portfolio.html" class="nav-item nav-link">投资组合</a>
                    <a href="zh-business.html" class="nav-item nav-link">商业提案</a>
                    <a href="zh-contact.html" class="nav-item nav-link">联系我们</a>
                </div>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle lang-select" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        中文
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="zh-home.html">中文</a>
                        <a class="dropdown-item" href="index.html">English</a>
                        
                    </div>
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
                        <h3 class="text-light mb-4">地址</h3>
                        <p class="mb-2"><i class="fa fa-map-marker-alt text-primary me-3"></i>IOI Rio, Lebuh Puteri, Bandar Puteri Puchong, 47100 Puchong, Selangor</p>
                        <p class="mb-2"><i class="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope text-primary me-3"></i>info@synogroup.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-square btn-outline-body me-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square btn-outline-body me-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-outline-body me-1" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-square btn-outline-body me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-light mb-4">服务</h3>
                        <a class="btn btn-link text-white" href="zh-portfolio.html">投资组合</a>
                        <a class="btn btn-link text-white" href="zh-business.html">商业提案</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-light mb-4">快捷链接</h3>
                        <a class="btn btn-link text-white" href="zh-about.html">关于我们</a>
                        <a class="btn btn-link text-white" href="zh-contact.html">联系我们</a>
                        <a class="btn btn-link text-white" href="">条款与条件</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-light mb-4">通讯</h3>
                        <p>获取信诺集团最新的财务洞察和更新</p>
                        <div class="position-relative mx-auto" style="max-width: 400px;">
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="您的电子邮件">
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">注册</button>
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