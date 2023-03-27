<template>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- icon files -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
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
    <link rel="stylesheet" href="/assets/vendors/slick/slick.css" />
    <link rel="stylesheet" href="/assets/vendors/slick/slick-theme.css" />

    <!-- <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/> -->

    <!-- App styles -->
    <link rel="stylesheet" href="/assets/css/app.min.css">
    <link rel="stylesheet" href="/assets/css/top-navigation.css">
    <link rel="stylesheet" href="/assets/css/daterangepicker.css">

  </head>
  <body data-ma-theme="green">
  <main class="main">

    <TopNav/>
    <SideBar/>

    <section class="content parking_body custom-table-container content content--full">

      <header class="content__title px-0 border-0">
        <div class="row">
          <div class="col-md-8 col-sm-12">
                        <span class="rev-title-container"><h1 class="text-capitalize stream_name m-0">Zonal and Street Collection</h1>
							</span>
            <div class="">
              <ol class="breadcrumb border-0">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="index.html">Collection</a></li>
                <li class="breadcrumb-item active">Zonal and Street Collection</li>
              </ol>
            </div>
          </div>

          <div class="actions date_container">
            <div id="reportrange" style="background: #f3f3f3; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%">
              <i class="ti-calendar"></i>&nbsp;
              <span></span> <i class="fa fa-caret-down"></i>
            </div>
            <button class="btn btn-success d-none text-nowrap " id="date-reset" onclick="reset_date()">Reset Date</button>
          </div>
        </div>
      </header>

      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div class="create-form">
          <div class="col-12 p-0">
            <div class="mb-3 sunken-navs-container">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a v-if="zonalMonth" class="nav-link active zonal-link" @click="zonalmonth()"><i class="pe-7s-portfolio mr-2"></i>Zonal</a>
                  <a v-if="!zonalMonth" class="nav-link zonal-link" @click="zonalmonth()"><i class="pe-7s-portfolio mr-2"></i>Zonal</a>
                </li>
                <li class="nav-item">
                  <a v-if="streetMonths" class="nav-link active street-link" @click="streetmonths()"><i class="pe-7s-portfolio mr-2"></i>Street</a>
                  <a v-if="!streetMonths" class="nav-link street-link" @click="streetmonths()"><i class="pe-7s-portfolio mr-2"></i>Street</a>
                </li>
              </ul>
            </div>

            <div v-if="zonalMonth" class="col-12 p-0 zonal_table">
              <div class="card ">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped mb-0">
                      <thead>
                      <tr>
                        <th>Number</th>
                        <th>Street</th>
                        <th>Number of Queries</th>
                        <th>Date</th>
                        <th>Attendant</th>
                        <th>Action</th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr>
                        <td>1</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>

                      <tr>
                        <td>6</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>

                      <tr>
                        <td>7</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>

                      <tr>
                        <td>8</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>

                      <tr>
                        <td>9</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td class="text-capitalize">#2 Sotik Road, Off Bunyala Road, Nairobi 00100, Bunyala Rd, Nairobi, Kenya</td>
                        <td class="text-capitalize">4</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">Alex Wanjala</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div  v-if="streetMonths" class="col-12 p-0 street_table ">
              <div class="card ">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover table-custom spacing8" id="street_date_table">
                      <thead>
                      <tr>
                        <th>Number</th>
                        <th>Attendant Name</th>
                        <th>Number Of Queries</th>
                        <th>Date</th>
                        <th>Hour</th>
                        <th>Actions</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="">3</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">5</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>


                      <tr>
                        <td>3</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">8</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">7</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">1</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">8</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">2</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">9</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">8</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">7</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">6</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>

                      <tr>
                        <td>12</td>
                        <td>
                          <a href="">Alex Wanjala</a>
                        </td>
                        <td class="text-capitalize">16199</td>
                        <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>
                        <td class="text-capitalize">5</td>
                        <td>
                          <a href="#" class="btn btn-primary btn-sm btn--icon-text"><i class="zmdi zmdi-eye mr-2"></i>View Details</a>
                        </td>
                      </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  </main>
  </body>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "ZonalStreetCollection",
  components: {SideBar, TopNav},
  data(){
    return{
      zonalMonthActive:'Active',
      zonalMonth: true,
      streetMonths: false

    }
  },
  methods:{
    zonalmonth(){
      this.zonalMonthActive= 'Active'
      this.zonalMonth = true
      this.streetMonths = false

    },
    streetmonths(){
      this.zonalMonthActive= ''
      this.zonalMonth = false
      this.streetMonths = true
    }
  }
}
</script>

<style scoped>

</style>