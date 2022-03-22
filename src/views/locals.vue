<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div
          class="shape shape-style-1 shape-default shape-skew"
          style="background-image: url(img/theme/img_8.jpg); background-position: center;"
        >
          <span
            style="background: rgb(0 0 0 / 25%); width: 108%; height: 100%; border-radius: 0;"
          ></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">
                  <span>Hai un ristorante?</span> Baccho fa proprio al caso tuo
                </h1>
                <p class="lead  text-white">
                  Grazie a Baccho puoi ordinare la tua spesa genuina dal tuo
                  smartphone e riceverla direttamente al ristorante o in
                  pizzeria. Tutti alimenti coltivati naturalmente nelle terre
                  del Cilento e della costiera Amalfitana.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="#ordina"
                    class="mb-3 mb-sm-0 defaultBtn"
                    icon="fa fa-plus"
                  >
                    Ordina ora
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>

    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="d-flex px-3 mb-3">
              <div>
                <icon
                  name="ni ni-delivery-fast"
                  size="lg"
                  class="bg-gradient-white"
                  color="primary"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h4 class="display-3">Dettagli sull'ordine</h4>
              </div>
            </div>

            <ul class="list-unstyled mt-5">
              <li class="py-2">
                <div
                  class="d-flex align-items-center"
                  style="align-items: center;"
                >
                  <badge
                    circle
                    class="mr-3 bg-gradient-white"
                    icon="ni ni-html5"
                  ></badge>
                  <h6 class="mb-0">Costo di spedizone di €10.</h6>
                </div>
              </li>
              <li class="py-2">
                <div class="d-flex align-items-center">
                  <badge
                    circle
                    class="mr-3 bg-gradient-white"
                    icon="ni ni-satisfied"
                  ></badge>
                  <h6 class="mb-0">Pagamento alla consegna.</h6>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-md-6 order-md-2">
            <div class="d-flex px-3 mb-3">
              <div>
                <icon
                  name="ni ni-delivery-fast"
                  size="lg"
                  class="bg-gradient-white"
                  color="primary"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h4 class="display-3">Ordina ora per la tua famiglia</h4>
              </div>
            </div>
            <card gradient="secondary" shadow body-classes="p-lg-4">
              <base-input
                class=""
                placeholder="Nome e cognome"
                addon-left-icon="ni ni-user-run"
                name="name1"
                v-model="name1"
              >
              </base-input>
              <base-input
                placeholder="Email"
                addon-left-icon="ni ni-email-83"
                name="email1"
                v-model="email1"
              >
              </base-input>
              <base-input
                placeholder="Indirizzo di consegna e numero civico"
                addon-left-icon="ni ni-pin-3"
                name="address1"
                v-model="address1"
              >
              </base-input>
              <base-input
                placeholder="Cellulare"
                addon-left-icon="ni ni-mobile-button"
                name="cellular1"
                v-model="cellular1"
              >
              </base-input>

              <multiselect
                v-model="value"
                :options="options"
                :multiple="true"
                :close-on-select="false"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Seleziona il cibo desiderato"
                :custom-label="customLabel"
                label="name"
                track-by="name"
                :preselect-first="false"
                style="margin-bottom: 1rem; border: 0.0625rem solid rgba(0, 0, 0, 0.05);"
              >
                <template
                  slot="selection"
                  slot-scope="{ values, search, isOpen }"
                  ><span
                    class="multiselect__single"
                    v-if="values.length &amp;&amp; !isOpen"
                    >{{ values.length }} prodotti selezionati</span
                  ></template
                >
              </multiselect>

              <base-input
                placeholder="Orario di consegna"
                type="time"
                addon-left-icon="ni ni-watch-time"
                name="time1"
                v-model="time1"
              >
              </base-input>
              <base-input class="mb-4">
                <textarea
                  class="form-control form-control-alternative"
                  rows="4"
                  cols="80"
                  placeholder="Aggiungi ulteriori informazioni"
                  name="note1"
                  v-model="note1"
                ></textarea>
              </base-input>
              <base-button
                type="default defaultBtn"
                round
                block
                size="lg"
                @click="sendOrder"
              >
                Conferma ordine
              </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-0">
      <div class="container">
        <card gradient="default" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-white">Vuoi diventare un rider di Baccho?</h3>
                <p class="lead text-white mt-3">
                  Contattaci e scopri come diventare un rider di Baccho.
                </p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <base-button
                  tag="a"
                  href="mailto:infobaccho@gmail.com"
                  type="white"
                  block
                  size="lg"
                >
                  Contattaci
                </base-button>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
    <section class="section section-shaped my-0 overflow-hidden">
      <div
        class="shape shape-style-3 shape-skew"
        style="background-image: url(img/theme/foto6.jpg)!important; height: 100%;"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-white">Come funziona</h2>
            <p class="lead text-white">
              Se sei un ristorante, una pizzeria o un locale puoi effettuare
              l'ordine da questa sezione. In 24h verranno consegnati i prodotti,
              se è necessario ricevere altri prodotti non presenti nel menu
              oppure ricevere l'ordine in fasce orarie particolari è possibile
              contattare l'assistenza di Baccho.
            </p>
          </div>
        </div>
        <div class="row row-grid mt-5" style="text-align: center;">
          <div class="col-lg-4">
            <icon
              name="ni ni-active-40"
              size="lg"
              gradient="white"
              shadow
              round
              color="warning"
            ></icon>
            <h5 class="text-white mt-3">Seleziona i prodotti</h5>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-check-bold"
              size="lg"
              gradient="white"
              shadow
              round
              color="warning"
            ></icon>
            <h5 class="text-white mt-3">Conferma l'ordine</h5>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-delivery-fast"
              size="lg"
              gradient="white"
              shadow
              round
              color="warning"
            ></icon>
            <h5 class="text-white mt-3">Entro 24 ore saremo da te</h5>
          </div>
        </div>
      </div>
    </section>
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
  name: "locals",
  components: { Multiselect },
  data() {
    return {
      value: [],
      options: [
        { name: "1 cassa ananas", language: "€18.00" },
        { name: "2 casse ananas", language: "€36.00" },
        { name: "3 casse ananas", language: "€54.00" },
        { name: "4 casse ananas", language: "€72.00" },
        { name: "5 casse ananas", language: "€90.00" },
        { name: "1 cassa basilico", language: "€6.00" },
        { name: "2 casse basilico", language: "€12.00" },
        { name: "3 casse basilico", language: "€18.00" },
        { name: "4 casse basilico", language: "€24.00" },
        { name: "5 casse basilico", language: "€30.00" },
        { name: "1 treccia aglio", language: "€3.80" },
        { name: "2 treccia aglio", language: "€7.60" },
        { name: "3 treccia aglio", language: "€11.40" },
        { name: "4 treccia aglio", language: "€15.20" },
        { name: "5 treccia aglio", language: "€19.00" },
        { name: "1 cassa frutti di bosco", language: "€20.00" },
        { name: "2 cassa frutti di bosco", language: "€40.00" },
        { name: "3 cassa frutti di bosco", language: "€60.00" },
        { name: "4 cassa frutti di bosco", language: "€80.00" },
        { name: "5 cassa frutti di bosco", language: "€100.00" },
        { name: "1 cassa frutti della passione", language: "€23.00" },
        { name: "2 cassa frutti della passione", language: "€46.00" },
        { name: "3 cassa frutti della passione", language: "€60.00" },
        { name: "4 cassa frutti della passione", language: "€92.00" },
        { name: "5 cassa frutti della passione", language: "€115.00" },
        { name: "1 cassa misticanza", language: "€10.00" },
        { name: "2 cassa misticanza", language: "€20.00" },
        { name: "3 cassa misticanza", language: "€30.00" },
        { name: "4 cassa misticanza", language: "€40.00" },
        { name: "5 cassa misticanza", language: "€50.00" },
        { name: "1 cassa rucola", language: "€10.00" },
        { name: "2 cassa rucola", language: "€20.00" },
        { name: "3 cassa rucola", language: "€30.00" },
        { name: "4 cassa rucola", language: "€40.00" },
        { name: "5 cassa rucola", language: "€50.00" },
        { name: "1 cassa scarola", language: "€10.00" },
        { name: "2 cassa scarola", language: "€20.00" },
        { name: "3 cassa scarola", language: "€30.00" },
        { name: "4 cassa scarola", language: "€40.00" },
        { name: "5 cassa scarola", language: "€50.00" },
        { name: "1 pezzo pane di gragnano", language: "€1.80" },
        { name: "2 pezzi pane di gragnano", language: "€3.60" },
        { name: "3 pezzi pane di gragnano", language: "€5.40" },
        { name: "4 pezzi pane di gragnano", language: "€7.20" },
        { name: "5 pezzi pane di gragnano", language: "€9.00" },
        { name: "1 pezzo panuozzo di gragnano", language: "€1.80" },
        { name: "2 pezzi panuozzo di gragnano", language: "€3.60" },
        { name: "3 pezzi panuozzo di gragnano", language: "€5.40" },
        { name: "4 pezzi panuozzo di gragnano", language: "€7.20" },
        { name: "5 pezzi panuozzo di gragnano", language: "€9.00" },
        { name: "1 pezzo frusta di gragnano", language: "€3.00" },
        { name: "2 pezzi frusta di gragnano", language: "€6.00" },
        { name: "3 pezzi frusta di gragnano", language: "€9.00" },
        { name: "4 pezzi frusta di gragnano", language: "€12.00" },
        { name: "5 pezzi frusta di gragnano", language: "€15.00" },
        { name: "1 kg Mele miste", language: "€1.50" },
        { name: "2 kg Mele miste", language: "€3.00" },
        { name: "3 kg Mele miste", language: "€4.50" },
        { name: "4 kg Mele miste", language: "€6.00" },
        { name: "5 kg Mele miste", language: "€7.50" },
        { name: "1 kg Arance", language: "€1.70" },
        { name: "2 kg Arance", language: "€3.40" },
        { name: "3 kg Arance", language: "€5.10" },
        { name: "4 kg Arance", language: "€6.80" },
        { name: "5 kg Arance", language: "€8.50" },
        { name: "1 kg Arance per premuta", language: "€1.50" },
        { name: "2 kg Arance per premuta", language: "€3.00" },
        { name: "3 kg Arance per premuta", language: "€4.50" },
        { name: "4 kg Arance per premuta", language: "€6.00" },
        { name: "5 kg Arance per premuta", language: "€7.50" },
        { name: "1 pezzo Carote fascio", language: "€1.20" },
        { name: "2 pezzi Carote fascio", language: "€2.40" },
        { name: "3 pezzi Carote fascio", language: "€3.60" },
        { name: "4 pezzi Carote fascio", language: "€4.80" },
        { name: "5 pezzi Carote fascio", language: "€6.00" },
        { name: "1 pezzo Cipolline fresche", language: "€0.90" },
        { name: "2 pezzi Cipolline fresche", language: "€1.80" },
        { name: "3 pezzi Cipolline fresche", language: "€2.70" },
        { name: "4 pezzi Cipolline fresche", language: "€3.60" },
        { name: "5 pezzi Cipolline fresche", language: "€4.50" },
        { name: "1 pezzo Finocchi", language: "€1.20" },
        { name: "2 pezzi Finocchi", language: "€2.40" },
        { name: "3 pezzi Finocchi", language: "€3.60" },
        { name: "4 pezzi Finocchi", language: "€4.80" },
        { name: "5 pezzi Finocchi", language: "€6.00" },
        { name: "1 pezzo Verza", language: "€1.20" },
        { name: "2 pezzi Verza", language: "€2.40" },
        { name: "3 pezzi Verza", language: "€3.60" },
        { name: "4 pezzi Verza", language: "€4.80" },
        { name: "5 pezzi Verza", language: "€6.00" },
        { name: "1 pezzo Cavolfiori", language: "€1.20" },
        { name: "2 pezzi Cavolfiori", language: "€2.40" },
        { name: "3 pezzi Cavolfiori", language: "€3.60" },
        { name: "4 pezzi Cavolfiori", language: "€4.80" },
        { name: "5 pezzi Cavolfiori", language: "€6.00" },
        { name: "1 kg Bietola", language: "€1.50" },
        { name: "2 kg Bietola", language: "€3.00" },
        { name: "3 kg Bietola", language: "€4.50" },
        { name: "4 kg Bietola", language: "€6.00" },
        { name: "5 kg Bietola", language: "€7.50" },
        { name: "1 kg Bietoline", language: "€1.50" },
        { name: "2 kg Bietoline", language: "€3.00" },
        { name: "3 kg Bietoline", language: "€4.50" },
        { name: "4 kg Bietoline", language: "€6.00" },
        { name: "5 kg Bietoline", language: "€7.50" },
        { name: "1 kg Spinaci", language: "€1.50" },
        { name: "2 kg Spinaci", language: "€3.00" },
        { name: "3 kg Spinaci", language: "€4.50" },
        { name: "4 kg Spinaci", language: "€6.00" },
        { name: "5 kg Spinaci", language: "€7.50" },
        { name: "1 kg Scarole lisce e ricce", language: "€1.20" },
        { name: "2 kg Scarole lisce e ricce", language: "€2.40" },
        { name: "3 kg Scarole lisce e ricce", language: "€3.60" },
        { name: "4 kg Scarole lisce e ricce", language: "€4.80" },
        { name: "5 kg Scarole lisce e ricce", language: "€6.00" },
        { name: "1 pezzo Insalate miste", language: "€0.80" },
        { name: "2 pezzi Insalate miste", language: "€1.60" },
        { name: "3 pezzi Insalate miste", language: "€2.40" },
        { name: "4 pezzi Insalate miste", language: "€3.20" },
        { name: "5 pezzi Insalate miste", language: "€4.00" },
        { name: "1 kg Aglio grande", language: "€4.00" },
        { name: "2 kg Aglio grande", language: "€8.00" },
        { name: "3 kg Aglio grande", language: "€12.00" },
        { name: "4 kg Aglio grande", language: "€16.00" },
        { name: "5 kg Aglio grande", language: "€20.00" },
        { name: "1 kg Cipolle", language: "€1.20" },
        { name: "2 kg Cipolle", language: "€2.40" },
        { name: "3 kg Cipolle", language: "€3.60" },
        { name: "4 kg Cipolle", language: "€4.80" },
        { name: "5 kg Cipolle", language: "€6.00" },
        { name: "1 kg Patate nuove", language: "€0.90" },
        { name: "2 kg Patate nuove", language: "€1.80" },
        { name: "3 kg Patate nuove", language: "€2.70" },
        { name: "4 kg Patate nuove", language: "€3.60" },
        { name: "5 kg Patate nuove", language: "€4.50" },
        { name: "1 kg Limoni", language: "€2.20" },
        { name: "2 kg Limoni", language: "€4.40" },
        { name: "3 kg Limoni", language: "€6.60" },
        { name: "4 kg Limoni", language: "€8.80" },
        { name: "5 kg Limoni", language: "€11.00" },
        { name: "1 kg Banane", language: "€1.20" },
        { name: "2 kg Banane", language: "€2.40" },
        { name: "3 kg Banane", language: "€3.60" },
        { name: "4 kg Banane", language: "€4.80" },
        { name: "5 kg Banane", language: "€6.00" },
        { name: "1 kg Ananas", language: "€1.70" },
        { name: "2 kg Ananas", language: "€3.40" },
        { name: "3 kg Ananas", language: "€5.10" },
        { name: "4 kg Ananas", language: "€6.80" },
        { name: "5 kg Ananas", language: "€8.50" },
        { name: "1 kg Melone giallo", language: "€1.20" },
        { name: "2 kg Melone giallo", language: "€2.40" },
        { name: "3 kg Melone giallo", language: "€3.60" },
        { name: "4 kg Melone giallo", language: "€4.80" },
        { name: "5 kg Melone giallo", language: "€6.00" },
        { name: "1 kg Pomodori per insalata", language: "€1.50" },
        { name: "2 kg Pomodori per insalata", language: "€3.00" },
        { name: "3 kg Pomodori per insalata", language: "€4.50" },
        { name: "4 kg Pomodori per insalata", language: "€6.00" },
        { name: "5 kg Pomodori per insalata", language: "€7.50" },
        { name: "1 kg Pomodorini", language: "€2.20" },
        { name: "2 kg Pomodorini", language: "€4.40" },
        { name: "3 kg Pomodorini", language: "€6.60" },
        { name: "4 kg Pomodorini", language: "€8.80" },
        { name: "5 kg Pomodorini", language: "€11.00" },
        { name: "1 kg Zucchine", language: "€1.70" },
        { name: "2 kg Zucchine", language: "€3.40" },
        { name: "3 kg Zucchine", language: "€5.10" },
        { name: "4 kg Zucchine", language: "€6.80" },
        { name: "5 kg Zucchine", language: "€8.50" },
        { name: "1 kg Melanzane lunghe e tonde", language: "€1.50" },
        { name: "2 kg Melanzane lunghe e tonde", language: "€3.00" },
        { name: "3 kg Melanzane lunghe e tonde", language: "€4.50" },
        { name: "4 kg Melanzane lunghe e tonde", language: "€6.00" },
        { name: "5 kg Melanzane lunghe e tonde", language: "€7.50" },
        { name: "1 kg Peperoni", language: "€1.50" },
        { name: "2 kg Peperoni", language: "€3.00" },
        { name: "3 kg Peperoni", language: "€4.50" },
        { name: "4 kg Peperoni", language: "€6.00" },
        { name: "5 kg Peperoni", language: "€7.50" },
        { name: "1 kg Cetrioli", language: "€1.50" },
        { name: "2 kg Cetrioli", language: "€3.00" },
        { name: "3 kg Cetrioli", language: "€4.50" },
        { name: "4 kg Cetrioli", language: "€6.00" },
        { name: "5 kg Cetrioli", language: "€7.50" },
        { name: "1 kg Fagioli rossi", language: "€2.70" },
        { name: "2 kg Fagioli rossi", language: "€5.40" },
        { name: "3 kg Fagioli rossi", language: "€8.10" },
        { name: "4 kg Fagioli rossi", language: "€10.80" },
        { name: "5 kg Fagioli rossi", language: "€13.50" },
        { name: "1 kg Fagioli bianchi", language: "€4.20" },
        { name: "2 kg Fagioli bianchi", language: "€8.40" },
        { name: "3 kg Fagioli bianchi", language: "€12.60" },
        { name: "4 kg Fagioli bianchi", language: "€16.80" },
        { name: "5 kg Fagioli bianchi", language: "€21.00" },
        { name: "10 Uova", language: "€2.20" },
        { name: "20 Uova", language: "€4.40" },
        { name: "30 Uova", language: "€6.60" },
        { name: "40 Uova", language: "€8.80" },
        { name: "50 Uova", language: "€11.00" },
        { name: "1 kg Fichi", language: "€1.70" },
        { name: "2 kg Fichi", language: "€3.40" },
        { name: "3 kg Fichi", language: "€5.10" },
        { name: "4 kg Fichi", language: "€6.80" },
        { name: "5 kg Fichi", language: "€8.50" },
        { name: "1 kg Pesche", language: "€2.20" },
        { name: "2 kg Pesche", language: "€4.40" },
        { name: "3 kg Pesche", language: "€6.60" },
        { name: "4 kg Pesche", language: "€8.80" },
        { name: "5 kg Pesche", language: "€11.00" },
        { name: "1 kg Perine", language: "€2.20" },
        { name: "2 kg Perine", language: "€4.40" },
        { name: "3 kg Perine", language: "€6.60" },
        { name: "4 kg Perine", language: "€8.80" },
        { name: "5 kg Perine", language: "€11.00" },
        { name: "1 kg Noci secche", language: "€3.70" },
        { name: "2 kg Noci secche", language: "€7.40" },
        { name: "3 kg Noci secche", language: "€11.10" },
        { name: "4 kg Noci secche", language: "€14.80" },
        { name: "5 kg Noci secche", language: "€18.50" },
        { name: "1 kg Broccoli sporchi", language: "€2.20" },
        { name: "2 kg Broccoli sporchi", language: "€4.40" },
        { name: "3 kg Broccoli sporchi", language: "€6.60" },
        { name: "4 kg Broccoli sporchi", language: "€8.80" },
        { name: "5 kg Broccoli sporchi", language: "€11.00" },
        { name: "1 kg Uva", language: "€2.20" },
        { name: "2 kg Uva", language: "€4.40" },
        { name: "3 kg Uva", language: "€6.60" },
        { name: "4 kg Uva", language: "€8.80" },
        { name: "5 kg Uva", language: "€11.00" },
        { name: "1 vaschetta Cachi morbidi", language: "€1.20" },
        { name: "2 vaschetta Cachi morbidi", language: "€2.40" },
        { name: "3 vaschetta Cachi morbidi", language: "€3.60" },
        { name: "4 vaschetta Cachi morbidi", language: "€4.80" },
        { name: "5 vaschetta Cachi morbidi", language: "€6.00" },
        { name: "1 kg Cachi duri", language: "€1.20" },
        { name: "2 kg Cachi duri", language: "€2.40" },
        { name: "3 kg Cachi duri", language: "€3.60" },
        { name: "4 kg Cachi duri", language: "€4.80" },
        { name: "5 kg Cachi duri", language: "€6.00" },
        { name: "1 kg Zucca", language: "€1.20" },
        { name: "2 kg Zucca", language: "€2.40" },
        { name: "3 kg Zucca", language: "€3.60" },
        { name: "4 kg Zucca", language: "€4.80" },
        { name: "5 kg Zucca", language: "€6.00" },
        { name: "1 kg Cicoria coltivata", language: "€1.50" },
        { name: "2 kg Cicoria coltivata", language: "€3.00" },
        { name: "3 kg Cicoria coltivata", language: "€4.50" },
        { name: "4 kg Cicoria coltivata", language: "€6.00" },
        { name: "5 kg Cicoria coltivata", language: "€7.50" },
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

.defaultBtn {
  background-color: #b00a92;
  border-color: #b00a92;
}

.defaultBtn:hover {
  background-color: #71077b;
  border-color: #71077b;
}
</style>
