import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import WorkExperienceScreen from './screens/WorkExperienceScreen';
import EducationScreen from './screens/EducationScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen name="WorkExperience" component={WorkExperienceScreen}
                    options={{
                        title: 'Work Experience',
                        headerRight: (props) => <MaterialCommunityIcons name="briefcase" size={24} color="gray.900" style={{ paddingRight: 20 }} {...props} />,
                        headerTitleAlign: 'center',
                        alignItems: 'center',
                        headerTintColor: 'gray.900',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="Education" component={EducationScreen}
                    options={{
                        title: 'Education',
                        headerRight: (props) => <MaterialCommunityIcons name="octagram" size={24} color="gray.900" style={{ paddingRight: 20 }} {...props} />,
                        headerTitleAlign: 'center',
                        alignItems: 'center',
                        headerTintColor: 'gray.900',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;