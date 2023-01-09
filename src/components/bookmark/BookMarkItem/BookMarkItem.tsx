import { useDeleteBookMark } from "Hoocks";
import { useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { QueryClient, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { accessToken } from "store/fetchers/authSlice";
import Swal from "sweetalert2";
import EditBookMarkTitle from "../EditTitle/EditTitle";
import classes from "./BookMarkItem.module.scss";

interface optionProps {
  item: any;
}

const BookMarkItem: React.FC<optionProps> = ({
  item,
}): JSX.Element => {
  // Hoocks
  const [editTitle, setEditTitle] = useState(false);

  //************************ */
  // get accessToken
  const access = useSelector(accessToken);

  // useDeleteBookMark

  const {
    mutate: deleteBookMark,
    isSuccess,
    isLoading,
    error,
  } = useDeleteBookMark();
  //************************ */

  // deleteBookMarkAlert
  const deleteBookMarkAlert = () =>
    Swal.fire({
      title: "ایا از پاک کردن این ایتم مطمئن هستید",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBookMark({ id: item.id, access });
      }
      if (isSuccess) {
        Swal.fire("پاک شد");
      }
    });
  //************************ */

  const handelEditTitle = () => {
    setEditTitle(!editTitle);
    console.log(editTitle);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.titleBox}>
          {!editTitle ? (
            <>
              <h3>{item.title}</h3>
              <AiOutlineEdit onClick={handelEditTitle} />
            </>
          ) : (
            <EditBookMarkTitle
              title={item.title}
              handelEditTitle={handelEditTitle}
            />
          )}
        </div>

        <div className={classes.btnBox}>
          <button className={classes.showlist}>
            مشاهده لیست
          </button>

          <p className={classes.postNum}>{item.posts.length}</p>
        </div>
        <div className={classes.iconBox}>
          <button
            className={classes.bookmarkIcon}
            onClick={() => deleteBookMarkAlert()}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
      <div className={classes.imgs}></div>
    </div>
  );
};

export default BookMarkItem;
