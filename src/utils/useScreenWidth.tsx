import { useState, useEffect } from "react";

/**
 *
 * @description windowサイズが指定のサイズより小さくなったら`true`に大きくなったら`false`となる状態を返すhook
 * @param maxWidth `true`と`false`が切り替わるwindowサイズ
 * @returns `window.innerWidth <= maxWidth`
 */
export const useScreenWidth = (maxWidth: number) => {
  const [isScreenBelowMaxWidth, setIsScreenBelowMaxWidth] = useState(
    window.innerWidth <= maxWidth
  );

  const handleResize = () => {
    setIsScreenBelowMaxWidth(window.innerWidth <= maxWidth);
  };

  useEffect(() => {
    // ウィンドウのリサイズ時にイベントリスナーを設定
    window.addEventListener("resize", handleResize);

    // コンポーネントがアンマウントされるときにイベントリスナーをクリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxWidth]); // maxWidthが変更されたときに再実行

  return isScreenBelowMaxWidth;
};

const MOBILE_SIZE = 600;

/**
 *
 * @returns モバイルサイズなら`true`モバイルサイズより大きいなら`false`
 */
export const useMobile = () => {
  return useScreenWidth(MOBILE_SIZE);
};
