import { Text, Divider } from '@chakra-ui/react';

function SidebarCategoryList({ categories, onChangeCategory }) {
  return categories.map((item, index) => {
    return (
      <>
        <Text
          id={item.id}
          fontSize={'lg'}
          cursor={'pointer'}
          onClick={() => onChangeCategory(item.id)}
        >
          {item?.name}
        </Text>
        {index < categories.length - 1 && (
          <Divider />
        )}
      </>
    );
  });
}
export default SidebarCategoryList;
