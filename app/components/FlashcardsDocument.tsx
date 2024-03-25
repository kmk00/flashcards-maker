import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

type Props = {
  flashcards: Flashcard[];
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const FlashcardsDocument = ({ flashcards }: Props) => {
  return (
    <Document>
      <Page wrap size="A4" style={styles.page}>
        {flashcards
          ? flashcards.map((flashcard) => (
              <View key={flashcard.id} style={styles.section}>
                <Text>{flashcard.question}</Text>
                <Text>{flashcard.answer}</Text>
              </View>
            ))
          : null}
      </Page>
    </Document>
  );
};

export default FlashcardsDocument;
