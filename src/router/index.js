import {createWebHistory, createRouter} from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import Dashboard from "@/components/Dashboard.vue";
import Compliant from "@/components/on-street/Compliant.vue";
import NonCompliant from "@/components/on-street/NonCompliant.vue";
import Clamped from "@/components/on-street/Clamped.vue";
import UnClamped from "@/components/on-street/UnClamped.vue";
import mapView from "@/components/map/MapView.vue";
import complantOffStreet from "@/components/off-street/Complaint.vue";
import NonComplantOffStreet from "@/components/off-street/NonComplant.vue";
import seasonalParking from "@/components/seasonal/SeasonalParking.vue";
import TBL from "@/components/enforcement/TBL.vue";
import CarPark from "@/components/enforcement/CarPark.vue";
import LoadingZones from "@/components/enforcement/LoadingZones.vue";
import RevenueOfficer from "@/components/reports/RevenueOfficer.vue";
import DailyReports from "@/components/reports/DailyReports.vue";
import ZonalReports from "@/components/reports/ZonalReports.vue";
import StreetReport from "@/components/reports/StreetReport.vue";
import AttendantsCollection from "@/components/collection/AttendantsCollection.vue";
import ZonalStreetCollection from "@/components/collection/ZonalStreetCollection.vue";


const routes =[
    {
        path:"/",
        name:"LandingPage",
        component: LandingPage,
        meta:{public: true}
    },
    {
        path: "/dashboard",
        name:"Dashboard",
        component: Dashboard
    },
    {
        path: "/compliant",
        name:"Compliant",
        component: Compliant
    },
    {
        path: "/non-compliant",
        name:"NonCompliant",
        component: NonCompliant
    },
    {
        path: "/clamped",
        name:"clamped",
        component: Clamped
    },
    {
        path: "/un-clamped",
        name:"un-clamped",
        component: UnClamped
    },
    {
        path: "/enclosed-parking-complaint",
        name:"complaintOffStreet",
        component: complantOffStreet
    },
    {
        path: "/enclosed-parking-non-complaint",
        name:"Enclosed",
        component: NonComplantOffStreet
    },
    {
        path: "/map",
        name:"map",
        component: mapView
    },{
        path: "/seasonal-parking",
        name:"seasonalParking",
        component: seasonalParking
    },
    {
        path: "/tbl",
        name:"tbl",
        component: TBL
    },
    {
        path: "/car-park",
        name:"car-park",
        component: CarPark
    },
    {
        path: "/loading-zones",
        name:"loading-zones",
        component: LoadingZones
    },
    {
        path: "/revenue-officer",
        name:"revenue-officer",
        component: RevenueOfficer
    },
    {
        path: "/daily-reports",
        name:"daily-reports",
        component: DailyReports
    },
    {
        path: "/zonal-report",
        name:"zonal-report",
        component: ZonalReports
    },
    {
        path: "/street-report",
        name:"street-report",
        component: StreetReport
    },
    {
        path: "/attendants-collection",
        name:"attendants-collection",
        component: AttendantsCollection
    },
    {
        path: "/zonal-street-collection",
        name:"zonal-street-collection",
        component: ZonalStreetCollection
    }


]
const router = createRouter({
        history: createWebHistory(),
        routes
    });

export default router;