import React from "react";
import {
    Text,
    Center,
    NativeBaseProvider,
    VStack,
    HStack,
    ScrollView,
    Box,
    Divider,
    Heading,
    Icon,
} from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from "../services/Api";

export default function EducationScreen() {
    const [education, setEducation] = React.useState([]);

    React.useEffect(() => {
        api.get("/Education").then((response) => {
            setEducation(response.data.results);
        });
    }, []);

    return (
        <NativeBaseProvider>
            <ScrollView w="full" h="full">
                <Center bg="gray.100" w="100%" h="100%">
                    <Box safeArea p="2" py="8" w="90%">
                        {education.map(item => (
                            <VStack mx="4" space="xs" key={item?.objectId}>
                                <Heading size="lg">{item?.titulo}</Heading>
                                <HStack alignItems="center" space={1} my="2">
                                    <Icon as={MaterialCommunityIcons} name="calendar-month" size="lg" color="gray.900" />
                                    <Text fontSize={"lg"}>{item?.data}</Text>
                                </HStack>
                                <Text fontSize={"lg"}>{item?.desc}</Text>
                                <Divider my="2" bg="gray.900" />
                            </VStack>
                        ))}
                    </Box>
                </Center>
            </ScrollView>
        </NativeBaseProvider>
    );
}