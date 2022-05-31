import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ChatTeardropDots } from "phosphor-react-native";
import { theme } from "../../theme";
import BottomSheet from "@gorhom/bottom-sheet";
import Form from "../Form";
import Success from "../Success";
import { feedbackTypes } from "../../utils/feedbackTypes";
import Options from "../Options";

export type FeedbackType = keyof typeof feedbackTypes;

export default function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestarFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight="bold"
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ? (
          <Success onSendAnotherFeedback={handleRestarFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                onFeedbackCanceled={handleRestarFeedback}
                onFeedbackSent={handleFeedbackSent}
                feedbackType={feedbackType}
              />
            ) : (
              <Options onFeedbackTypeChanged={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}
