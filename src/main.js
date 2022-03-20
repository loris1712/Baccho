/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDWk3AeeJjQO-K4sRWl9uSJssLx0nvn6BM",
  authDomain: "baccho-86489.firebaseapp.com",
  projectId: "baccho-86489",
  storageBucket: "baccho-86489.appspot.com",
  messagingSenderId: "32913226034",
  appId: "1:32913226034:web:d49e408b01c0ddc6c23f2b",
  measurementId: "G-CFMY9BSB1L"
};

export const db = firebase.initializeApp({ projectId: 'baccho-86489' }).firestore();
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }


Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
