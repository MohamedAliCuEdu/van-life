// react components:
import { Link } from "react-router-dom";

// style files:
import "../style/pages/error-page.scss";

// pages files:
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function ErrorPage() {
  
  return (
    <>
    <Header/>
      <main className="error-page page-content">
        <div className="container">
          <p>Sorry, the page you were looking for was not found.</p>
          <Link to="" className="">
            return to home
          </Link>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default ErrorPage;