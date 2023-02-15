import React from "react";
import { Accordion as AccordionBase, Center, Heading } from "@chakra-ui/react";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { Contact } from "./Contact";
import { About } from "./About";


export const Accordion: React.FC = () => {
    return (
        <div>
            <AccordionBase allowToggle>
                <About/>
                <Contact/>
                <PrivacyPolicy/>
            </AccordionBase>
        </div>
    );
};