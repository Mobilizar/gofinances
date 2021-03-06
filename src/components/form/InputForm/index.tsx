import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';
import { FormDataProps } from '../../../screens/Register';

import {
    Container,
    Error
} from './styles';

interface Props extends TextInputProps {
    control: Control<FormDataProps>;
    name: 'name' | 'amount';
    error: string | undefined;
};

export function InputForm({
    control,
    name,
    error,
    ...rest
}: Props) {
    return (
        <Container>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value as string}
                        {...rest}
                    />
                )}
            />
            {error && <Error>{error}</Error>}
        </Container>
    )
}