import React from 'react';
import {Div, HorizontalScroll, Group, Panel, PanelHeader, PanelHeaderButton, PanelHeaderBack, PanelHeaderContent, Header, View, Button, Avatar, Cell} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';
import Icon24User from '@vkontakte/icons/dist/24/user';

  const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 94,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 12
  };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'defaultPanel'
    }
  }
  
    render() {
        return (
            <View activePanel={this.state.activePanel}>
                <Panel id="defaultPanel">
                  <PanelHeader><h1>Партнёры ВКонтакте</h1></PanelHeader>
                  <Group header={<Header mode="secondary" title="Header"><h1>Регистрация партнёра</h1></Header>}>
                  <Div>
                    <p>Для регистрации в приложении: "<strong>Партнёры ВКонтакте</strong>" в качестве партнёра, <i>нажмите на кнопку</i> "<b>РЕГИСТРАЦИЯ</b>"!</p>
                  </Div>
                  </Group>
                  <Group title="Registration">
		    <Div>
                      <Button size="xl" level="2" onClick={ () => this.setState({ activePanel: 'mainPanel' }) }>
                        РЕГИСТРАЦИЯ
                      </Button>
	 	    </Div>
		 </Group> 
                 <Group title="Footer">
                   <Div>
                     <p>Разработка мобильного приложения 2020  (с) <a href="https://it33.ru" title="Официальный сайт ИТ компании: Информационные технологии 33" target="_blank" rel="noopener noreferrer">ИТ33</a>  Все права защищены.</p>
	 	   </Div>
                 </Group>	          	                                   
                </Panel>
                <Panel id="mainPanel">
                    <PanelHeader>
                      <PanelHeaderContent>
                       <h1>Личный кабинет партнёра</h1>	
                      </PanelHeaderContent>
                    </PanelHeader>                                                                        
                    <Group style={{ paddingBottom: 10 }} header={<Header mode="secondary">Партнёрские сообщества</Header>}>
                      <HorizontalScroll>
                        <div style={{ display: 'flex' }}>
                        <div style={{ ...itemStyle, paddingLeft: 4 }}>
                        <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
                          Элджей
                        </div>
                        <div style={itemStyle}>
                        <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
                          Ольга
                        </div>
                        <div style={itemStyle}>
                        <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
                          Сергей
                        </div>
                      </div>
                    </HorizontalScroll>
                  </Group>                            
                    <Group style={{ paddingBottom: 0 }} header={<Header mode="secondary" title="Content">Информация о партнёре</Header>}>
                    <Cell>Имя партнёра:</Cell>
                    <Cell>Идентификатор партнёра:</Cell>                    
                    <Cell>Дата регистрации:</Cell>                                  
		    </Group>
                    <Group title="Navigation">
		      <Div>
			<Button size="xl" level="2" onClick={ () => this.setState({ activePanel: 'secondaryPanel' }) }>
			  НАСТРОЙКИ
			</Button>			
	 	      </Div>
		    </Group>
			    
                    <Group title="Footer">
		      <Div>
			<p>Разработка мобильного приложения 2020  (с) <a href="https://it33.ru" title="Официальный сайт ИТ компании: Информационные технологии 33" target="_blank" rel="noopener noreferrer">ИТ33</a>  Все права защищены.</p>
	 	      </Div>
		    </Group>		    
                </Panel>
                <Panel id="secondaryPanel">
                  <PanelHeader
                      left={<PanelHeaderBack onClick={ () => this.setState({ activePanel: 'mainPanel' }) } />}
                  >
                  <PanelHeaderContent>
                        Настройки
                  </PanelHeaderContent>
                    </PanelHeader>                    
                    <Group header={<Header mode="secondary" title="Header">Items</Header>}>
                        <Div>
				<h1>Настройки</h1>
				<p>Настройка параметров приложения "Партнёры ВКонтакте!</p>
                        </Div>
                    </Group>
                    <Group title="Content">
		      <Div>
                        <h2>Список настроек</h2>
                        
	 	      </Div>
		    </Group>
                    <Group title="Navigation">
		      <Div>
			<Button size="xl" level="2">
			  СОХРАНИТЬ
			</Button>
                      </Div>
                      <Div>
			<Button size="xl" level="1" onClick={ () => this.setState({ activePanel: 'mainPanel' }) }>
			  НАЗАД
			</Button>			
	 	      </Div>
		    </Group>
			    
                    <Group title="Footer">
		      <Div>
			<p>Разработка мобильного приложения 2020  (с) <a href="https://it33.ru" title="Официальный сайт ИТ компании: Информационные технологии 33" target="_blank" rel="noopener noreferrer">ИТ33</a>  Все права защищены.</p>
	 	      </Div>
		    </Group>	                
                
                
                
                
                </Panel>
            </View>
        );
    }
}

export default App;
