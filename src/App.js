import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import {Epic, Cell, List, Panel, PanelHeader, Tabbar, TabbarItem } from '@vkontakte/vkui';
import {Icon28NewsfeedOutline, Icon28SearchOutline, Icon28MessageOutline, Icon28Notifications, Icon28More, Icon28ServicesOutline, Icon28ClipOutline, Icon28UserCircleOutline} from '@vkontakte/icons';
import Home from './panels/Home';
import Icon28GearCircleFillGray from '@vkontakte/icons/dist/28/gear_circle_fill_gray';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeStory: 'profile',
      activePanel : 'defaultPanel',
      fetchedUser : null,
      userEmail : null,
      userId : null,
      userFirstName : null,
      userLastName : null,
      userInfo : null,
      userSign : null,
      appId : null,
      groupId : null,
    };
    this.onStoryChange = this.onStoryChange.bind(this);
    this.setUserEmail = this.setUserEmail.bind(this);
    this.setUserId = this.setUserId.bind(this);
    this.setUserFirstName = this.setUserFirstName.bind(this);
    this.setUserLastName = this.setUserLastName.bind(this);
  }

  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }
  setUserId(userId) {
    this.setState({ userId });
  }
  setUserEmail(userEmail) {
    this.setState({ userEmail });
  }
  setUserFirstName(userFirstName) {
    this.setState({ userFirstName });
  }
  setUserLastName(userLastName) {
    this.setState({ userLastName });
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
  bridge
    .send('VKWebAppGetUserInfo')
    .then(data => {
      this.setUserId(data.id)
      this.setUserFirstName(data.first_name)
      this.setUserLastName(data.last_name)

    })
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
            label="3"
            text="Новости"
          ><Icon28NewsfeedOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'alerts'}
            data-story="alerts"
            label="7"
            text="Уведомления"
          ><Icon28Notifications /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'groups'}
            data-story="groups"
            label="12"
            text="Группы"
          ><Icon28Users3Outline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'settings'}
            data-story="settings"
            text="Настройки"
          ><Icon28SettingsOutline /></TabbarItem>
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
        <View id="alerts" activePanel="alerts">
          <Panel id="alerts">
            <PanelHeader>Уведомления</PanelHeader>
          </Panel>
        </View>
        <View id="groups" activePanel="groups">
          <Panel id="groups">
            <PanelHeader>Сообщества</PanelHeader>
          </Panel>
        </View>
        <View id="settings" activePanel="settings">
          <Panel id="settings">
            <PanelHeader>Настройки</PanelHeader>
          </Panel>
        </View>
        <View id="profile" activePanel="profile">
          <Panel id="profile">
            <PanelHeader>Профиль</PanelHeader>
            <p>E-mail: {this.state.userEmail} </p>
            <p>ID: {this.state.userId} </p>
            <p>Name: {this.state.userFirstName} </p>
            <p>Surname: {this.state.userLastName} </p>
          </Panel>
        </View>
      </Epic>
    )
  }
}

export default App;