import Header from "./MainHeader";
const Layout = function (props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
