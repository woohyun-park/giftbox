import { useEffect } from "react";
import Wish from "../components/Wish";
import { dbService } from "../fbase";

const HomePage = ({ user, wishlist, onSetWish }) => {
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
      <h2 className="page__title">친구 생일엔 뭘 줄까?</h2>
      <div className="page__friend">
        {wishlist.map((wish) => {
          if (user.uid !== wish.creatorId)
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
export default HomePage;
