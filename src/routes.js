import Home from './scenes/Home';
import About from './scenes/About';
import Contact from './scenes/Contact';
import NotFound from './containers/scenes/NotFound';

export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
  },
  {
    path: "/*",
    component: NotFound,
    exact: false,
  },
];