import React, { useState } from "react";
import { dbService, storageService } from "../fbase";

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
  return (
    <>
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
        <>
          <h4>{wishObj.text}</h4>

          {wishObj.attachmentUrl && (
            <img src={wishObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Wish</button>
              <button onClick={toggleEditing}>Edit Wish</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Wish;
