import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Button, Input, Text, CheckBox } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker';
/**
 * Type for props to be passed by App when mounting AddEntry
 */
type Props = {
    createEntry: Function,
    cancelCreateEntry: Function
}
/**
 * Type for state variable
 */
type IState = {
    txnDay: number | null;
    txnMonth: number | null;
    txnYear: number | null;
    date: Date;
    description: string;
    amount: number;
    expense: boolean
}
const AddEntry: React.FC<Props> = ({ createEntry, cancelCreateEntry }) => {
    const date = new Date(); // for initializing all the dates.
    const [state, setState] = useState<IState>({
        txnDay: date.getDay(),
        txnMonth: date.getMonth(),
        txnYear: date.getFullYear(),
        date: new Date(),
        description: '',
        amount: 0,
        expense: true
    })
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios" ? true : false);
    return