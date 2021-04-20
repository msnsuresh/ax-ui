import * as React from "react";
import Column from "../components/Column/Column";
import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import Row from "../components/Row/Row";
import ListOfQuotes from "../containers/ListOfQuotes/ListOfQuotes";

const Home: React.FC = (): React.ReactElement => {
  const [quoteQuery, setQuoteQuery] = React.useState<string>();
  return (
    <>
      <Navbar />
      <Container>
        <Row className="my-4">
          <Column>
            <ListOfQuotes />
          </Column>
        </Row>
      </Container>
    </>
  );
};

export default Home;
