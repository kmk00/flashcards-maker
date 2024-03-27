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
  console.log(mode);

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      margin: "auto",
    },
    singleModeSection: {
      border: 1,
      height: height,
      width: width,
      borderStyle: "dashed",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      padding: "10px",
    },
    foldedModeText: {
      height: height,
      width: width,
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      padding: "10px",
    },
    foldedGroup: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderStyle: "dashed",
      borderWidth: "1px",
    },
    foldedCard: {
      height: height,
      width: width,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    divider: {
      width: "1px",
      height: height,
      backgroundColor: "#000",
    },
    question: {
      fontSize: questionFontSize,
      textAlign: "center",
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

  if (mode === "single") {
    return (
      <Document>
        <Page size="A4" wrap style={styles.page}>
          {flashcards &&
            flashcards.map((flashcard) => (
              <View wrap key={flashcard.id} style={styles.singleModeSection}>
                <Text style={[styles.question]}>{flashcard.question}</Text>
                <Text style={styles.answer}>{flashcard.answer}</Text>
              </View>
            ))}
        </Page>
      </Document>
    );
  }

  if (mode === "fold") {
    return (
      <Document>
        <Page size="A4" wrap style={styles.page}>
          {flashcards &&
            flashcards.map((flashcard) => (
              <View style={styles.foldedGroup} key={flashcard.id}>
                <View style={styles.foldedCard}>
                  <Text debug style={styles.question}>
                    {flashcard.question}
                  </Text>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.foldedCard}>
                  <Text debug style={styles.answer}>
                    {flashcard.answer}
                  </Text>
                </View>
              </View>
            ))}
        </Page>
      </Document>
    );
  }

  return <p>Please select a mode</p>;
};

export default FlashcardsDocument;
