import styles from "./Group.module.css";

const Group = () => {
  return (
    <div className={styles.desktopParent}>
      <div className={styles.desktop}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-2.svg" />
          <div className={styles.thmSnPhm}>Thêm sản phẩm vào đơn hàng</div>
          <div className={styles.nguynMnhPhngParent}>
            <div className={styles.nguynMnhPhng}>Nguyễn Mạnh Phương</div>
            <div className={styles.image1Parent}>
              <div className={styles.image1} />
              <div className={styles.mp}>MP</div>
            </div>
          </div>
          <img className={styles.iconAdd} alt="" src="/-icon-add.svg" />
        </div>
        <div className={styles.groupParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.sttParent}>
              <div className={styles.stt}>STT</div>
              <div className={styles.nhSp}>Ảnh SP</div>
              <div className={styles.mSku}>Mã SKU</div>
              <div className={styles.tnSnPhm}>Tên sản phẩm</div>
              <div className={styles.nV}>Đơn vị</div>
              <div className={styles.sLng}>Số lượng</div>
              <div className={styles.nGi}>Đơn giá</div>
              <div className={styles.thnhTin}>Thành tiền</div>
            </div>
          </div>
          <div className={styles.div}>
            <div className={styles.div1}>2</div>
            <div className={styles.iconImageParent}>
              <img className={styles.iconImage} alt="" src="/-icon-image.svg" />
              <div className={styles.pvn0002}>PVN0002</div>
              <div className={styles.tiXchHilde}>
                Túi xách Hilde Palladino Gadino
              </div>
              <div className={styles.div2}>1</div>
              <div className={styles.div3}>39,000,000</div>
              <div className={styles.div4}>39,000,000</div>
            </div>
          </div>
        </div>
        <div className={styles.n1Parent}>
          <div className={styles.n1}>Đơn 1</div>
          <img
            className={styles.iconCloseCircle}
            alt=""
            src="/-icon-close-circle.svg"
          />
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.lineDiv} />
          <img
            className={styles.iconSearchNormal1}
            alt=""
            src="/-icon-search-normal-1.svg"
          />
          <div className={styles.tmKimKhch}>Tìm kiếm khách hàng</div>
          <div className={styles.tng2Sn}>Tổng: (2 sản phẩm)</div>
          <div className={styles.vat10}>VAT (10%)</div>
          <div className={styles.chitKhu}>Chiết khấu</div>
          <div className={styles.khchPhiTr}>KHÁCH PHẢI TRẢ</div>
          <div className={styles.ghiChN}>Ghi chú đơn hàng</div>
          <div className={styles.div5}>40,000,000</div>
          <div className={styles.div6}>4,000,000</div>
          <div className={styles.div7}>44,000,000</div>
          <div className={styles.div8}>0</div>
          <div className={styles.rectangleDiv} />
          <div className={styles.thanhTon}>Thanh toán</div>
        </div>
        <div className={styles.desktopChild} />
      </div>
      <div className={styles.div9}>
        <div className={styles.div1}>1</div>
        <div className={styles.iconImageGroup}>
          <img className={styles.iconImage1} alt="" src="/-icon-image.svg" />
          <div className={styles.pvn0002}>PVN0001</div>
          <div className={styles.oLvBn}>Áo LV bản giới hạn</div>
          <div className={styles.div2}>1</div>
          <div className={styles.div12}>1,000,000</div>
          <div className={styles.div13}>1,000,000</div>
        </div>
      </div>
      <img className={styles.iconRulerPen} alt="" src="/-icon-ruler--pen.svg" />
    </div>
  );
};

export default Group;
