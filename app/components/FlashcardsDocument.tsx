import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

type Props = {
  flashcards: Flashcard[];
  questionColor: string;
  answerColor: string;
};

const FlashcardsDocument = ({
  flashcards,
  questionColor,
  answerColor,
}: Props) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    section: {
      border: 1,
      height: "250px",
      width: "250px",
      borderStyle: "dashed",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      padding: "20px",
    },
    number: {
      textAlign: "center",
      fontSize: "20px",
    },
    question: {
      fontSize: 16,
      textAlign: "center",
      textDecoration: "underline",
      paddingBottom: "10px",
      maxWidth: "100%",
      color: questionColor,
    },
    text: {
      fontSize: 16,
      textAlign: "center",
      maxWidth: "100%",
      color: answerColor,
    },
  });

  return (
    <Document>
      <Page size="A4" wrap style={styles.page}>
        {flashcards
          ? flashcards.map((flashcard) => (
              <View key={flashcard.id} style={styles.section}>
                <Text style={[styles.number, { fontWeight: "bold" }]}>
                  {flashcard.questionNumber}
                </Text>
                <Text style={[styles.question]}>{flashcard.question}</Text>
                <Text style={styles.text}>{flashcard.answer}</Text>
              </View>
            ))
          : null}
      </Page>
    </Document>
  );
};

export default FlashcardsDocument;
