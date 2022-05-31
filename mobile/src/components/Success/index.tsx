import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { styles } from "./styles";
import successImg from "../../assets/success.png";
import Copyright from "../Copyright";

interface Props {
  onSendAnotherFeedback: () => void;
}

export default function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />

      <Text style={styles.title}>Agradecemos o feedback</Text>

      <TouchableOpacity onPress={onSendAnotherFeedback} style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
