import { Text, Divider } from '@chakra-ui/react';

function SidebarCategoryList({ categories }) {

  return categories.map((item, index) => {
    return (
      <>
        <Text fontSize={'lg'}>{item?.name}</Text>
        {index < categories.length - 1 && (
          <Divider/>
        )}
      </>
    );
  });
}
export default SidebarCategoryList;
