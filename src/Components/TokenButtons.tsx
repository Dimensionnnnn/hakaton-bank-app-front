import React from "react";
import { Box, Button, CircularProgress } from "@chakra-ui/react";

interface TokenButtonsProps {
    isFetchingToken: boolean;
    hasToken: boolean;
    onGetToken: () => void;
    onPay: () => void;
}

const TokenButtons: React.FC<TokenButtonsProps> = ({
    isFetchingToken,
    hasToken,
    onGetToken,
    onPay,
}) => {
    return (
        <Box mt={4}>
            {hasToken ? (
                <Button colorScheme="green" onClick={onPay}>
                    Операция
                </Button>
            ) : (
                <Button
                    colorScheme="blue"
                    onClick={onGetToken}
                    isDisabled={isFetchingToken}
                >
                    {isFetchingToken ? (
                        <CircularProgress
                            isIndeterminate
                            size="24px"
                            color="green"
                        />
                    ) : (
                        "Получить токен"
                    )}
                </Button>
            )}
        </Box>
    );
};

export default TokenButtons;
