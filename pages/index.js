import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/styles.scss';

export default() => {
  const customFontStyles = '//fonts.googleapis.com/css?family=Open+Sans|Zilla+Slab';

  return (
    <div>
      <Head>
        <title>Patrick Simpson</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href={customFontStyles} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </Head>
      <h1>Patrick Simpson</h1>
      <Link href="/about"><a>About</a></Link>
    </div>
  )
};
