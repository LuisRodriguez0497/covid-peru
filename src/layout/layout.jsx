import { Outlet } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { theme } from "../assets/styles/temas/theme";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div className="contenido" style={{ paddingTop: "100px" }}>
          <Outlet />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Layout;
