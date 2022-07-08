import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Lottie from 'react-lottie-player';
import styles from './index.module.scss';
import animation from '../animation/mainStudy.json';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.Banner}>
      <div className="container">
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Lottie
          loop
          animationData={animation}
          play
          style={{ width: 500, height: 500, margin: 'auto' }}
        />
      </main>
    </Layout>
  );
}
