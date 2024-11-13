import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, ScrollView,TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from "react-native-vector-icons/Ionicons";

const App = () => {
    // Questions and Answers data
    const questions = [
        { id: 1, image: require('./img/Aimbot.webp'), options: ['Stun', 'Twice', 'Infi','More','Around','Shoot'], answer: 'Shoot' },
        { id: 2, image: require('./img/Barrelbullets.webp'), options: ['Stun', 'Twice', 'Infi','More','Around','Shoot'], answer: 'Around' },
        { id: 3, image: require('./img/Goodestboy.webp'), options: ['Stun', 'Twice', 'Infi','More','Around','Shoot'], answer: 'More' },
        { id: 3, image: require('./img/Infinitro.webp'), options: ['Stun', 'Twice', 'Infi','More','Around','Shoot'], answer: 'Infi' },
        { id: 3, image: require('./img/Newlobber.webp'), options: ['Stun', 'Twice', 'Infi','More','Around','Shoot'], answer: 'Twice' },
        { id: 3, image: require('./img/Silentstunner.webp'), options: ['Stun', 'Twice', 'Infi','More','Around','Shoot'], answer: 'Stun' }
    ];

    // State to track user answers
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [userName, setUserName] = useState('');

    // Function to handle answer selection
    const selectAnswer = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    // Function to calculate score and display result
    const handleSubmit = () => {
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].answer) {
                score += 1;
            }
        });
        if (score < 6) {
            Alert.alert(`${userName}, try better next time`);
        } else {
            Alert.alert(`${userName}, well done!`);
        }

    };

    return (
        <View style={styles.top}>
            <Icon name='logo-steam' size={20} color="#fff" />
            <Text style={{backgroundColor:'smokewhite',borderColor:'purple', borderWidth:5,}}>Knowledge test</Text>
            <Text >User Name:</Text>
            <TextInput
                placeholder="Enter your name"
                value={userName}
                onChangeText={(text) => setUserName(text)}
            />
            <Button title="Submit Answers" onPress={handleSubmit} />
            <ScrollView contentContainerStyle={styles.parent}>
                {questions.map((question, index) => (
                    <View key={question.id} style={styles.question}>
                        <Text>What does this do?</Text>
                        <Picker
                            selectedValue={answers[index]}
                            onValueChange={(value) => selectAnswer(index, value)}
                            style={styles.picker}
                        >
                            <Picker.Item label="pick the correct option" value={null} />
                            {question.options.map((option) => (
                                <Picker.Item key={option} label={option} value={option} />
                            ))}
                        </Picker>
                        <Image source={question.image} style={styles.image}/>

                    </View>

                ))}


            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    top: {
        marginTop:30,
        borderColor:'lightpurple',
        borderWidth:5,
        alignItems: 'center',
        backgroundColor:'skyblue',
    },
    parent: {
        flexGrow: 5,
        padding: 5,
        justifyContent: 'center',
    },
    question: {
        marginBottom: 20,
        width:350,
        justifyContent: 'center',
        borderColor:'blue',
        borderWidth:5,
        backgroundColor:'pink',
    },
    child: {
        flex: 1,
        alignItems: 'center',
    },
    picker: {
        marginVertical: 5,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    button: {
        paddingVertical: 10,
        marginBottom: 10,
        height:5,
        width:10,
        alignItems: 'center',
    },
});

export default App;
