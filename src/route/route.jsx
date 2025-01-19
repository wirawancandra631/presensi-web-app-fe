import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import LoginPage from "@/pages/auth/Index";
import HomePage from "@/pages/home/Index";
import MakePresensiInPage from "@/pages/make_presensi_in/Index";
import MakePresensiOutPage from "@/pages/make_presensi_out/Index";
import MakePermissionPage from "@/pages/make_permission/Index";
import HistoryPresensiPage from "@/pages/history_presensi/Index";
import PresensiDetail from "@/pages/presensi_detail/Index";
import HistoryPermission from "@/pages/history_permission/Index";
import ProfilPage from "@/pages/profil/Index";
import { PermissionTodayProvider } from "../context/PermissionTodayContext";
import { PresensiTodayProvider } from "../context/PresensiTodayContext";
import { ProfilProvider } from "../context/ProfilContext";
import AuthMiddleware from "../middleware/AuthMiddleware";
const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <ProfilProvider />,
    children: [
      {
        path: "/",
        element: (
          <AuthMiddleware>
            <PresensiTodayProvider>
              <PermissionTodayProvider>
                <HomePage />
              </PermissionTodayProvider>
            </PresensiTodayProvider>
          </AuthMiddleware>
        ),
      },
      {
        path: "/make-presensi-in",
        element: (
          <AuthMiddleware>
            <PresensiTodayProvider>
              <MakePresensiInPage />
            </PresensiTodayProvider>
          </AuthMiddleware>
        ),
      },
      {
        path: "/make-presensi-out",
        element: (
          <AuthMiddleware>
            <PresensiTodayProvider>
              <MakePresensiOutPage />
            </PresensiTodayProvider>
          </AuthMiddleware>
        ),
      },
      {
        path: "/make-permission",
        element: (
          <AuthMiddleware>
            <PermissionTodayProvider>
              <MakePermissionPage />
            </PermissionTodayProvider>
          </AuthMiddleware>
        ),
      },
      {
        path: "/presensi/:id",
        element: (
          <AuthMiddleware>
            <PresensiDetail />
          </AuthMiddleware>
        ),
      },
      {
        path: "/history-presensi",
        element: (
          <AuthMiddleware>
            <HistoryPresensiPage />
          </AuthMiddleware>
        ),
      },
      {
        path: "/history-permission",
        element: (
          <AuthMiddleware>
            <HistoryPermission />
          </AuthMiddleware>
        ),
      },

      {
        path: "/profil",
        element: (
          <AuthMiddleware>
            <ProfilPage />
          </AuthMiddleware>
        ),
      },
    ],
  },
];
const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <PageLayout />,
      children: routes,
    },
  ],
  {
    // basename: "/page",
  }
);
export { routes };
export default route;
