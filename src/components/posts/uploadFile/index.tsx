import { useState } from 'react'
import classes from './uploadFile.module.scss'
interface props {
  images: any
  setImages: any
}

const UploadFile: React.FC<props> = ({ images, setImages }): JSX.Element => {
  interface InitialForm {
    title: string
  }

  const handleInputChangeFile = (e, index) => {
    const { name, files } = e.target
    const list = [...images]
    list[index][name] = files[0]
    setImages(list)
  }
  const handleRemoveClick = (index) => {
    const list = [...images]
    list.splice(index, 1)
    setImages(list)
  }

  // handle click event of the Add button
  const handleAddClick = () => {
    setImages([...images, { img: '' }])
  }
  return (
    <div className={classes.warp}>
      {images.map((x, i) => {
        return (
          <div className={classes.file}>
            <input
              name="img"
              type="file"
              className={classes.fileInput}
              onChange={(e) => handleInputChangeFile(e, i)}
            />
            {images.length !== 1 && (
              <button
                className={classes.removeBtn}
                onClick={() => handleRemoveClick(i)}
              >
                حذف کردن
              </button>
            )}
            {images.length - 1 === i && (
              <button className={classes.addBtn} onClick={handleAddClick}>
                اضافه کردن
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default UploadFile
