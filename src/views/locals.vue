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
                  Hai un <span style="color: #b00a92;">ristorante</span>? Baccho
                  fa al caso tuo
                </h1>
                <p class="">
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
                  Hai un <span style="color: #b00a92;">ristorante</span>? Baccho
                  fa al caso tuo
                </h1>
                <p class="">
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
                  <base-button
                    tag="a"
                    href="#ordina"
                    class="mb-3 mb-sm-0 secondDefaultBtn"
                    type="white"
                    icon="fa fa-info"
                  >
                    Scopri di più
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>

    <section class="section section-lg" id="ordina">
      <div class="container">
        <div class="row row-grid">
          <div class="col-md-6 order-md-2">
            <div class="d-flex px-3 mb-3">
              <div>
                <icon
                  name="ni ni-delivery-fast"
                  size="lg"
                  class="bg-gradient-white"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h4
                  class="display-3"
                  style="font-weight: 700; color: rgb(52 52 52);"
                >
                  Dettagli sull'ordine
                </h4>
              </div>
            </div>

            <ul class="list-unstyled mt-5" style="padding-left: 2rem;">
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
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h4
                  class="display-3"
                  style="font-weight: 700; color: rgb(52 52 52);"
                >
                  Ordina per il tuo locale
                </h4>
              </div>
            </div>
            <card
              style="border-radius: 0px; background: transparent; border: 0;"
            >
              <base-input
                class=""
                placeholder="Nome Ristorante"
                name="name1"
                v-model="name1"
              >
              </base-input>
              <base-input placeholder="Email" name="email1" v-model="email1">
              </base-input>
              <base-input
                placeholder="Indirizzo di consegna e numero civico"
                name="address1"
                v-model="address1"
              >
              </base-input>
              <base-input
                placeholder="Cellulare"
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
      <div
        class="container"
        style="margin-top: 8rem;
    margin-bottom: 5rem;"
      >
        <card
          no-body
          shadow-size="lg"
          class="border-0"
          style="background-color: rgb(218 84 194 / 50%) !important;"
        >
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3
                  style="color: #b00a92 !important;
    font-weight: 700;"
                >
                  Vuoi diventare un rider di Baccho?
                </h3>
                <p class="lead mt-3" style="color: #b00a92 !important;">
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
                  style="border-radius: 25rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 18px;
    text-transform: none;"
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
        { name: "1 kg Mele miste", price: "€1.40" },
        { name: "2 kg Mele miste", price: "€2.80" },
        { name: "3 kg Mele miste", price: "€4.20" },
        { name: "4 kg Mele miste", price: "€5.60" },
        { name: "5 kg Mele miste", price: "€7.00" },
        { name: "1 kg Mele annurche piccole", price: "€1.10" },
        { name: "2 kg Mele annurche piccole", price: "€2.20" },
        { name: "3 kg Mele annurche piccole", price: "€3.30" },
        { name: "4 kg Mele annurche piccole", price: "€4.40" },
        { name: "5 kg Mele annurche piccole", price: "€5.50" },
        { name: "1 kg Mele annurche grandi", price: "€1.88" },
        { name: "2 kg Mele annurche grandi", price: "€3.76" },
        { name: "3 kg Mele annurche grandi", price: "€5.64" },
        { name: "4 kg Mele annurche grandi", price: "€7.52" },
        { name: "5 kg Mele annurche grandi", price: "€9.40" },
        { name: "1 kg Arance", price: "€1.32" },
        { name: "2 kg Arance", price: "€2.64" },
        { name: "3 kg Arance", price: "€2.96" },
        { name: "4 kg Arance", price: "€4.28" },
        { name: "5 kg Arance", price: "€5.60" },
        { name: "1 kg Arance per premuta", price: "€0.88" },
        { name: "2 kg Arance per premuta", price: "€1.76" },
        { name: "3 kg Arance per premuta", price: "€2.64" },
        { name: "4 kg Arance per premuta", price: "€3.52" },
        { name: "5 kg Arance per premuta", price: "€4.44" },
        { name: "1 pezzo Carote fascio", price: "€1.10" },
        { name: "2 pezzi Carote fascio", price: "€2.20" },
        { name: "3 pezzi Carote fascio", price: "€3.30" },
        { name: "4 pezzi Carote fascio", price: "€4.40" },
        { name: "5 pezzi Carote fascio", price: "€5.50" },
        { name: "1 pezzo Cipolline fresche", price: "€0.55" },
        { name: "2 pezzi Cipolline fresche", price: "€1.10" },
        { name: "3 pezzi Cipolline fresche", price: "€1.65" },
        { name: "4 pezzi Cipolline fresche", price: "€2.20" },
        { name: "5 pezzi Cipolline fresche", price: "€2.75" },
        { name: "1 pezzo Finocchi", price: "€0.77" },
        { name: "2 pezzi Finocchi", price: "€1.54" },
        { name: "3 pezzi Finocchi", price: "€2.31" },
        { name: "4 pezzi Finocchi", price: "€3.08" },
        { name: "5 pezzi Finocchi", price: "€3.85" },
        { name: "1 pezzo Verza", price: "€1.10" },
        { name: "2 pezzi Verza", price: "€2.20" },
        { name: "3 pezzi Verza", price: "€3.30" },
        { name: "4 pezzi Verza", price: "€4.40" },
        { name: "5 pezzi Verza", price: "€5.50" },
        { name: "1 pezzo Cavolfiori", price: "€1.10" },
        { name: "2 pezzi Cavolfiori", price: "€2.20" },
        { name: "3 pezzi Cavolfiori", price: "€3.30" },
        { name: "4 pezzi Cavolfiori", price: "€4.40" },
        { name: "5 pezzi Cavolfiori", price: "€5.50" },
        { name: "1 kg Bietola", price: "€1.43" },
        { name: "2 kg Bietola", price: "€2.86" },
        { name: "3 kg Bietola", price: "€4.29" },
        { name: "4 kg Bietola", price: "€5.72" },
        { name: "5 kg Bietola", price: "€7.15" },
        { name: "1 kg Bietoline", price: "€1.43" },
        { name: "2 kg Bietoline", price: "€2.86" },
        { name: "3 kg Bietoline", price: "€4.29" },
        { name: "4 kg Bietoline", price: "€5.72" },
        { name: "5 kg Bietoline", price: "€7.15" },
        { name: "1 kg Spinaci", price: "€1.98" },
        { name: "2 kg Spinaci", price: "€3.90" },
        { name: "3 kg Spinaci", price: "€5.90" },
        { name: "4 kg Spinaci", price: "€7.90" },
        { name: "5 kg Spinaci", price: "€9.90" },
        { name: "1 kg Scarole lisce e ricce", price: "€1.10" },
        { name: "2 kg Scarole lisce e ricce", price: "€2.20" },
        { name: "3 kg Scarole lisce e ricce", price: "€3.30" },
        { name: "4 kg Scarole lisce e ricce", price: "€4.40" },
        { name: "5 kg Scarole lisce e ricce", price: "€5.50" },
        { name: "1 pezzo Insalate lattuga", price: "€0.66" },
        { name: "2 pezzi Insalate lattuga", price: "€1.32" },
        { name: "3 pezzi Insalate lattuga", price: "€1.98" },
        { name: "4 pezzi Insalate lattuga", price: "€2.64" },
        { name: "5 pezzi Insalate lattuga", price: "€3.30" },
        { name: "1 pezzo Incappucciata / romana", price: "€1.10" },
        { name: "2 pezzi Incappucciata / romana", price: "€2.20" },
        { name: "3 pezzi Incappucciata / romana", price: "€3.30" },
        { name: "4 pezzi Incappucciata / romana", price: "€4.40" },
        { name: "5 pezzi Incappucciata / romana", price: "€5.50" },
        { name: "1 kg Aglio grande", price: "€4.95" },
        { name: "2 kg Aglio grande", price: "€9.90" },
        { name: "3 kg Aglio grande", price: "€14.85" },
        { name: "4 kg Aglio grande", price: "€19.80" },
        { name: "5 kg Aglio grande", price: "€24.75" },
        { name: "1 kg Cipolle", price: "€1.10" },
        { name: "2 kg Cipolle", price: "€2.20" },
        { name: "3 kg Cipolle", price: "€3.30" },
        { name: "4 kg Cipolle", price: "€4.40" },
        { name: "5 kg Cipolle", price: "€5.50" },
        { name: "1 kg Patate", price: "€0.70" },
        { name: "2 kg Patate", price: "€1.40" },
        { name: "3 kg Patate", price: "€2.10" },
        { name: "4 kg Patate", price: "€2.80" },
        { name: "5 kg Patate", price: "€3.50" },
        { name: "1 kg Limoni", price: "€1.10" },
        { name: "2 kg Limoni", price: "€2.20" },
        { name: "3 kg Limoni", price: "€3.30" },
        { name: "4 kg Limoni", price: "€4.40" },
        { name: "5 kg Limoni", price: "€5.50" },
        { name: "1 kg Banane no chiquita", price: "€1.10" },
        { name: "2 kg Banane no chiquita", price: "€2.20" },
        { name: "3 kg Banane no chiquita", price: "€3.30" },
        { name: "4 kg Banane no chiquita", price: "€4.40" },
        { name: "5 kg Banane no chiquita", price: "€5.50" },
        { name: "1 kg Ananas", price: "€1.65" },
        { name: "2 kg Ananas", price: "€3.30" },
        { name: "3 kg Ananas", price: "€4.95" },
        { name: "4 kg Ananas", price: "€6.60" },
        { name: "5 kg Ananas", price: "€8.25" },
        { name: "1 kg Melone giallo", price: "€1.98" },
        { name: "2 kg Melone giallo", price: "€3.90" },
        { name: "3 kg Melone giallo", price: "€5.90" },
        { name: "4 kg Melone giallo", price: "€7.90" },
        { name: "5 kg Melone giallo", price: "€9.90" },
        { name: "1 kg Pomodori per insalata", price: "€1.98" },
        { name: "2 kg Pomodori per insalata", price: "€3.90" },
        { name: "3 kg Pomodori per insalata", price: "€5.90" },
        { name: "4 kg Pomodori per insalata", price: "€7.90" },
        { name: "5 kg Pomodori per insalata", price: "€9.90" },
        { name: "1 kg Pomodorini", price: "€2.75" },
        { name: "2 kg Pomodorini", price: "€5.50" },
        { name: "3 kg Pomodorini", price: "€8.25" },
        { name: "4 kg Pomodorini", price: "€11.00" },
        { name: "5 kg Pomodorini", price: "€13.75" },
        { name: "1 kg Zucchine", price: "€2.75" },
        { name: "2 kg Zucchine", price: "€5.50" },
        { name: "3 kg Zucchine", price: "€8.25" },
        { name: "4 kg Zucchine", price: "€11.00" },
        { name: "5 kg Zucchine", price: "€13.75" },
        { name: "1 kg Melanzane lunghe e tonde", price: "€2.20" },
        { name: "2 kg Melanzane lunghe e tonde", price: "€4.40" },
        { name: "3 kg Melanzane lunghe e tonde", price: "€6.60" },
        { name: "4 kg Melanzane lunghe e tonde", price: "€6.80" },
        { name: "5 kg Melanzane lunghe e tonde", price: "€9.00" },
        { name: "1 kg Peperoni", price: "€2.53" },
        { name: "2 kg Peperoni", price: "€5.06" },
        { name: "3 kg Peperoni", price: "€7.59" },
        { name: "4 kg Peperoni", price: "€10.12" },
        { name: "5 kg Peperoni", price: "€12.65" },
        { name: "1 kg Cetrioli", price: "€1.98" },
        { name: "2 kg Cetrioli", price: "€3.90" },
        { name: "3 kg Cetrioli", price: "€5.90" },
        { name: "4 kg Cetrioli", price: "€7.90" },
        { name: "5 kg Cetrioli", price: "€9.90" },
        { name: "1 kg Fagioli rossi borlotti secchi", price: "€3.30" },
        { name: "2 kg Fagioli rossi borlotti secchi", price: "€6.60" },
        { name: "3 kg Fagioli rossi borlotti secchi", price: "€9.90" },
        { name: "4 kg Fagioli rossi borlotti secchi", price: "€13.20" },
        { name: "5 kg Fagioli rossi borlotti secchi", price: "€16.50" },
        { name: "1 kg Fagioli bianchi", price: "€3.30" },
        { name: "2 kg Fagioli bianchi", price: "€6.60" },
        { name: "3 kg Fagioli bianchi", price: "€9.90" },
        { name: "4 kg Fagioli bianchi", price: "€13.20" },
        { name: "5 kg Fagioli bianchi", price: "€16.50" },
        { name: "1 kg Ceci", price: "€3.30" },
        { name: "2 kg Ceci", price: "€6.60" },
        { name: "3 kg Ceci", price: "€9.90" },
        { name: "4 kg Ceci", price: "€13.20" },
        { name: "5 kg Ceci", price: "€16.50" },
        { name: "1 kg Lenticchie", price: "€2.75" },
        { name: "2 kg Lenticchie", price: "€5.50" },
        { name: "3 kg Lenticchie", price: "€8.25" },
        { name: "4 kg Lenticchie", price: "€11.00" },
        { name: "5 kg Lenticchie", price: "€13.75" },
        { name: "10 Uova con timbro", price: "€2.20" },
        { name: "20 Uova con timbro", price: "€4.40" },
        { name: "30 Uova con timbro", price: "€6.60" },
        { name: "40 Uova con timbro", price: "€8.80" },
        { name: "50 Uova con timbro", price: "€11.00" },
        { name: "1 kg Pere", price: "€2.20" },
        { name: "2 kg Pere", price: "€4.40" },
        { name: "3 kg Pere", price: "€6.60" },
        { name: "4 kg Pere", price: "€8.80" },
        { name: "5 kg Pere", price: "€11.00" },
        { name: "1 kg Mandarine", price: "€1.98" },
        { name: "2 kg Mandarine", price: "€3.90" },
        { name: "3 kg Mandarine", price: "€5.90" },
        { name: "4 kg Mandarine", price: "€7.90" },
        { name: "5 kg Mandarine", price: "€9.90" },
        { name: "1 kg Broccoli sporchi", price: "€1.10" },
        { name: "2 kg Broccoli sporchi", price: "€2.20" },
        { name: "3 kg Broccoli sporchi", price: "€3.30" },
        { name: "4 kg Broccoli sporchi", price: "€4.40" },
        { name: "5 kg Broccoli sporchi", price: "€5.50" },
        { name: "1 kg Broccoli puliti", price: "€3.30" },
        { name: "2 kg Broccoli puliti", price: "€6.60" },
        { name: "3 kg Broccoli puliti", price: "€9.90" },
        { name: "4 kg Broccoli puliti", price: "€13.20" },
        { name: "5 kg Broccoli puliti", price: "€16.50" },
        { name: "1 kg Kiwi", price: "€1.98" },
        { name: "2 kg Kiwi", price: "€3.96" },
        { name: "3 kg Kiwi", price: "€5.94" },
        { name: "4 kg Kiwi", price: "€7.92" },
        { name: "5 kg Kiwi", price: "€9.90" },
        { name: "1 kg Zucca", price: "€1.10" },
        { name: "2 kg Zucca", price: "€2.20" },
        { name: "3 kg Zucca", price: "€3.30" },
        { name: "4 kg Zucca", price: "€4.40" },
        { name: "5 kg Zucca", price: "€5.50" },
        { name: "1 kg Cicoria coltivata", price: "€1.60" },
        { name: "2 kg Cicoria coltivata", price: "€3.20" },
        { name: "3 kg Cicoria coltivata", price: "€4.80" },
        { name: "4 kg Cicoria coltivata", price: "€6.40" },
        { name: "5 kg Cicoria coltivata", price: "€8.00" },
        { name: "1 kg Arance tarocchi", price: "€1.60" },
        { name: "2 kg Arance tarocchi", price: "€3.20" },
        { name: "3 kg Arance tarocchi", price: "€4.80" },
        { name: "4 kg Arance tarocchi", price: "€6.40" },
        { name: "5 kg Arance tarocchi", price: "€8.00" },
        { name: "1 kg Mandaranci", price: "€2.20" },
        { name: "2 kg Mandaranci", price: "€4.40" },
        { name: "3 kg Mandaranci", price: "€6.60" },
        { name: "4 kg Mandaranci", price: "€8.80" },
        { name: "5 kg Mandaranci", price: "€11.00" },
        { name: "1 pezzo Fragole", price: "€1.40" },
        { name: "2 pezzi Fragole", price: "€2.80" },
        { name: "3 pezzi Fragole", price: "€4.20" },
        { name: "4 pezzi Fragole", price: "€5.60" },
        { name: "5 pezzi Fragole", price: "€7.00" },
        { name: "1 kg Fave", price: "€2.70" },
        { name: "2 kg Fave", price: "€5.40" },
        { name: "3 kg Fave", price: "€8.10" },
        { name: "4 kg Fave", price: "€10.80" },
        { name: "5 kg Fave", price: "€13.50" },
        { name: "1 kg Arance dolci maltesi", price: "€1.10" },
        { name: "2 kg Arance dolci maltesi", price: "€2.20" },
        { name: "3 kg Arance dolci maltesi", price: "€3.30" },
        { name: "4 kg Arance dolci maltesi", price: "€4.40" },
        { name: "5 kg Arance dolci maltesi", price: "€5.50" },
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
      let sum = 0;
      for (let i = 0; i < this.value.length; i++) {
        var price = this.value[i].price.replace("€", "");
        sum += Number(price);
      }
      console.log(sum);
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
        sum: sum + " €",
      };

      db.collection("locals")
        .add(order)
        .then(() => {
          this.$router.push({
            path: "/ordercomplete",
            query: {
              elem1: this.name1,
              elem2: this.address1,
              elem3: sum + " €",
              elem4: this.value,
              elem5: this.cellular1,
            },
          });
        });
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
    background-image: url("https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?t=st=1648036953~exp=1648037553~hmac=2af7fd38914804447465654639094671e42579e67617616e6dcbbf026564bb54&w=1060");
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
    margin-bottom: 2.5rem;
  }

  .image {
    width: 75vh;
    height: 75vh;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
    background-image: url("https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?t=st=1648036953~exp=1648037553~hmac=2af7fd38914804447465654639094671e42579e67617616e6dcbbf026564bb54&w=1060");
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
