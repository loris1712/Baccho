<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="font-weight-light mb-2" style="color: #b00a92;">Grazie per supportare Baccho!</h3>
                    <h4 class="mb-0 font-weight-light">Iscriviti alla newsletter.</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <base-input placeholder="Inserisci la tua email"
                                        addon-left-icon="ni ni-email-83"
                                        name="email"
                                        v-model="email">
                    </base-input>
                    <base-button type="default defaultBtn" round block size="lg" @click="addNewsletter">
                                Iscriviti
                    </base-button>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between footer">
                <div class="col-md-6 col-sm-12 copyright">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://www.creative-tim.com" target="_blank" rel="noopener">Baccho</a>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Home</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="about" class="nav-link" target="_blank" rel="noopener">Chi siamo
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a href="http://blog.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Ordina</a>
                        </li>
                        <li class="nav-item">
                            <a href="mailto:infobaccho@gmail.com"
                               class="nav-link" rel="noopener">Contattaci</a>
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
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear(),
      email: '',
    }
  },

   methods: {
        addNewsletter() {
            const db = firebase.initializeApp({ projectId: 'baccho-86489' }).firestore();
            const order = {
                email: this.email,
            };

            db.collection('newsletter').add(order).then(() => {
                        console.log("Done");
            });
        },

    }
};
</script>

<style scoped>
@media (max-width: 1023px) {
    .copyright{
        text-align: center;
    }

    .footer .justify-content-end {
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
    }
}


*{
    font-family: Agrandir,sans-serif;
    -webkit-letter-spacing: -0.3px;
    -moz-letter-spacing: -0.3px;
    -ms-letter-spacing: -0.3px;
    letter-spacing: -0.3px;
}

.defaultBtn{
    background-color: #b00a92;
    border-color: #b00a92;
}

.defaultBtn:hover{
    background-color: #71077b;
    border-color: #71077b;
}

a{
    color: #b00a92;
}

a:hover{
    color: #71077b;
}

</style>
