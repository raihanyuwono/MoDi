import { Box, Text } from '@chakra-ui/react';
import { color } from '../../themes/Themes';

function SidebarCategoryList({ categories }) {
  return categories.map((item, index) => {
    return (
      <>
        <Text fontSize={'lg'}>{item}</Text>
        {index < categories.length - 1 && (
          <Box bg={color.dividerSidebar} h={'1px'} w={'95%'} />
        )}
      </>
    );
  });
}
export default SidebarCategoryList;
