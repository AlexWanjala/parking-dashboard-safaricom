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
            <span class="rev-title-container"> <h1 class="text-capitalize stream_name m-0">Seasonal Parking</h1>
							</span>
            <div class="">
              <ol class="breadcrumb border-0">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">Seasonal Parking</li>
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
                <li class="nav-item"  v-for="(item) in duration" :key="item.id">
                  <a  @click="getEntriesByDuration(item.duration)" class="nav-link active one-month-link"><i class="pe-7s-portfolio mr-2"></i>{{item.duration}}</a>
                </li>

<!--                <li class="nav-item">
                  <a class="nav-link three-months-link" ><i class="pe-7s-portfolio mr-2"></i>Three Months</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link six-months-link" ><i class="pe-7s-portfolio mr-2"></i>Six Months</a>
                </li>-->

              </ul>
            </div>

            <div class="col-12 p-0 month_table">
              <div class="card ">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-striped mb-0 table-sm" id="data-table">
                      <thead>
                      <tr>
                        <th>Number</th>
                        <th>Registration No.</th>
                        <th>Duration</th>
                        <th>Vehicle Category</th>
                        <th>Start Date(M/D/Y)</th>
                        <th>Amount</th>
                        <th>code</th>
                        <th>Receipt No.</th>
                        <th>End Date(M/D/Y)</th>
                        <th>Paid By</th>
                        <th>Payment Status</th>

                      </tr>
                      </thead>
                      <tbody>
                      <tr  v-for="(item,index) in entries" :key="item.id" >
                        <td>{{index+1}}</td>
                        <td><a href="">{{item.numberPlate}}</a></td>
                        <td class="text-capitalize">{{item.duration}}</td>
                        <td class="text-capitalize">{{item.category}}</td>
                        <td class="text-capitalize">{{item.startDate}}</td>
                        <td class="text-capitalize">KES {{item.receiptAmount}}</td>
                        <td class="text-capitalize">{{item.parkingCode}}</td>
                        <td class="text-capitalize">{{item.transactionCode}}</td>
                        <td class="text-capitalize">{{item.endDate}}</td>
                        <td class="text-capitalize">{{item.paidBy}}</td>
                        <td><span class="badge badge-pill badge-soft-success px-3">{{item.status}}</span></td>

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
import {execute, live} from "@/api";

export default {
  name: "seasonalParking",
  components: {TopNav, SideBar},
  data(){
    return{
      pageLoaded: false,
      duration: [
        {
          id: "",
          duration: "",
          days: "",
          status: "",
          unit: null
        }],
      entries:[{
        id: "",
        parkingCode: "",
        numberPlate: "",
        duration: "",
        category: "",
        zone: "",
        billTotal: "",
        receiptAmount: "",
        billBalance: "",
        startDate: "",
        endDate: "",
        status: "",
        transactionCode: "",
        paymentMode: "",
        street: "",
        paidBy:""
      }]
    }
  },
  mounted() {
    this.entries =[]
    this.pageLoaded= true;
    this.getDuration();
   //  this.getEntriesByDuration("MOTHLY")
  },
  methods:{
    getDuration(){
      const data = new FormData();
      data.append("function", "getDuration");
      execute(data,live)
          .then((res) =>{
            if (res.data.success) {
              this.duration =res.data.data.duration
            }else{
              alert(res.data.message)
            }
          })
          .catch((e) => {
            //alert(e.message);
            this.message =e.message
          });
    },
    getEntriesByDuration(duration){
      this.entries = []
      const data = new FormData();
      data.append("function", "getEntriesByDuration");
      data.append("status", "PAID");
      data.append('duration',duration)
      execute(data,live)
          .then((res) =>{
            if (res.data.success) {
              this.entries =res.data.data.entries
            }else{
              alert(res.data.message)
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

<style scoped>

</style>