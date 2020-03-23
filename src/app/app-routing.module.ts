import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
	},
	{
		path: 'messages',
		loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesPageModule)
	},
	{
		path: 'notifications',
		loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
	},
	{
		path: 'activity',
		loadChildren: () => import('./pages/activity/activity.module').then(m => m.ActivityPageModule)
	},
	{
		path: 'landing',
		loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule)
	},
	{
		path: 'calendar',
		loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarPageModule)
	},
	{
		path: 'profile',
		loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
	},
	{
		path: 'connections',
		loadChildren: () => import('./pages/connections/connections.module').then(m => m.ConnectionsPageModule)
	},
	{
		path: 'summary',
		loadChildren: () => import('./pages/summary/summary.module').then(m => m.SummaryPageModule)
	},
	{
		path: 'agenda',
		loadChildren: () => import('./pages/agenda/agenda.module').then(m => m.AgendaPageModule)
	},
	{
		path: 'attendees',
		loadChildren: () => import('./pages/attendees/attendees.module').then(m => m.AttendeesPageModule)
	},
	{
		path: 'talks',
		loadChildren: () => import('./pages/talks/talks.module').then(m => m.TalksPageModule)
	},
	{
		path: 'talk',
		loadChildren: () => import('./pages/talk/talk.module').then(m => m.TalkPageModule)
	},
	{
		path: 'presenters',
		loadChildren: () => import('./pages/presenters/presenters.module').then(m => m.PresentersPageModule)
	},
	{
		path: 'travel',
		loadChildren: () => import('./pages/travel/travel.module').then(m => m.TravelPageModule)
	},
	{
		path: 'accomodation',
		loadChildren: () => import('./pages/accomodation/accomodation.module').then(m => m.AccomodationPageModule)
	},
	{
		path: 'tickets',
		loadChildren: () => import('./pages/tickets/tickets.module').then(m => m.TicketsPageModule)
	},
	{
		path: 'transactions',
		loadChildren: () => import('./pages/transactions/transactions.module').then(m => m.TransactionsPageModule)
	},
	{
		path: 'sponsors',
		loadChildren: () => import('./pages/sponsors/sponsors.module').then(m => m.SponsorsPageModule)
	},
	{
		path: 'help',
		loadChildren: () => import('./pages/help/help.module').then(m => m.HelpPageModule)
	},
	{
		path: 'members',
		loadChildren: () => import('./pages/members/members.module').then(m => m.MembersPageModule)
	},
	{
		path: 'registration',
		loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationPageModule)
	},
	{
		path: 'exhibits',
		loadChildren: () => import('./pages/exhibits/exhibits.module').then(m => m.ExhibitsPageModule)
	},
	{
		path: 'social',
		loadChildren: () => import('./pages/social/social.module').then(m => m.SocialPageModule)
	},
	{
		path: 'venue',
		loadChildren: () => import('./pages/venue/venue.module').then(m => m.VenuePageModule)
	},
	{
		path: 'important-information',
		loadChildren: () => import('./pages/important-information/important-information.module').then(m => m.ImportantInformationPageModule)
	},
	{
		path: 'floor-plan',
		loadChildren: () => import('./pages/floor-plan/floor-plan.module').then(m => m.FloorPlanPageModule)
	},
	{
		path: 'policies',
		loadChildren: () => import('./pages/policies/policies.module').then(m => m.PoliciesPageModule)
	},
	{
		path: 'session',
		loadChildren: () => import('./pages/session/session.module').then(m => m.SessionPageModule)
	},
	{
		path: 'menu',
		loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
	},
	{
		path: 'settings',
		loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
	},
	{
		path: 'ticket',
		loadChildren: () => import('./pages/ticket/ticket.module').then(m => m.TicketPageModule)
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
