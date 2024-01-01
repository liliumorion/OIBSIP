import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";

function Layout({children}) {
  return (
    <main>
      <Navbar/>
      {children}
      <Footer/>
      </main>
  )
}

export default Layout;