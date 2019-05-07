import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Home-body/Body';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import SideDrawer from './components/Sidedrawer/Sidedrawer'
import Backdrop from './components/Backdrop/Backdrop'
import './index.sass';


class App extends Component {
    state = {
      sideDrawerOpen: false,
      //going to need to update this code when adding more drawers in exp
      expandableDrawerOpen: false
    };

  drawerToggleClickerHandler = () => {
      this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  expandableToggleHandler = () => {
    this.setState({expandableDrawerOpen: !this.state.expandableDrawerOpen});
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div>
        {backdrop}
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
        <Navbar drawerClickerHandler={this.drawerToggleClickerHandler} click={this.backdropClickHandler}/>
        <Body expandableToggleHandler={this.expandableToggleHandler} show={this.state.expandableDrawerOpen}/>
        <Sidebar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
