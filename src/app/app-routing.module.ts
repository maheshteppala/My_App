import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'account',component:AccountComponent},
    {path:'myntra',component:MyntraComponent},
    {path:'mail',component:MailComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'weather',component:WeatherComponent},
    {path:'blog',component:BlogComponent},
    {path:'movie',component:MovieComponent},
    {path:'profile',component:ProfileComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'studentcard',component:StudentcardComponent},
    {path:'create-studentcard',component:CreateStudentcardComponent}
  ]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
