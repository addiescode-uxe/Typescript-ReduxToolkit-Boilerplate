import MainContainer from '../containers/Main';
import { PathItem } from '../models/route.model';

export const appRoutes: PathItem[] = [
  {
    path: '/home',
    component: MainContainer,
    exact: true,
  },
];

export default appRoutes;
