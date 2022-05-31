import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

export default function Button({ isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  );
}
