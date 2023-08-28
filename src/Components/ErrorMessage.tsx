import {Alert, AlertIcon} from '@chakra-ui/react'

const ErrorMessage = () => {
    return (
        <Alert status='error' mt={4}>
            <AlertIcon />
            Произошла ошибка при оплате!
        </Alert>
    )
}

export default ErrorMessage