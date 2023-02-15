import React from "react";
import { Accordion as AccordionBase, Box, Center, Heading } from "@chakra-ui/react";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { Contact } from "./Contact";
import { About } from "./About";


export const Accordion: React.FC = () => {
    return (
        <Center>
            <Box w={"80%"}>
                <Center>
                    <Heading py={5}>
                        About, Contact, Privacy Policy
                    </Heading>
                </Center>
                <AccordionBase allowToggle>
                    <About/>
                    <Contact/>
                    <PrivacyPolicy/>
                </AccordionBase>
            </Box>
        </Center>
    );
};