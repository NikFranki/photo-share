import React, { Component } from 'react';

import { Paper } from 'material-ui';
import IconHome from 'material-ui/svg-icons/action/home';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconAdd from 'material-ui/svg-icons/content/add-box';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import IconPerson from 'material-ui/svg-icons/social/person';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

const homeIcon = <IconHome />;
const searchIcon = <IconSearch />;
const addIcon = <IconAdd />;
const FavoritesIcon = <IconFavorite />;
const PersonIcon = <IconPerson />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedIndex: 0,
      };
      this.select = this.select.bind(this);
  }

  select(index) {
    if (this.props.handleIndex) {
      this.props.handleIndex(index);
    }
    this.setState({selectedIndex: index});
  }

  render() {
    return (
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Home"
              icon={homeIcon}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Search"
              icon={searchIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Add"
              icon={addIcon}
              onClick={() => this.select(2)}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={FavoritesIcon}
              onClick={() => this.select(3)}
            />
            <BottomNavigationItem
              label="Person"
              icon={PersonIcon}
              onClick={this.select.bind(this, 4)}
            />
          </BottomNavigation>
        </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;
