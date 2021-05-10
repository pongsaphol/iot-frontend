import Document, {
  DocumentContext,
  Html,
  Head as NextHead,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <NextHead></NextHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
