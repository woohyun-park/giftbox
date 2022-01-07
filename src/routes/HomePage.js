import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../fbase";
import Wish from "../components/Wish";

const HomePage = ({ user, wishlist, onSetWish }) => {
  const [wish, setWish] = useState("");
  const [attachment, setAttachment] = useState();
  useEffect(() => {
    dbService.collection("wishlist").onSnapshot((snapshot) => {
      const wishArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      onSetWish(wishArray);
    });
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${user.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const wishObj = {
      text: wish,
      createdAt: Date.now(),
      creatorId: user.uid,
      attachmentUrl,
    };
    await dbService.collection("wishlist").add(wishObj);
    setWish("");
    setAttachment("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setWish(value);
  };
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => setAttachment(null);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          placeholder="What's on your mind?"
          maxLength={120}
          value={wish}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Wish" />
        {attachment && (
          <>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </>
        )}
      </form>
      <div>
        {wishlist.length !== 0 &&
          wishlist.map((wish) => (
            <Wish
              key={wish.id}
              wishObj={wish}
              isOwner={wish.creatorId === user.uid}
            />
          ))}
      </div>
    </>
  );
};
export default HomePage;
