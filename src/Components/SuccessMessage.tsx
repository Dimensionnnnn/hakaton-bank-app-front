import { Alert, AlertIcon } from '@chakra-ui/react';

const SuccessMessage = () => {
    return (
        <Alert status='success' mt={4}>
            <AlertIcon />
            Оплата прошла успешно
        </Alert>
    )
}

export default SuccessMessage