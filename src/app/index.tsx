import React from "react";
import {Container, Heading, Icon, Image, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa";
const App: React.FC = () => {
  const NavItems = (props: any) => {
    return (
      <Text cursor="pointer" fontSize={18} paddingX={[4, 6]} paddingY={[4, 4]}>
        {props.children}
      </Text>
    );
  };
  const NavButton = (props: any) => {
    return (
      <Text
        _hover={{backgroundColor: "whiteAlpha.600", color: "white"}}
        as="button"
        backgroundColor="white"
        borderRadius="999"
        color="secondary.400"
        fontFamily="Fraunces"
        fontSize={14}
        fontWeight="700"
        paddingX={[4, 8]}
        paddingY={[4, 4]}
        textTransform="uppercase"
      >
        {props.children}
      </Text>
    );
  };
  const ImageGallery = (props: any) => {
    return (
      <Image
        alt="Gallery Image"
        boxSize="100%"
        height={["350px", "550px"]}
        objectFit="cover"
        src={"/assets/desktop/" + props.image}
      />
    );
  };
  const TextGallery = (props: any) => {
    const [hoverOpacity, setHoverOpacity] = React.useState("0.5");

    return (
      <Stack justifyContent="center" order={[1, 0]} paddingX={[4, 24]} paddingY={[20, 0]}>
        <Text
          color="secondary.400"
          fontFamily="Fraunces"
          fontSize={[32, 48]}
          fontWeight={["900", "700"]}
          lineHeight={["1.6", "1.2"]}
          textAlign={["center", "left"]}
        >
          {props.title}
        </Text>
        <Text
          color="secondary.600"
          fontSize={18}
          fontWeight="600"
          paddingY={[4, 8]}
          textAlign={["center", "left"]}
        >
          {props.text}
        </Text>
        <Stack
          _hover={{cursor: "pointer"}}
          onMouseEnter={() => setHoverOpacity("0.8")}
          onMouseLeave={() => setHoverOpacity("0.5")}
        >
          <Text
            color="secondary.400"
            fontFamily="Fraunces"
            fontWeight={["900", "700"]}
            paddingX={[2, 2]}
            textAlign={["center", "left"]}
            textTransform="uppercase"
            zIndex="100"
          >
            Learn more
          </Text>

          <Stack
            alignSelf={["center", "inherit"]}
            backgroundColor={props.sectionColor}
            borderRadius="999"
            height="2"
            opacity={hoverOpacity}
            position="relative"
            top="-16px"
            width="32"
            zIndex="50"
          />
        </Stack>
      </Stack>
    );
  };
  const Services = (props: any) => {
    return (
      <Stack
        alignItems="center"
        backgroundImage={[
          `url("/assets/mobile/` + props.image + `")`,
          `url("/assets/desktop/` + props.image + `")`,
        ]}
        backgroundSize={["cover", "inherit"]}
        color={props.color}
        height={["600px", "550px"]}
        textAlign="center"
      >
        <Text
          fontFamily="Fraunces"
          fontSize={[28, 24]}
          fontWeight="900"
          paddingBottom={["10px", "20px"]}
          paddingTop={["380px", "360px"]}
        >
          {props.title}
        </Text>
        <Text fontSize={["lg", "inherit"]} width={["90%", "55%"]}>
          {props.description}
        </Text>
      </Stack>
    );
  };
  const Testimony = (props: any) => {
    return (
      <Stack alignItems="center" color="secondary.400" paddingTop={[12, 0]} textAlign="center">
        <Image
          alt={props.name}
          borderRadius="50%"
          height={16}
          src={"/assets/" + props.picture}
          width={16}
        />
        <Text
          color="secondary.500"
          fontSize={[16, 16]}
          fontWeight="600"
          height={["auto", 48]}
          lineHeight={["2", "1.8"]}
          paddingX={[1, 1]}
          paddingY={[4, 12]}
          width={["auto", 80]}
        >
          {props.testimony}
        </Text>

        <Text fontFamily="Fraunces" fontSize={[18, 16]} fontWeight="900">
          {props.name}
        </Text>
        <Text color="secondary.700" fontSize={[16, 14]}>
          {props.position}
        </Text>
      </Stack>
    );
  };
  const FooterItem = (props: any) => {
    return (
      <Text _hover={{cursor: "pointer", color: "whiteAlpha.900"}} paddingX={4}>
        {props.children}
      </Text>
    );
  };

  return (
    <>
      <Stack
        backgroundImage={[
          "url('/assets/mobile/image-header.jpg')",
          "url('/assets/desktop/image-header.jpg')",
        ]}
        backgroundPosition="50% 100%"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="100vh"
        width="100%"
      >
        <Container maxWidth="container.xl" paddingY={[8, 6]} role="main">
          <Stack direction="row" justifyContent="space-between">
            <Image height={[6, 8]} src="/assets/logo.svg" width={[32, 40]} />
            <Stack color="white" direction={["column", "row"]}>
              <NavItems>About</NavItems>
              <NavItems>Services</NavItems>
              <NavItems>Projects</NavItems>
              <NavButton>Contact</NavButton>
            </Stack>
          </Stack>
        </Container>
        <Stack alignItems="center">
          <Heading
            as="h1"
            color="white"
            fontSize={[18, 48]}
            fontWeight="900"
            letterSpacing={6}
            paddingY={[10, 10]}
            textTransform="uppercase"
          >
            We are creatives
          </Heading>
        </Stack>
        <Stack alignItems="center">
          <Image height={[16, 24]} src="/assets/icon-arrow-down.svg" />
        </Stack>
      </Stack>
      <SimpleGrid columns={[1, 2]}>
        <TextGallery
          sectionColor="primary.500"
          text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          title="Transform your brand"
        />
        <ImageGallery image="image-transform.jpg" />
      </SimpleGrid>
      <SimpleGrid columns={[1, 2]}>
        <ImageGallery image="image-stand-out.jpg" />
        <TextGallery
          sectionColor="primary.400"
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
          title="Stand out to the right audience"
        />
      </SimpleGrid>
      <SimpleGrid columns={[1, 2]}>
        <Services
          color="primary.600"
          description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          image="image-graphic-design.jpg"
          title="Graphic design"
        />
        <Services
          color="primary.700"
          description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          image="image-photography.jpg"
          title="Photography"
        />
      </SimpleGrid>
      <Stack alignItems="center" backgroundColor="#fffbf8" paddingY={[8, 36]} spacing={0}>
        <Heading
          as="h3"
          color="secondary.700"
          fontSize={[16, 18]}
          fontWeight="900"
          letterSpacing={[2, 4]}
          paddingBottom={[0, 16]}
          textAlign="center"
          textTransform="uppercase"
        >
          Client testimonials
        </Heading>
        <Container maxWidth="container.lg" paddingY={[4, 4]}>
          <Stack direction={["column", "row"]} justifyContent="space-between">
            <Testimony
              name="Emily R."
              picture="image-emily.jpg"
              position="Marketing Director"
              testimony="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            />
            <Testimony
              name="Thomas S."
              picture="image-thomas.jpg"
              position="Chief Operating Officer"
              testimony="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            />
            <Testimony
              name="Jennie F."
              picture="image-jennie.jpg"
              position="Business Owner"
              testimony="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            />
          </Stack>
        </Container>
      </Stack>
      <SimpleGrid columns={[2, 4]}>
        <Image alt="Gallery" src="/assets/desktop/image-gallery-milkbottles.jpg" />
        <Image alt="Gallery" src="/assets/desktop/image-gallery-orange.jpg" />
        <Image alt="Gallery" src="/assets/desktop/image-gallery-cone.jpg" />
        <Image alt="Gallery" src="/assets/desktop/image-gallery-sugarcubes.jpg" />
      </SimpleGrid>
      <Stack alignItems="center" backgroundColor="#90d4c5" color="primary.800" paddingY={12}>
        <Image height={[8, 8]} src="/assets/logo_footer.svg" width={[40, 40]} />
        <Stack direction="row" paddingY={8}>
          <FooterItem>About</FooterItem>
          <FooterItem>Services</FooterItem>
          <FooterItem>Projects</FooterItem>
        </Stack>
        <Stack direction="row" paddingY={4} spacing={6}>
          <Icon
            _hover={{cursor: "pointer", color: "whiteAlpha.900"}}
            as={FaFacebookSquare}
            color="primary.600"
            height={5}
            width={5}
          />
          <Icon
            _hover={{cursor: "pointer", color: "whiteAlpha.900"}}
            as={FaInstagram}
            color="primary.600"
            height={5}
            width={5}
          />
          <Icon
            _hover={{cursor: "pointer", color: "whiteAlpha.900"}}
            as={FaTwitter}
            color="primary.600"
            height={5}
            width={5}
          />
          <Icon
            _hover={{cursor: "pointer", color: "whiteAlpha.900"}}
            as={FaPinterest}
            color="primary.600"
            height={5}
            width={5}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default App;
