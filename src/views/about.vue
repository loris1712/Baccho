<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4" style="background-image: url(img/theme/foto7.jpg); background-position: center;">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/brand/logo_icon_about.png'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <a href="https://www.facebook.com/Baccho.It"><base-button size="sm" class="mr-4 defaultBtn">Facebook</base-button></a>
                                    <a href="https://www.instagram.com/baccho_it/"><base-button type="default" size="sm" class="float-right">Instagram</base-button></a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="text-center" style="margin-top: 4rem;">
                            <h3>Baccho</h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Salerno, Italia</div>
                            <div class="h5 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Dalla terra a casa tua.</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>Baccho è una piattaforma di consegna di cibo genuino. Attraverso il nostro servizio è possibile ordinare e ricevere in 24 ore direttamente a casa il miglior cibo di qualità proveniente dalle terre del cilento e della costiera amalfitana.</p>
                                    <a href="/">Ordina ora</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>

<script>
export default {
     name: "about",
};
</script>

<style>
.defaultBtn{
    background-color: #b00a92;
    border-color: #b00a92;
}

.defaultBtn:hover{
    background-color: #71077b;
    border-color: #71077b;
}
</style>
