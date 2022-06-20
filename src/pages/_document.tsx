/*<meta charSet="utf-8"></meta>
          <meta
              name="viewport"
              content="width=device-width, user-scalable=no,
              initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"/>
          <script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossOrigin="anonymous"></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>*/




          import Document, { Html, Head, Main, NextScript } from 'next/document';
          import { ServerStyleSheet } from 'styled-components';
          
          class MyDocument extends Document {
            static async getInitialProps(ctx: any) {
              const sheet = new ServerStyleSheet();
              const originalRenderPage = ctx.renderPage;
          
              try {
                ctx.renderPage = () =>
                  originalRenderPage({ 
                    enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
                  });
          
                const initialProps = await Document.getInitialProps(ctx);
                return {
                  ...initialProps,
                  styles: (
                    <>
                      {initialProps.styles}
                      {sheet.getStyleElement()}
                    </>
                  ),
                };
              } finally {
                sheet.seal();
              }
            }
            render() {
              return (
                <Html lang="en">
                  <Head>
                    
            
                    <meta name="title" content="Gute | React Next Minimalist Blog Template - ThemeForest" />
                    <meta name="description" content="Gute | React Next Minimalist Blog Template - ThemeForest" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="icon" href="/assets/images/fav.png" />
                    <link href="https://kit-pro.fontawesome.com/releases/v5.13.0/css/pro.min.css" rel="stylesheet" />
                    <link
                      rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap"
          
          
                      
                    />
                  </Head>
                  <body>
                    <Main />
                    <NextScript />
                    <div id="modal" />
                  </body>
                </Html>
              );
            }
          }
          
          export default MyDocument;
