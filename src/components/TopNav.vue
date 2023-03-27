<template>
<div>
  <header class="header">
    <div class="navigation-trigger" data-ma-action="aside-open" data-ma-target=".sidebar">
      <div class="navigation-trigger__inner">
        <i class="navigation-trigger__line"></i>
        <i class="navigation-trigger__line"></i>
        <i class="navigation-trigger__line"></i>
      </div>
    </div>

    <div class="header__logo">
      <img src="/assets/demo/img/logo-files/fav-icon.png">
      <h1>
        <a @click="gotTo('dashboard')" class="mb-3">Parking Dashboard</a>
        <p class="mb-0 text-black font-weight-light text-capitalize"> County Collect</p>
      </h1>
    </div>

    <ul class="top-nav nav-amounts">

      <li class="mr-4">
        <span class="text-uppercase font-11px">Yesterday</span>
        <h5 class="text-uppercase font-weight-bold pb-0" id="yestedays_revenue">Kes 4,235,625</h5>
      </li>

      <li class="border-left border-white-opacity-7 pl-4">
                        <span class=" text-uppercase font-11px d-flex align-items-center" style="height: 19px;">Today
                            <i class="ml-2 text-success zmdi zmdi-caret-up font-22rem" id="rev_diff_img"></i></span>
        <h5 class="text-uppercase font-weight-bold pb-0" id="todays_revenue">Kes 2,734,479</h5>

      </li>

    </ul>


    <form class="search">
      <div class="search__inner">
        <input type="text" class="search__text" placeholder="Search for people, files, documents...">
        <i class="zmdi zmdi-search search__helper" data-ma-action="search-close"></i>
      </div>
    </form>

    <ul class="top-nav">
      <li class="hidden-xl-up"><a href="#" data-ma-action="search-open"><i class="zmdi zmdi-search"></i></a></li>


      <li class="hidden-xs-down mr-3 ml-4">
        <a href="#" class="p-3">
          <i class="zmdi zmdi-file-text mr-2"></i>
        </a>
      </li>



      <li class="dropdown">
        <a href="#" data-toggle="dropdown" class="rad-50"><img src="/assets/demo/img/profile-pics/1.jpg" class="listview__img m-0" style="height: 32px;" alt="profile picture"></a>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu--block">
          <div class="listview listview--hover acc-options">

            <a href="#" class="listview__item">
              <img src="/assets/demo/img/profile-pics/1.jpg" class="listview__img" alt="profile picture" >

              <div class="listview__content">
                <div class="listview__heading">
                  John Doe
                </div>
                <p>johndoe@email.com</p>
              </div>
            </a>
            <hr>
            <div class="listview__item">
              <div class="listview__content">
                <div class="listview__heading">
                    <a @click="gotTo('/')"><i class="ti-power-off"></i><span>Logout</span></a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </li>

    </ul>

    <ul class="top-menu">
      <div class="todays_highlights">
        <span class="text-uppercase"><span class="text-warning-2">Today's Highlights</span></span>
      </div>

      <div class="todays-entries">
        <a class="todays-entries-text">Logged Vehicles: <strong>17,450</strong><span class="opacity-5"> | </span></a>
        <a class="todays-entries-text">Car Queries: <strong>3,231</strong> <span class="opacity-5"> | </span></a>
        <a class="todays-entries-text">Compliant: <strong>3,201</strong> <span class="opacity-5"> | </span></a>
        <a class="todays-entries-text">Non-Compliant: <strong>30</strong> <span class="opacity-5"> | </span></a>
        <a class="todays-entries-text">Due Clamping : <strong>11</strong><span class="opacity-5"> | </span></a>
        <a class="todays-entries-text">Clamped: <strong>19</strong><span class="opacity-5"> | </span></a>
        <a class="todays-entries-text">Enclosed Parking Revenue : <strong>KES 108,568</strong><span class="opacity-5"> | </span></a>
        <a class="todays-entries-text">Bus Station Revenue: <strong>KES 195,000</strong><span class="opacity-5"> | </span></a>
      </div>

    </ul>
  </header>
</div>
</template>

<script>
import router from "@/router";

export default {
  name: "TopNav",
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

<style scoped>

</style>