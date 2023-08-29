import React, { useState } from "react";
import { Checkbox, Stack } from "@chakra-ui/react";

interface CheckboxBlockProps {
    items: string[];
    onSelectionChange: (selectedItems: string[]) => void;
}

const CheckboxBlock: React.FC<CheckboxBlockProps> = ({
    items,
    onSelectionChange,
}) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheckboxChange = (item: string) => {
        const updatedSelectedItems = selectedItems.includes(item)
            ? selectedItems.filter((selected) => selected !== item)
            : [...selectedItems, item];
        setSelectedItems(updatedSelectedItems);
        onSelectionChange(updatedSelectedItems);
    };

    return (
        <Stack spacing={2}>
            {items.map((item) => (
                <Checkbox
                    key={item}
                    isChecked={selectedItems.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                >
                    {item}
                </Checkbox>
            ))}
        </Stack>
    );
};

export default CheckboxBlock;
