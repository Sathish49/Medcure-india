import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HospitalLocationsComponent } from './Componends/hospital-locations/hospital-locations.component';
import { BodyPageComponent } from './Componends/body-page/body-page.component';
import { PatientListsComponent } from '../app/Componends/hospital-locations/patient-home/patient-lists/patient-lists.component';
import { PatientDetailsComponent } from '../app/Componends/hospital-locations/patient-home/patient-lists/patient-details/patient-details.component';
import { PatientHomeComponent } from './Componends/hospital-locations/patient-home/patient-home.component';
import { PageNotFoundComponent } from './Componends/page-not-found/page-not-found.component';
import { PatientDetailsHomepageComponent } from './Componends/hospital-locations/patient-home/patient-lists/patient-details-homepage/patient-details-homepage.component'


const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: BodyPageComponent },
  {
    path: "hospitals", component: PatientHomeComponent,
    children: [
      { path: "", component: HospitalLocationsComponent },
      {
        path: ":city", component: PatientDetailsHomepageComponent,
        children: [
          { path: "", component: PatientListsComponent },
          { path: ":name", component: PatientDetailsComponent },
        ]
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const allRoutingComponends = [
  HospitalLocationsComponent,
  BodyPageComponent,
  PatientListsComponent,
  PageNotFoundComponent,
  PatientDetailsComponent,
  PatientHomeComponent,
  PatientDetailsHomepageComponent
]