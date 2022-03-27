<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section
        class="section-shaped my-0 firstSezWeb"
        style="background: #7474BF;
    background: -webkit-linear-gradient(to bottom, #348AC7, #7474BF);
    background: linear-gradient(to bottom, rgb(176 10 146 / 15%),  #ffffff);"
      >
        <div
          class="shape shape-style-1 shape-default shape-skew"
          style=" background-position: center; background: white;"
        >
          <span
            style="background: transparent; width: 108%; height: 100%; border-radius: 0;"
          ></span>
        </div>
        <div class="container shape-container d-flex containerB">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="">
                  Ecco il tuo <span style="color: #b00a92;">ordine</span>
                </h1>
                <div class="container ct-example-row">
                  <div class="row">
                    <div class="col-3">
                      <p style="font-weight: 700; font-size: 18px;">Nome</p>
                      <p style="font-weight: 700; font-size: 18px;">
                        Indirizzo
                      </p>
                      <p style="font-weight: 700; font-size: 18px;">
                        Cellulare
                      </p>

                      <p style="font-weight: 700; font-size: 18px;">Totale</p>
                      <p style="font-weight: 700; font-size: 18px;">Prodotti</p>
                    </div>
                    <div class="col-sm">
                      <p>{{ $route.query.elem1 }}</p>
                      <p>{{ $route.query.elem2 }}</p>

                      <p>{{ $route.query.elem5 }}</p>
                      <p>{{ $route.query.elem3 }}</p>
                      <div class="">
                        <div v-for="product in products" v-bind:key="product">
                          <p class="productname">{{ product.name }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="#ordina"
                    class="mb-3 mb-sm-0 defaultBtn"
                    icon="fa fa-plus"
                  >
                    Ordina altro
                  </base-button>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="image"></div>
                <div class="image2"></div>
                <div class="image3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="section-shaped my-0 firstSezApp"
        style="background: #7474BF;
    background: -webkit-linear-gradient(to bottom, #348AC7, #7474BF);
    background: linear-gradient(to bottom, rgb(176 10 146 / 15%),  #ffffff);"
      >
        <div
          class="shape shape-style-1 shape-default shape-skew"
          style=" background-position: center; background: white;"
        >
          <span
            style="background: transparent; width: 108%; height: 100%; border-radius: 0;"
          ></span>
        </div>
        <div class="container shape-container d-flex containerB">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <div class="image"></div>
              </div>
              <div class="col-lg-6">
                <h1 class="">
                  Ecco il tuo <span style="color: #b00a92;">ordine</span>
                </h1>
                <div class="container ct-example-row">
                  <div class="row">
                    <div class="col-3">
                      <p style="font-weight: 700; font-size: 18px;">Nome</p>
                      <p style="font-weight: 700; font-size: 18px;">
                        Indirizzo
                      </p>
                      <p style="font-weight: 700; font-size: 18px;">
                        Cellulare
                      </p>

                      <p style="font-weight: 700; font-size: 18px;">Totale</p>
                      <p style="font-weight: 700; font-size: 18px;">Prodotti</p>
                    </div>
                    <div class="col-9 data">
                      <p>{{ $route.query.elem1 }}</p>
                      <p>{{ $route.query.elem2 }}</p>

                      <p>{{ $route.query.elem5 }}</p>
                      <p>{{ $route.query.elem3 }}</p>

                      <div class="">
                        <div v-for="product in products" v-bind:key="product">
                          <p class="productname">{{ product.name }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="#ordina"
                    class="mb-3 mb-sm-0 defaultBtn"
                    icon="fa fa-plus"
                  >
                    Ordina altro
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->

      <section class="section section-lg seventhSezWeb">
        <div class="container">
          <div class="row row-grid justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="display-3">
                Il tuo ordine
                <span style="color: #b00a92; font-weight: 700;"
                  >fresco e genuino</span
                >
                arriverà in poco tempo
              </h2>
              <p class="lead">
                Ti ringraziamo per esserti affidato a noi.
              </p>
              <p class="lead" style="font-weight: 700;">
                Team <span style="color: #b00a92;">Baccho</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firestorePlugin } from "vuefire";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
export default {
  name: "ordercomplete",
  components: { Multiselect },
  data() {
    return {
      products: [],
      value: [],
      options: [
        { name: "1 pezzo pane di gragnano", price: "€1.80" },
        { name: "2 pezzi pane di gragnano", price: "€3.60" },
        { name: "3 pezzi pane di gragnano", price: "€5.40" },
        { name: "4 pezzi pane di gragnano", price: "€7.20" },
        { name: "5 pezzi pane di gragnano", price: "€9.00" },
        { name: "1 pezzo panuozzo di gragnano", price: "€1.80" },
        { name: "2 pezzi panuozzo di gragnano", price: "€3.60" },
        { name: "3 pezzi panuozzo di gragnano", price: "€5.40" },
        { name: "4 pezzi panuozzo di gragnano", price: "€7.20" },
        { name: "5 pezzi panuozzo di gragnano", price: "€9.00" },
        { name: "1 pezzo frusta di gragnano", price: "€3.00" },
        { name: "2 pezzi frusta di gragnano", price: "€6.00" },
        { name: "3 pezzi frusta di gragnano", price: "€9.00" },
        { name: "4 pezzi frusta di gragnano", price: "€12.00" },
        { name: "5 pezzi frusta di gragnano", price: "€15.00" },
        { name: "1 kg Mele miste", price: "€1.50" },
        { name: "2 kg Mele miste", price: "€3.00" },
        { name: "3 kg Mele miste", price: "€4.50" },
        { name: "4 kg Mele miste", price: "€6.00" },
        { name: "5 kg Mele miste", price: "€7.50" },
        { name: "1 kg Arance", price: "€1.70" },
        { name: "2 kg Arance", price: "€3.40" },
        { name: "3 kg Arance", price: "€5.10" },
        { name: "4 kg Arance", price: "€6.80" },
        { name: "5 kg Arance", price: "€8.50" },
        { name: "1 kg Arance per premuta", price: "€1.50" },
        { name: "2 kg Arance per premuta", price: "€3.00" },
        { name: "3 kg Arance per premuta", price: "€4.50" },
        { name: "4 kg Arance per premuta", price: "€6.00" },
        { name: "5 kg Arance per premuta", price: "€7.50" },
        { name: "1 pezzo Carote fascio", price: "€1.20" },
        { name: "2 pezzi Carote fascio", price: "€2.40" },
        { name: "3 pezzi Carote fascio", price: "€3.60" },
        { name: "4 pezzi Carote fascio", price: "€4.80" },
        { name: "5 pezzi Carote fascio", price: "€6.00" },
        { name: "1 pezzo Cipolline fresche", price: "€0.90" },
        { name: "2 pezzi Cipolline fresche", price: "€1.80" },
        { name: "3 pezzi Cipolline fresche", price: "€2.70" },
        { name: "4 pezzi Cipolline fresche", price: "€3.60" },
        { name: "5 pezzi Cipolline fresche", price: "€4.50" },
        { name: "1 pezzo Finocchi", price: "€1.20" },
        { name: "2 pezzi Finocchi", price: "€2.40" },
        { name: "3 pezzi Finocchi", price: "€3.60" },
        { name: "4 pezzi Finocchi", price: "€4.80" },
        { name: "5 pezzi Finocchi", price: "€6.00" },
        { name: "1 pezzo Verza", price: "€1.20" },
        { name: "2 pezzi Verza", price: "€2.40" },
        { name: "3 pezzi Verza", price: "€3.60" },
        { name: "4 pezzi Verza", price: "€4.80" },
        { name: "5 pezzi Verza", price: "€6.00" },
        { name: "1 pezzo Cavolfiori", price: "€1.20" },
        { name: "2 pezzi Cavolfiori", price: "€2.40" },
        { name: "3 pezzi Cavolfiori", price: "€3.60" },
        { name: "4 pezzi Cavolfiori", price: "€4.80" },
        { name: "5 pezzi Cavolfiori", price: "€6.00" },
        { name: "1 kg Bietola", price: "€1.50" },
        { name: "2 kg Bietola", price: "€3.00" },
        { name: "3 kg Bietola", price: "€4.50" },
        { name: "4 kg Bietola", price: "€6.00" },
        { name: "5 kg Bietola", price: "€7.50" },
        { name: "1 kg Bietoline", price: "€1.50" },
        { name: "2 kg Bietoline", price: "€3.00" },
        { name: "3 kg Bietoline", price: "€4.50" },
        { name: "4 kg Bietoline", price: "€6.00" },
        { name: "5 kg Bietoline", price: "€7.50" },
        { name: "1 kg Spinaci", price: "€1.50" },
        { name: "2 kg Spinaci", price: "€3.00" },
        { name: "3 kg Spinaci", price: "€4.50" },
        { name: "4 kg Spinaci", price: "€6.00" },
        { name: "5 kg Spinaci", price: "€7.50" },
        { name: "1 kg Scarole lisce e ricce", price: "€1.20" },
        { name: "2 kg Scarole lisce e ricce", price: "€2.40" },
        { name: "3 kg Scarole lisce e ricce", price: "€3.60" },
        { name: "4 kg Scarole lisce e ricce", price: "€4.80" },
        { name: "5 kg Scarole lisce e ricce", price: "€6.00" },
        { name: "1 pezzo Insalate miste", price: "€0.80" },
        { name: "2 pezzi Insalate miste", price: "€1.60" },
        { name: "3 pezzi Insalate miste", price: "€2.40" },
        { name: "4 pezzi Insalate miste", price: "€3.20" },
        { name: "5 pezzi Insalate miste", price: "€4.00" },
        { name: "1 kg Aglio grande", price: "€4.00" },
        { name: "2 kg Aglio grande", price: "€8.00" },
        { name: "3 kg Aglio grande", price: "€12.00" },
        { name: "4 kg Aglio grande", price: "€16.00" },
        { name: "5 kg Aglio grande", price: "€20.00" },
        { name: "1 kg Cipolle", price: "€1.20" },
        { name: "2 kg Cipolle", price: "€2.40" },
        { name: "3 kg Cipolle", price: "€3.60" },
        { name: "4 kg Cipolle", price: "€4.80" },
        { name: "5 kg Cipolle", price: "€6.00" },
        { name: "1 kg Patate nuove", price: "€0.90" },
        { name: "2 kg Patate nuove", price: "€1.80" },
        { name: "3 kg Patate nuove", price: "€2.70" },
        { name: "4 kg Patate nuove", price: "€3.60" },
        { name: "5 kg Patate nuove", price: "€4.50" },
        { name: "1 kg Limoni", price: "€2.20" },
        { name: "2 kg Limoni", price: "€4.40" },
        { name: "3 kg Limoni", price: "€6.60" },
        { name: "4 kg Limoni", price: "€8.80" },
        { name: "5 kg Limoni", price: "€11.00" },
        { name: "1 kg Banane", price: "€1.20" },
        { name: "2 kg Banane", price: "€2.40" },
        { name: "3 kg Banane", price: "€3.60" },
        { name: "4 kg Banane", price: "€4.80" },
        { name: "5 kg Banane", price: "€6.00" },
        { name: "1 kg Ananas", price: "€1.70" },
        { name: "2 kg Ananas", price: "€3.40" },
        { name: "3 kg Ananas", price: "€5.10" },
        { name: "4 kg Ananas", price: "€6.80" },
        { name: "5 kg Ananas", price: "€8.50" },
        { name: "1 kg Melone giallo", price: "€1.20" },
        { name: "2 kg Melone giallo", price: "€2.40" },
        { name: "3 kg Melone giallo", price: "€3.60" },
        { name: "4 kg Melone giallo", price: "€4.80" },
        { name: "5 kg Melone giallo", price: "€6.00" },
        { name: "1 kg Pomodori per insalata", price: "€1.50" },
        { name: "2 kg Pomodori per insalata", price: "€3.00" },
        { name: "3 kg Pomodori per insalata", price: "€4.50" },
        { name: "4 kg Pomodori per insalata", price: "€6.00" },
        { name: "5 kg Pomodori per insalata", price: "€7.50" },
        { name: "1 kg Pomodorini", price: "€2.20" },
        { name: "2 kg Pomodorini", price: "€4.40" },
        { name: "3 kg Pomodorini", price: "€6.60" },
        { name: "4 kg Pomodorini", price: "€8.80" },
        { name: "5 kg Pomodorini", price: "€11.00" },
        { name: "1 kg Zucchine", price: "€1.70" },
        { name: "2 kg Zucchine", price: "€3.40" },
        { name: "3 kg Zucchine", price: "€5.10" },
        { name: "4 kg Zucchine", price: "€6.80" },
        { name: "5 kg Zucchine", price: "€8.50" },
        { name: "1 kg Melanzane lunghe e tonde", price: "€1.50" },
        { name: "2 kg Melanzane lunghe e tonde", price: "€3.00" },
        { name: "3 kg Melanzane lunghe e tonde", price: "€4.50" },
        { name: "4 kg Melanzane lunghe e tonde", price: "€6.00" },
        { name: "5 kg Melanzane lunghe e tonde", price: "€7.50" },
        { name: "1 kg Peperoni", price: "€1.50" },
        { name: "2 kg Peperoni", price: "€3.00" },
        { name: "3 kg Peperoni", price: "€4.50" },
        { name: "4 kg Peperoni", price: "€6.00" },
        { name: "5 kg Peperoni", price: "€7.50" },
        { name: "1 kg Cetrioli", price: "€1.50" },
        { name: "2 kg Cetrioli", price: "€3.00" },
        { name: "3 kg Cetrioli", price: "€4.50" },
        { name: "4 kg Cetrioli", price: "€6.00" },
        { name: "5 kg Cetrioli", price: "€7.50" },
        { name: "1 kg Fagioli rossi", price: "€2.70" },
        { name: "2 kg Fagioli rossi", price: "€5.40" },
        { name: "3 kg Fagioli rossi", price: "€8.10" },
        { name: "4 kg Fagioli rossi", price: "€10.80" },
        { name: "5 kg Fagioli rossi", price: "€13.50" },
        { name: "1 kg Fagioli bianchi", price: "€4.20" },
        { name: "2 kg Fagioli bianchi", price: "€8.40" },
        { name: "3 kg Fagioli bianchi", price: "€12.60" },
        { name: "4 kg Fagioli bianchi", price: "€16.80" },
        { name: "5 kg Fagioli bianchi", price: "€21.00" },
        { name: "10 Uova", price: "€2.20" },
        { name: "20 Uova", price: "€4.40" },
        { name: "30 Uova", price: "€6.60" },
        { name: "40 Uova", price: "€8.80" },
        { name: "50 Uova", price: "€11.00" },
        { name: "1 kg Fichi", price: "€1.70" },
        { name: "2 kg Fichi", price: "€3.40" },
        { name: "3 kg Fichi", price: "€5.10" },
        { name: "4 kg Fichi", price: "€6.80" },
        { name: "5 kg Fichi", price: "€8.50" },
        { name: "1 kg Pesche", price: "€2.20" },
        { name: "2 kg Pesche", price: "€4.40" },
        { name: "3 kg Pesche", price: "€6.60" },
        { name: "4 kg Pesche", price: "€8.80" },
        { name: "5 kg Pesche", price: "€11.00" },
        { name: "1 kg Perine", price: "€2.20" },
        { name: "2 kg Perine", price: "€4.40" },
        { name: "3 kg Perine", price: "€6.60" },
        { name: "4 kg Perine", price: "€8.80" },
        { name: "5 kg Perine", price: "€11.00" },
        { name: "1 kg Noci secche", price: "€3.70" },
        { name: "2 kg Noci secche", price: "€7.40" },
        { name: "3 kg Noci secche", price: "€11.10" },
        { name: "4 kg Noci secche", price: "€14.80" },
        { name: "5 kg Noci secche", price: "€18.50" },
        { name: "1 kg Broccoli sporchi", price: "€2.20" },
        { name: "2 kg Broccoli sporchi", price: "€4.40" },
        { name: "3 kg Broccoli sporchi", price: "€6.60" },
        { name: "4 kg Broccoli sporchi", price: "€8.80" },
        { name: "5 kg Broccoli sporchi", price: "€11.00" },
        { name: "1 kg Uva", price: "€2.20" },
        { name: "2 kg Uva", price: "€4.40" },
        { name: "3 kg Uva", price: "€6.60" },
        { name: "4 kg Uva", price: "€8.80" },
        { name: "5 kg Uva", price: "€11.00" },
        { name: "1 vaschetta Cachi morbidi", price: "€1.20" },
        { name: "2 vaschetta Cachi morbidi", price: "€2.40" },
        { name: "3 vaschetta Cachi morbidi", price: "€3.60" },
        { name: "4 vaschetta Cachi morbidi", price: "€4.80" },
        { name: "5 vaschetta Cachi morbidi", price: "€6.00" },
        { name: "1 kg Cachi duri", price: "€1.20" },
        { name: "2 kg Cachi duri", price: "€2.40" },
        { name: "3 kg Cachi duri", price: "€3.60" },
        { name: "4 kg Cachi duri", price: "€4.80" },
        { name: "5 kg Cachi duri", price: "€6.00" },
        { name: "1 kg Zucca", price: "€1.20" },
        { name: "2 kg Zucca", price: "€2.40" },
        { name: "3 kg Zucca", price: "€3.60" },
        { name: "4 kg Zucca", price: "€4.80" },
        { name: "5 kg Zucca", price: "€6.00" },
        { name: "1 kg Cicoria coltivata", price: "€1.50" },
        { name: "2 kg Cicoria coltivata", price: "€3.00" },
        { name: "3 kg Cicoria coltivata", price: "€4.50" },
        { name: "4 kg Cicoria coltivata", price: "€6.00" },
        { name: "5 kg Cicoria coltivata", price: "€7.50" },
      ],
      name1: "",
      email1: "",
      cellular1: "",
      address1: "",
      products1: "",
      time1: "",
      note1: "",
      sum1: "",
    };
  },
  mounted() {
    this.products = this.$route.query.elem4;
  },
  methods: {
    customLabel({ name, price }) {
      return `${name} – ${price}`;
    },

    sendOrder() {
      const current = new Date();
      const date =
        current.getDate() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getFullYear();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      const dateTime = date + " " + time;
      const db = firebase
        .initializeApp({ projectId: "baccho-86489" })
        .firestore();
      const order = {
        name: this.name1,
        email: this.email1,
        cellular: this.cellular1,
        address: this.address1,
        products: this.value,
        time: this.time1,
        date: dateTime,
        note: this.note1,
        sum: this.sum1,
      };

      db.collection("locals")
        .add(order)
        .then(() => {});
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

@media (max-width: 1023px) {
  .riderDiv {
    text-align: center;
  }

  .firstSezApp {
    display: inherit;
  }

  .firstSezWeb {
    display: none;
  }

  .thirdSezApp {
    display: inherit;
  }

  .thirdSezWeb {
    display: none;
  }

  .fourthSezApp {
    display: inherit;
    text-align: center;
  }

  .fourthSezWeb {
    display: none;
  }

  .thirdSezDivApp {
    text-align: center;
  }

  .thirdSezDivApp h3 {
    font-size: 36px;
  }

  .thirdSezDivApp ul {
    padding-left: 4rem !important;
  }

  .sixthSezWeb h2 {
    font-size: 36px;
    font-weight: 700;
    color: white;
  }

  .sixthSezWeb h5 {
    font-size: 18px;
  }

  .sixthSezWeb p {
    font-size: 16px;
    color: #666666;
  }

  .seventhSezWeb h2 {
    font-size: 36px;
    font-weight: 700;
    color: #2b2b2b;
  }

  .seventhSezWeb p {
    font-size: 16px;
    color: #666666;
  }

  .firstSezApp .containerB {
    padding: 3rem;
    padding-top: 12rem !important;
    max-width: none;
    text-align: center;
    padding-bottom: 0rem !important;
  }

  .containerB h1 {
    font-size: 36px;
    font-weight: 700;
    color: #2b2b2b;
  }

  .containerB p {
    font-size: 16px;
    color: #666666;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .containerB .data p {
    font-size: 16px;
    color: #666666;
    margin-top: 1.5rem;
    width: 230px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    padding-left: 2rem;
    margin-bottom: 2.5rem;
  }

  .secondDefaultBtn {
    display: none;
  }

  .image {
    width: 30vh;
    height: 30vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
    background-image: url("https://mtfn-assets.s3.eu-central-1.amazonaws.com/baccho/deliveryimg.jpg");
  }
}

@media (min-width: 1024px) {
  .firstSezApp {
    display: none;
  }

  .firstSezWeb {
    display: inherit;
  }

  .thirdSezWeb {
    display: inherit;
  }

  .thirdSezApp {
    display: none;
  }

  .fourthSezWeb {
    display: inherit;
  }

  .fourthSezApp {
    display: none;
  }

  .sixthSezWeb h2 {
    font-size: 56px;
    font-weight: 700;
    color: white;
  }

  .seventhSezWeb h2 {
    font-size: 56px;
    font-weight: 700;
    color: #2b2b2b;
  }

  .seventhSezWeb p {
    font-size: 20px;
    color: #666666;
  }

  .containerB {
    padding-left: 10rem;
    padding-right: 10rem;
    max-width: none;
  }

  .containerB h1 {
    font-size: 70px;
    font-weight: 700;
    color: #2b2b2b;
    line-height: 5rem;
    width: 70%;
  }

  .containerB p {
    font-size: 20px;
    color: #666666;
    width: 70%;
    line-height: 1.8rem;
    margin-top: 1.5rem;
  }

  .image {
    width: 75vh;
    height: 75vh;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
    background-image: url("https://mtfn-assets.s3.eu-central-1.amazonaws.com/baccho/deliveryimg.jpg");
  }

  .image2 {
    position: absolute;
    top: 69%;
    width: 25vh;
    height: 25vh;
    left: 0;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
    background-image: url("https://img.freepik.com/free-photo/tomatoes-basil-mozzarella_144627-15404.jpg?t=st=1648037115~exp=1648037715~hmac=5b247bef0b586f7e905d3ce88e7bf07774b3370e13492467f7046bd03432fef9&w=1380");
  }

  .image3 {
    position: absolute;
    top: 1%;
    width: 25vh;
    height: 25vh;
    left: 71%;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
    background-image: url("https://img.freepik.com/free-photo/tasty-fresh-appetizing-italian-food-ingredients-dark-background_1220-1741.jpg?t=st=1648036893~exp=1648037493~hmac=89b13d8dd64d3ced908b01d572570b67e0220ef6c08941799e912680ba19aa16&w=1060");
  }
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

.secondDefaultBtn {
  background: transparent;
  border: none;
  box-shadow: none;
  margin-left: 1rem;
  text-transform: none;
  font-size: 16px;
}

.secondDefaultBtn:hover {
  background: transparent;
  border: none;
  box-shadow: none;
  margin-left: 1rem;
}

.cardImage {
  width: 100%;
  height: 38vh;
  border-radius: 30px;
  background-position: center;
  background-size: cover;
}

.cardText {
  padding: 1.5rem;
  background: white;
  position: absolute;
  width: 100%;
  /* border-radius: 30px; */
  border-top-left-radius: 30px;
  top: 77%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.cardTitle {
  font-size: 18px;
  font-weight: 600;
  color: rgb(176 10 146);
  margin: 0;
}

.cardTitle2 {
  font-size: 14px;
  color: #666666;
  margin: 0;
}
</style>
