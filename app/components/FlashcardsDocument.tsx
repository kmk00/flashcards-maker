import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

type Props = {
  flashcards: Flashcard[];
  questionColor: string;
  answerColor: string;
  questionFontSize: number;
  answerFontSize: number;
  width: number;
  height: number;
  mode: string;
};

const FlashcardsDocument = ({
  flashcards,
  questionColor,
  answerColor,
  questionFontSize,
  answerFontSize,
  width,
  height,
  mode,
}: Props) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    section: {
      border: 1,
      height: height,
      width: width,
      borderStyle: "dashed",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      padding: "20px",
      position: "relative",
    },
    number: {
      textAlign: "center",
      fontSize: "20px",
      position: "absolute",
      top: "10px",
      left: "10px",
      color: "black",
    },
    question: {
      fontSize: questionFontSize,
      textAlign: "center",
      paddingBottom: "10px",
      maxWidth: "100%",
      color: questionColor,
    },
    answer: {
      fontSize: answerFontSize,
      textAlign: "center",
      maxWidth: "100%",
      color: answerColor,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {flashcards
          ? flashcards.map((flashcard) => (
              <View key={flashcard.id} style={styles.section}>
                <Text style={[styles.number, { fontWeight: "bold" }]}>
                  {flashcard.questionNumber}
                </Text>
                <Text style={[styles.question]}>{flashcard.question}</Text>
                <Text style={styles.answer}>{flashcard.answer}</Text>
              </View>
            ))
          : null}
      </Page>
    </Document>
  );
};

export default FlashcardsDocument;
