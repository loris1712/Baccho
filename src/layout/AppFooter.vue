<template>
  <footer class="footer has-cards">
    <div class="container containerFooter">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <h3 class="font-weight-light mb-2" style="color: #b00a92;">
            Grazie per supportare Baccho!
          </h3>
          <h4 class="mb-0" style="color: #666666;">
            Iscriviti alla newsletter.
          </h4>
        </div>
        <div class="col-lg-6 text-lg-center btn-wrapper">
          <base-input
            placeholder="Inserisci la tua email"
            name="email"
            v-model="email"
          >
          </base-input>
          <base-button
            type="default defaultBtn"
            round
            block
            size="lg"
            @click="addNewsletter"
          >
            Iscriviti
          </base-button>
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between footer">
        <div class="col-md-6 col-sm-12 copyright">
          <div class="copyright">
            &copy; {{ year }}
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              rel="noopener"
              >Baccho</a
            >
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="/" target="_blank" rel="noopener"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <router-link
                to="about"
                class="nav-link"
                target="_blank"
                rel="noopener"
                >Chi siamo
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="locals" class="nav-link" target="_blank">
                Ristorante
              </router-link>
            </li>
            <li class="nav-item">
              <a
                href="mailto:infobaccho@gmail.com"
                class="nav-link"
                rel="noopener"
                >Contattaci</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firestorePlugin } from "vuefire";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
      email: "",
    };
  },

  methods: {
    addNewsletter() {
      const db = firebase
        .initializeApp({ projectId: "baccho-86489" })
        .firestore();
      const order = {
        email: this.email,
      };

      db.collection("newsletter")
        .add(order)
        .then(() => {});
    },
  },
};
</script>

<style scoped>
@media (max-width: 1023px) {
  .copyright {
    text-align: center;
  }

  .footer .justify-content-end {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }

  .containerFooter {
    text-align: center;
  }
}

* {
  font-family: Agrandir, sans-serif;
  -webkit-letter-spacing: -0.3px;
  -moz-letter-spacing: -0.3px;
  -ms-letter-spacing: -0.3px;
  letter-spacing: -0.3px;
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
  text-transform: none;
  font-size: 16px;
}

.defaultBtn:hover {
  background: #b00a92;
  border-color: #b00a92;
}

a {
  color: #b00a92;
}

a:hover {
  color: #71077b;
}

.footer .nav .nav-item .nav-link {
  color: #2b2b2b !important;
}

.copyright {
  color: #2b2b2b !important;
}
</style>
