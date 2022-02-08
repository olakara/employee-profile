import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path:'',
          pathMatch: 'full',
          redirectTo: 'employees'
        },
        {
          path: 'new-employee',
          loadChildren: () =>
            import('@ogc/new-employee').then(
              (module) => module.NewEmployeeModule
            ),
        },
        {
          path: 'edit-employee',
          loadChildren: () =>
            import('@ogc/edit-employee').then(
              (module) => module.EditEmployeeModule
            ),
        },
        {
          path: 'view-employee',
          loadChildren: () =>
            import('@ogc/view-employee').then(
              (module) => module.ViewEmployeeModule
            ),
        },
        {
          path: 'master-data',
          loadChildren: () =>
            import('@ogc/master-data').then(
              (module) => module.MasterDataModule
            ),
        },
        {
          path: 'employees',
          loadChildren: () =>
            import('@ogc/employees').then((module) => module.EmployeesModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
