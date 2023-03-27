<template>
  <div>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

      <!-- icon files -->
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">
      <link rel="stylesheet" href="/assets/css/icon_fonts/css/icon_set_1.css">
      <link rel="stylesheet" href="/assets/css/icon_fonts/css/icon_set_2.css">
      <link rel="stylesheet" href="/assets/css/icon_fonts/css/icon_set_3.css">
      <link rel="stylesheet" href="/assets/css/icon_fonts/css/icon_set_4.css">
      <link rel="stylesheet" href="/assets/css/flaticon-font/flaticon.css">

      <!-- Vendor styles -->
      <link rel="stylesheet" href="/assets/vendors/material-design-iconic-font/css/material-design-iconic-font.min.css">
      <link rel="stylesheet" href="/assets/vendors/animate.css/animate.min.css">
      <link rel="stylesheet" href="/assets/vendors/jquery-scrollbar/jquery.scrollbar.css">
      <link rel="stylesheet" href="/assets/vendors/fullcalendar/fullcalendar.min.css">
      <link rel="stylesheet" href="/assets/vendors/bootstrap-select/css/bootstrap-select.min.css">


      <!-- // Add the new slick-theme.css if you want the default styling -->
      <link rel="stylesheet" href="/assets/vendors/slick/slick.css"/>
      <link rel="stylesheet" href="/assets/vendors/slick/slick-theme.css"/>

      <!-- <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/> -->

      <!-- App styles -->
      <link rel="stylesheet" href="/assets/css/app.min.css">
      <link rel="stylesheet" href="/assets/css/top-navigation.css">
      <link rel="stylesheet" href="/assets/css/daterangepicker.css">
      <link rel="stylesheet" href="/assets/css/landing-page.css">
      <link rel="stylesheet" href="/assets/css/animate.css">
      <link rel="stylesheet" href="/assets/css/landing-assets/css/input100.css">
      <link rel="stylesheet" href="/assets/css/landing-icons/font/flaticon.css">

    </head>

    <body data-ma-theme="green">
    <main class="main main--alt pt-0">

      <section class="">
        <div class="fluid-container">
          <div class="row m-0 p-0">
            <div class="col-6 col-md-7 col-sm-12  p-0 m-0 hidden-sm">
              <div class="login-bg pb-0 mb-0">

                <div class="banner-content mt-4 pb-0 mb-0">
                  <h1 class="">
                    <strong class="landing-title">Parking Dashboard</strong>
                  </h1>
                  <h3 class="">
                    <strong class="landing-sub-title d-none">County Government Of Homa-Bay</strong>
                  </h3>

                  <div class="col-12 p-0 line my-4"></div>

                  <blockquote>
                    <!-- <p class="text-white">The City of Choice to invest, work and live in.</p> -->
                  </blockquote>


                  <div class="col-12 landing-module-header mt-5 p-0">
                    <div class="col-3 p-0">
                      <span class="landing-page-module mr-2 text-nowrap"><strong>Parking system Modules</strong></span>
                    </div>
                    <div class="col-9 p-0 ml-2 line"></div>
                  </div>

                  <span class="module-holder">
                                            <!-- Inspection -->
                                            <a href="#" class="module-content my-3 mr-3">
                                                <div><span class="flaticon-user-avatar-with-check-mark"></span></div>
                                                <span class="module-content-text">ADMIN</span>
                                            </a>

                    <!-- Reports -->
                                            <a href="#" class="module-content my-3 mx-3">
                                                <div><span class="flaticon-analytics"></span></div>
                                                <span class="module-content-text">REPORTS</span>
                                            </a>

                    <!-- Operations -->
                                            <a href="#" class="module-content my-3 mx-3">
                                                <div><span class="flaticon-workers"></span></div>
                                                <span class="module-content-text">OPERATIONS</span>
                                            </a>

                                        </span>


                </div>

                <div class="module-footer d-none">
                  <div class="col-12 p-0 mr-5 line"></div>
                  <span>
                                                <!-- Logos -->
                                                <a href="#" class="navbar-brand-landing even_child"><img
                                                    src="/assets/demo/img/logo-files/rev-white.png" alt=""></a>
                                                <a href="#" class="navbar-brand-landing"><img
                                                    src="/assets/demo/img/logo-files/nouveta-white.svg" alt=""></a>

                                            </span>
                </div>
              </div>
            </div>

            <div class="col-6 col-md-5 col-sm-12  pl-0 bg-green">

              <div class="login-form-container w-100 animation" data-animation="flipIn" data-animation-delay="0.4s">

                <form onsubmit="return false">

                  <h2 class="login100-form-title animation mb-2" data-animation="fadeInUp" data-animation-delay="0.6s">
                    Sign In</h2>
                  <p class="animation mb-5 pb-3" data-animation="fadeInDown" data-animation-delay="0.6s">Key in your
                    credentials bellow to continue</p>
                  <div class="wrap-input100 validate-input animation" data-animation="bounceInRight"
                       data-animation-delay="0.6s" data-validate="Valid email is required: ex@abc.xyz">
                    <span class="label-input100 animation" data-animation="fadeInRight" data-animation-delay="0.8s">Email</span>

                    <input v-model="contact.email"  class="input100 animation" data-animation="bounceInRight" data-animation-delay="1.0s"
                           type="text" name="user_name"  placeholder="Email address...">

                    <span class="focus-input100 animation" data-animation="fadeInRight"
                          data-animation-delay="1.2s"></span>
                  </div>

                  <div class="wrap-input100 validate-input animation" data-animation="bounceInRight"
                       data-animation-delay="0.8s" data-validate="Password is required">
                    <span class="label-input100 animation" data-animation="bounceInRight" data-animation-delay="1.4s">Password</span>
                    <input v-model="password"  class="input100 animation" data-animation="bounceInRight" data-animation-delay="1.6s"
                           type="password"  name="password" placeholder="*************">
                    <span class="focus-input100"></span>
                  </div>

                  <div class="alert alert-success" role="alert" v-if="alert.success">
                    {{message}}
                  </div>

                  <div class="alert alert-primary" role="alert" v-if="alert.info">
                    {{message}}
                  </div>

                  <div class="alert alert-danger" role="alert" v-if="alert.failed">
                    {{message}}
                  </div>

                  <button @click="login()" type="button" class="btn btn-primary animation d-none" data-animation="bounceInRight"
                          data-animation-delay="1.8s">Sign In
                  </button>

                  <a class="btn btn-primary animation w-100" @click="login()" data-animation="bounceInRight"
                     data-animation-delay="1.8s">Sign In</a>
                  <p class="animation" data-animation="bounceInRight" data-animation-delay="2.0s"><a href="">Forgot
                    Password?</a></p>
                </form>
              </div>
            </div>


          </div>
        </div>
      </section>
    </main>

    </body>
  </div>
</template>

<script>
import router from "@/router";
import {authUrl, execute} from "@/api";

export default {
  name: "LandingPage",
  data() {
    return{
      message:'',
      alert:{
        success: false,
        info: false,
        failed:false
      },
      contact: {
        email: ''
      },
      password:''
    }
  },
  mounted() {
  },
  methods: {

    login(){
      this.message ="Authorizing..."
      this.alert.failed = false
      this.alert.info = true
      const data = new FormData();
      data.append("function", "login");
      data.append("email", this.contact.email);
      data.append("password", this.password);

      execute(data,authUrl)
          .then((res) =>{
            this.alert.info = false
            if (res.data.success) {
              this.message =res.data.message
              this.alert.success = true
              router.push('dashboard')
            }else{
              this.alert.failed = true
              this.message =res.data.message
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message =e.message
          });
    },
  }
}
</script>

