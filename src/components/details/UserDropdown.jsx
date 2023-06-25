import {
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import {RiLogoutCircleRLine} from "react-icons/ri"
import AvatarUser from './AvatarUser';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../storage/AuthReducer';

function UserDropdown() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton>
        <AvatarUser />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate("/profile")}>
          <HStack>
            <AvatarUser />
            <Spacer />
            <Text fontWeight={"semibold"}>Profile</Text>
          </HStack>
        </MenuItem>
        <MenuItem onClick={() => dispatch(logoutSuccess())}>
          <HStack >
            <RiLogoutCircleRLine size={"2rem"}/>
            <Spacer />
            <Text fontWeight={"semibold"}>Logout</Text>
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserDropdown;
