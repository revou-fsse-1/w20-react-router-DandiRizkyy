import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export function Wishlist() {
  return <div>wishlist</div>;
}

const PrivateWishlist = () => {
  return (
    <PrivateLayout>
      <Wishlist />
    </PrivateLayout>
  );
};

export default PrivateWishlist;
