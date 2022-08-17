import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';
import { ModalDatePicker } from "react-native-material-date-picker";
//Styling
import { styles } from "./styles";
// Chevron Up and Down Icons
import ChevronUp from '../../assets/angle-up-solid.svg';
import ChevronDown from '../../assets/chevron-down-solid.svg';
//Radio Buttons Data 
import { radioButtonsData } from './radioButtonsData';


const PolicyGenerator = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    const onPressRadioButton = (radioButtonsArray) => {
        setRadioButtons(radioButtonsArray);
    }
    const onFocus = (event) => {
        setShow(true);
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


export default PolicyGenerator;


