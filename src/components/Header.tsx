import {
  createContext,
  useState,
  type Dispatch,
  useContext,
  useEffect,
} from "react";
import { useMobile } from "../utils/useScreenWidth";
import routeConfig from "../../config/route.json";
import siteConfig from "../../config/site.json";

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
    <li>
      <a
        href={navItem.href !== null ? navItem.href : undefined}
        onClick={(e) => {
          /**
           * 一回のクリックでsetOpenが呼ばれるのは1回であるべき
           */
          e.stopPropagation();
          console.log(e.target);
          navCtxVal.setOpen((o: number | undefined) => {
            if (o !== openId) {
              return openId;
            } else {
              return undefined;
            }
          });
        }}
      >
        {navItem.label}
      </a>
      {navItem.sub_items && (
        <ul>
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
      ".toggle-container"
    ) as HTMLElement | null;
    if (toggleContainer === null) {
      return;
    }

    const handleClickOutSide = (e: MouseEvent) => {
      console.log(e.target);
      setOpen(undefined);
    };

    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return (
    <nav>
      <ul className={`toggle-container`}>
        <NavigationToggleContext.Provider value={{ open, setOpen }}>
          {routeConfig.map((navItem: NavigationItemInterface, i: number) => (
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
  }
);

const Hamburger = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      style={{ height: "20px", width: "20px", backgroundColor: "black" }}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

const Header = () => {
  const isMobile = useMobile();
  const [mobileOpen, setMobileOpen] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    if (!isMobile) {
      setMobileOpen(undefined);
    }
    console.log("changed");
  }, [isMobile]);
  return (
    <header>
      {isMobile ? (
        <>
          {mobileOpen && (
            <div>
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
