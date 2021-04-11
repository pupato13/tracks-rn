import React, {
    forwardRef,
    ForwardRefRenderFunction,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { TextInput } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { Container, Label, InputElement } from "./styles";

interface IInputProps {
    label: string;
    value: string;
    autoFocus: boolean;
    autoCapitalize: "none" | "sentences" | "words" | "characters";
    autoCorrect: boolean;
    defaultValue?: string;
    required?: boolean;
}

const Input: ForwardRefRenderFunction<unknown, IInputProps> = (
    {
        label,
        value,
        autoFocus = false,
        autoCapitalize = "none",
        autoCorrect = false,
        defaultValue,
        required,
        ...rest
    },
    ref,
) => {
    const inputElementRef = useRef<TextInput>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);
    const [text, setText] = useState("");

    const inputValueRef = useRef({ value: defaultValue });

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleIsInputValid = useCallback(async () => {
        if (required) {
            // setIsInputValid(!!inputValueRef.current.value);
            setIsInputValid(!!text);
        } else {
            setIsInputValid(true);
        }

        console.log("isInputValid");
        console.log(isInputValid);
    }, [required, text, isInputValid]);

    const handleInputBlur = useCallback(async () => {
        setIsFocused(false);

        setIsFilled(!!inputValueRef.current.value);
        // setIsFilled();
        // console.log("BLUR FROM INPUT COMPONENT");
        // console.log("");
        // console.log("inputValueRef.current.value");
        // console.log(inputValueRef.current.value);
        // console.log("text state");
        // console.log(text);

        await handleIsInputValid();

        // if (required) {
        //     // setIsInputValid(!!inputValueRef.current.value);
        //     setIsInputValid(!!text);
        // } else {
        //     setIsInputValid(true);
        // }
    }, [handleIsInputValid]);

    const handleChangeText = useCallback(
        async (value: string) => {
            setText(value);
            inputValueRef.current.value = value;
        },
        [setText],
    );

    useEffect(() => {
        setIsFilled(!!defaultValue);
        setIsInputValid(!!defaultValue);
        setText(defaultValue || "");
    }, [defaultValue]);

    useImperativeHandle(ref, () => ({
        async updateValue(value: string) {
            // inputElementRef.current.focus();
            // inputValueRef.current.value = text;
            await handleChangeText(value);
        },
        focus() {
            if (inputElementRef && inputElementRef.current)
                inputElementRef.current.focus();
        },
        async blur() {
            await handleInputBlur();
        },
        value: inputValueRef.current.value,
        isValid: isInputValid,
    }));

    const GetIcon = () => {
        const iconSlug = isFilled ? "check-circle" : "times-circle";

        return <FontAwesome5 name={iconSlug} color="#333" size={20} solid />;
    };

    return (
        <Container>
            <Label>{label}</Label>
            <InputElement
                ref={inputElementRef}
                value={value}
                autoFocus={autoFocus}
                autoCapitalize={autoCapitalize}
                defaultValue={defaultValue}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={value => handleChangeText(value)}
                {...rest}
            />
            {required && <GetIcon />}
        </Container>
    );
};

export default forwardRef(Input);
