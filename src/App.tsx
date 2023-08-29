import React, { useState } from "react";
import {
  ChakraProvider,
  CSSReset,
  Box,
  Container,
  extendTheme,
  Flex
} from "@chakra-ui/react";
import CheckboxBlock from "./Components/CheckboxBlock";
import TokenButtons from "./Components/TokenButtons";
import axios from "axios";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: "md",
      },
    },
  },
});

const App: React.FC = () => {
  const [selectedCheckboxItems, setSelectedCheckboxItems] = useState<string[]>([]);
  const [selectedCheckboxUserData, setSelectedCheckboxUserData] = useState<string[]>([]);
  const [isFetchingToken, setIsFetchingToken] = useState<boolean>(false);
  const [hasToken, setHasToken] = useState<boolean>(false);

  const handleCheckboxSelectionChange = (selectedItems: string[]) => {
    setSelectedCheckboxItems(selectedItems);
  };

  const handleCheckboxUserDataSelectionChange = (selectedItems: string[]) => {
    setSelectedCheckboxUserData(selectedItems);
  }

  const handleGetToken = () => {
    setIsFetchingToken(true);

    const data = {
      id: selectedCheckboxUserData.includes("Гос. данные") ? 1 : null,
      firstName: selectedCheckboxUserData.includes("Имя") ? 'Oleg' : null,
      lastName: selectedCheckboxUserData.includes("Фамилия") ? 'Oldman' : null,
      phoneNumber: selectedCheckboxUserData.includes("Номер телефона") ? '+7-999-999-99-99' : null,
    }

    axios.post('http://localhost:8080/api/client/new', data)
      .then((response) => {
        setIsFetchingToken(false);
        setHasToken(true);
        console.log(response);
      })
      .catch((error) => {
        setIsFetchingToken(false);
        setHasToken(false);
        console.log(error);
      })
  };

  const handlePay = () => {
    alert('Операция прошла успешно!');
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Container maxW="md"> 
        <Flex mt={4} gap={5}>
          <CheckboxBlock
            items={["ЖКХ", "Интернет", "Телевидение", "МТК"]}
            onSelectionChange={handleCheckboxSelectionChange}
          />
          <CheckboxBlock
            items={["Гос. данные", "Имя", "Фамилия", "Номер телефона"]}
            onSelectionChange={handleCheckboxUserDataSelectionChange}
          />
        </Flex>
        {selectedCheckboxItems.length > 0 && selectedCheckboxUserData.length > 0 && (
          <Box mt={4}>
            <TokenButtons
              isFetchingToken={isFetchingToken}
              hasToken={hasToken}
              onGetToken={handleGetToken}
              onPay={handlePay}
            />
          </Box>
        )}
      </Container>
    </ChakraProvider>
  );
};

export default App;