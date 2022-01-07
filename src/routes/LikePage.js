import React, { useEffect } from "react";
import Wish from "../components/Wish";
import { dbService } from "../fbase";

const LikePage = ({ user, wishlist, onSetWish }) => {
  const getWishlist = async () => {
    const dbWishlist = await dbService.collection("wishlist").get();
    const filteredWishlist = [];
    dbWishlist.forEach((document) => {
      const wishObject = {
        ...document.data(),
        id: document.id,
      };
      filteredWishlist.push(wishObject);
    });
    onSetWish(filteredWishlist);
  };
  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <div className="page">
      <h2 className="page__title">
        나만의 <span className="decorate__primary">위시리스트</span>
      </h2>
      <div className="page__full">
        {wishlist.map((wish) => {
          if (user.uid === wish.creatorId)
            return (
              <Wish
                key={wish.id}
                wishObj={wish}
                isOwner={wish.creatorId === user.uid}
              />
            );
          else return;
        })}
      </div>
    </div>
  );
};
export default LikePage;
