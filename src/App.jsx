import React, {useState} from 'react';
import { Container, MobileC, IconCon,Icon, ImgWrapper, Img, TitleImg, Desc, Item, Title, Line, ToggleMode} from "./AppStyle";
import CatImg from './Cat.jpg'
import {ThemeContext} from './context'

function App() {
const [mode, setmode]=useState(false);
const [theme,setTheme] =useState(ThemeContext)

const dark = {
  icon: "black",
  title: "black",
  background: "white",
};

const light = {
  icon: "white",
  title: "white",
  background: "black",
};

const onChange=()=>{
  setmode(!mode)
  setTheme(mode? dark: light)
}
  return (
    <Container>
      <MobileC color={theme.background}>
        <IconCon>
          <Icon.Arrow color={theme.icon} />
          <Icon.Switch color={theme.icon} />
        </IconCon>
        <ImgWrapper>
          <Img src={CatImg} alt="No img" />
          <TitleImg color={theme.icon}>Cassian</TitleImg>
          <Desc color={theme.title}>No one</Desc>
        </ImgWrapper>
        {/*dark*/}
        <Item>
          <Icon.Dark color={theme.icon} />
          <Title color={theme.title}>Dark Mode</Title>
          <ToggleMode onChange={onChange} checked={mode} size={40} speed={1.5}/>
        </Item>
        {/*grid*/}
        <Item>
          <Icon.Grid />
          <Title color={theme.title}>Story</Title>
        </Item>
        {/*user*/}
        <Item>
          <Icon.User />
          <Title color={theme.title}>Chat heads</Title>
        </Item>
        {/*group*/}
        <Item>
          <Icon.Group />
          <Title color={theme.title}>Groups</Title>
        </Item>
        <Line />

        {/*media*/}
        <Item>
          <Icon.Media />
          <Title color={theme.title}>Media and Photos</Title>
        </Item>
        {/*settings*/}
        <Item>
          <Icon.Settings />
          <Title color={theme.title}>Sattings and privacy</Title>
        </Item>
        {/*message*/}
        <Item>
          <Icon.Message />
          <Title color={theme.title}>Help centre</Title>
        </Item>
        {/*notifications*/}
        <Item>
          <Icon.Notifications />
          <Title color={theme.title}>Notification</Title>
        </Item>
      </MobileC>
    </Container>
  );
}

export default App;
