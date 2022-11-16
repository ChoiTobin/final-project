import { useEffect } from "react"

// background 클릭 시 모달창 닫기

const useOutSideClick = (ref, callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        callback?.();
      }
    }

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}

export default useOutSideClick;