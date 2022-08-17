import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import RadioGroup from 'react-native-radio-buttons-group';
import { ModalDatePicker } from "react-native-material-date-picker";

import ChevronUp from '../../assets/angle-up-solid.svg';
import ChevronDown from '../../assets/chevron-down-solid.svg';

const radioButtonsData = [{
    id: '1',
    label: 'Individual',
    value: 'individual',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    selected: true
}, {
    id: '2',
    label: 'Company',
    value: 'company',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4'
}, {
    id: '3',
    label: 'Partnership',
    value: 'partnership',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4'
}, {
    id: '4',
    label: 'Other',
    value: 'other',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4'
}];

const PolicyGeneratorOne = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    const onPressRadioButton = (radioButtonsArray) => {
        setRadioButtons(radioButtonsArray);
    }


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        
    };
    const onFocus = (event) => {
        setShow(true);
    }
    const onBlur = (event) => {
        setShow(false);
    }
    

    return (
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
            <View>
                <Text>Date of execution of Document</Text>
                <TextInput
                    style={styles.input}
                     onFocus={onFocus}
                     value={date}                   
                />
                {
                    show && (
                       
                        <ModalDatePicker 
                            button={<Text> Open </Text>} 
                            color= "#489503"
                            onSelect={(date) => console.log(date) }
                            isHideOnSelect={true}
                            initialDate={new Date()}

                        />        
                    )
                }
            </View>
            <View>
                <Text>Party Details:</Text>
                <View style={styles.partyDetails}>
                    <Text>Party 1:</Text>
                    <View 
                        style={styles.horizontalLine}
                    />
                    <TouchableOpacity>
                        <View style={styles.chevron}>
                            <ChevronUp 
                                width={17}
                                height={17}
                            />
                        </View>
                    </TouchableOpacity>
                   
                   
                </View>
                <View>
                    <View styles={styles.formGroup}>
                        <Text>Entity Type:</Text>
                        <View style={styles.radioWrapper}>
                            <RadioGroup 
                                radioButtons={radioButtons}
                                onPress={onPressRadioButton}
                                containerStyle={styles.radio}
                            />
                        </View>   
                    </View>
                    <View styles={styles.formGroup}>
                        <Text>Full Name of the Individual:</Text>
                        <TextInput 
                            placeholder="Eg. Jhhn SMith Doe"
                            style={styles.input}
                        />
                    </View>
                    <View styles={styles.formGroup}>
                        <Text>Postal Address:</Text>
                        <TextInput 
                            placeholder="Eg. 202002"
                            style={styles.input}
                        />
                    </View>
                    <View styles={styles.formGroup}>
                        <Text>In which jurisdiction is the party incorporated?</Text>
                        <TextInput 
                            placeholder="Eg."
                            style={styles.input}
                        />
                    </View>
                    <View styles={styles.formGroup}>
                        <Text>What is the registration number of the party?</Text>
                        <TextInput 
                            placeholder="Eg. 202002"
                            style={styles.input}
                        />
                    </View>
                    <View styles={styles.formGroup}>
                        <Text>What is the registerd office address of the party?</Text>
                        <TextInput 
                            placeholder="Eg."
                            style={styles.input}
                        />
                    </View>
                    <View styles={styles.formGroup}>
                        <Text>Where is the principal place of businness of the party?</Text>
                        <TextInput 
                            placeholder="Eg."
                            style={styles.input}
                        />
                    </View>

                </View>
                <View style={styles.partyDetails}>
                    <Text>Party 2:</Text>
                    <View 
                        style={styles.horizontalLine}
                    />
                    <TouchableOpacity>
                        <View style={styles.chevron}>
                            <ChevronDown 
                                width={15}
                                height={15}
                            />
                        </View>
                    </TouchableOpacity>
                   
                   
                </View>
            </View>
            <View style={styles.center}>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextText}>Next Step</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default PolicyGeneratorOne;


const styles = StyleSheet.create({
    center: {
        alignItems: "center"
    },
    chevron: {
        backgroundColor: '#C4C4C4',
        width: 23,
        height: 23,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    horizontalLine: {
        borderBottomColor: '#737373',
        borderBottomWidth: 2,
        width: "70%"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#C4C4C4',
        padding: 10,
        backgroundColor: '#D8D8D8'
    },
    formGroup: {
        marginBottom:15
    },
    nextButton: {
        backgroundColor: "#489503",
        color: "#00000",
        paddingHorizontal: 30,
        borderRadius:15,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        elevation: 3,
        marginBottom:10,
        marginTop: 30
    }, 
    nextText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    partyDetails: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical:15
    },
    radio: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    radioWrapper: {
        marginLeft: 20
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        marginLeft: '5%',
        marginRight: '5%'

    },

})