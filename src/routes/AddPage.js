import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../fbase";

const AddPage = ({ user, onSetWish }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
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
  const onChange = (e) => {
    const {
      target: { id, value },
    } = e;
    if (id === "name") {
      setName(value);
    } else if (id === "category") {
      setCategory(value);
    } else if (id === "price") {
      setPrice(value);
    }
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
      name,
      category,
      price,
      createdAt: Date.now(),
      creatorId: user.uid,
      attachmentUrl,
    };
    await dbService.collection("wishlist").add(wishObj);
    setName("");
    setCategory("");
    setPrice();
    setAttachment("");
  };
  const onClearAttachment = () => setAttachment(null);

  return (
    <div className="page">
      <h2 className="page__title">
        어머! 이건 꼭 <span className="decorate__tertiary">사야해</span>
      </h2>
      <div className="page__full">
        <form className="page__form" onSubmit={onSubmit}>
          {attachment ? (
            <>
              <label for="file">
                <img src={attachment} className="page__img" />
              </label>
              {/* <button onClick={onClearAttachment}>Clear</button> */}
            </>
          ) : (
            <>
              <label for="file">
                <div className="page__img--empty">+</div>
              </label>
            </>
          )}
          <input
            id="file"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            style={{ display: "none" }}
          />
          <input
            className="page__input"
            type="text"
            id="name"
            onChange={onChange}
            placeholder="상품명"
            maxLength={120}
            value={name}
            required
          />
          <input
            className="page__input"
            type="text"
            id="category"
            onChange={onChange}
            placeholder="카테고리"
            maxLength={120}
            value={category}
            required
          />
          <input
            className="page__input"
            type="number"
            id="price"
            onChange={onChange}
            placeholder="가격"
            value={price}
          />
          <input className="page__add" type="submit" value="등록" />
        </form>
      </div>
    </div>
  );
};
export default AddPage;
