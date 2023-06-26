import {
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import AvatarUser from './AvatarUser';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../storage/AuthReducer';

const menuItemSettings = {
  bgColor: 'sidebar',
  py: "0.9rem",
  _hover: { bgColor: 'accentSecondary' },
};

function UserDropdown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton>
        <AvatarUser />
      </MenuButton>
      <MenuList
        p={0}
        bgColor={'sidebar'}
        border={'none'}
        borderRadius={'5px'}
        overflow={'hidden'}
        boxShadow={'xl'}
      >
        <MenuItem {...menuItemSettings} onClick={() => navigate('/profile')}>
          <HStack>
            <AvatarUser />
            <Spacer />
            <Text fontWeight={'semibold'}>Profile</Text>
          </HStack>
        </MenuItem>
        <MenuItem
          {...menuItemSettings}
          onClick={() => dispatch(logoutSuccess())}
        >
          <HStack>
            <RiLogoutCircleRLine size={'2rem'} />
            <Spacer />
            <Text fontWeight={'semibold'}>Logout</Text>
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserDropdown;
