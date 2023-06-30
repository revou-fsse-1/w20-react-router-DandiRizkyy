export function isAuthenticated() {
  const token = localStorage.getItem("token");
  if (!token) return false;
  return !!token; // Return true if the token exists
}
