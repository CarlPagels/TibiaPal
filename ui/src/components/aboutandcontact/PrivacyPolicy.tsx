import React from "react";
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Center,
    Heading,
    Stack,
    Text
} from "@chakra-ui/react";

export const PrivacyPolicy: React.FC = () => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        Privacy Policy
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Stack rowGap={2}>

                    <Center>
                        <Heading as={"h2"} size={"md"}>
                            Privacy Policy for https://tibiapal.com
                        </Heading>
                    </Center>

                    <Text align={"center"}>
                        If you require any more information or have any questions about our privacy policy, please feel
                        free to
                        contact us by email at tibiapalcontact@gmail.com. At https://tibiapal.com, the privacy of our
                        visitors
                        is of extreme importance to us. This privacy policy document outlines the types of personal
                        information
                        is received and collected by https://tibiapal.com and how it is used.
                    </Text>
                    <Center>
                        <Heading as={"h5"} size={"sm"}>
                            Log Files
                        </Heading>
                    </Center>
                    <Text align={"center"}>
                        Like many other Web sites, https://tibiapal.com makes use of log files. The information inside
                        the log
                        files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider (
                        ISP ),
                        date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the
                        site,
                        track users movement around the site, and gather demographic information. IP addresses, and
                        other such
                        information are not linked to any information that is personally identifiable.
                    </Text>
                    <Center>
                        <Heading as={"h5"} size={"sm"}>
                            Cookies and Web Beacons
                        </Heading>
                    </Center>
                    <Text align={"center"}>
                        https://tibiapal.com does use cookies to store information about visitors preferences, record
                        user-specific information on which pages the user access or visit, customize Web page content
                        based on
                        visitors browser type or other information that the visitor sends via their browser. Some of our
                        advertising partners may use cookies and web beacons on our site. Our advertising partners
                        include
                        Google Adsense. Users may opt out of personalized advertising by visiting Ads Settings These
                        third-party
                        ad servers or ad networks use technology to the advertisements and links that appear on
                        https://tibiapal.com send directly to your browsers. They automatically receive your IP address
                        when
                        this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used
                        by the
                        third-party ad networks to measure the effectiveness of their advertisements and / or to
                        personalize the
                        advertising content that you see. https://tibiapal.com has no access to or control over these
                        cookies
                        that are used by third-party advertisers. You should consult the respective privacy policies of
                        these
                        third-party ad servers for more detailed information on their practices as well as for
                        instructions
                        about how to opt-out of certain practices. https://tibiapal.com's privacy policy does not apply
                        to, and
                        we cannot control the activities of, such other advertisers or web sites. If you wish to disable
                        cookies, you may do so through your individual browser options. More detailed information about
                        cookie
                        management with specific web browsers can be found at the browsers' respective websites.
                    </Text>

                    <Text align={"center"}>
                        Tibia and all products related to Tibia are copyrighted by CipSoft GmbH. The official website of
                        Tibia is tibia.com.
                    </Text>

                    <Text as={"b"} align={"center"}>
                        Created by Kusnier.
                    </Text>
                </Stack>
            </AccordionPanel>
        </AccordionItem>);
};
