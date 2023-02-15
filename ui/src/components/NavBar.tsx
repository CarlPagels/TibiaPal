import {
    Box,
    Button,
    Collapse,
    Flex,
    Icon,
    IconButton,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon, MoonIcon, SunIcon, } from "@chakra-ui/icons";
import { To, Link as RouterLink } from "react-router-dom";

export const NavBar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box w={"100%"}>
            <Flex
                bg={useColorModeValue("gray.100", "gray.900")}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.300", "gray.600")}
                align={"center"}>
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                    <Text
                        textAlign={useBreakpointValue({ base: "center", md: "left" })}
                        fontFamily={"heading"}
                        color={useColorModeValue("gray.800", "white")}>
                        Logo
                    </Text>

                    <Flex display={{ base: "none", md: "flex" }} ml={10}>
                        <DesktopNav/>
                    </Flex>
                </Flex>
                <Flex>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                    </Button>
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav/>
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Link
                                as={RouterLink}
                                p={2}
                                to={navItem.to ?? "#"}
                                fontSize={"sm"}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: "none",
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={"xl"}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={"xl"}
                                minW={"sm"}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, to, subLabel }: NavItem) => {
    return (
        <Link
            as={RouterLink}
            to={to}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}>
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}>
                    <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon}/>
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, to }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={to ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue("gray.600", "gray.200")}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}>
                    {children &&
                        children.map((child) => (
                            <Link as={RouterLink} py={2} to={child.to}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    to?: To;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "General",
        children: [
            {
                label: "Latest news",
                to: "/",
            },
            {
                label: "About & contact",
                to: "/about",
            },
            {
                label: "Donators",
                to: "donators",
            }
        ]
    },
    {
        label: "Tools",
        children: [
            {
                label: "TibiaLootSplit",
                subLabel: "Automatically calculate how to split your loot",
                to: "lootsplit",
            },
            {
                label: "Boss Timers",
                to: "boostimers",
            },
        ]
    },
    {
        label: "Guides",
        children: [
            {
                label: "Hunting places",
                subLabel: "Find the best place to hunt for your level",
                to: "huntingplaces",
            },
            {
                label: "Bestiary reference",
                subLabel: "Collect those charm points",
                to: "bestiary",
            },
            {
                label: "YouTube videos & guides",
                subLabel: "Video guides to help you improve",
                to: "videos",
            },
        ],
    },
    {
        label: "Calculators",
        children: [
            {
                label: "Exercise weapons",
                to: "exercise"
            },
            {
                label: "Imbue",
                to: "imbue",
            },
            {
                label: "Exp share",
                to: "expshare",
            },
            {
                label: "Stamina",
                to: "stamina",
            },
            {
                label: "Leveling",
                to: "leveling",
            },
            {
                label: "Training",
                to: "training",
            },
            {
                label: "Leech",
                to: "leech",
            },
        ],
    },
];