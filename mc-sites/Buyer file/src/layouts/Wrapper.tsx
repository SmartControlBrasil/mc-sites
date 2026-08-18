
import { PropsWithChildren, useEffect } from "react";
import { animationCreate } from "../utils/utils";


const Wrapper = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
};

export default Wrapper;
