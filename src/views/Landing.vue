<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero background-image: url(img/theme/img_12.jpg); -->
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
                  Consegniamo la tua spesa genuina a
                  <span style="color: #b00a92;">casa</span>
                </h1>
                <p class="">
                  Il pane prodotto in bottega da artigiani del settore secondo
                  le antiche tecniche dei maestri fornai dei Monti Lattari.
                </p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="#ordinaFamiglia"
                    class="mb-3 mb-sm-0 defaultBtn"
                    icon="fa fa-plus"
                  >
                    Ordina ora
                  </base-button>
                  <base-button
                    tag="a"
                    href="#ordinaFamiglia"
                    class="mb-3 mb-sm-0 secondDefaultBtn"
                    type="white"
                    icon="fa fa-info"
                  >
                    Scopri di più
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
                  Consegniamo la tua spesa genuina a
                  <span style="color: #b00a92;">casa</span>
                </h1>
                <p class="">
                  Frutta, verdura e pane fresco, vino, olio, tutto dalle nostre
                  terre!
                </p>
                <div class="btn-wrapper">
                  <base-button
                    tag="a"
                    href="#ordinaFamiglia2"
                    class="mb-3 mb-sm-0 defaultBtn"
                    icon="fa fa-plus"
                  >
                    Ordina ora
                  </base-button>
                  <base-button
                    tag="a"
                    href="#ordinaFamiglia"
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

    <section
      class="section-shaped my-0 EasterSezWeb"
      style="background: white;"
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
                Baccho c'è anche a
                <span style="color: #b00a92;">Pasqua!</span>
              </h1>
              <p class="">
                Ordina il cesto Baccho di Pasqua, per te o da regalare. Al suo
                interno: Colomba Domori e Prosecco Ca’ rosa extra dry.
              </p>

              <p class="">
                Prezzo
                <span style="font-weight: 600; color: #b00a92;">€ 40</span>
                con spedizione gratuita.
              </p>

              <h3 style="font-weight: 700;">
                Ordina il cesto Baccho per Pasuqa
                <span style="color: #b00a92;">qui</span>
              </h3>
              <div style="width: 80%;">
                <base-input
                  class=""
                  placeholder="Nome e cognome"
                  name="name2"
                  v-model="name2"
                >
                </base-input>
                <base-input placeholder="Email" name="email2" v-model="email2">
                </base-input>
                <base-input
                  placeholder="Indirizzo di consegna e numero civico"
                  name="address2"
                  v-model="address2"
                >
                </base-input>
                <base-input
                  placeholder="Cellulare"
                  name="cellular2"
                  v-model="cellular2"
                >
                </base-input>

                <base-input
                  placeholder="Orario di consegna"
                  type="time"
                  name="time2"
                  v-model="time2"
                >
                </base-input>
                <base-input class="mb-4">
                  <textarea
                    class="form-control form-control-alternative"
                    rows="4"
                    cols="80"
                    placeholder="Aggiungi ulteriori informazioni"
                    name="note2"
                    v-model="note2"
                  ></textarea>
                </base-input>
                <base-button
                  type="default defaultBtn"
                  round
                  block
                  size="lg"
                  @click="sendOrder_Easter"
                >
                  Conferma ordine
                </base-button>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="image_1"
                style="background-image: url(https://domori.com/3408-large_default/colomba-al-cioccolato-domori-1-kg.jpg);"
              ></div>
              <div
                class="image_2"
                style="background-image: url(https://mtfn-assets.s3.eu-central-1.amazonaws.com/baccho/chest.jpg);"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section-shaped my-0 EasterSezApp"
      style="background: white;"
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
              <div
                class="image_1"
                style="background-image: url(https://domori.com/3408-large_default/colomba-al-cioccolato-domori-1-kg.jpg);"
              ></div>
              <div
                class="image_2"
                style="background-image: url(https://mtfn-assets.s3.eu-central-1.amazonaws.com/baccho/chest.jpg);"
              ></div>
            </div>
            <div class="col-lg-6" style="text-align: center;">
              <h1 class="">
                Baccho c'è anche a
                <span style="color: #b00a92;">Pasqua!</span>
              </h1>
              <p class="">
                Ordina il cesto Baccho di Pasqua, per te o da regalare. Al suo
                interno: Colomba Domori e Prosecco Ca’ rosa extra dry.
              </p>

              <p class="">
                Prezzo
                <span style="font-weight: 600; color: #b00a92;">€ 40</span>
                con spedizione gratuita.
              </p>

              <h3 style="font-weight: 700;">
                Ordina il cesto Baccho per Pasuqa
                <span style="color: #b00a92;">qui</span>
              </h3>
              <div>
                <base-input
                  class=""
                  placeholder="Nome e cognome"
                  name="name2"
                  v-model="name2"
                >
                </base-input>
                <base-input placeholder="Email" name="email2" v-model="email2">
                </base-input>
                <base-input
                  placeholder="Indirizzo di consegna e numero civico"
                  name="address2"
                  v-model="address2"
                >
                </base-input>
                <base-input
                  placeholder="Cellulare"
                  name="cellular2"
                  v-model="cellular2"
                >
                </base-input>

                <base-input
                  placeholder="Orario di consegna"
                  type="time"
                  name="time2"
                  v-model="time2"
                >
                </base-input>
                <base-input class="mb-4">
                  <textarea
                    class="form-control form-control-alternative"
                    rows="4"
                    cols="80"
                    placeholder="Aggiungi ulteriori informazioni"
                    name="note2"
                    v-model="note2"
                  ></textarea>
                </base-input>
                <base-button
                  type="default defaultBtn"
                  round
                  block
                  size="lg"
                  @click="sendOrder_Easter"
                >
                  Conferma ordine
                </base-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg pt-lg-0 mt--200">
      <div class="containerB" style="margin-top: 3rem;">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-3">
                <card class="border-0" hover shadow body-classes="">
                  <div
                    class="cardImage"
                    style="background-image: url(https://img.freepik.com/free-photo/fruits-vegetables_1112-314.jpg?t=st=1647903618~exp=1647904218~hmac=3810e23715bd8cb56b6a0e76bf1a26da2e366ae26a809cc668e13937c78bfa35&w=1060)"
                  ></div>
                  <div class="cardText">
                    <h6 class="cardTitle">Ordina frutta genuina</h6>
                    <h6 class="cardTitle2">Dalla costiera cilentana</h6>
                  </div>
                </card>
              </div>
              <div class="col-lg-3">
                <card class="border-0" hover shadow body-classes="">
                  <div
                    class="cardImage"
                    style="background-image: url(https://img.freepik.com/free-photo/different-types-bread-made-from-wheat-flour_140725-5648.jpg?t=st=1647903765~exp=1647904365~hmac=f12810dcc79c6788e8da33177b0a7effb69969d30c24c22fcbd653769fd8d9c9&w=1060)"
                  ></div>
                  <div class="cardText">
                    <h6 class="cardTitle">Ordina pane fresco</h6>
                    <h6 class="cardTitle2">
                      Prodotto da artigiani di Gragnano
                    </h6>
                  </div>
                </card>
              </div>
              <div class="col-lg-3">
                <card class="border-0" hover shadow body-classes="">
                  <div
                    class="cardImage"
                    style="background-image: url(https://img.freepik.com/free-photo/side-view-vegetables-with-spices_141793-2612.jpg?t=st=1647903790~exp=1647904390~hmac=a90b299f45ea05112d4f8d0024dd66f5e41b22dfb3e1ba65a666eb5dd222e978&w=1060)"
                  ></div>
                  <div class="cardText">
                    <h6 class="cardTitle">Ordina verdura genuina</h6>
                    <h6 class="cardTitle2">Dalle terre campane</h6>
                  </div>
                </card>
              </div>

              <div class="col-lg-3">
                <card class="border-0" hover shadow body-classes="">
                  <div
                    class="cardImage"
                    style="background-image: url(https://img.freepik.com/free-photo/healthy-ingredients-kitchen-table-spaghetti-olive-oil-t_1220-819.jpg?t=st=1648036953~exp=1648037553~hmac=ba1e452d91f86a6923a02049e5bdbbfae9a9b0e4d508adf538195eae3fdc014b&w=1060)"
                  ></div>
                  <div class="cardText">
                    <h6 class="cardTitle">Ordina olio di qualità</h6>
                    <h6 class="cardTitle2">Dalle terre campane</h6>
                  </div>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section section-lg thirdSezWeb"
      style="padding-left: 10rem;
    padding-right: 10rem;"
    >
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img
              src="img/theme/flyer_baccho_2.png"
              class="img-fluid floating"
            />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <icon
                name="ni ni-air-baloon"
                class="mb-5"
                size="lg"
                type="success"
                shadow
                rounded
              ></icon>
              <h3
                style="font-weight: 700; font-size: 40px; color: rgb(52 52 52);"
              >
                Ordina con Baccho
              </h3>
              <p style="color: #666666;">
                Il modo più semplice per ordinare cibo genuino, di qualità e
                riceverlo direttamente a casa.
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-like-2"
                    ></badge>
                    <h6 class="mb-0" style="color: #666666;">
                      Facile da utilizzare.
                    </h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-check-bold"
                    ></badge>
                    <h6 class="mb-0" style="color: #666666;">
                      Cibo genuino controllato.
                    </h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-delivery-fast"
                    ></badge>
                    <h6 class="mb-0" style="color: #666666;">
                      In 24 ore siamo da te.
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg thirdSezApp">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img
              src="img/theme/flyer_baccho_2.png"
              class="img-fluid floating"
            />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5 thirdSezDivApp">
              <icon
                name="ni ni-air-baloon"
                class="mb-5"
                size="lg"
                type="success"
                shadow
                rounded
              ></icon>
              <h3
                style="font-weight: 700; font-size: 40px; color: rgb(52 52 52);"
              >
                Ordina con Baccho
              </h3>
              <p style="color: #666666;">
                Il modo più semplice per ordinare cibo genuino, di qualità e
                riceverlo direttamente a casa.
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-like-2"
                    ></badge>
                    <h6 class="mb-0" style="color: #666666;">
                      Facile da utilizzare.
                    </h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-check-bold"
                    ></badge>
                    <h6 class="mb-0" style="color: #666666;">
                      Cibo genuino controllato.
                    </h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-delivery-fast"
                    ></badge>
                    <h6 class="mb-0" style="color: #666666;">
                      In 24 ore siamo da te.
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section section section-shaped my-0 overflow-hidden fourthSezWeb"
      id="ordinaFamiglia"
    >
      <div
        class="shape shape-style-1 bg-gradient-warning shape-skew"
        style="background-image: url(img/theme/gallery_09.jpg)!important; height: 100%;"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        class="container py-0"
        style="max-width: none;
    padding-left: 10rem;
    padding-right: 10rem;"
      >
        <div class="row row-grid">
          <div class="col-lg-6 order-lg-1 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <div class="pr-md-5">
                <div class="d-flex px-3">
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
                    <h4 class="display-3 text-white">Dettagli sull'ordine</h4>
                  </div>
                </div>
                <ul class="list-unstyled mt-3" style="padding-left: 2rem;">
                  <li class="py-2">
                    <div class="d-flex align-items-center">
                      <badge
                        circle
                        class="mr-3 bg-gradient-white"
                        icon="ni ni-bell-55"
                      ></badge>
                      <h6 class="mb-0 text-white">
                        Spedizione gratuita per gli ordini superiori ai €25.
                      </h6>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="d-flex align-items-center">
                      <badge
                        circle
                        class="mr-3 bg-gradient-white"
                        icon="ni ni-bell-55"
                      ></badge>
                      <h6 class="mb-0 text-white">
                        Costo di spedizone di €2,50 per gli ordini inferiori a
                        €25.
                      </h6>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="d-flex align-items-center">
                      <badge
                        circle
                        class="mr-3 bg-gradient-white"
                        icon="ni ni-bell-55"
                      ></badge>
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
                <icon
                  name="ni ni-delivery-fast"
                  size="lg"
                  class="bg-gradient-white"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h4 class="display-3 text-white">
                  Ordina ora per la tua famiglia
                </h4>
              </div>
            </div>
            <card
              style="border-radius: 0px; background: transparent; border: 0;"
            >
              <base-input
                class=""
                placeholder="Nome e cognome"
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

    <section
      class="section section section-shaped my-0 overflow-hidden fourthSezApp"
      id="ordinaFamiglia2"
    >
      <div
        class="shape shape-style-1 bg-gradient-warning shape-skew"
        style="background-image: url(img/theme/gallery_09.jpg)!important; height: 100%;"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0" style="max-width: none;">
        <div class="row row-grid">
          <div class="col-lg-6 order-lg-1 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <div class="pr-md-5">
                <div class="">
                  <div class="">
                    <h4 class="display-3 text-white">Dettagli sull'ordine</h4>
                  </div>
                </div>
                <ul class="list-unstyled mt-3" style="text-align: center;">
                  <li class="py-2">
                    <div class="align-items-center">
                      <h6 class="mb-0 text-white">
                        Spedizione gratuita per gli ordini superiori ai €25.
                      </h6>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="align-items-center">
                      <h6 class="mb-0 text-white">
                        Costo di spedizone di €2,50 per gli ordini inferiori a
                        €25.
                      </h6>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="align-items-center">
                      <h6 class="mb-0 text-white">Pagamento alla consegna.</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="d-flex mb-3">
              <div class="">
                <h4 class="display-3 text-white">
                  Ordina ora per la tua famiglia
                </h4>
              </div>
            </div>
            <card
              style="border-radius: 0px; background: transparent; border: 0;"
            >
              <base-input
                class=""
                placeholder="Nome e cognome"
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
            <div class="row align-items-center riderDiv">
              <div class="col-lg-8">
                <h3 style="color: #b00a92 !important; font-weight: 700;">
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
    <section class="section section-shaped my-0 overflow-hidden sixthSezWeb">
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
            <h2 class="display-3">
              Cos'è Baccho
            </h2>
            <p class="lead text-white">
              La piattaforma online dove puoi ordinare solo cibo genuino e di
              qualità, proveniente dalle terre direttamente sulla tua tavola.
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
    <section class="section section-lg seventhSezWeb">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3">
              Frutta &amp; verdura
              <span style="color: #b00a92; font-weight: 700;"
                >per ristoranti e pizzerie</span
              >
            </h2>
            <p class="lead">
              Se sei un ristorante, una pizzeria o un locale privato, puoi
              ricevere i nostri prodotti tutti i giorni agli orari che
              preferisci, per iniziare clicca qui.
            </p>
            <div class="btn-wrapper">
              <router-link
                to="locals"
                class="btn defaultBtn mb-3 mb-sm-0 text-white"
                >Scopri di più</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firestorePlugin } from "vuefire";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Multiselect from "vue-multiselect";
export default {
  name: "home",
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
        { name: "1 kg Mele miste", price: "€1.56" },
        { name: "2 kg Mele miste", price: "€3.12" },
        { name: "3 kg Mele miste", price: "€4.68" },
        { name: "4 kg Mele miste", price: "€6.24" },
        { name: "5 kg Mele miste", price: "€7.80" },
        { name: "1 kg Mele annurche piccole", price: "€1.20" },
        { name: "2 kg Mele annurche piccole", price: "€2.40" },
        { name: "3 kg Mele annurche piccole", price: "€3.60" },
        { name: "4 kg Mele annurche piccole", price: "€4.80" },
        { name: "5 kg Mele annurche piccole", price: "€6.00" },
        { name: "1 kg Mele annurche grandi", price: "€2.16" },
        { name: "2 kg Mele annurche grandi", price: "€4.32" },
        { name: "3 kg Mele annurche grandi", price: "€6.42" },
        { name: "4 kg Mele annurche grandi", price: "€9.02" },
        { name: "5 kg Mele annurche grandi", price: "€11.18" },
        { name: "1 kg Arance", price: "€1.44" },
        { name: "2 kg Arance", price: "€2.88" },
        { name: "3 kg Arance", price: "€4.32" },
        { name: "4 kg Arance", price: "€5.76" },
        { name: "5 kg Arance", price: "€7.20" },
        { name: "1 kg Arance per premuta", price: "€1.00" },
        { name: "2 kg Arance per premuta", price: "€2.00" },
        { name: "3 kg Arance per premuta", price: "€3.00" },
        { name: "4 kg Arance per premuta", price: "€4.00" },
        { name: "5 kg Arance per premuta", price: "€5.00" },
        { name: "1 pezzo Carote fascio", price: "€1.20" },
        { name: "2 pezzi Carote fascio", price: "€2.40" },
        { name: "3 pezzi Carote fascio", price: "€3.60" },
        { name: "4 pezzi Carote fascio", price: "€4.80" },
        { name: "5 pezzi Carote fascio", price: "€6.00" },
        { name: "1 pezzo Cipolline fresche", price: "€0.60" },
        { name: "2 pezzi Cipolline fresche", price: "€1.20" },
        { name: "3 pezzi Cipolline fresche", price: "€1.80" },
        { name: "4 pezzi Cipolline fresche", price: "€2.40" },
        { name: "5 pezzi Cipolline fresche", price: "€3.00" },
        { name: "1 pezzo Finocchi", price: "€0.90" },
        { name: "2 pezzi Finocchi", price: "€1.80" },
        { name: "3 pezzi Finocchi", price: "€2.70" },
        { name: "4 pezzi Finocchi", price: "€3.60" },
        { name: "5 pezzi Finocchi", price: "€4.50" },
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
        { name: "1 kg Bietola", price: "€1.56" },
        { name: "2 kg Bietola", price: "€3.12" },
        { name: "3 kg Bietola", price: "€4.68" },
        { name: "4 kg Bietola", price: "€6.24" },
        { name: "5 kg Bietola", price: "€7.80" },
        { name: "1 kg Bietoline", price: "€1.56" },
        { name: "2 kg Bietoline", price: "€3.12" },
        { name: "3 kg Bietoline", price: "€4.68" },
        { name: "4 kg Bietoline", price: "€6.24" },
        { name: "5 kg Bietoline", price: "€7.80" },
        { name: "1 kg Spinaci", price: "€2.16" },
        { name: "2 kg Spinaci", price: "€4.32" },
        { name: "3 kg Spinaci", price: "€6.48" },
        { name: "4 kg Spinaci", price: "€8.64" },
        { name: "5 kg Spinaci", price: "€10.80" },
        { name: "1 kg Scarole lisce e ricce", price: "€1.20" },
        { name: "2 kg Scarole lisce e ricce", price: "€2.40" },
        { name: "3 kg Scarole lisce e ricce", price: "€3.60" },
        { name: "4 kg Scarole lisce e ricce", price: "€4.80" },
        { name: "5 kg Scarole lisce e ricce", price: "€6.00" },
        { name: "1 pezzo Insalate lattuga", price: "€0.80" },
        { name: "2 pezzi Insalate lattuga", price: "€1.60" },
        { name: "3 pezzi Insalate lattuga", price: "€2.40" },
        { name: "4 pezzi Insalate lattuga", price: "€3.20" },
        { name: "5 pezzi Insalate lattuga", price: "€4.00" },
        { name: "1 pezzo Incappucciata / romana", price: "€1.20" },
        { name: "2 pezzi Incappucciata / romana", price: "€2.40" },
        { name: "3 pezzi Incappucciata / romana", price: "€3.60" },
        { name: "4 pezzi Incappucciata / romana", price: "€4.80" },
        { name: "5 pezzi Incappucciata / romana", price: "€6.00" },
        { name: "1 kg Aglio grande", price: "€5.40" },
        { name: "2 kg Aglio grande", price: "€10.80" },
        { name: "3 kg Aglio grande", price: "€16.20" },
        { name: "4 kg Aglio grande", price: "€21.60" },
        { name: "5 kg Aglio grande", price: "€27.00" },
        { name: "1 kg Cipolle", price: "€1.20" },
        { name: "2 kg Cipolle", price: "€2.40" },
        { name: "3 kg Cipolle", price: "€3.60" },
        { name: "4 kg Cipolle", price: "€4.80" },
        { name: "5 kg Cipolle", price: "€6.00" },
        { name: "1 kg Patate", price: "€0.90" },
        { name: "2 kg Patate", price: "€1.80" },
        { name: "3 kg Patate", price: "€2.70" },
        { name: "4 kg Patate", price: "€3.60" },
        { name: "5 kg Patate", price: "€4.50" },
        { name: "1 kg Limoni", price: "€1.20" },
        { name: "2 kg Limoni", price: "€2.40" },
        { name: "3 kg Limoni", price: "€3.60" },
        { name: "4 kg Limoni", price: "€4.80" },
        { name: "5 kg Limoni", price: "€6.00" },
        { name: "1 kg Banane no chiquita", price: "€1.20" },
        { name: "2 kg Banane no chiquita", price: "€2.40" },
        { name: "3 kg Banane no chiquita", price: "€3.60" },
        { name: "4 kg Banane no chiquita", price: "€4.80" },
        { name: "5 kg Banane no chiquita", price: "€6.00" },
        { name: "1 kg Ananas", price: "€1.80" },
        { name: "2 kg Ananas", price: "€3.60" },
        { name: "3 kg Ananas", price: "€5.40" },
        { name: "4 kg Ananas", price: "€7.20" },
        { name: "5 kg Ananas", price: "€9.00" },
        { name: "1 kg Melone giallo", price: "€2.16" },
        { name: "2 kg Melone giallo", price: "€4.32" },
        { name: "3 kg Melone giallo", price: "€6.42" },
        { name: "4 kg Melone giallo", price: "€9.02" },
        { name: "5 kg Melone giallo", price: "€11.18" },
        { name: "1 kg Pomodori per insalata", price: "€2.16" },
        { name: "2 kg Pomodori per insalata", price: "€4.32" },
        { name: "3 kg Pomodori per insalata", price: "€6.42" },
        { name: "4 kg Pomodori per insalata", price: "€9.02" },
        { name: "5 kg Pomodori per insalata", price: "€11.18" },
        { name: "1 kg Pomodorini", price: "€3.00" },
        { name: "2 kg Pomodorini", price: "€6.00" },
        { name: "3 kg Pomodorini", price: "€9.00" },
        { name: "4 kg Pomodorini", price: "€12.00" },
        { name: "5 kg Pomodorini", price: "€15.00" },
        { name: "1 kg Zucchine", price: "€3.00" },
        { name: "2 kg Zucchine", price: "€6.00" },
        { name: "3 kg Zucchine", price: "€9.00" },
        { name: "4 kg Zucchine", price: "€12.00" },
        { name: "5 kg Zucchine", price: "€15.00" },
        { name: "1 kg Melanzane lunghe e tonde", price: "€2.40" },
        { name: "2 kg Melanzane lunghe e tonde", price: "€4.80" },
        { name: "3 kg Melanzane lunghe e tonde", price: "€7.20" },
        { name: "4 kg Melanzane lunghe e tonde", price: "€9.60" },
        { name: "5 kg Melanzane lunghe e tonde", price: "€12.00" },
        { name: "1 kg Peperoni", price: "€2.76" },
        { name: "2 kg Peperoni", price: "€5.52" },
        { name: "3 kg Peperoni", price: "€5.40" },
        { name: "4 kg Peperoni", price: "€8.28" },
        { name: "5 kg Peperoni", price: "€11.04" },
        { name: "1 kg Cetrioli", price: "€2.16" },
        { name: "2 kg Cetrioli", price: "€4.32" },
        { name: "3 kg Cetrioli", price: "€6.42" },
        { name: "4 kg Cetrioli", price: "€9.02" },
        { name: "5 kg Cetrioli", price: "€11.18" },
        { name: "1 kg Fagioli rossi borlotti secchi", price: "€3.60" },
        { name: "2 kg Fagioli rossi borlotti secchi", price: "€7.20" },
        { name: "3 kg Fagioli rossi borlotti secchi", price: "€10.80" },
        { name: "4 kg Fagioli rossi borlotti secchi", price: "€14.40" },
        { name: "5 kg Fagioli rossi borlotti secchi", price: "€18.00" },
        { name: "1 kg Fagioli bianchi", price: "€3.60" },
        { name: "2 kg Fagioli bianchi", price: "€7.20" },
        { name: "3 kg Fagioli bianchi", price: "€10.80" },
        { name: "4 kg Fagioli bianchi", price: "€14.40" },
        { name: "5 kg Fagioli bianchi", price: "€18.00" },
        { name: "1 kg Ceci", price: "€3.60" },
        { name: "2 kg Ceci", price: "€7.20" },
        { name: "3 kg Ceci", price: "€10.80" },
        { name: "4 kg Ceci", price: "€14.40" },
        { name: "5 kg Ceci", price: "€18.00" },
        { name: "1 kg Lenticchie", price: "€3.00" },
        { name: "2 kg Lenticchie", price: "€6.00" },
        { name: "3 kg Lenticchie", price: "€9.00" },
        { name: "4 kg Lenticchie", price: "€12.00" },
        { name: "5 kg Lenticchie", price: "€15.00" },
        { name: "10 Uova con timbro", price: "€2.40" },
        { name: "20 Uova con timbro", price: "€4.80" },
        { name: "30 Uova con timbro", price: "€7.20" },
        { name: "40 Uova con timbro", price: "€9.60" },
        { name: "50 Uova con timbro", price: "€12.00" },
        { name: "1 kg Pere", price: "€2.40" },
        { name: "2 kg Pere", price: "€4.80" },
        { name: "3 kg Pere", price: "€7.20" },
        { name: "4 kg Pere", price: "€9.60" },
        { name: "5 kg Pere", price: "€12.00" },
        { name: "1 kg Mandarine", price: "€2.16" },
        { name: "2 kg Mandarine", price: "€4.32" },
        { name: "3 kg Mandarine", price: "€6.42" },
        { name: "4 kg Mandarine", price: "€9.02" },
        { name: "5 kg Mandarine", price: "€11.18" },
        { name: "1 kg Broccoli sporchi", price: "€1.20" },
        { name: "2 kg Broccoli sporchi", price: "€2.40" },
        { name: "3 kg Broccoli sporchi", price: "€3.60" },
        { name: "4 kg Broccoli sporchi", price: "€4.80" },
        { name: "5 kg Broccoli sporchi", price: "€6.00" },
        { name: "1 kg Broccoli puliti", price: "€3.60" },
        { name: "2 kg Broccoli puliti", price: "€7.20" },
        { name: "3 kg Broccoli puliti", price: "€10.80" },
        { name: "4 kg Broccoli puliti", price: "€14.40" },
        { name: "5 kg Broccoli puliti", price: "€18.00" },
        { name: "1 kg Kiwi", price: "€2.16" },
        { name: "2 kg Kiwi", price: "€4.32" },
        { name: "3 kg Kiwi", price: "€6.42" },
        { name: "4 kg Kiwi", price: "€9.02" },
        { name: "5 kg Kiwi", price: "€11.18" },
        { name: "1 kg Zucca", price: "€1.20" },
        { name: "2 kg Zucca", price: "€2.40" },
        { name: "3 kg Zucca", price: "€3.60" },
        { name: "4 kg Zucca", price: "€4.80" },
        { name: "5 kg Zucca", price: "€6.00" },
        { name: "1 kg Cicoria coltivata", price: "€1.80" },
        { name: "2 kg Cicoria coltivata", price: "€3.60" },
        { name: "3 kg Cicoria coltivata", price: "€5.40" },
        { name: "4 kg Cicoria coltivata", price: "€7.20" },
        { name: "5 kg Cicoria coltivata", price: "€9.00" },
        { name: "1 kg Arance tarocchi", price: "€1.80" },
        { name: "2 kg Arance tarocchi", price: "€3.60" },
        { name: "3 kg Arance tarocchi", price: "€5.40" },
        { name: "4 kg Arance tarocchi", price: "€7.20" },
        { name: "5 kg Arance tarocchi", price: "€9.00" },
        { name: "1 kg Mandaranci", price: "€2.40" },
        { name: "2 kg Mandaranci", price: "€4.80" },
        { name: "3 kg Mandaranci", price: "€7.20" },
        { name: "4 kg Mandaranci", price: "€9.60" },
        { name: "5 kg Mandaranci", price: "€12.00" },
        { name: "1 pezzo Fragole", price: "€1.56" },
        { name: "2 pezzi Fragole", price: "€3.12" },
        { name: "3 pezzi Fragole", price: "€4.68" },
        { name: "4 pezzi Fragole", price: "€6.24" },
        { name: "5 pezzi Fragole", price: "€7.80" },
        { name: "1 kg Fave", price: "€3.00" },
        { name: "2 kg Fave", price: "€6.00" },
        { name: "3 kg Fave", price: "€9.00" },
        { name: "4 kg Fave", price: "€12.00" },
        { name: "5 kg Fave", price: "€15.00" },
        { name: "1 kg Arance dolci maltesi", price: "€1.20" },
        { name: "2 kg Arance dolci maltesi", price: "€2.40" },
        { name: "3 kg Arance dolci maltesi", price: "€3.60" },
        { name: "4 kg Arance dolci maltesi", price: "€4.80" },
        { name: "5 kg Arance dolci maltesi", price: "€6.00" },
      ],
      name1: "",
      email1: "",
      cellular1: "",
      address1: "",
      products1: "",
      time1: "",
      note1: "",
      sum1: "",

      name2: "",
      email2: "",
      cellular2: "",
      address2: "",
      time2: "",
      note2: "",
    };
  },
  mounted() {
    /*const db = firebase.initializeApp({ projectId: 'baccho-86489' }).firestore();
        db.collection('orders')
                    .get()
                    .then(querySnapshot => {
                        const documents = querySnapshot.docs.map(doc => doc.data())
                        console.log(documents);
        });*/
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

      db.collection("orders")
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

    sendOrder_Easter() {
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
        name: this.name2,
        email: this.email2,
        cellular: this.cellular2,
        address: this.address2,
        time: this.time2,
        date: dateTime,
        note: this.note2,
        sum: "€ 40",
      };

      db.collection("orders_easter")
        .add(order)
        .then(() => {
          this.$router.push({
            path: "/ordercomplete",
            query: {
              elem1: this.name2,
              elem2: this.address2,
              elem3: "€ 40",
              elem4: "Cesto Baccho per Pasqua",
              elem5: this.cellular2,
            },
          });
        });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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

  .EasterSezWeb {
    display: none;
  }

  .EasterSezApp {
    display: inherit;
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
    background-image: url("https://img.freepik.com/free-photo/top-view-healthy-food-immunity-boosting-composition_23-2148890265.jpg?t=st=1647900171~exp=1647900771~hmac=de141a782ec32899e152693d15527c1a00223fd4a877547b6f34cf868ddc8216&w=1380");
  }

  .image_1 {
    width: 30vh;
    height: 30vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
  }

  .image_2 {
    width: 30vh;
    height: 30vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
  }
}

@media (min-width: 1024px) {
  .firstSezApp {
    display: none;
  }

  .firstSezWeb {
    display: inherit;
  }

  .EasterSezWeb {
    display: inherit;
  }

  .EasterSezApp {
    display: none;
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

  .image_1 {
    width: 75vh;
    height: 75vh;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
  }

  .image_2 {
    position: absolute;
    top: 0%;
    width: 35vh;
    height: 35vh;
    left: 0;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
  }

  .image {
    width: 75vh;
    height: 75vh;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
    background-image: url("https://img.freepik.com/free-photo/top-view-healthy-food-immunity-boosting-composition_23-2148890265.jpg?t=st=1647900171~exp=1647900771~hmac=de141a782ec32899e152693d15527c1a00223fd4a877547b6f34cf868ddc8216&w=1380");
  }

  .image2 {
    position: absolute;
    top: 1%;
    width: 25vh;
    height: 25vh;
    left: 0;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
    background-image: url("https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42597.jpg?t=st=1647900171~exp=1647900771~hmac=94135c1859627c18f495fd07f12d7310a0a1fe827f6962b5bf552b8fc81659c4&w=1380");
  }

  .image3 {
    position: absolute;
    top: 69%;
    width: 25vh;
    height: 25vh;
    left: 71%;
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
    background-image: url("https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?w=1380");
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
