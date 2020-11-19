import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import {Epic, Cell, List, Panel, PanelHeader, Tabbar, TabbarItem } from '@vkontakte/vkui';
import {Icon28NewsfeedOutline, Icon28SearchOutline, Icon28MessageOutline, Icon28Notifications, Icon28More, Icon28ServicesOutline, Icon28ClipOutline, Icon28UserCircleOutline} from '@vkontakte/icons';
import Home from './panels/Home';
class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeStory: 'profile',
      activePanel : 'defaultPanel',
      fetchedUser : null,
      userEmail : null
    };
    this.onStoryChange = this.onStoryChange.bind(this);
    this.setUserEmail = this.setUserEmail.bind(this);
  }

  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }
  setUserEmail(userEmail) {
    this.setState({ userEmail });
  }
  parseQueryString = (string) => {
    return string.slice(1).split('&')
      .map((queryParam) => {
        let kvp = queryParam.split('=');
        return {key: kvp[0], value: kvp[1]}
      })
      .reduce((query, kvp) => {
        query[kvp.key] = kvp.value;
        return query
      }, {})
  };
componentDidMount() {
  bridge
    .send('VKWebAppGetEmail')
    .then(data => this.setUserEmail(data.email))
    .catch(error => error);
}    
go = (e) => {
  this.setState({ activePanel: e.currentTarget.dataset.to })
};


  render () {
    const queryParams = this.parseQueryString(window.location.search);
    const hashParams = this.parseQueryString(window.location.hash);
    return (
      <Epic activeStory={this.state.activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'feed'}
            data-story="feed"
            text="Новости"
          ><Icon28NewsfeedOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'services'}
            data-story="services"
            text="Сервисы"
          ><Icon28ServicesOutline/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'messages'}
            data-story="messages"
            label="12"
            text="Сообщения"
          ><Icon28MessageOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'clips'}
            data-story="clips"
            text="Клипы"
          ><Icon28ClipOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'profile'}
            data-story="profile"
            text="Профиль"
          ><Icon28UserCircleOutline /></TabbarItem>
        </Tabbar>
      }>
        <View id="feed" activePanel="feed">
          <Panel id="feed">
            <PanelHeader>Новости</PanelHeader>
            <List>
              {Object.keys(queryParams).map((key) => {
                let value = queryParams[key];
                return <Cell description={key}>{value ? value : <span style={{color: 'red'}}>-</span>}</Cell>;
              })}
            </List>
            <List>
              {Object.keys(hashParams).map((key) => {
                let value = hashParams[key];
                return <Cell description={key}>{value ? value : <span style={{color: 'red'}}>-</span>}</Cell>;
              })}
            </List>
          </Panel>
        </View>
        <View id="services" activePanel="services">
          <Panel id="services">
            <PanelHeader>Сервисы</PanelHeader>
          </Panel>
        </View>
        <View id="messages" activePanel="messages">
          <Panel id="messages">
            <PanelHeader>Сообщения</PanelHeader>
          </Panel>
        </View>
        <View id="clips" activePanel="clips">
          <Panel id="clips">
            <PanelHeader>Клипы</PanelHeader>
          </Panel>
        </View>
        <View id="profile" activePanel="profile">
          <Panel id="profile">
            <PanelHeader>Профиль</PanelHeader>
            <p>E-mail: {this.state.userEmail} </p>
          </Panel>
        </View>
      </Epic>
    )
  }
}

export default App;