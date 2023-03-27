<template>
  <div>
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
      <link rel="stylesheet" href="/assets/vendors/slick/slick.css"/>
      <link rel="stylesheet" href="/assets/vendors/slick/slick-theme.css"/>

      <!-- <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/> -->

      <!-- App styles -->
      <link rel="stylesheet" href="/assets/css/app.min.css">
      <link rel="stylesheet" href="/assets/css/top-navigation.css">
      <link rel="stylesheet" href="/assets/css/daterangepicker.css">

    </head>
    <body data-ma-theme="green">
    <main class="main main--alt">


        <top-nav/>
        <side-bar/>

      <section class="content mt-4 content--full">
        <div class="">
          <header class="content__title px-0 border-0">
            <h1 class="text-capitalize">Parking Summary For</h1>
            <small class="today" id="today">22ND Mar 2020</small>



            <div class="actions d-flex">
              <div id="reportrange"
                   style="background: #f3f3f3; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%">
                <i class="ti-calendar"></i>&nbsp;
                <span></span> <i class="fa fa-caret-down"></i>
              </div>
              <button class="btn btn-success d-none text-nowrap " id="date-reset" onclick="reset_date()">Reset Date</button>
            </div>
          </header>

          <div class="row">
            <div class="col-sm-12 col-md-5 col-xl-4 col-lg-5">
              <div class="row">
                <div class="col-12">
                  <div class="card statistics-container">
                                           <span class="control-buttons">
                                                <span class="card-prev flaticon-left-chevron"></span>
                                                <span class="card-next flaticon-left-chevron"></span>
                                           </span>
                    <div class="statistics">
                      <div class="card parking-stats stat-logged">
                        <div>
                          <i class="flaticon-parking-1"></i>
                        </div>
                        <div class="stat-text">
                          <p>Logged cars</p>
                          <h3>20,000</h3>
                        </div>
                      </div>
                      <div class="card parking-stats stat-queries">
                        <div>
                          <i class="flaticon-parking-3"></i>
                        </div>
                        <div class="stat-text">
                          <p>Car Queries</p>
                          <h3>2,000</h3>
                        </div>
                      </div>
                      <div class="card parking-stats stat-compliant">
                        <div>
                          <i class="flaticon-car-insurance"></i>
                        </div>
                        <div class="stat-text">
                          <p>Compliant</p>
                          <h3>7,000</h3>
                        </div>
                      </div>
                      <div class="card parking-stats stat-non-compliant">
                        <div>
                          <i class="flaticon-car-1"></i>
                        </div>
                        <div class="stat-text">
                          <p> Non Compliant</p>
                          <h3>3,800</h3>
                        </div>
                      </div>
                      <div class="card parking-stats stat-due-clamping">
                        <div>
                          <i class="flaticon-car-alarm"></i>
                        </div>
                        <div class="stat-text">
                          <p> Due Clamping</p>
                          <h3>2,500</h3>
                        </div>
                      </div>
                      <div class="card parking-stats stat-clamped">
                        <div>
                          <i class="flaticon-locked-car"></i>
                        </div>
                        <div class="stat-text">
                          <p> Clamped</p>
                          <h3>8,500</h3>
                        </div>
                      </div>
                      <div class="card parking-stats stat-offstreet-revenue">
                        <div>
                          <i class="flaticon-parking-barrier"></i>
                        </div>
                        <div class="stat-text">
                          <!-- <p><sup>(Sunken & Law Court):</sup></p> -->
                          <p> Off-Street Revenue</p>
                          <h3>9,500</h3>
                        </div>
                      </div>
                      <div class="card parking-stats stat-country-bus-revenue">
                        <div>
                          <i class="flaticon-parking-4"></i>
                        </div>
                        <div class="stat-text">
                          <!-- <p><sup>(Sunken & Law Court):</sup></p> -->
                          <p> Country Bus Revenue</p>
                          <h3>19,500</h3>
                        </div>
                      </div>
                      <div class="card parking-stats stat-inactive-agents">
                        <div>
                          <i class="flaticon-telephone"></i>
                        </div>
                        <div class="stat-text">
                          <p> Inactive Agents</p>
                          <h3>195</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="calc-30px">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Revenue Sources</h4>
                    <h6 class="card-subtitle">Parking revenue collections by the different sources</h6>
                    <div class="table-responsive font-12">
                      <table class="table table-striped table-sm font-12 sources-table">
                        <thead>
                        <tr class="font-weight-bold text-black">
                          <th scope="col">Source</th>

                          <th scope="col">Counts</th>
                          <th scope="col">Amount (KES)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td scope="row">On-Street (Daily Parking)</td>

                          <td>4,925</td>
                          <td>1,102,821</td>
                        </tr>
                        <tr>
                          <td scope="row">Enclosed Parking</td>

                          <td>3,368</td>
                          <td>108,568</td>
                        </tr>

                        <tr>
                          <td scope="row">Bus Station Revenue</td>

                          <td>423</td>
                          <td>KES 195,000</td>
                        </tr>


                        <tr>
                          <td scope="row">Seasonal (PSV 30)</td>

                          <td>64</td>
                          <td>100,804</td>
                        </tr>
                        <tr>
                          <td scope="row">Seasonal (PSV 20-30)</td>

                          <td>8,464</td>
                          <td>2,917,900</td>
                        </tr>
                        <tr>
                          <td scope="row">Seasonal (PSV 7-19)</td>

                          <td>48</td>
                          <td>12,520</td>
                        </tr>
                        <tr>
                          <td scope="row">Seasonal (PSV Below 7)</td>

                          <td>88</td>
                          <td>19,700</td>
                        </tr>
                        <tr>
                          <td scope="row">Impounding Car (TLB)</td>

                          <td>464</td>
                          <td>19,800</td>
                        </tr>
                        <tr>
                          <td scope="row">Impounding Car Park</td>

                          <td>12</td>
                          <td>8,036</td>
                        </tr>
                        <tr>
                          <td scope="row">Clamping Fees </td>

                          <td>19</td>
                          <td>30,300</td>
                        </tr>

                        <tr style="background: #fffac0;">
                          <th colspan="2" class="">
                            Extra Fee Charges
                          </th>
                          <td></td>
                        </tr>

                        <tr>
                          <td scope="row">Loading Zones Fees</td>

                          <td>23</td>
                          <td>120,721</td>
                        </tr>
                        <tr>
                          <td scope="row">Search Fees (PSV)</td>

                          <td>36</td>
                          <td>36,000</td>
                        </tr>
                        <tr>
                          <td scope="row">Registration (PSV)</td>

                          <td>95</td>
                          <td>950,000</td>
                        </tr>

                        <tr>
                          <td scope="row">Transfer Fees</td>

                          <td>344</td>
                          <td>86,141</td>
                        </tr>
                        <tr>
                          <td scope="row">Off-Loading</td>

                          <td>43</td>
                          <td>58,568</td>
                        </tr>

                        <tr style="background: #cee9d8;">
                          <th><strong>Total</strong></th>

                          <th>18,416</th>
                          <th>5,734,479</th>
                        </tr>
                        </tbody>
                      </table>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-7 col-lg-7 col-xl-8 col-sm-12">
              <div class="row">
                <div class="col-sm-12 col-md-12">
                  <div class="card user_statistics">
                    <div class="card-header custom-card-header">
                      <h4 class="card-title">Hourly Revenue collections</h4>
                      <div class="actions actions--inverse">
                        <span class="target-collection" id="hourly_chart_type">Detailed</span>
                        <div class="dropdown actions__item">
                          <i data-toggle="dropdown" class="zmdi zmdi-chevron-down text-black"></i>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="#" class="dropdown-item" id="Summarized"
                               onclick="summarized()">
                              Summarized</a>
                            <a href="#" class="dropdown-item" id="Detailed"
                               onclick="detailed()">
                              Detailed</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card-body">
                      <div id="spline_chart_container" style="height: 400px"></div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-12 col-md-12">
                  <div class="card user_statistics">
                    <div class="card-header custom-card-header">
                      <h4 class="card-title">Zones Collections</h4>
                    </div>

                    <div class="card-body">
                      <div id="ZonalRevenueCollection" style="height: 338px"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- enforcment charts -->
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="row">

                  <div class="col-sm-12 col-md-6 pr-0">
                    <div class="card-header custom-card-header">
                      <h4 class="card-title">Vehicle Parking Status</h4>
                    </div>

                    <div class="card-body">
                      <div id="item_clamped_chart" style="height: 338px"></div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 pl-0">
                    <div class="card-header custom-card-header">
                      <h4 class="card-title" id="timeline_card_title">Timeline based parking status</h4>
                      <div class="actions actions--inverse">

                        <select id="mySelect" class="selectpicker show-tick" data-live-search="true" onchange="timeline_heading_change(this)">
                          <option href="#" class="dropdown-item" id="All_Zones" >All Zones</option>
                          <option href="#" class="dropdown-item" id="Buruburu">Nakuru Town</option>
                          <option href="#" class="dropdown-item" id="CBD">Naivasha Town</option>
                          <option href="#" class="dropdown-item" id="Community">Molo Town and Other Centres</option>
                        </select>

                      </div>
                    </div>

                    <div class="card-body">
                      <!-- 307px -->
                      <div id="stram_clamped_chart" style="height: 338px"></div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>


          <footer class="footer hidden-xs-down">
            <p>© Material Admin Responsive. All rights reserved.</p>

            <ul class="nav footer__nav">
              <a class="nav-link" href="#">Homepage</a>

              <a class="nav-link" href="#">Company</a>

              <a class="nav-link" href="#">Support</a>

              <a class="nav-link" href="#">News</a>

              <a class="nav-link" href="#">Contacts</a>
            </ul>
          </footer>
        </div>
      </section>
    </main>

    </body>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import TopNav from "@/components/TopNav.vue";
import {loadScript} from "vue-plugin-load-script";

export default {
  name: "DashboardPage",
  components: {TopNav, SideBar},
  data(){
    return{

    }
  },
  mounted() {
    loadScript("/assets/js/main.js")
        .then(() => {
          // eslint-disable-next-line no-undef
          detailed()
          // eslint-disable-next-line no-undef
          clampedChat()
          // eslint-disable-next-line no-undef
          streamClammped()
        })
        .catch(() => {
          // alert('dddd')
        });
  },
  methods:{

  }
}
</script>
