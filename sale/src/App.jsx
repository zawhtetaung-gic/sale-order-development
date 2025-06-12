import Sidebar from './components/Side_bar';
import OrderForm from './components/Order_form';
import OrderList from './components/Order_lists';

const App = () => {
  return (
    <div className="flex">
      {/* <OrderList /> */}
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <OrderForm />
      </div>
    </div>
  );
};

export default App;