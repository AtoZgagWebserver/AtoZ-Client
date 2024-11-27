import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Outlet />
      {/* Root부분에 들어가면 좋을 거 추가 */}
    </>
  );
};
export default Root;
