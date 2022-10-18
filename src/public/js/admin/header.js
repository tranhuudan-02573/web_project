const header = document.querySelector('#header');
header.innerHTML = `<!--Main Navigation-->
<header>
  <!-- Sidenav -->
  <nav id="main-sidenav" class="sidenav shadow-1" data-mdb-hidden="false" data-mdb-accordion="true">
    <a class="ripple d-flex justify-content-center py-4" href="#!" data-mdb-ripple-color="primary">
      <img id="MDB-logo" src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.webp"
        alt="MDB Logo" draggable="false" />
    </a>

    <ul class="sidenav-menu px-2">
      <li class="sidenav-item">
        <a class="sidenav-link" href="">
          <i class="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span></a>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link" href="">
          <i class="fas fa-chart-pie fa-fw me-3"></i><span>Sales</span></a>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link" href="">
          <i class="fas fa-chart-line fa-fw me-3"></i><span>Subscriptions</span></a>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fas fa-cogs fa-fw me-3"></i><span>Settings</span></a>
        <ul class="sidenav-collapse">
          <li class="sidenav-item">
            <a class="sidenav-link">Profile</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Account</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-item">
        <a class="sidenav-link"><i class="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
        <ul class="sidenav-collapse">
          <li class="sidenav-item">
            <a class="sidenav-link">Request password</a>
          </li>
          <li class="sidenav-item">
            <a class="sidenav-link">Reset password</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  <!-- Sidenav -->

  <!-- Navbar -->
  <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-1">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggler -->
      <button data-mdb-toggle="sidenav" data-mdb-target="#main-sidenav"
        class="btn shadow-0 p-0 me-3 d-block d-xxl-none" aria-controls="#main-sidenav" aria-haspopup="true">
        <i class="fas fa-bars fa-lg"></i>
      </button>

      <!-- Search form -->
      <form class="d-none d-md-flex input-group w-auto my-auto">
        <input id="search-focus" autocomplete="off" type="search" class="form-control rounded"
          placeholder='Search (ctrl + alt to focus)' style="min-width: 225px" />
        <span class="input-group-text border-0"><i class="fas fa-search text-secondary"></i></span>
      </form>

      <!-- Right links -->
      <ul class="navbar-nav ms-auto d-flex flex-row">
        <!-- Notification dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
            role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-bell link-secondary"></i>
            <span class="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Some news</a></li>
            <li><a class="dropdown-item" href="#">Another news</a></li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>

        <!-- Icon dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button"
            data-mdb-toggle="dropdown" aria-expanded="false">
            <i class="flag flag-united-kingdom m-0"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#"><i class="flag flag-united-kingdom"></i>English
                <i class="fa fa-check text-success ms-2"></i></a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag flag-poland"></i>Polski</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag flag-china"></i>中文</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag flag-japan"></i>日本語</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag flag-germany"></i>Deutsch</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag flag-france"></i>Français</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag flag-spain"></i>Español</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag flag-russia"></i>Русский</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><i class="flag flag-portugal"></i>Português</a>
            </li>
          </ul>
        </li>

        <!-- Avatar -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
            id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-circle" height="22" alt="Avatar"
              loading="lazy" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item " href="#">My profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->

  <!-- Heading -->
  <section class="mb-5 mb-lg-8 text-center text-md-start">
    <!-- Background image -->
    <div class="p-5 bg-image" style="
              background-image: url('https://mdbootstrap.com/img/new/textures/full/66.jpg');
              height: 250px;
              "></div>
    <!-- Background image -->

    <div class="container">
      <div class="card shadow-0" style="
    margin-top: -100px;
    ">
        <div class="card-body py-5 px-5">
          <div class="row gx-lg-4 align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
              <h1 class="">eCommerce Dashboard</h1>
              <!-- Breadcrumb -->
              <nav class="d-flex justify-content-center justify-content-lg-start">
                <h6 class="mb-0">
                  <a href="" class="text-muted">Home</a>
                  <span>/</span>
                  <a href="" class="text-muted">Analytics</a>
                  <span>/</span>
                  <a href="" class="text-muted"><u>eCommerce</u></a>
                </h6>
              </nav>
              <!-- Breadcrumb -->
            </div>

            <div class="col-lg-6 text-center text-lg-end">
              <button type="button" class="btn btn-link me-1 mb-4 px-2 px-md-3" data-ripple-color="primary">
                Customize<i class="fas fa-cogs ms-2"></i>
              </button>
              <button type="button" class="btn btn-link mb-4 px-2 px-md-3" data-ripple-color="primary">
                Export<i class="fas fa-download ms-2"></i>
              </button>

              <div class="row justify-content-center justify-content-lg-end">

                <div class="col-md-4 mb-4 mb-md-0">
                  <select class="select">
                    <option value="1" selected>All products</option>
                    <option value="2">Product 1</option>
                    <option value="3">Product 2</option>
                    <option value="4">Product 3</option>
                    <option value="5">Product 4</option>
                  </select>
                  <label class="form-label select-label">Date</label>
                </div>

                <div class="col-md-4 mb-4 mb-md-0">
                  <select class="select">
                    <option value="1">Today</option>
                    <option value="2">Yesterday</option>
                    <option value="3" selected>Last 7 days</option>
                    <option value="4">Last 28 days</option>
                    <option value="5">Last 90 days</option>
                  </select>
                  <label class="form-label select-label">Date</label>
                </div>

                <div class="col-md-4">
                  <div class="form-outline datepicker" data-mdb-inline="true">
                    <input type="text" class="form-control" id="exampleDatepicker1" data-toggle="datepicker"
                      value="Custom date" />
                    <label for="exampleDatepicker1" class="form-label">Date</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- Heading -->

</header>
<!--Main Navigation-->

`;
