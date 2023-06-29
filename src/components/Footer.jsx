import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { GiBookAura } from 'react-icons/gi';
import { IoMdSend } from 'react-icons/io';

function Footer() {
  return (
    <Flex direction={'row'} bgColor={'primary'} p={8}>
      <VStack>
        <HStack color="primaryTextIcon" alignSelf={'flex-start'}>
          <GiBookAura size={'2.5rem'} />
          <Text
            fontFamily={'Fira Code'}
            color={'primaryTextIcon'}
            fontSize={'xl'}
            fontWeight={'semibold'}
          >
            MoDi
          </Text>
        </HStack>
        <Text color={'primaryTextIcon'} fontFamily={'JetBrains Mono'}>
          by. M. Raihan Wahyu Y.
        </Text>
      </VStack>
      <Spacer />

      <VStack>
        <Text color={'primaryTextIcon'} fontWeight={'semibold'}>
          Subscriber to get our Newsletter
        </Text>
        <InputGroup>
          <InputLeftElement color="primaryTextIcon" pointerEvents={'none'}>
            <FiMail />
          </InputLeftElement>
          <Input type="email" placeholder='Your Email...'/>
          <InputRightElement color="primaryTextIcon">
            <IoMdSend />
          </InputRightElement>
        </InputGroup>
      </VStack>

      <Spacer />
      <HStack gap={3} fontSize={'2rem'} color={'primaryTextIcon'}>
        <FaLinkedin />
        <FaGithubAlt />
        <FiMail />
      </HStack>
    </Flex>
  );
}

export default Footer;
