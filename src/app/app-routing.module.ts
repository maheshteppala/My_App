import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { MyntraComponent } from './myntra/myntra.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { MovieComponent } from './movie/movie.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentcardComponent } from './studentcard/studentcard.component';
import { CreateStudentcardComponent } from './create-studentcard/create-studentcard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HooksComponent } from './hooks/hooks.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { TextAreaComponent } from './text-area/text-area.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    {path:'home', canActivate:[AuthenticationGuard],component:HomeComponent},
    {path:'welcome', canActivate:[AuthenticationGuard],component:WelcomeComponent},
    {path:'calculator', canActivate:[AuthenticationGuard],component:CalculatorComponent},
    {path:'rectangle', canActivate:[AuthenticationGuard],component:RectangleComponent},
    {path:'circle', canActivate:[AuthenticationGuard],component:CircleComponent},
    {path:'bmi', canActivate:[AuthenticationGuard],component:BmiComponent},
    {path:'data-binding', canActivate:[AuthenticationGuard],component:DataBindingComponent},
    {path:'directives', canActivate:[AuthenticationGuard],component:DirectivesComponent},
    {path:'employee', canActivate:[AuthenticationGuard],component:EmployeeComponent},
    {path:'flipkart', canActivate:[AuthenticationGuard],component:FlipkartComponent},
    {path:'vehicle', canActivate:[AuthenticationGuard],component:VehicleComponent},
    {path:'account', canActivate:[AuthenticationGuard],component:AccountComponent},
    {path:'myntra', canActivate:[AuthenticationGuard],component:MyntraComponent},
    {path:'mail', canActivate:[AuthenticationGuard],component:MailComponent},
    {path:'pinterest', canActivate:[AuthenticationGuard],component:PinterestComponent},
    {path:'weather', canActivate:[AuthenticationGuard],component:WeatherComponent},
    {path:'blog', canActivate:[AuthenticationGuard],component:BlogComponent},
    {path:'movie', canActivate:[AuthenticationGuard],component:MovieComponent},
    {path:'profile', canActivate:[AuthenticationGuard],component:ProfileComponent},
    {path:'create-vehicle', canActivate:[AuthenticationGuard],component:CreateVehicleComponent},
    {path:'studentcard', canActivate:[AuthenticationGuard],component:StudentcardComponent},
    {path:'create-studentcard', canActivate:[AuthenticationGuard],component:CreateStudentcardComponent},
    {path:'create-user', canActivate:[AuthenticationGuard],component:CreateUserComponent},
    {path:'create-student', canActivate:[AuthenticationGuard],component:CreateStudentComponent},
    {path:'vehicle-details/:id', canActivate:[AuthenticationGuard],component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'student-details/:id', canActivate:[AuthenticationGuard],component:StudentDetailsComponent},
    {path:'edit-studentcard/:id',component:CreateStudentcardComponent},
    {path:'hooks', canActivate:[AuthenticationGuard],component:HooksComponent},
    {path:'sibling1', canActivate:[AuthenticationGuard],component:Sibling1Component},
    {path:'sibling2', canActivate:[AuthenticationGuard],component:Sibling2Component},
    {path:'parent', canActivate:[AuthenticationGuard],component:ParentComponent},
    {path:'child', canActivate:[AuthenticationGuard],component:ChildComponent},
    {path:'rating', canActivate:[AuthenticationGuard],component:RatingComponent},
    {path:'about-ceo', canActivate:[AuthenticationGuard],component:AboutCeoComponent},
    {path:'about-company', canActivate:[AuthenticationGuard],component:AboutCompanyComponent},
    {path:'payment', loadChildren: () => import('./payment/payment.module'). then(m => m.PaymentModule)},
    {path:'text-area', canActivate:[AuthenticationGuard],component:TextAreaComponent}

  ]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
