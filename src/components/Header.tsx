import { createContext, useState, useContext, useEffect } from "react";
import type { Dispatch } from "react";
import { useMobile } from "../utils/useScreenWidth";
import { config } from "../utils/config";
import styles from "../styles/Header.module.css";

/**
 * `/config/route.json`の
 *
 * データの型を明示するためのもの
 */
interface NavigationItemInterface {
  label: string;
  href: string | null;
  sub_items?: NavigationSubItemInterface[];
}

interface NavigationSubItemInterface {
  label: string;
  /**
   * 入れ子は1つを想定しているため
   *
   * `sub_items`は必ず`href`を持ち
   *
   *`sub_items`を持っていてはいけない (入れ子が2つ以上になるため)
   */
  href: string;
}

const NavigationSubItemLI = ({
  subItem,
}: {
  subItem: NavigationSubItemInterface;
}) => {
  return (
    <li>
      <a href={subItem.href}>
        <span>{subItem.label}</span>
      </a>
    </li>
  );
};

const NavigationItemLI = ({
  openId,
  navItem,
}: {
  openId: number;
  navItem: NavigationItemInterface;
}) => {
  /**
   * `navCtxVal.open === openId` で 開いている
   */
  const navCtxVal = useContext(NavigationToggleContext);
  return (
    <li className={styles.nav_item}>
      <a
        href={navItem.href !== null ? navItem.href : undefined}
        onClick={(e) => {
          /**
           * 一回のクリックでsetOpenが呼ばれるのは1回であるべき
           */
          e.stopPropagation();
          navCtxVal.setOpen((o: number | undefined) => {
            if (o !== openId) {
              return openId;
            } else {
              return undefined;
            }
          });
        }}
        className={styles.nav_item__a}
      >
        {navItem.label}
      </a>
      {navItem.sub_items && (
        <ul
          className={`${styles.sub_items__ul} ${navCtxVal.open === openId ? styles.open : undefined}`}
        >
          {navItem.sub_items.map((subItem: NavigationSubItemInterface, i) => (
            <NavigationSubItemLI subItem={subItem} key={i} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Navigation = () => {
  const [open, setOpen] = useState<number | undefined>(undefined);
  useEffect(() => {
    /**
     * toggle操作したいものが入っている要素を取得
     */
    const toggleContainer = document.querySelector(
      ".toggle-container",
    ) as HTMLElement | null;
    if (toggleContainer === null) {
      return;
    }

    const handleClickOutSide = (e: MouseEvent) => {
      setOpen(undefined);
    };

    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return (
    <nav className={styles.nav}>
      {/**
       * toggle-containerはtoggle操作したいものを取得するために使用
       */}
      <ul className={`toggle-container ${styles.nav__ul}`}>
        <NavigationToggleContext.Provider value={{ open, setOpen }}>
          {config.route.map((navItem: NavigationItemInterface, i: number) => (
            <NavigationItemLI navItem={navItem} openId={i} key={i} />
          ))}
        </NavigationToggleContext.Provider>
      </ul>
    </nav>
  );
};

interface NavigationToggleContextInterface {
  open: number | undefined;
  setOpen: Dispatch<React.SetStateAction<number | undefined>>;
}

/**
 * どのナビゲーションアイテムが開いているかを
 *
 * 保持しておくためのContext
 */
const NavigationToggleContext = createContext<NavigationToggleContextInterface>(
  /**
   * 初期値はundeifinedと適当な関数にする
   */
  {
    open: undefined,
    setOpen: () => {},
  },
);

const Hamburger = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      style={{ backgroundColor: "black" }}
      onClick={onClick}
      className={styles.hamburger}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

const Header = () => {
  const isMobile = useMobile();
  /**
   * モバイルサイズ時，ナビゲーション全体が開いているかどうか
   *
   * モバイルサイズからPCサイズに変わった際はundefinedになる
   */
  const [mobileOpen, setMobileOpen] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    /**
     * モバイルサイズからPCサイズに変わった際にundefinedにする処理
     */
    if (!isMobile) {
      setMobileOpen(undefined);
    }
  }, [isMobile]);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img src={config.site.site.logo} className={styles.logo__img} />
        </a>
      </div>
      {isMobile ? (
        <>
          {mobileOpen && ( // モバイルサイズ時でナビゲーション全体が表示される
            <div className={styles.mobile_nav__wrapper}>
              <Navigation />
            </div>
          )}
          <Hamburger
            onClick={() => {
              setMobileOpen((prev) => !prev);
            }}
          />
        </>
      ) : (
        <Navigation />
      )}
    </header>
  );
};

export default Header;
