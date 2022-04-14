import { Flex, Stack, Input, Image, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Logo from '../assets/logo.png';
import UserImg from '../assets/rivoPog.png';

export default function Header() {
  return (
    <Flex w='100%' h="4rem" p={3} gap={2}
      justify="space-between" align="center"
      bg="white" color="gray.700"
      borderBottom="2px" borderColor="blue.400"
    >
      <Image h='100%' src={Logo} alt="logo" />
      <Input placeholder="Search hotels..."
        h="full" w="75%"
        variant='filled'
      />
      <Stack direction="row" h="full" align="center" gap="5">
        <Icon icon="fa-solid:car" height="1.4rem" />
        <Icon icon="fa-brands:instagram" height="1.4rem" />
        <Flex direction="row" h="full" gap={3}>
          <Image src={UserImg} alt="logo" h="full" borderRadius="full" align="center" />
          <Text m="auto">Rivo</Text>
        </Flex>
      </Stack>
    </Flex>


  )
}