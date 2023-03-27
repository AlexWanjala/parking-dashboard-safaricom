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
    <side-bar/>
    <section class="content parking_body custom-table-container content content--full">

      <header class="content__title px-0 border-0">
        <div class="row">
          <div class="col-md-8 col-sm-12">
                        <span class="rev-title-container"><h1 class="text-capitalize stream_name m-0">Impounding(Car Park)</h1>
							</span>
            <div class="">
              <ol class="breadcrumb border-0">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="index.html">Enforcement</a></li>
                <li class="breadcrumb-item active">Car Park</li>
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


      <div class="row">
        <div class="col-12 p-0">
          <div class="card ">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped mb-0" id="data-table">
                  <thead>
                  <tr>
                    <th>Bill Number</th>
                    <th>Identifier</th>
                    <th>Client Name</th>
                    <th>Zone</th>
                    <th>Amount(KES)</th>
                    <th>Time(M/D/Y)</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>

                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>

                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>
                  <tr>

                    <td><a href="">PC1901-100033</a></td>
                    <td class="text-capitalize">126061</td>
                    <td class="text-capitalize">Mtu Mwerevu Sana</td>
                    <td class="text-capitalize">CBD</td>
                    <td class="text-capitalize">15,000.00</td>
                    <td class="text-capitalize">1st Jun 2020:08:54:20 AM</td>

                  </tr>

                  </tbody>
                </table>
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
  name: "CarPark",
  components: {SideBar, TopNav}
}
</script>

<style scoped>

</style>