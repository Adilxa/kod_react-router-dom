import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";
import "./App.css";
import UsersPage from "./pages/UsersPage";
import Header from "./components/Header";
import Buttonback from "./components/Buttonback";
import { Navigate, Link, Outlet } from "react-router-dom";

//
function PrivateRoute({ isAuthenticated, userRole, requiredRole, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userRole !== requiredRole) {
    return <Navigate to="/access-denied" />;
  }

  return children;
}

// user
// admin

//

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const FormPage = lazy(() => import("./pages/FormPage"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

const Paramspage = () => {
  const { id } = useParams();

  return <div>User - {id}</div>;
};

const ProductPage = () => {
  const { id, category } = useParams();

  return (
    <div>
      User - {id} {category}
    </div>
  );
};

function Dashboard() {
  return (
    <div>
      <h2>Панель управления</h2>
      <ul>
        <li>
          <Link to="settings">Настройки</Link>
        </li>
        <li>
          <Link to="profile">Профиль</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

function Settings() {
  return <h2>Настройки</h2>;
}

function Profile() {
  return <h2>Профиль</h2>;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading.......</div>}>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/access-denied" element={<div>access denied</div>} />

          <Route
            path="/userprofile"
            element={
              <PrivateRoute
                isAuthenticated={user?.isAuth}
                userRole={user?.role}
                requiredRole={"admin"}
              >
                <UserProfile />
              </PrivateRoute>
            }
          />

          <Route path="/home/:id/:name" element={<UsersPage />} />
          <Route path="/user/:id" element={<Paramspage />} />
          <Route path="/user/:id/:category" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Buttonback />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
