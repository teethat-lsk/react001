import decorator from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className = {decorator.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
