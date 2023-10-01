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

    handleNavLinkClick = (componentName) => {
        this.props.setActiveComponent(componentName);

    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    };

    render() {
      const { hidden } = this.state;
    
      return (
        <header>
        <nav className={hidden ? 'hidden-nav' : 'nav'}>
          <ul className='header-ul'>
            <li>
              <a onClick={() => this.handleNavLinkClick('About')}
             >About Me
             </a>
            </li>
            <li>
              <a onClick={() => this.handleNavLinkClick('Portfolio')}>Portfolio</a>
            </li>
            <li>
            <a onClick={() => this.handleNavLinkClick('Contact')}>Contact</a>
            </li>
            <li>
              <a onClick={() => this.handleNavLinkClick('Resume')}>Resume</a>
            </li>
          </ul>
        </nav>
        </header>
      );
  }
}


export default Nav;