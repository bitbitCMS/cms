/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import App from 'next/app'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      /* Here we call NextSeo and pass our default configuration to it  */
      <>
        {/* TODO: implement nextseo  */}
        {/* <NextSeo config={SEO} /> */}
        <Component {...pageProps} />
      </>
    )
  }
}