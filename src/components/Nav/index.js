import React, { Component } from 'react';
import avatar from '../Gallery/avatar.jpeg';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastScrollTop: 0,
      hidden: false,
      isProjectsHovered: false, // Track if "Projects" is being hovered
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

  handleProjectsHover = (isHovered) => {
    this.setState({ isProjectsHovered: isHovered });
  };

  render() {
    const { hidden, isProjectsHovered } = this.state;

    return (
      <header>
        <nav className={hidden ? 'hidden-nav' : 'nav'}>
          <ul>
            <li className="no-border">
              <a href="/">
                <img className="avatar" src={avatar} alt="avatar" />
              </a>
            </li>
            <li
              className={isProjectsHovered ? 'projects-hovered' : ''} // Add a class when projects are hovered
              onMouseEnter={() => this.handleProjectsHover(true)}
              onMouseLeave={() => this.handleProjectsHover(false)}
            >
              <a>Projects</a>
              {isProjectsHovered && (
                <ul className="sub-menu">
                  <li>
                    <a onClick={() => this.handleNavLinkClick('FrontEndProjects')}>Front-End</a>
                  </li>
                  <li>
                    <a onClick={() => this.handleNavLinkClick('BackEndProjects')}>Back-End</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a onClick={() => this.handleNavLinkClick('About')}>About Me</a>
            </li>
            {/* Other menu items */}
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
