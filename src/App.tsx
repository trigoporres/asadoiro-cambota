import { Tabs, TabsItem, AppLayout, AppBar, Panel } from '@devoinc/genesys-ui';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>

<AppLayout.Container>
      <AppLayout.Bar>
        <AppBar.Container sticky>
          <AppBar.Navigation id="bar-navigation">
            <Tabs colorScheme="primary" contained={false}>
            <TabsItem
          label="Asadoiro Cambota"
          size="lg"
          state={location.pathname === '/' ? 'selected' : 'enabled'}
          onClick={() => {
            navigate('/');
          }}
        />
        <TabsItem
          label="Menu"
          size="lg"
          state={location.pathname === '/menu' ? 'selected' : 'enabled'}
          onClick={() => {
            navigate('/menu');
          }}
        />
            </Tabs>
          </AppBar.Navigation>
        </AppBar.Container>
      </AppLayout.Bar>
      <AppLayout.Content>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes> 
      </AppLayout.Content>
    </AppLayout.Container>
    
      
  </>
  );
};
