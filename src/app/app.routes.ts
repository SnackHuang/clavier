import { RouterModule } from '@angular/router';

import { LoginComponent} from './login/login.component';


const appRoutes=[
	{
		path:'',
		redirectTo: 'login',
    	pathMatch: 'full' 
	},
	{
		path:'login',
		component: LoginComponent,
	}
]
// export default RouterModule.forRoot(appRoutes);
export const Routing = RouterModule.forRoot(appRoutes);