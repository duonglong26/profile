import React, { useContext } from 'react';
import clsx from 'clsx';
import styles from './_dialog_accept_delete.module.scss';
import { MdClose } from "react-icons/md";
import { ThemeContext } from '../../Introduce/ProfileManagement/ProfileManagement';

function DialogAcceptDelete() {
  const providerValue = useContext(ThemeContext);

  console.log(providerValue)
  const handleClose = () => {
    providerValue.setIsOpenFormAcceptDelete(false);
    providerValue.setCurrentIdDelete("");
  }

  const handeDelete = () => {
    providerValue.handleDeteleItem(providerValue.currentIdDelete);
    handleClose();
  }

  return (
    <div className={styles.dialogAcceptDelete}>
      <div className={styles.dialog}>
        <h1>ARE YOU SURE DELETE</h1>
        {/* icon delete */}
        <div
          className={styles.box}
          onClick={() => handleClose()}
        >
          <MdClose
            className={styles.icon}
          />
        </div>
        {/* content */}
        <div className={styles.content}>
          <button
            className={clsx(styles.btn, styles.error)}
            onClick={() => handeDelete()}
          >
            YES
          </button>
          <button
            onClick={() => handleClose()}
            className={clsx(styles.btn, styles.warning)}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  )
}

export default DialogAcceptDelete;