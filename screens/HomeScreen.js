import React from "react";
import {
    Text,
    Center,
    Heading,
    NativeBaseProvider,
    VStack,
    HStack,
    Image,
    ScrollView,
    Box,
    Icon,
    Divider,
    Progress,
    Button
} from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from "../services/Api";

export default function HomeScreen({ navigation }) {
    const [perfil, setPerfil] = React.useState([]);
    const [skills, setSkills] = React.useState([]);
    const [languages, setLanguages] = React.useState([]);

    React.useEffect(() => {
        api.get("/Perfil").then((response) => {
            setPerfil(response.data.results);
        });
        api.get("/Skills").then((response) => {
            setSkills(response.data.results);
        });
        api.get("/Languages").then((response) => {
            setLanguages(response.data.results);
        });
    }, []);

    return (
        <NativeBaseProvider>
            <ScrollView w="full" h="full">
                <Center bg="gray.100" w="100%" h="100%">
                    <Box safeArea p="2" py="8" w="90%">
                        <VStack space={1} mt="2" alignItems="center">
                            <Image size={200} borderRadius={"full"} borderWidth={4} borderColor={"gray.900"} shadow="5" source={{
                                uri: perfil[0]?.avatar.url
                            }} alt="Profile Photo" />
                            <Heading size="2xl">{perfil[0]?.nome}</Heading>
                        </VStack>
                        <Divider my="2" bg="gray.900" />
                        <VStack space={6} my="2" justifyContent={"center"}>
                            <HStack alignItems="center" space={1}>
                                <Icon as={MaterialCommunityIcons} name="briefcase-variant" size="2xl" color="gray.900" />
                                <Text fontSize={"lg"}>{perfil[0]?.cargo}</Text>
                            </HStack>
                            <HStack alignItems="center" space={1}>
                                <Icon as={MaterialCommunityIcons} name="home" size="2xl" color="gray.900" />
                                <Text fontSize={"lg"}>{perfil[0]?.localidade}</Text>
                            </HStack>
                            <HStack alignItems="center" space={1}>
                                <Icon as={MaterialCommunityIcons} name="email" size="2xl" color="gray.900" />
                                <Text fontSize={"lg"}>{perfil[0]?.email}</Text>
                            </HStack>
                            <HStack alignItems="center" space={1}>
                                <Icon as={MaterialCommunityIcons} name="cellphone" size="2xl" color="gray.900" />
                                <Text fontSize={"lg"}>{perfil[0]?.contato}</Text>
                            </HStack>
                        </VStack>
                        <Divider my="2" bg="gray.900" />
                        <HStack alignItems="center" space={1} my="2">
                            <Icon as={MaterialCommunityIcons} name="asterisk" size="2xl" color="gray.900" />
                            <Heading size="lg">Skills</Heading>
                        </HStack>
                        {skills.map(skill => (
                            <VStack mx="4" space="xs" key={skill?.objectId}>
                                <Text fontSize={"lg"}>{skill?.titulo}</Text>
                                <Progress size="md" mb={4} value={skill?.nv_exp} _filledTrack={{ bg: "gray.700" }} />
                            </VStack>
                        ))}
                        <Divider my="2" bg="gray.900" />
                        <HStack alignItems="center" space={1} my="2">
                            <Icon as={MaterialCommunityIcons} name="earth" size="2xl" color="gray.900" />
                            <Heading size="lg">Languages</Heading>
                        </HStack>
                        {languages.map(language => (
                            <VStack mx="4" space="xs" key={language?.objectId}>
                                <Text fontSize={"lg"}>{language?.titulo}</Text>
                                <Progress size="md" mb={4} value={language?.nv_exp} _filledTrack={{ bg: "gray.700" }} />
                            </VStack>
                        ))}
                        <Divider my="2" bg="gray.900" />
                        <VStack space={1} my="2" alignItems="center">
                            <Button leftIcon={<Icon as={MaterialCommunityIcons} name="briefcase-outline" size="2xl" />} width="100%" mt="4" bg="gray.900" shadow="5"
                                _hover={{
                                    bg: 'gray.500'
                                }}
                                _pressed={{
                                    bg: 'gray.700'
                                }}
                                onPress={() => navigation.navigate('WorkExperience')}
                            >
                                <Text fontSize={"lg"} color="white">Work Experience</Text>
                            </Button>
                            <Button leftIcon={<Icon as={MaterialCommunityIcons} name="octagram-outline" size="2xl" />} width="100%" mt="4" bg="gray.900" shadow="5"
                                _hover={{
                                    bg: 'gray.500'
                                }}
                                _pressed={{
                                    bg: 'gray.700'
                                }}
                                onPress={() => navigation.navigate('Education')}
                            >
                                <Text fontSize={"lg"} color="white">Education</Text>
                            </Button>
                        </VStack>
                    </Box>
                </Center>
            </ScrollView>
        </NativeBaseProvider>
    );
}