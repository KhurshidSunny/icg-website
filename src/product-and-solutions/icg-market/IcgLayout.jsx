import { Outlet } from "react-router-dom";

function IcgLayout() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      <Outlet />
    </div>
  );
}

export default IcgLayout;
