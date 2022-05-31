import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text,
} from "react-native";
import Copyright from "../Copyright";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export default function Option({ title, image, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
