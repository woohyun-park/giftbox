import React, { useState } from "react";
import { dbService, storageService } from "../fbase";
import "../styles/Wish.css";

const Wish = ({ wishObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newWish, setnewWish] = useState(wishObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      await dbService.doc(`wishlist/${wishObj.id}`).delete();
      await storageService.refFromURL(wishObj.attachmentUrl).delete();
    }
  };
  const toggleEditing = () => {
    return setEditing((prev) => !prev);
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setnewWish(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.doc(`wishlist/${wishObj.id}`).update({
      text: newWish,
    });
    setEditing(false);
  };
  const numToPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  numToPrice(10000);
  return (
    <div className="wish">
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Edit your wish"
                  value={newWish}
                  required
                  onChange={onChange}
                />
                <input type="submit" value="Update Wish" />
              </form>
              <button onClick={toggleEditing}>Cancel</button>
            </>
          )}
        </>
      ) : (
        <div className="wish__cont">
          {wishObj.attachmentUrl && (
            <img src={wishObj.attachmentUrl} className="wish__img" />
          )}
          <div className="wish__category">#{wishObj.category}</div>
          <div className="wish__name">{wishObj.name}</div>
          <div className="wish__price">{numToPrice(wishObj.price)}원</div>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Wish</button>
              <button onClick={toggleEditing}>Edit Wish</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Wish;
