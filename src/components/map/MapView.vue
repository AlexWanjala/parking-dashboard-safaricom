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

    <top-nav/>
    <side-bar/>
    <section class="content content--full w-100 vh-100 px-0 main-map-container m-0">
      <div class="ma-backdrop d-none"></div>
      <div class="map-asides">

        <!-- new map marker function  -->
        <aside class="map-info-cont animated slideInLeft left-100" id="newPoint">

          <!-- show this when loading the new data -->
          <div class="map-loader d-none">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="map-cont-header">
            <h2 class="chat__title">New point of interest<small>Use this section to add a new point of interest on the map</small></h2>
            <i class="zmdi zmdi-close close-aside"></i>
          </div>



          <div class="map-cont-footer">


          </div>
          <div class="scroll-wrapper scrollbar-inner">



            <div class="listview">
              <form class="">
                <div class="listview__item ">
                  <div class="row">
                    <div class="col-12">
                      <div class="selected-point-details p-3">
                        <h6>Point Details</h6>

                        <p class="mb-0"><strong>Sub County</strong></p>
                        <p class="clicked-subcounty">Starehe</p>

                        <p class="mb-0"><strong>Ward</strong></p>
                        <p class="clicked-ward">Ward name</p>

                        <p class="mb-0"><strong>Street</strong></p>
                        <p class="clicked-street">Tom Mboya street</p>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="mb-0" for="locationName"><strong>Location's Name</strong></label>
                        <p> <small>Enter the name to the new location</small></p>
                        <input type="text" class="form-control" id="locationName" placeholder="Point's Name" autofocus>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="locationCategory" class="mb-0"><strong>Select Point Category</strong></label>
                        <p><small>Select the category for with this location belongs.</small></p>
                        <select class="form-control" id="locationCategory">
                          <option>-- Select location category --</option>
                          <option>Parking street</option>
                          <option>Off street parking location</option>
                          <option>Revenue/service point</option>
                          <option>Bus park</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-12">
                      <button class="btn btn-primary">Add Location</button>
                    </div>
                  </div>

                </div>



              </form>


            </div>

          </div>

        </aside>

        <!-- map info content for service and revenue  -->
        <aside class="map-info-cont animated slideInLeft left-100" id="collectionPoint-info">

          <!-- show this when loading the new data -->
          <div class="map-loader d-none">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="map-cont-header">
            <h2 class="chat__title">City Hall<small>Service/collection pont</small></h2>
            <i class="zmdi zmdi-close close-aside"></i>
          </div>
          <div class="map-cont-footer">


          </div>
          <div class="scroll-wrapper scrollbar-inner">

            <!-- incident image -->
            <div class="map-cont-img">
              <img src="/assets/images/non_compliant.jpeg">
            </div>

            <div class="listview">
              <div class="listview__item ">
                <div class="listview__content">
                  <div class="listview__heading text-uppercase font-weight-bold font-12px">Revenue collected today</div>
                  <h4 class="font-weight-bolder mb-0">KES 25,236,000</h4>
                </div>
              </div>

              <div class="listview__item ">
                <div class="listview__content">
                  <div class="listview__heading text-uppercase font-weight-bold font-12px">Clients Served</div>
                  <h4 class="font-weight-bolder mb-0">30</h4>
                </div>
              </div>
            </div>


            <div class="listview bg-primary">
              <div class="listview__item py-2">
                <div class="listview__heading text-white map-stat-header"><i class="ti-money"></i><span>Collection Summary</span></div>
              </div>

            </div>
            <table class="table table-sm">
              <thead>
              <tr>
                <td><strong>Service</strong></td>
                <td><strong>Amount (kes)</strong></td>
              </tr>
              </thead>
              <tbody>

              <tr>
                <td><strong>Seasonal</strong></td>
                <td class="text-left text-wrap">
                  23,650,000
                </td>
              </tr>

              <tr>
                <td><strong>Daily parking</strong></td>
                <td class="text-left text-wrap">
                  360,200
                </td>
              </tr>

              <tr>
                <td><strong>Penalties</strong></td>
                <td class="text-left text-wrap">
                  360,200
                </td>
              </tr>

              <tr>
                <td><strong>Others</strong></td>
                <td class="text-left text-wrap">
                  325,520
                </td>
              </tr>

              </tbody>
            </table>



          </div>

        </aside>

        <!-- map info content for incident reporting -->
        <aside class="map-info-cont animated slideInLeft left-100" id="incident-info">

          <!-- show this when loading the new data -->
          <div class="map-loader d-none">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="map-cont-header">
            <h2 class="chat__title">Incident title<small>30 Min Ago</small></h2>
            <i class="zmdi zmdi-close close-aside"></i>
          </div>
          <div class="map-cont-footer">


          </div>
          <div class="scroll-wrapper scrollbar-inner">

            <!-- incident image -->
            <div class="map-cont-img">
              <img src="/assets/images/non_compliant.jpeg">
            </div>


            <div class="listview bg-primary">
              <div class="listview__item py-2">
                <div class="listview__heading text-white map-stat-header"><i class="ti-alert"></i><span>Incident details</span></div>
              </div>

            </div>

            <div class="listview">
              <div class="listview__item">
                <div class="listview__content">
                  <div class="listview__heading">Reported By</div>
                  <p>Mr Kinothia Wanyoike</p>
                </div>
              </div>
            </div>

            <div class="listview">
              <div class="listview__item">
                <div class="listview__content">
                  <div class="listview__heading">Incident status</div>
                  <p>Pending</p>
                </div>
              </div>
            </div>


          </div>

        </aside>

        <!-- map info content for offstreet parking -->
        <aside class="map-info-cont animated slideInLeft left-100" id="offstreet-info">

          <!-- show this when loading the new data -->
          <div class="map-loader d-none">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="map-cont-header">
            <h2 class="chat__title">Bus Park<small>Off-street parking</small></h2>
            <i class="zmdi zmdi-close close-aside"></i>
          </div>
          <div class="map-cont-footer">
            <div class="map-cont-img">
              <img src="/assets/images/non_compliant.jpeg">
            </div>

          </div>
          <div class="scroll-wrapper scrollbar-inner">
            <div class="listview">
              <div class="listview__item ">
                <div class="listview__content">
                  <div class="listview__heading text-uppercase font-weight-bold font-12px">Revenue collected today</div>
                  <h4 class="font-weight-bolder mb-0">KES 25,236,000</h4>
                </div>
              </div>
            </div>

            <div class="listview bg-primary">
              <div class="listview__item py-2">
                <div class="listview__heading text-white map-stat-header"><i class="flaticon-parking"></i><span>Vehicles Parking Statistics</span></div>
              </div>

            </div>

            <div class="listview">
              <div class="listview__item py-2">
                <div class="row w-100">

                  <div class="col-6">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">Checked In</div>
                    <h4 class="font-weight-bolder">102</h4>
                  </div>
                  <div class="col-6">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">Checked Out</div>
                    <h4 class="font-weight-bolder">22</h4>
                  </div>

                  <div class="col-6 pb-2">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">on site</div>
                    <h4 class="font-weight-bolder">125</h4>
                  </div>
                  <div class="col-6 pb-2">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">AVG PARKING TIME</div>
                    <h4 class="font-weight-bolder">4 Hrs</h4>
                  </div>


                </div>

              </div>

            </div>

            <div class="listview bg-primary">
              <div class="listview__item py-2">
                <div class="listview__heading text-white map-stat-header"><i class="flaticon-phone"></i><span>Enforcement Gadgets</span></div>
              </div>

            </div>
            <table class="table table-sm">
              <tbody>
              <tr>
                <td><span>Assigned</span><span class="text-info">124</span></td>
                <td><span>Active</span><span class="">124</span></td>
              </tr>
              <tr>
                <td><span>Inactive</span><span class="text-danger">124</span></td>
                <td><span>Damaged</span><span class="">124</span></td>
              </tr>
              </tbody>
            </table>


          </div>

        </aside>

        <!-- map info content for agents -->
        <aside class="map-info-cont animated slideInLeft left-100" id="agents-info">

          <!-- show this when loading the new data -->
          <div class="map-loader d-none">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="map-cont-header">

            <!-- //use class name active-agent for an active agent -->
            <h2 class="chat__title">
              <span class="d-flex align-items-center"><span class="offline-agent mr-3"></span>Alex Wanjala Wafula</span>
              <small>Man Number goes here</small>
            </h2>
            <i class="zmdi zmdi-close close-aside"></i>
          </div>

          <div class="scroll-wrapper scrollbar-inner">
            <div class="map-cont-footer">
              <div class="map-cont-img">

                <!-- his picture goes here if any -->
                <img src="/assets/images/non_compliant.jpeg">
              </div>

            </div>

            <div href="#" class="listview__item">
              <div class="listview__content">
                <div class="listview__heading mb-2"><strong>25MB of 1GB remaining</strong></div>

                <div class="progress">
                  <div class="progress-bar progress-bar-danger" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>

            <div class="listview bg-primary">
              <div class="listview__item py-2">
                <div class="listview__heading text-white map-stat-header"><i class="flaticon-smartphone"></i><span>Enforcement Summary</span></div>
              </div>

            </div>

            <div class="listview">
              <div class="listview__item py-2">
                <div class="row w-100">

                  <div class="col-5">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">queries</div>
                    <h4 class="font-weight-bolder">102</h4>
                  </div>
                  <div class="col-7">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">Clamped</div>
                    <h4 class="font-weight-bolder">22</h4>
                  </div>

                  <div class="col-5 pb-2">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">Unclamped</div>
                    <h4 class="font-weight-bolder">125</h4>
                  </div>
                  <div class="col-7 pb-2">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">Distance covered</div>
                    <h4 class="font-weight-bolder">22 m</h4>
                  </div>

                  <div class="col-12 pb-2">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">Amount collected</div>
                    <h4 class="font-weight-bolder">KES 57,890</h4>
                  </div>


                </div>

              </div>

            </div>

            <div class="listview bg-primary">
              <div class="listview__item py-2">
                <div class="listview__heading text-white map-stat-header"><span>Contact information</span></div>
              </div>

            </div>
            <div class="widget-profile__list text-black">
              <div class="media">
                <div class="avatar-char"><i class="zmdi zmdi-phone"></i></div>
                <div class="media-body">
                  <strong><a href="tell:254704549859">0704549859</a></strong>
                  <small>Phone</small>
                </div>
              </div>

              <div class="media">
                <div class="avatar-char"><i class="zmdi zmdi-email"></i></div>
                <div class="media-body">
                  <strong>m-hollaway@gmail.com</strong>
                  <small>Email</small>
                </div>
              </div>


            </div>



          </div>

        </aside>

        <!-- map info content for street parking -->
        <aside class="map-info-cont animated slideInLeft left-100" id="street-info">

          <!-- show this when loading the new data -->
          <div class="map-loader d-none">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="map-cont-header">
            <h2 class="chat__title">Tom Mboya street <small>Daily Parking</small></h2>
            <i class="zmdi zmdi-close close-aside"></i>
          </div>

          <div class="scroll-wrapper scrollbar-inner">

            <!-- street image if any -->
            <div class="map-cont-img">
              <img src="/assets/images/non_compliant.jpeg">
            </div>
            <div class="listview">
              <div class="listview__item ">
                <div class="listview__content">
                  <div class="listview__heading text-uppercase font-weight-bold font-12px">Revenue collected today</div>
                  <h4 class="font-weight-bolder mb-0">KES 25,236,000</h4>
                </div>
              </div>
            </div>

            <div class="listview bg-primary">
              <div class="listview__item py-2">
                <div class="listview__heading text-white map-stat-header"><i class="flaticon-car-1"></i><span>Parking slots summary</span></div>
              </div>

            </div>

            <div class="listview">
              <div class="listview__item py-2">
                <div class="row w-100">

                  <div class="col-6">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">Total slots</div>
                    <h4 class="font-weight-bolder">102</h4>
                  </div>
                  <div class="col-6">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">Occupied</div>
                    <h4 class="font-weight-bolder">22</h4>
                  </div>

                  <div class="col-6 pb-2">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">Available</div>
                    <h4 class="font-weight-bolder">125</h4>
                  </div>
                  <div class="col-6 pb-2">
                    <div class="listview__heading text-uppercase font-weight-bold font-10px">cars checked in</div>
                    <h4 class="font-weight-bolder">132</h4>
                  </div>


                </div>

              </div>

            </div>

            <div class="listview bg-primary">
              <div class="listview__item py-2">
                <div class="listview__heading text-white map-stat-header"><i class="flaticon-smartphone"></i><span>Enforcement summary</span></div>
              </div>

            </div>
            <table class="table table-sm">
              <tbody>
              <tr>
                <td><span>Queries</span><span class="text-info">1124</span></td>
                <td><span>Not queried</span><span class="">124</span></td>
              </tr>

              <tr>
                <td><span>Compliant</span><span class="text-danger">124</span></td>
                <td><span>Uncompliant</span><span class="">124</span></td>
              </tr>

              <tr>
                <td><span>Clamped</span><span class="text-danger">124</span></td>
                <td><span>Due clamping</span><span class="">124</span></td>
              </tr>
              <tr>
                <td><span>To be unclamped</span><span class="text-danger">124</span></td>
                <td><span>to be toed</span><span class="">124</span></td>
              </tr>
              </tbody>
            </table>


          </div>

          <div class="map-cont-footer">
          </div>
        </aside>

        <!-- vehicle details -->
        <aside class="map-info-cont animated slideInLeft left-100" id="car-info">

          <!-- show this when loading the new data -->
          <div class="map-loader d-none">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="map-cont-header">
            <h2 class="chat__title">KAD 567Y <small>Car category</small></h2>
            <i class="zmdi zmdi-close close-aside"></i>
          </div>

          <div class="scroll-wrapper scrollbar-inner">

            <!-- street image if any -->
            <div class="map-cont-img">
              <img src="/assets/images/non_compliant.jpeg">
            </div>
            <div class="listview">
              <div class="listview__item ">
                <div class="listview__content">
                  <div class="listview__heading text-uppercase font-weight-bold font-12px">Total amount paid</div>
                  <h4 class="font-weight-bolder mb-0">KES 200</h4>
                </div>
              </div>
            </div>

            <div class="listview bg-primary">
              <div class="listview__item py-2">
                <div class="listview__heading text-white map-stat-header"><i class="flaticon-car-1"></i><span>Current parking status</span></div>
              </div>

            </div>

            <div class="listview">
              <div class="listview__item py-2">
                <strong class="text-success">Compliant</strong>
              </div>

            </div>

            <div class="listview bg-primary">
              <div class="listview__item py-2">
                <div class="listview__heading text-white map-stat-header"><i class="flaticon-smartphone"></i><span>Parking statuses timelines</span></div>
              </div>

            </div>
            <table class="table table-sm">
              <thead>
              <tr>
                <td><strong>Time:</strong></td>
                <td><strong>Details</strong></td>
              </tr>
              </thead>
              <tbody>

              <tr>
                <td><strong>8:00 AM</strong></td>
                <td class="text-left text-wrap">
                  The vehicle was queried and was found to be non compliant
                </td>
              </tr>

              <tr>
                <td><strong>8:45 AM</strong></td>
                <td class="text-left text-wrap">
                  The vehicle was clamped by Mr Miheso
                </td>
              </tr>

              <tr>
                <td><strong>9:00 AM</strong></td>
                <td class="text-left text-wrap">
                  The owner paid for the parking penalty
                </td>
              </tr>
              <tr>
                <td><strong>9:02 AM</strong></td>
                <td class="text-left text-wrap">
                  The car was unclaped by Ms Jane.
                </td>
              </tr>
              </tbody>
            </table>


          </div>

          <div class="map-cont-footer">
          </div>
        </aside>
      </div>


      <div class="map-key-card card">
        <div class="card-body">
          <i class="flaticon-key-3"></i>
        </div>
      </div>
      <div class="card map-card animated slideInLeft">
        <span class="close-map-key"><i class="zmdi zmdi-close"></i></span>
        <div class="card-body">
          <h4 class="card-title">Map Key</h4>

        </div>
        <div class="listview py-4 map-key">
                    <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/compliant-a.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>Compliant Cars</strong></div>
                    </div>
                </span>

          <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/tobe-clamped-a.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>To be clamped</strong></div>
                    </div>
                </span>

          <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/clamped-a.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>Clamped</strong></div>
                    </div>
                </span>

          <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/to-unclamp.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>To Unclamp</strong></div>
                    </div>
                </span>

          <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/warning.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>Incidents</strong></div>
                    </div>
                </span>

          <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/active-agent.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>active-agent</strong></div>
                    </div>
                </span>

          <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/inactive-agent.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>Inactive agents</strong></div>
                    </div>
                </span>

          <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/parliament.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>City Hall</strong></div>
                    </div>
                </span>

          <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/Offstreet.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>Street</strong></div>
                    </div>
                </span>
          <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/flag.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>Service/Collection Point</strong></div>
                    </div>
                </span>

          <span class="listview__item py-0">
                    <img src="/assets/images/map-assets/street-parking.svg" class="listview__img" alt="">

                    <div class="listview__content d-flex align-items-center">
                        <div class="listview__heading"><strong>Off Street</strong></div>
                    </div>
                </span>

        </div>
      </div>
      <div id="map" class="h-100 w-100 mt-1"></div>
    </section>

    </main>
    </body>
  </div>

</template>

<script>
import TopNav from "@/components/TopNav.vue";
import SideBar from "@/components/SideBar.vue";
import { loadScript } from "vue-plugin-load-script";

export default {
  name: "MapView",
  components: {SideBar, TopNav},
  mounted() {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAGPbYfcYqdbSBeXdIpH5iWrznfU886Qk8&callback=initMap")
        .then(() => {
          // Script is loaded, do something
          // alert('HHHH')
        })
        .catch(() => {
          // alert('dddd')
        });
  }
}

</script>

<style scoped>

</style>