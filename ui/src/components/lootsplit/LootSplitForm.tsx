import React, { useState } from "react";
import {
    Box,
    Button,
    Collapse,
    FormControl,
    HStack,
    Radio,
    RadioGroup,
    Text,
    Textarea,
    useDisclosure
} from "@chakra-ui/react";
import { LootSplitType } from "./LootSplitType";
import { submit } from "../../calculators/LootSplit";


export const LootSplitForm: React.FC = () => {
    const [input, setInput] = useState("Session data: From 2023-02-08, 12:08:48 to 2023-02-08, 13:05:33\n" +
        "Session: 00:56h\n" +
        "Loot Type: Market\n" +
        "Loot: 244,976\n" +
        "Supplies: 226,845\n" +
        "Balance: 18,131\n" +
        "Maximum Kharnage (Leader)\n" +
        "    Loot: 0\n" +
        "    Supplies: 142,745\n" +
        "    Balance: -142,745\n" +
        "    Damage: 615,520\n" +
        "    Healing: 286,409\n" +
        "Ruby Star\n" +
        "    Loot: 225,755\n" +
        "    Supplies: 43,504\n" +
        "    Balance: 182,251\n" +
        "    Damage: 594,181\n" +
        "    Healing: 121,317\n" +
        "Stando Powah\n" +
        "    Loot: 19,221\n" +
        "    Supplies: 40,596\n" +
        "    Balance: -21,375\n" +
        "    Damage: 351,113\n" +
        "    Healing: 71,119")
    const [radio, setRadio] = useState(LootSplitType.REGULAR)
    const { isOpen, onToggle } = useDisclosure()
    const handleInputChange = (value: any) => setInput(value.target.value)
    const handleRadioChange = (value: any) => setRadio(value.target.value)

    const onClick = () => {
        submit(radio, input);
        onToggle();
    }

    return (
        <div>
            <FormControl as="fieldset">
                <RadioGroup value={radio} onChange={handleRadioChange} defaultValue={LootSplitType.REGULAR}>
                    <HStack spacing="24px">
                        <Radio value={LootSplitType.REGULAR} defaultChecked>Regular</Radio>
                        <Radio value={LootSplitType.EXTRA_EXPENSES}>Extra expenses</Radio>
                        <Radio value={LootSplitType.REMOVE_PLAYERS}>Remove players</Radio>
                    </HStack>
                </RadioGroup>
                <Textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Paste your party hunt log here"
                    isRequired
                />
            </FormControl>
            <Button onClick={onClick}>Submit</Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                    p="40px"
                    color="white"
                    mt="4"
                    bg="teal.500"
                    rounded="md"
                    shadow="md"
                >
                    <Text>
                        {radio}
                        <br/>
                        {input}
                        <br/>
                        hEjhejoplakpoek opa

                        aef oköake oöakef po
                    </Text>
                </Box>
            </Collapse>
        </div>
    );
};
