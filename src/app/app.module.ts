import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dashboard/dash-board/dash-board.component';
import { SideNavBarComponent } from './mainComponents/side-nav-bar/side-nav-bar.component';
import { NavBarComponent } from './mainComponents/nav-bar/nav-bar.component';
import { FooterComponent } from './mainComponents/footer/footer.component';
import { PercentageCardComponent } from './dashboard/percentage-card/percentage-card.component';
import { TablesComponent } from './tables/tables/tables.component';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { DoubleLineChartComponent } from './dashboard/double-line-chart/double-line-chart.component';
import { DoughnutChartComponent } from './dashboard/doughnut-chart/doughnut-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './dashboard/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    SideNavBarComponent,
    NavBarComponent,
    FooterComponent,
    PercentageCardComponent,
    TablesComponent,
    BarChartComponent,
    DoubleLineChartComponent,
    DoughnutChartComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
