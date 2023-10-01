import React, { Component } from 'react';


class Nav extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lastScrollTop: 0,
        hidden: false,
      };
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const { lastScrollTop } = this.state;
  
      if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the navigation bar
        this.setState({ hidden: true });
      } else {
        // Scrolling up, show the navigation bar
        this.setState({ hidden: false });
      }
  
      this.setState({ lastScrollTop: scrollTop });
    };
    handleContactClick = () => {
        this.props.setContactSelected(true);
    };
  
    render() {
      const { hidden } = this.state;
    
      return (
        <header>
        <nav className={hidden ? 'hidden-nav' : 'nav'}>
          <ul className='header-ul'>
            <li>
              <a href="#About"
             >About Me
             </a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a onClick={this.handleContactClick}>Contact</a>
            </li>
            <li>
              <a>Resume</a>
            </li>
          </ul>
        </nav>
        </header>
      );
  }
}


export default Nav;