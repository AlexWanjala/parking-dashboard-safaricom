<template>
<div>
  <aside class="sidebar sidebar--hidden">
    <div class="scrollbar-inner">
      <div class="user">
        <div class="user__info" data-toggle="dropdown">
          <img class="user__img" src="/assets/demo/img/profile-pics/8.jpg" alt="">
          <div>
            <div class="user__name">Malinda Hollaway</div>
            <div class="user__email">malinda-h@gmail.com</div>
          </div>
        </div>

        <div class="dropdown-menu">
          <a @click="gotTo('/')" class="dropdown-item" href="#">Logout</a>
        </div>
      </div>

      <ul class="navigation">
        <li class="navigation__active"><a @click="gotTo('dashboard')"><i class="flaticon-bar-chart"></i>Dashboard</a></li>
        <li class="navigation__active"><a @click="gotTo('map')"><i class="zmdi zmdi-pin"></i>Map View</a></li>

        <li class="navigation__sub" >
            <a href="#"><i class="flaticon-parking-7"></i>On Street Parking <i class="zmdi zmdi-caret-down drop-down-icon"></i></a>
          <ul class="">
            <li><a  @click="gotTo('compliant')"><i class="zmdi zmdi-check mx-2"></i>Compliant</a></li>
            <li><a  @click="gotTo('non-compliant')"><i class="flaticon-traffic mx-2"></i>Non Compliant</a></li>
            <li><a  @click="gotTo('clamped')"><i class="flaticon-password mx-2"></i>Clamped</a></li>
            <li><a  @click="gotTo('un-clamped')"><i class="flaticon-key-5 mx-2"></i>Unclamped</a></li>

          </ul>
        </li>

        <li class="navigation__sub">
          <a href="#"><i class="flaticon-parking-8"></i>Off Street Parking <i class="zmdi zmdi-caret-down drop-down-icon"></i></a>
          <ul>
            <li><a @click="gotTo('enclosed-parking-complaint')"><i class="flaticon-parking-5 mx-2"></i>Enclosed Complaint</a></li>
            <li><a @click="gotTo('enclosed-parking-non-complaint')"><i class="flaticon-parking-area mx-2"></i>Enclosed Non Compliant</a></li>
<!--
            <li><a href="CountryBus.html"><i class="flaticon-road    mx-2"></i>Country Bus</a></li>-->

          </ul>
        </li>


        <li class="">
          <a @click="gotTo('seasonal-parking')"><i class="flaticon-calendar"></i>Seasonal Parking</a>
        </li>

        <li class="navigation__sub" >
          <a href="#"><i class="flaticon-key-2"></i>Enforcement <i class="zmdi zmdi-caret-down drop-down-icon"></i></a>
          <ul>
            <li><a @click="gotTo('tbl')"><i class="flaticon-hook mx-2"></i>TLB</a></li>
            <li><a @click="gotTo('car-park')"><i class="flaticon-parking-2 mx-2"></i>Car Park</a></li>
            <li><a @click="gotTo('loading-zones')"><i class="flaticon-box mx-2"></i>Loading Zones</a></li>
            <!--  <li><a href="Registration.html"><i class="flaticon-report mx-2"></i>Registration</a></li>-->


          </ul>
        </li>

        <li class="navigation__sub" >
          <a href="#"><i class="flaticon-article"></i>Report <i class="zmdi zmdi-caret-down drop-down-icon"></i></a>
          <ul>
            <li><a @click="gotTo('revenue-officer')"><i class="flaticon-smartphone mx-2"></i>Revenue Officers</a></li>
            <li><a @click="gotTo('daily-reports')"><i class="flaticon-report mx-2"></i>Day</a></li>
            <li><a @click="gotTo('zonal-report')"><i class="flaticon-parking mx-2"></i>Parking Zones</a></li>
            <li><a @click="gotTo('street-report')"><i class="flaticon-road mx-2"></i>Street</a></li>

          </ul>
        </li>

        <li class="navigation__sub">
          <a href="#"><i class="zmdi zmdi-money"></i>Collections <i class="zmdi zmdi-caret-down drop-down-icon"></i></a>
          <ul>
            <li><a @click="gotTo('attendants-collection')">Attendants</a></li>
            <li><a  @click="gotTo('zonal-street-collection')">Zones & Street</a></li>
          </ul>
        </li>
<!--        <li class="navigation__sub">
          <a href="#"><i class="flaticon-shield"></i>Perform Waivers <i class="zmdi zmdi-caret-down drop-down-icon"></i></a>
          <ul>
            <li><a href="Waivers.html">Waivers</a></li>
            <li><a href="Extended.html">Extended</a></li>
          </ul>
        </li>-->

        <li class="navigation__active mt-1"><a @click="gotTo('/')"><i class="zmdi zmdi-power"></i>Logout</a></li>
      </ul>
    </div>
  </aside>
</div>
</template>

<script>
import router from "@/router";

export default {
  name: "side-bar",
  methods: {
    router() {
      return router
    },
    gotTo(route){
      router.push(route)
    }
  }
}
</script>
