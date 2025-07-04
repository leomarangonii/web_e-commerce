import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProductManagement from "./pages/admin/ProductManagement.jsx";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext.jsx";
import { ProductProvider } from "./contexts/ProductContext.jsx";
import PrivateRoute from "./contexts/PrivateRoute.jsx";
import ProductNew from "./pages/admin/ProductNew.jsx";
import ProductUpdate from "./pages/admin/ProductUpdate.jsx";
import UserManagement from "./pages/admin/UserManagement.jsx";
import UserNew from "./pages/admin/UserNew.jsx";
import UserUpdate from "./pages/admin/UserUpdate.jsx";
import NotFound from "./pages/NotFound.jsx"
import CheckoutPage from "./pages/CheckoutPage.jsx";
import PurchaseSuccess from "./pages/EndPage.jsx";
import CategoryManagement from "./pages/admin/CategoryManagement.jsx";
import CategoryNew from "./pages/admin/CategoryNew.jsx";
import CategoryUpdate from "./pages/admin/CategoryUpdate.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "sobre",
    element: <AboutPage />,
  },
  {
    path: "auth",
    element: <AuthPage />,
  },
  {
    path: "carrinho",
    element: (
      <PrivateRoute>
        <CartPage />
      </PrivateRoute>
    ),
  },  
  {
    path: "checkout",
    element: (
      <PrivateRoute>
        <CheckoutPage />
      </PrivateRoute>
    ),
  },
  {
    path: "sucesso",
    element: (
        <PurchaseSuccess />
    ),
  },
  {
    path: "contato",
    element: <ContactPage />,
  },
  {
    path: "produto/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "produtos",
    element: <ProductsPage />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute requiredRole={"admin"}>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "perfil",
    element: (
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
    ),
  },
  {
    path: "contato",
    element: <ContactPage />,
  },
  {
    path: "dashboard/produtos",
    element: (
      <PrivateRoute requiredRole={"admin"}>
        <ProductManagement />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard/produtos/novo",
    element: (
      <PrivateRoute requiredRole={"admin"}>
        <ProductNew />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard/produtos/editar/:id",
    element: (
      <PrivateRoute requiredRole={"admin"}>
        <ProductUpdate />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard/usuarios",
    element: (
      <PrivateRoute requiredRole={"admin"}>
        <UserManagement />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard/usuarios/novo",
    element: (
      <PrivateRoute requiredRole={"admin"}>
        <UserNew />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard/usuarios/editar/:id",
    element: (
      <PrivateRoute requiredRole={"admin"}>
        <UserUpdate />
      </PrivateRoute>
    ),
  },
   {
    path: "dashboard/categorias",
    element: (
      <PrivateRoute requiredRole={"admin"}>
        <CategoryManagement />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard/categorias/novo",
    element: (
      <PrivateRoute requiredRole={"admin"}>
        <CategoryNew />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard/categorias/editar/:id",
    element: (
      <PrivateRoute requiredRole={"admin"}>
        <CategoryUpdate />
      </PrivateRoute>
    ),
  },
  {
    path:'*',
    element: <NotFound/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <UserProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
    </UserProvider>
    </AuthProvider>
  </StrictMode>
);
