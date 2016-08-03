import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
import Button from '../../components/button/button';
import styles from './header.css';
import logo from './images/logo.png';

export default class extends Component {
  render() {
    return (
        <div className={ styles.header }>
          <img className={ styles.logo } src={ logo }/>
          <div className={styles.headerRight}>
            <ul className={ styles.list }>
              <li><Link
                  to="/"
                  activeClassName="is-active"
                >
                  Home
                </Link></li>
              <li><Link
                to="page"
                activeClassName="is-active"
              >
                Page
              </Link></li>
            </ul>
            <Button
              theme="header"
            >
              header button
            </Button>
          </div>
        </div>
    )}
}
