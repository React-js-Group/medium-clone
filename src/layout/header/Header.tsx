import React, { useEffect, useState } from "react";
import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";

import styles from "./styles.module.scss";

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(true);

  useEffect(() => {
    window.onscroll = function () {
      bgHeder();
    };
  });

  function bgHeder() {
    if (
      document.body.scrollTop > 320 ||
      document.documentElement.scrollTop > 320
    ) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <HeaderTop scroll={scroll} />
      </div>
      <div className={styles.headerMain}>
        <HeaderMain />
      </div>
    </div>
  );
};

export default Header;
