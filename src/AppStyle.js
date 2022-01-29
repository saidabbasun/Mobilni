import styled from "styled-components";
import { Settings } from "@styled-icons/evaicons-solid/Settings";
import { KeyboardArrowLeft } from "@styled-icons/material-rounded/KeyboardArrowLeft";
import { Switch } from "@styled-icons/icomoon/Switch";
import { Moon } from "@styled-icons/heroicons-solid/Moon";
import { Grid } from "@styled-icons/bootstrap/Grid";
import { UserCheck } from "@styled-icons/boxicons-regular/UserCheck";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { FileMedia } from "@styled-icons/octicons/FileMedia";
import { MessageDetail } from "@styled-icons/boxicons-solid/MessageDetail";
import { Notifications } from "@styled-icons/material/Notifications";

import ToggleBtn from "react-dark-mode-toggle";

export const ToggleMode = styled(ToggleBtn)`
  margin-left: auto;
  outline: none;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: fit-content;
  padding-top: 50px;
  box-sizing: border-box;
`;

export const MobileC = styled.div`
  box-sizing: border-box;
  padding: 30px;
  width: 400px;
  height: 650px;
  background: ${({ color }) => color};
  box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
`;

export const IconCon = styled.div`
  width: 100%;
  display: flex;
`;

export const Icon = styled.div``;

Icon.Arrow = styled(KeyboardArrowLeft)`
color:${({ color }) => color};
width:30px;
height:30px
cursor: pointer;
opacity:.7;
`;
Icon.Switch = styled(Switch)`
color:${({ color }) => color};
width:25px;
height:25px
cursor: pointer;
margin-left:auto;
opacity:.7;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
   flex-direction:column;
  margin-top: 50px;
`;
export const Img = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;

  border: 1px solid #0009;
`;
export const TitleImg = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-style: bold;
  font-family: SF Pro Display;
  color: ${({ color }) => color};
`;
export const Desc = styled.div`
  font-size: 14px;
  font-style: bold;
  font-family: SF Pro Display;
  color: ${({ color }) => color};
`;

export const Item = styled.div`
  display: flex;
  padding-top: 20px;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 14px;
  font-style: bold;
  font-family: SF Pro Display;
  padding: 4px 0 0 20px;
  color: ${({ color }) => color};
`;

export const Line = styled.div`
  height: 2px;
  
  background: linear-gradient(81.64deg, #ffb800 34.46%, #ff7a00 87.54%);
  margin-top: 20px;
  box-sizing: border-box;
`;

Icon.Dark = styled(Moon)`
  width: 20px;
  color: ${({ color }) => color};
  height: 20px;
`;
Icon.Grid = styled(Grid)`
  width: 20px;
  color: #fbb65c;
  height: 20px;
`;

Icon.User = styled(UserCheck)`
  width: 20px;
  color: #ff4eb1;
  height: 20px;
`;
Icon.Group = styled(UserPlus)`
  width: 20px;
  color: #36e3ff;
  height: 20px;
`;
Icon.Media = styled(FileMedia)`
  width: 20px;
  color: #5476ff;
  height: 20px;
`;
Icon.Settings = styled(Settings)`
  width: 20px;
  color: #0bc630;
  height: 20px;
`;
Icon.Message = styled(MessageDetail)`
  width: 20px;
  color: #0bc630;
  height: 20px;
`;
Icon.Notifications = styled(Notifications)`
  width: 20px;
  color: #a394c2;
  height: 20px;
`;
