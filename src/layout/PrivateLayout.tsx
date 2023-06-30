import { useRouter } from "next/router";
import { isAuthenticated } from "../utils/auth";
import { ReactNode } from "react";

// This is High Order Components (HOC)
interface PrivateLayoutProps {
  children: ReactNode;
}
const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  const router = useRouter();

  if (!isAuthenticated()) {
    // User is not authenticated, redirect to login page or access denied page
    router.push("/auth/login");
    return null;
  }

  // User is authenticated, render the private route
  return children;
};

export default PrivateLayout;
