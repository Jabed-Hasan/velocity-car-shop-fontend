import * as React from "react";
import { Home, User, Settings, ShoppingBag, Users } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { currentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { JSX } from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import VeloV from "@/assets/velocity-logo.png";
import {
  useSidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import AdminDashboard from "@/pages/Dashboard/Dashboard";
import UserDashboard from "@/pages/Dashboard/UserDashboard";

type NavItem = {
  title: string;
  url: string;
  icon: JSX.Element;
};

type UserType = {
  role: "admin" | "user";
};

export function AppSidebar() {
  const user = useAppSelector(currentUser) as UserType | null;
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const [navMenu, setNavMenu] = React.useState<NavItem[]>([]);

  // admin menu
  const adminMenu: NavItem[] = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <Home className="h-4 w-4" />,
    },
    {
      title: "Add Product",
      url: "/dashboard/add-product",
      icon: <MdOutlineProductionQuantityLimits className="h-4 w-4" />,
    },
    {
      title: "Manage Products",
      url: "/dashboard/manage-products",
      icon: <MdOutlineProductionQuantityLimits className="h-4 w-4" />,
    },
    {
      title: "Manage Orders",
      url: "/admin/orders",
      icon: <Settings className="h-4 w-4" />,
    },

    {
      title: "Manage User",
      url: "/admin/users",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Manage Profile Settings",
      url: "/profile",
      icon: <User className="h-4 w-4" />,
    },
  ];

  // user menu
  const userMenu: NavItem[] = [
    {
      title: "My Orders",
      url: "/dashboard/my-orders",
      icon: <ShoppingBag className="h-4 w-4" />,
    },
    {
      title: "Track Order Status",
      url: "/dashboard/track-order",
      icon: <ShoppingBag className="h-4 w-4" />,
    },

    {
      title: "Manage Profile Settings",
      url: "/profile",
      icon: <User className="h-4 w-4" />,
    },
  ];

  React.useEffect(() => {
    if (user?.role === "admin") {
      setNavMenu(adminMenu);
    } else if (user?.role === "user") {
      setNavMenu(userMenu);
    }
  }, [user?.role]);

  return (
    <Sidebar className="h-screen border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
      <SidebarHeader className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex h-16 items-center px-4">
          <div className="flex w-full items-center">
            {!isCollapsed && (
              <>
                <img src={VeloV} alt="Velocity Logo" className="size-4" />
                <span className="-ml-[0.7px] font-bold dark:text-white">elocity</span>
                <span className="ml-auto rounded-full border border-gray-200 dark:border-gray-700 px-2 py-0.5 text-xs dark:text-gray-300">
                  v1.0.0
                </span>
              </>
            )}
            {isCollapsed && (
              <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white">
                V
              </div>
            )}
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="h-full flex-1">
        <SidebarMenu className="h-full py-2">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/" className="dark:text-gray-300 dark:hover:text-white">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {navMenu.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item.url} className="dark:text-gray-300 dark:hover:text-white">
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

export function Dashboard() {
  const user = useAppSelector(currentUser) as UserType | null;
  const location = useLocation();
  const [isReady, setIsReady] = React.useState(false);

  // Ensure the component is ready after mounting
  React.useEffect(() => {
    setIsReady(true);
  }, []);

  // Use pathname from React Router instead of window.location
  const pathname = location.pathname;

  if (!isReady) {
    return (
      <div className="flex h-screen items-center justify-center dark:bg-gray-900">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent dark:border-blue-500"></div>
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        {user?.role === "admin" ? (
          // If admin, show the index route or outlet based on current location
          pathname === "/dashboard" ? (
            <AdminDashboard />
          ) : (
            <Outlet />
          )
        ) : // If regular user, show user dashboard or outlet based on pathname
        pathname === "/dashboard" ? (
          <UserDashboard />
        ) : (
          <Outlet />
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
