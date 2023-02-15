import React from "react";
import { Accordion as AccordionBase, Box, SimpleGrid } from "@chakra-ui/react";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { Contact } from "./Contact";
import { About } from "./About";


export const Accordion: React.FC = () => {
    return (
        <Box p={4} w={"100%"}>
            <SimpleGrid columns={{ base: 3 }} spacing={5}>
                <div></div>
                <AccordionBase allowMultiple allowToggle>
                    <About/>
                    <Contact/>
                    <PrivacyPolicy/>
                </AccordionBase>
            </SimpleGrid>
        </Box>
    );
};