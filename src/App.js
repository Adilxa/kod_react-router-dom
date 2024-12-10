// import React , {Suspense , lazy, useEffect, useState} from "react";
// import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
// import NotFound from './pages/NotFound';
// import Contacts from './pages/Contacts';
// import "./App.css";
// import UsersPage from "./pages/UsersPage";
// import Header from "./components/Header";
// import Buttonback from "./components/Buttonback";
// import { Navigate } from 'react-router-dom';

// //
// function PrivateRoute({ isAuthenticated, userRole, requiredRole, children }) {
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (userRole !== requiredRole) {
//     return <Navigate to="/access-denied" />;
//   }

//   return children;
// }

// // user
// // admin

// //

// const HomePage = lazy(() => import("./pages/HomePage"));
// const AboutPage = lazy(() => import("./pages/AboutPage"));
// const SettingsPage = lazy(() => import("./pages/SettingsPage"));
// const FormPage = lazy(() => import("./pages/FormPage"));
// const UserProfile = lazy(() => import("./pages/UserProfile"));
// const LoginPage = lazy(() => import("./pages/LoginPage"))

// const Paramspage = () => {

//   const {id} = useParams()

//   return (
//     <div>User - {id}</div>
//   )
// }

// const ProductPage = () => {

//   const {id , category} = useParams()

//   return (
//     <div>User - {id} {category}</div>
//   )
// }

// function App() {

//   const [user , setUser] = useState(null);

//   useEffect(() => {
//      const user = localStorage.getItem("user");
//       setUser(JSON.parse(user))
//   } , [])

//   return (
//     <BrowserRouter>
//      <Suspense fallback={<div>Loading.......</div>}>
//       <Header/>

//      <Routes>
//         <Route path="/" element={<HomePage/>}  />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/settings" element={<SettingsPage />} />
//         <Route path='/contacts' element={<Contacts/>}/>
//         <Route path='/form' element={<FormPage/>}/>
//         <Route path="/access-denied" element={<div>access denied</div>}/>

//         <Route path="/userprofile"
//          element={
//         <PrivateRoute isAuthenticated={user?.isAuth} userRole={user?.role} requiredRole={"admin"}>
//           <UserProfile/>
//         </PrivateRoute>
//         }  />

//         <Route path="/home/:id/:name" element={<UsersPage/>}/>
//         <Route path="/user/:id" element={<Paramspage/>} />
//         <Route path="/user/:id/:category" element={<ProductPage/>} />
//         <Route path="/login" element={<LoginPage setUser={setUser}/>}/>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Buttonback/>
//      </Suspense>

//     </BrowserRouter>

//   );
// }

// export default App;

// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useParams,
// } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div>
//       <h2>Панель управления</h2>
//       <ul>
//         <li>
//           <Link to="settings">Настройки</Link>
//         </li>
//         <li>
//           <Link to="profile">Профиль</Link>
//         </li>
//       </ul>

//       <Outlet />
//     </div>
//   );
// }

// function Settings() {
//   return <h2>Настройки</h2>;
// }

// function Profile() {
//   const param = useParams();

//   return (
//     <div>
//       <h2>Профиль - {param.id}</h2>
//       <Outlet />
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="dashboard" element={<Dashboard />}>
//           <Route path="settings" element={<Settings />} />
//           <Route path="*" element={<h1>404</h1>} />
//         </Route>

//         <Route path="profile/:id" element={<Profile />}>
//           <Route path="settings" element={<Settings />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";

function Cart({ nextStep }) {
  const [items, setItems] = useState(["Товар 1", "Товар 2"]);

  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => nextStep({ items }, "/checkout/shipping")}>
        Далее
      </button>
    </div>
  );
}

function Shipping({ nextStep }) {
  const [address, setAddress] = useState("");

  return (
    <div>
      <h2>Доставка</h2>
      <input
        type="text"
        value={address}
        onChange={e => setAddress(e.target.value)}
        placeholder="Адрес доставки"
        required
      />
      <button onClick={() => nextStep({ address }, "/checkout/confirmation")}>
        Далее
      </button>
    </div>
  );
}

function Confirmation() {
  const location = useLocation();
  const { items, address } = location.state || {};

  return (
    <div>
      <h2>Подтверждение заказа</h2>
      <p>Товары: {items.join(", ")}</p>
      <p>Адрес доставки: {address}</p>
      <button>Подтвердить заказ</button>
    </div>
  );
}

function Checkout() {
  const [orderData, setOrderData] = useState({});
  const navigate = useNavigate();

  const nextStep = (data, route) => {
    setOrderData(prev => ({ ...prev, ...data }));

    navigate(route, { state: orderData });
  };

  return (
    <Routes>
      <Route path="/checkout/cart" element={<Cart nextStep={nextStep} />} />
      <Route
        path="/checkout/shipping"
        element={<Shipping nextStep={nextStep} />}
      />
      <Route path="/checkout/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/checkout/cart">Начать оформление заказа</Link>
      </nav>
      <Checkout />
    </BrowserRouter>
  );
}

export default App;
