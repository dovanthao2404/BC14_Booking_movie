import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./style";
import styles from "./Seat.module.css";

export default function Seat() {
  const classes = useStyles();
  return (
    <Box className={classes.seatSection}>
      <Box className={classes.seatSectionTop}>
        <Box className={classes.topLeft}>
          <img
            className={classes.topLeftImg}
            src="https://picsum.photos/50/50"
            alt=""
          />
          <div>
            <p className={classes.cinemaName}>
              BHD Star - Vincom Lê Văn Việt - Rạp 10
            </p>
            <p className={classes.cinemaAddress}>
              L4-Vincom Plaza, 50 Lê Văn Việt, Q.9
            </p>
          </div>
        </Box>
        <Box className={classes.topRight}>
          <div className={classes.topRightContent}>
            <p>Thời gian giữ ghế</p>
            <span>00:00</span>
          </div>
        </Box>
      </Box>
      <div className={classes.screen}>
        <img src="/img/screen.png" alt="" />
      </div>
      <Box className={classes.seatMap}>
        <div>
          <div className={classes.listSeat}>
            <div className={classes.seatRow}>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
            </div>
            <div className={classes.seatRow}>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
            </div>
            <div className={classes.seatRow}>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
            </div>
            <div className={classes.seatRow}>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
            </div>
            <div className={classes.seatRow}>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
            </div>
            <div className={classes.seatRow}>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
            </div>
            <div className={classes.seatRow}>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
            </div>
            <div className={classes.seatRow}>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
            </div>
            <div className={classes.seatRow}>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={`${styles.seat} ${styles.seatOtherSelected}`}>
                1
              </span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={`${styles.seat} ${styles.seatSelected}`}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
              <span className={styles.seat}>1</span>
            </div>

            <div className={classes.seatRow}>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
              <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
            </div>
          </div>
        </div>
      </Box>
      <Box className={classes.noteSeat}>
        <div className={classes.noteSeatItem}>
          <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
          <p className={classes.seatNoteSub}>Ghế thường</p>
        </div>
        <div className={classes.noteSeatItem}>
          <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
          <p className={classes.seatNoteSub}>Ghế vip</p>
        </div>
        <div className={classes.noteSeatItem}>
          <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
          <p className={classes.seatNoteSub}>Ghế đang chọn</p>
        </div>
        <div className={classes.noteSeatItem}>
          <span className={`${styles.seatVip} ${styles.seat}`}>1</span>
          <p className={classes.seatNoteSub}>Ghế đã có người chọn</p>
        </div>
      </Box>
    </Box>
  );
}
