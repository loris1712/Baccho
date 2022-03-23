<template>
  <header class="header-global">
    <base-nav
      class="navbar-main navDefault"
      type=""
      effect="dark"
      expand
      :class="{
        change_color: scrollPosition > 50,
        change_color2: scrollPosition < 50,
      }"
    >
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/logo_violet.png" alt="logo" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="/">
            <img src="img/brand/logo_violet.png" style="height: 60px;" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover ml-lg-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#ordinaFamiglia">
            Famiglia
          </a>
        </li>
        <li class="nav-item">
          <router-link to="locals" class="nav-link">
            Ristorante
          </router-link>
        </li>
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Altro</span>
          </a>
          <router-link to="about" class="dropdown-item">Chi siamo</router-link>
          <a href="mailto:infobaccho@gmail.com" class="dropdown-item"
            >Contattaci</a
          >
          <a href="mailto:infobaccho@gmail.com" class="dropdown-item"
            >Vuoi diventare un rider Baccho ?</a
          >
          <router-link to="locals" class="dropdown-item"
            >Sei un ristorante ?</router-link
          >
          <router-link to="register" class="dropdown-item"
            >Cerchi altri prodotti ?</router-link
          >
        </base-dropdown>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            style="padding-left: 0.7rem !important; padding-right: 0.7rem !important;"
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/Baccho.It"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Seguici su Facebook"
          >
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            style="padding-left: 0.7rem !important; padding-right: 0.7rem !important;"
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/baccho_it/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Seguici su Instagram"
          >
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <a
            href="tel:3478655415"
            rel="noopener"
            class="btn defaultBtn btn-icon"
          >
            <span class="btn-inner--icon">
              <i class="fa fa-phone mr-2"></i>
            </span>
            <span class="nav-link-inner--text">Chiama ora</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  data() {
    return {
      scrollPosition: null,
    };
  },

  mounted() {
    var currentUrl = window.location.pathname;
    console.log(this.$route.name);
    window.addEventListener("scroll", this.updateScroll);
    if (this.$route.name == "about") {
      document.querySelector(".navbar-main").classList.remove("change_color2");
      document.querySelector(".navbar-main").classList.add("change_color");
    }
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
* {
  font-family: Agrandir, sans-serif;
  -webkit-letter-spacing: -0.3px;
  -moz-letter-spacing: -0.3px;
  -ms-letter-spacing: -0.3px;
  letter-spacing: -0.3px;
}

/*font-family: "Inter-Bold", "Inter", sans-serif !important;*/

@media (max-width: 1023px) {
  .navDefault {
    background: white;
    position: fixed;
    width: 100%;
    z-index: 10;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .navbar-brand img {
    height: 60px;
  }
}

@media (min-width: 1024px) {
  .navDefault {
    background: white;
    position: fixed;
    width: 93%;
    z-index: 10;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 1rem;
    border-radius: 15px;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgb(52 52 52);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    font-weight: 550;
    font-family: Agrandir, sans-serif;
    font-size: 15px;
    letter-spacing: 0.5px;
  }

  .nav-link:hover {
    background: rgb(230 230 230 / 71%);
    color: rgb(31, 31, 31) !important;
    border-radius: 25rem;
  }

  .navbar-brand img {
    height: 80px;
  }

  .navbar-dark .navbar-nav .show > .nav-link {
    color: rgb(52 52 52);
  }

  .dropdown-item.active,
  .dropdown-item:active {
    background-color: #71077b;
  }

  .defaultBtn {
    background-color: #b00a92;
    border-color: #b00a92;
    color: white;
    border-radius: 25rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 16px;
  }

  .navbar-dark .navbar-nav .nav-link.active {
    color: rgb(31, 31, 31);
  }

  .change_color {
    background-color: white;
    margin-left: 3rem;
    margin-right: 3rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 20px 25px -5px,
      rgb(0 0 0 / 4%) 0px 10px 10px -5px;
  }

  .change_color2 {
    background: transparent;
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .nav-link-inner--text {
    text-transform: none;
  }

  .navbar-nav.navbar-nav-hover .dropdown-menu {
    border-radius: 15px !important;
  }

  .dropdown-menu .dropdown-item {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    margin: 0.5rem;
    width: unset;
    border-radius: 15px;
  }
}
</style>
