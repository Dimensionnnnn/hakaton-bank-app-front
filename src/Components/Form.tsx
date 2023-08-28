import axios from "axios"
import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import { useState } from "react"
import SuccessMessage from "./SuccessMessage"
import ErrorMessage from "./ErrorMessage"

const Form = () => {
    const [selectedOption, setSelectedOption] = useState('')
    const [inputData, setInputData] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value)
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post('URL', {
                data: inputData,
                option: selectedOption,
            })

            console.log(response.data)

            setIsSuccess(true)
            setTimeout(() => setIsSuccess(false), 2000)
        } catch (error) {
            setIsError(true)
            setTimeout(() => setIsError(false), 2000)
        }
    }

    return (
        <div>
            <FormControl>
                <FormLabel>Выберите организацию</FormLabel>
                <Select value={selectedOption} onChange={handleOptionChange}>
                    <option value="1">МВД</option>
                    <option value="2">ГИБДД</option>
                    <option value="3">ЖКХ</option>
                    <option value="4">СМИ</option>
                    <option value="5">МТК</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Введите данные:</FormLabel>
                <Input type='text' value={inputData} onChange={handleInputChange} />
            </FormControl>
            <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
                Оплатить
            </Button>
            {isSuccess && <SuccessMessage />}
            {isError && <ErrorMessage />}
        </div>
    )
}

export default Form