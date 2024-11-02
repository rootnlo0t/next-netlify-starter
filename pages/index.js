import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Login - MetaWork</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta property="og:title" content="Meta Work Academy" />
        <meta
          property="og:description"
          content="Meta at Work - Product Education for Professionals"
        />
        <meta property="og:url" content="https://workacademy.atmeta.com" />
        <meta
          property="og:image"
          content="https://meta.azureedge.net/metawork/suitcast-link-preview-image.png"
        />
        <meta property="og:type" content="website" />
        <link
          rel="shortcut icon"
          href="https://meta.azureedge.net/metawork/mwa-favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="https://meta.azureedge.net/metawork/mwa-favicon.ico"
          type="image/x-icon"
        />
        {/* Include your external stylesheets here */}
        <link rel="stylesheet" href="path/to/styles.css" />
      </Head>
      
      <Header />

      <section
        className="prelogin-bg"
        style={{
          backgroundImage: "url('https://meta.azureedge.net/metawork/7f31e7cc144046bc8daa372d9013dfbd.png')"
        }}
      >
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-5">
              <div className="blur-bg">
                <div className="text-end pt-4 pe-3 pe-md-5">
                  <a href="https://workacademy.atmeta.com/members/login">
                    <img
                      src="path/to/metawork-logo.png"
                      alt="Meta Logo"
                      className="mh35"
                    />
                  </a>
                </div>

                {/* Your login form */}
                <form
                  action="https://workacademy.atmeta.com/Members/Login"
                  id="loginForm"
                  method="post"
                  onSubmit={() => validForm()}
                >
                  <input type="hidden" name="__RequestVerificationToken" value="your-token" />
                  <input type="hidden" id="ReturnUrl" name="ReturnUrl" value="" />
                  <input type="hidden" id="sendSMS" name="sendSMS" value="False" />
                  
                  {/* Form Content */}
                  <div className="form-group">
                    <label htmlFor="UserName">Username or Email</label>
                    <input
                      type="text"
                      id="UserName"
                      name="UserName"
                      className="form-control"
                      placeholder="Enter your username or Email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <div className="input-group">
                      <input
                        type="password"
                        id="Password"
                        name="Password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                      <span className="input-group-text">
                        <i className="fas fa-eye" id="togglePassword"></i>
                      </span>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
