import { Card, CardBody, CardHeader, Center, Heading } from "@chakra-ui/react";
import React from "react";
import { Accordion } from "../components";

export const About: React.FC = () => {
    return (
        <Center>
            <Card w={"80%"} my={5}>
                <CardHeader>
                    <Center>
                        <Heading>
                            About, Contact, Privacy Policy
                        </Heading>
                    </Center>
                </CardHeader>
                <CardBody>
                    <Accordion/>
                </CardBody>

            </Card>
        </Center>
    );
};
