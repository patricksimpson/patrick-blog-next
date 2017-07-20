import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/styles.scss';

export default ({ children, title = 'we shall overcome'}) => {
  const customFontStyles = '//fonts.googleapis.com/css?family=Open+Sans|Zilla+Slab';

  return (
    <div>
      <Head>
        <title>Patrick Simpson | {title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href={customFontStyles} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </Head>

      <div className="flex-center">

        <div className="main">
          { children }
        </div>

      </div>

      <div className="flex-center">
        <footer className="main navigation">
          <Link href="/"><a>Home</a></Link>

          <Link href="/about"><a>About</a></Link>
        </footer>
      </div>

    </div>
  )
};
