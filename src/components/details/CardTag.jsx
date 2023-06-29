import { HStack, Text } from '@chakra-ui/react';
import { IoMdCloseCircle } from 'react-icons/io';

function CardTag({ tags, removeTag = null }) {
  return tags.map((item, index) => {
    return (
      <HStack
        key={`tag-${index}`}
        bgColor={'card'}
        px={2}
        h={'2rem'}
        borderRadius={'10px'}
      >
        <Text>{item}</Text>
        {removeTag && (
          <IoMdCloseCircle
            cursor={'pointer'}
            onClick={() => removeTag(index)}
          />
        )}
      </HStack>
    );
  });
}

export default CardTag;
