import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';
import { BiMailSend } from 'react-icons/bi';
import GithubIcon from './Icons/GithubIcon';
import HeartIcon from './Icons/HeartIcon';
import InstagramIcon from './Icons/InstagramIcon';
import LinkedinIcon from './Icons/LinkedinIcon';

const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/shadkhanff',
    icon: <GithubIcon />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/aimbotshad/',
    icon: <InstagramIcon />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shadkhanff/',
    icon: <LinkedinIcon />,
  },
];

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Button
      bg={useColorModeValue('gray.200', 'gray.700')}
      rounded={'full'}
      fill={useColorModeValue('gray.700', 'white')}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      target="_blank"
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('gray.300', 'gray.600'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const {
    isOpen: changeLogIsOpen,
    onOpen: changeLogOnOpen,
    onClose: changeLogOnClose,
  } = useDisclosure();

  const {
    isOpen: imprintIsOpen,
    onOpen: imprintOnOpen,
    onClose: imprintOnClose,
  } = useDisclosure();

  return (
    <>
      <Box color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'full'}
          py={10}
          bg={useColorModeValue('gray.100', 'gray.900')}
        >
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '3fr 3fr' }}
            spacing={8}
          >
            <Stack spacing={6} align="flex-start">
              <Box>
                <Heading
                  className="special-elite-font"
                  color={useColorModeValue('gray.700', 'white')}
                >
                  Shad Khan
                </Heading>
              </Box>
              <Text fontSize={'sm'}>
                © {new Date().getFullYear()} Shad Khan All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
                {socialMedia.map((media) => (
                  <SocialButton
                    key={media.name}
                    label={media.name}
                    href={media.url}
                  >
                    {media.icon}
                  </SocialButton>
                ))}
              </Stack>
            </Stack>
            <Stack align={'flex-end'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('gray.300', 'gray.700')}
                  color={useColorModeValue('white', 'gray.200')}
                  border={0}
                  _focus={{
                    bg: useColorModeValue('gray.400', 'gray.600'),
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.600')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: useColorModeValue('green.600', 'green.500'),
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
              <Box>
                <Button onClick={changeLogOnOpen} mr="2" mt="6">
                  What's new
                </Button>
                <Button onClick={imprintOnOpen} mt="6">
                  Contact Me
                </Button>
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
        <Container
          py="3"
          bg={useColorModeValue('gray.200', 'gray.900')}
          maxW="full"
        >
          <Box>
            <Flex alignItems="center" flexDirection="column">
              <Text>
                Made by{' '}
                <Link href="http://shadkhan.xyz" target="_blank">
                  Md Shad Khan
                </Link>
              </Text>
              <HeartIcon
                color="red.400"
                transitionDuration="0.3s"
                _hover={{ transform: 'rotate(30deg)' }}
              />
            </Flex>
          </Box>
        </Container>
      </Box>
      <Modal onClose={changeLogOnClose} size="xl" isOpen={changeLogIsOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{userSelect: "none"}}>What's new</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Heading size="sm" mb="2">
            <li>WebM video format added</li>
            </Heading>
          </ModalBody>
          <ModalFooter>
            <Button onClick={changeLogOnClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal onClose={imprintOnClose} size="xl" isOpen={imprintIsOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Imprint</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="sm" mb="2">
              Youtube Video Downloader
            </Heading>
            <Text>Shad Khan</Text>
            <Flex alignItems="center" gridGap={2}>
              <EmailIcon />{' '}
              <Link href="mailto:info@shadkhan.xyz">
                info@shadkhan.xyz
              </Link>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={imprintOnClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
