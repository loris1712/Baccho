<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew" style="background-image: url(img/theme/img_12.jpg); background-position: center;">
                    <span style="background: rgb(0 0 0 / 25%); width: 108%; height: 100%; border-radius: 0;"></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-1  text-white">
                                    <span>Prova</span> il pane artigianale <span>di Gragnano</span>
                                </h1>
                                <p class="lead  text-white">Il pane prodotto in bottega da artigiani del 
                                    settore secondo le antiche tecniche dei maestri 
                                    fornai dei Monti Lattari.</p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href="#ordinaFamiglia"
                                                 class="mb-3 mb-sm-0 defaultBtn"
                                                 icon="fa fa-plus">
                                        Ordina ora 
                                    </base-button>
                                    <base-button tag="a"
                                                 href="#ordinaFamiglia"
                                                 class="mb-3 mb-sm-0"
                                                 type="white"
                                                 icon="fa fa-info">
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
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Supporto 24/7</h6>
                                    <div>
                                        <badge type="primary" rounded>Online</badge>
                                        <badge type="primary" rounded>Ovunque</badge>
                                        <badge type="primary" rounded>Per te</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Qualità garantita</h6>
                                    
                                    <div>
                                        <badge type="success" rounded>Genuino</badge>
                                        <badge type="success" rounded>Amalfitana</badge>
                                        <badge type="success" rounded>Cilento</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-send" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Spedizione free dopo i €25</h6>
                                    
                                    <div>
                                        <badge type="warning" rounded>Spedizione</badge>
                                        <badge type="warning" rounded>Grayis</badge>
                                        <badge type="warning" rounded>Sopra i €25</badge>
                                    </div>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/theme/flyer_baccho_2.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-air-baloon" class="mb-5" size="lg" type="success" shadow
                                  rounded></icon>
                            <h3>Ordina con Baccho</h3>
                            <p>Il modo più semplice per ordinare cibo genuino, di qualità e riceverlo direttamente a casa.</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-like-2"></badge>
                                        <h6 class="mb-0">Facile da utilizzare.</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-check-bold"></badge>
                                        <h6 class="mb-0">Cibo genuino.</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-delivery-fast"></badge>
                                        <h6 class="mb-0">In 24 ore siamo da te.</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section section-shaped my-0 overflow-hidden" id="ordinaFamiglia">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew" style="background-image: url(img/theme/gallery_09.jpg)!important; height: 100%;">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid">
                    <div class="col-lg-6 order-lg-1 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <div class="pr-md-5">
                            <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-delivery-fast" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Dettagli sull'ordine</h4>
                            </div>
                        </div>
                            <ul class="list-unstyled mt-3">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge circle class="mr-3 bg-gradient-white" icon="ni ni-bell-55"></badge>
                                        <h6 class="mb-0 text-white">Spedizione gratuita per gli ordini superiori ai €20.</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge circle class="mr-3 bg-gradient-white" icon="ni ni-bell-55"></badge>
                                        <h6 class="mb-0 text-white">Costo di spedizone di €2 per gli ordini inferiori a €20.</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge circle class="mr-3 bg-gradient-white" icon="ni ni-bell-55"></badge>
                                        <h6 class="mb-0 text-white">Pagamento alla consegna.</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3 mb-3">
                            <div>
                                <icon name="ni ni-delivery-fast" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Ordina ora per la tua famiglia</h4>
                            </div>
                        </div>
                        <card gradient="secondary" shadow body-classes="p-lg-4">
                            <base-input class=""
                                        placeholder="Nome e cognome"
                                        addon-left-icon="ni ni-user-run" name="name1"
                                        v-model="name1">
                            </base-input>
                            <base-input placeholder="Email"
                                        addon-left-icon="ni ni-email-83" name="email1"
                                        v-model="email1">
                            </base-input>
                            <base-input placeholder="Indirizzo di consegna e numero civico"
                                        addon-left-icon="ni ni-pin-3" name="address1"
                                        v-model="address1">
                            </base-input>
                            <base-input placeholder="Cellulare"
                                        addon-left-icon="ni ni-mobile-button" name="cellular1"
                                        v-model="cellular1">
                            </base-input>

                            <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seleziona il cibo desiderato" :custom-label="customLabel" label="name" track-by="name" :preselect-first="false" style="margin-bottom: 1rem; border: 0.0625rem solid rgba(0, 0, 0, 0.05);">
                                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} prodotti selezionati</span></template>
                            </multiselect>

                            <base-input placeholder="Orario di consegna" type="time"
                                        addon-left-icon="ni ni-watch-time" name="time1"
                                        v-model="time1">
                            </base-input>
                            <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" rows="4"
                                              cols="80" placeholder="Aggiungi ulteriori informazioni" name="note1"
                                        v-model="note1"></textarea>
                            </base-input>
                            <base-button type="default defaultBtn" round block size="lg" @click="sendOrder">
                                Conferma ordine
                            </base-button>
                            
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="default"
                      no-body
                      shadow-size="lg"
                      class="border-0">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">Vuoi diventare un rider di Baccho?</h3>
                                <p class="lead text-white mt-3">Contattaci e scopri come diventare un rider di Baccho.</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="mailto:infobaccho@gmail.com"
                                             type="white" block size="lg">
                                    Contattaci
                                </base-button>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 shape-skew" style="background-image: url(img/theme/foto6.jpg)!important; height: 100%;">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Cos'è Baccho</h2>
                        <p class="lead text-white">La piattaforma online dove puoi ordinare solo 
                            cibo genuino e di qualità, proveniente 
                            dalle terre direttamente sulla tua tavola.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5" style="text-align: center;">
                    <div class="col-lg-4">
                        <icon name="ni ni-active-40" size="lg" gradient="white" shadow round color="warning"></icon>
                        <h5 class="text-white mt-3">Seleziona i prodotti</h5>
                        
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-check-bold" size="lg" gradient="white" shadow round color="warning"></icon>
                        <h5 class="text-white mt-3">Conferma l'ordine</h5>
                        
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-delivery-fast" size="lg" gradient="white" shadow round color="warning"></icon>
                        <h5 class="text-white mt-3">Entro 24 ore saremo da te</h5>
                        
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="display-3">Frutta &amp; verdura
                            <span class="" style="color: #b00a92;">per ristoranti e pizzerie</span>
                        </h2>
                        <p class="lead">Se sei un ristorante, una pizzeria o un locale privato, puoi ricevere i nostri prodotti 
                            tutti i giorni agli orari che preferisci, per iniziare clicca qui.</p>
                        <div class="btn-wrapper">
                            <router-link to="locals"
                               class="btn defaultBtn mb-3 mb-sm-0 text-white">Scopri di più</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import Vue from 'vue';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Multiselect from 'vue-multiselect';
export default {
  name: "home",
  components: {Multiselect},
  data () {
      return {
        value: [],
        options: [
        { name: '1 pezzo pane di gragnano', price: '€1.80' },
        { name: '2 pezzi pane di gragnano', price: '€3.60' },
        { name: '3 pezzi pane di gragnano', price: '€5.40' },
        { name: '4 pezzi pane di gragnano', price: '€7.20' },
        { name: '5 pezzi pane di gragnano', price: '€9.00' },
        { name: '1 pezzo panuozzo di gragnano', price: '€1.80' },
        { name: '2 pezzi panuozzo di gragnano', price: '€3.60' },
        { name: '3 pezzi panuozzo di gragnano', price: '€5.40' },
        { name: '4 pezzi panuozzo di gragnano', price: '€7.20' },
        { name: '5 pezzi panuozzo di gragnano', price: '€9.00' },
        { name: '1 pezzo frusta di gragnano', price: '€3.00' },
        { name: '2 pezzi frusta di gragnano', price: '€6.00' },
        { name: '3 pezzi frusta di gragnano', price: '€9.00' },
        { name: '4 pezzi frusta di gragnano', price: '€12.00' },
        { name: '5 pezzi frusta di gragnano', price: '€15.00' },
        { name: '1 kg Mele miste', price: '€1.50' },
        { name: '2 kg Mele miste', price: '€3.00' },
        { name: '3 kg Mele miste', price: '€4.50' },
        { name: '4 kg Mele miste', price: '€6.00' },
        { name: '5 kg Mele miste', price: '€7.50' },
        { name: '1 kg Arance', price: '€1.70' },
        { name: '2 kg Arance', price: '€3.40' },
        { name: '3 kg Arance', price: '€5.10' },
        { name: '4 kg Arance', price: '€6.80' },
        { name: '5 kg Arance', price: '€8.50' },
        { name: '1 kg Arance per premuta', price: '€1.50' },
        { name: '2 kg Arance per premuta', price: '€3.00' },
        { name: '3 kg Arance per premuta', price: '€4.50' },
        { name: '4 kg Arance per premuta', price: '€6.00' },
        { name: '5 kg Arance per premuta', price: '€7.50' },
        { name: '1 pezzo Carote fascio', price: '€1.20' },
        { name: '2 pezzi Carote fascio', price: '€2.40' },
        { name: '3 pezzi Carote fascio', price: '€3.60' },
        { name: '4 pezzi Carote fascio', price: '€4.80' },
        { name: '5 pezzi Carote fascio', price: '€6.00' },
        { name: '1 pezzo Cipolline fresche', price: '€0.90' },
        { name: '2 pezzi Cipolline fresche', price: '€1.80' },
        { name: '3 pezzi Cipolline fresche', price: '€2.70' },
        { name: '4 pezzi Cipolline fresche', price: '€3.60' },
        { name: '5 pezzi Cipolline fresche', price: '€4.50' },
        { name: '1 pezzo Finocchi', price: '€1.20' },
        { name: '2 pezzi Finocchi', price: '€2.40' },
        { name: '3 pezzi Finocchi', price: '€3.60' },
        { name: '4 pezzi Finocchi', price: '€4.80' },
        { name: '5 pezzi Finocchi', price: '€6.00' },
        { name: '1 pezzo Verza', price: '€1.20' },
        { name: '2 pezzi Verza', price: '€2.40' },
        { name: '3 pezzi Verza', price: '€3.60' },
        { name: '4 pezzi Verza', price: '€4.80' },
        { name: '5 pezzi Verza', price: '€6.00' },
        { name: '1 pezzo Cavolfiori', price: '€1.20' },
        { name: '2 pezzi Cavolfiori', price: '€2.40' },
        { name: '3 pezzi Cavolfiori', price: '€3.60' },
        { name: '4 pezzi Cavolfiori', price: '€4.80' },
        { name: '5 pezzi Cavolfiori', price: '€6.00' },
        { name: '1 kg Bietola', price: '€1.50' },
        { name: '2 kg Bietola', price: '€3.00' },
        { name: '3 kg Bietola', price: '€4.50' },
        { name: '4 kg Bietola', price: '€6.00' },
        { name: '5 kg Bietola', price: '€7.50' },
        { name: '1 kg Bietoline', price: '€1.50' },
        { name: '2 kg Bietoline', price: '€3.00' },
        { name: '3 kg Bietoline', price: '€4.50' },
        { name: '4 kg Bietoline', price: '€6.00' },
        { name: '5 kg Bietoline', price: '€7.50' },
        { name: '1 kg Spinaci', price: '€1.50' },
        { name: '2 kg Spinaci', price: '€3.00' },
        { name: '3 kg Spinaci', price: '€4.50' },
        { name: '4 kg Spinaci', price: '€6.00' },
        { name: '5 kg Spinaci', price: '€7.50' },
        { name: '1 kg Scarole lisce e ricce', price: '€1.20' },
        { name: '2 kg Scarole lisce e ricce', price: '€2.40' },
        { name: '3 kg Scarole lisce e ricce', price: '€3.60' },
        { name: '4 kg Scarole lisce e ricce', price: '€4.80' },
        { name: '5 kg Scarole lisce e ricce', price: '€6.00' },
        { name: '1 pezzo Insalate miste', price: '€0.80' },
        { name: '2 pezzi Insalate miste', price: '€1.60' },
        { name: '3 pezzi Insalate miste', price: '€2.40' },
        { name: '4 pezzi Insalate miste', price: '€3.20' },
        { name: '5 pezzi Insalate miste', price: '€4.00' },
        { name: '1 kg Aglio grande', price: '€4.00' },
        { name: '2 kg Aglio grande', price: '€8.00' },
        { name: '3 kg Aglio grande', price: '€12.00' },
        { name: '4 kg Aglio grande', price: '€16.00' },
        { name: '5 kg Aglio grande', price: '€20.00' },
        { name: '1 kg Cipolle', price: '€1.20' },
        { name: '2 kg Cipolle', price: '€2.40' },
        { name: '3 kg Cipolle', price: '€3.60' },
        { name: '4 kg Cipolle', price: '€4.80' },
        { name: '5 kg Cipolle', price: '€6.00' },
        { name: '1 kg Patate nuove', price: '€0.90' },
        { name: '2 kg Patate nuove', price: '€1.80' },
        { name: '3 kg Patate nuove', price: '€2.70' },
        { name: '4 kg Patate nuove', price: '€3.60' },
        { name: '5 kg Patate nuove', price: '€4.50' },
        { name: '1 kg Limoni', price: '€2.20' },
        { name: '2 kg Limoni', price: '€4.40' },
        { name: '3 kg Limoni', price: '€6.60' },
        { name: '4 kg Limoni', price: '€8.80' },
        { name: '5 kg Limoni', price: '€11.00' },
        { name: '1 kg Banane', price: '€1.20' },
        { name: '2 kg Banane', price: '€2.40' },
        { name: '3 kg Banane', price: '€3.60' },
        { name: '4 kg Banane', price: '€4.80' },
        { name: '5 kg Banane', price: '€6.00' },
        { name: '1 kg Ananas', price: '€1.70' },
        { name: '2 kg Ananas', price: '€3.40' },
        { name: '3 kg Ananas', price: '€5.10' },
        { name: '4 kg Ananas', price: '€6.80' },
        { name: '5 kg Ananas', price: '€8.50' },
        { name: '1 kg Melone giallo', price: '€1.20' },
        { name: '2 kg Melone giallo', price: '€2.40' },
        { name: '3 kg Melone giallo', price: '€3.60' },
        { name: '4 kg Melone giallo', price: '€4.80' },
        { name: '5 kg Melone giallo', price: '€6.00' },
        { name: '1 kg Pomodori per insalata', price: '€1.50' },
        { name: '2 kg Pomodori per insalata', price: '€3.00' },
        { name: '3 kg Pomodori per insalata', price: '€4.50' },
        { name: '4 kg Pomodori per insalata', price: '€6.00' },
        { name: '5 kg Pomodori per insalata', price: '€7.50' },
        { name: '1 kg Pomodorini', price: '€2.20' },
        { name: '2 kg Pomodorini', price: '€4.40' },
        { name: '3 kg Pomodorini', price: '€6.60' },
        { name: '4 kg Pomodorini', price: '€8.80' },
        { name: '5 kg Pomodorini', price: '€11.00' },
        { name: '1 kg Zucchine', price: '€1.70' },
        { name: '2 kg Zucchine', price: '€3.40' },
        { name: '3 kg Zucchine', price: '€5.10' },
        { name: '4 kg Zucchine', price: '€6.80' },
        { name: '5 kg Zucchine', price: '€8.50' },
        { name: '1 kg Melanzane lunghe e tonde', price: '€1.50' },
        { name: '2 kg Melanzane lunghe e tonde', price: '€3.00' },
        { name: '3 kg Melanzane lunghe e tonde', price: '€4.50' },
        { name: '4 kg Melanzane lunghe e tonde', price: '€6.00' },
        { name: '5 kg Melanzane lunghe e tonde', price: '€7.50' },
        { name: '1 kg Peperoni', price: '€1.50' },
        { name: '2 kg Peperoni', price: '€3.00' },
        { name: '3 kg Peperoni', price: '€4.50' },
        { name: '4 kg Peperoni', price: '€6.00' },
        { name: '5 kg Peperoni', price: '€7.50' },
        { name: '1 kg Cetrioli', price: '€1.50' },
        { name: '2 kg Cetrioli', price: '€3.00' },
        { name: '3 kg Cetrioli', price: '€4.50' },
        { name: '4 kg Cetrioli', price: '€6.00' },
        { name: '5 kg Cetrioli', price: '€7.50' },
        { name: '1 kg Fagioli rossi', price: '€2.70' },
        { name: '2 kg Fagioli rossi', price: '€5.40' },
        { name: '3 kg Fagioli rossi', price: '€8.10' },
        { name: '4 kg Fagioli rossi', price: '€10.80' },
        { name: '5 kg Fagioli rossi', price: '€13.50' },
        { name: '1 kg Fagioli bianchi', price: '€4.20' },
        { name: '2 kg Fagioli bianchi', price: '€8.40' },
        { name: '3 kg Fagioli bianchi', price: '€12.60' },
        { name: '4 kg Fagioli bianchi', price: '€16.80' },
        { name: '5 kg Fagioli bianchi', price: '€21.00' },
        { name: '10 Uova', price: '€2.20' },
        { name: '20 Uova', price: '€4.40' },
        { name: '30 Uova', price: '€6.60' },
        { name: '40 Uova', price: '€8.80' },
        { name: '50 Uova', price: '€11.00' },
        { name: '1 kg Fichi', price: '€1.70' },
        { name: '2 kg Fichi', price: '€3.40' },
        { name: '3 kg Fichi', price: '€5.10' },
        { name: '4 kg Fichi', price: '€6.80' },
        { name: '5 kg Fichi', price: '€8.50' },
        { name: '1 kg Pesche', price: '€2.20' },
        { name: '2 kg Pesche', price: '€4.40' },
        { name: '3 kg Pesche', price: '€6.60' },
        { name: '4 kg Pesche', price: '€8.80' },
        { name: '5 kg Pesche', price: '€11.00' },
        { name: '1 kg Perine', price: '€2.20' },
        { name: '2 kg Perine', price: '€4.40' },
        { name: '3 kg Perine', price: '€6.60' },
        { name: '4 kg Perine', price: '€8.80' },
        { name: '5 kg Perine', price: '€11.00' },
        { name: '1 kg Noci secche', price: '€3.70' },
        { name: '2 kg Noci secche', price: '€7.40' },
        { name: '3 kg Noci secche', price: '€11.10' },
        { name: '4 kg Noci secche', price: '€14.80' },
        { name: '5 kg Noci secche', price: '€18.50' },
        { name: '1 kg Broccoli sporchi', price: '€2.20' },
        { name: '2 kg Broccoli sporchi', price: '€4.40' },
        { name: '3 kg Broccoli sporchi', price: '€6.60' },
        { name: '4 kg Broccoli sporchi', price: '€8.80' },
        { name: '5 kg Broccoli sporchi', price: '€11.00' },
        { name: '1 kg Uva', price: '€2.20' },
        { name: '2 kg Uva', price: '€4.40' },
        { name: '3 kg Uva', price: '€6.60' },
        { name: '4 kg Uva', price: '€8.80' },
        { name: '5 kg Uva', price: '€11.00' },
        { name: '1 vaschetta Cachi morbidi', price: '€1.20' },
        { name: '2 vaschetta Cachi morbidi', price: '€2.40' },
        { name: '3 vaschetta Cachi morbidi', price: '€3.60' },
        { name: '4 vaschetta Cachi morbidi', price: '€4.80' },
        { name: '5 vaschetta Cachi morbidi', price: '€6.00' },
        { name: '1 kg Cachi duri', price: '€1.20' },
        { name: '2 kg Cachi duri', price: '€2.40' },
        { name: '3 kg Cachi duri', price: '€3.60' },
        { name: '4 kg Cachi duri', price: '€4.80' },
        { name: '5 kg Cachi duri', price: '€6.00' },
        { name: '1 kg Zucca', price: '€1.20' },
        { name: '2 kg Zucca', price: '€2.40' },
        { name: '3 kg Zucca', price: '€3.60' },
        { name: '4 kg Zucca', price: '€4.80' },
        { name: '5 kg Zucca', price: '€6.00' },
        { name: '1 kg Cicoria coltivata', price: '€1.50' },
        { name: '2 kg Cicoria coltivata', price: '€3.00' },
        { name: '3 kg Cicoria coltivata', price: '€4.50' },
        { name: '4 kg Cicoria coltivata', price: '€6.00' },
        { name: '5 kg Cicoria coltivata', price: '€7.50' },
        ],
        name1: '',
        email1: '',
        cellular1: '',
        address1: '',
        products1: '',
        time1: '',
        note1: '',
        sum1: '',
      }
    },
    mounted(){
        /*const db = firebase.initializeApp({ projectId: 'baccho-86489' }).firestore();
        db.collection('orders')
                    .get()
                    .then(querySnapshot => {
                        const documents = querySnapshot.docs.map(doc => doc.data())
                        console.log(documents);
        });*/
        
    },
    methods: {
        customLabel ({ name, price }) {
            return `${name} – ${price}`
        },

        sendOrder() {
            const current = new Date();
			const date = current.getDate()+'-'+(current.getMonth()+1)+'-'+current.getFullYear();
			const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
			const dateTime = date +' '+ time;
            const db = firebase.initializeApp({ projectId: 'baccho-86489' }).firestore();
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

            db.collection('orders').add(order).then(() => {
                        console.log("Done");
            });
        },

    }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
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
</style>
