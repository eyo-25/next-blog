import { useState, useCallback, ChangeEvent } from "react";

interface InputState {
  [key: string]: string;
}

function useInput(initialInput: InputState) {
  const [input, setInput] = useState<InputState>(initialInput);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setInput((prevInput) => ({ ...prevInput, [id]: value }));
    },
    []
  );

  const reset = useCallback(() => setInput(initialInput), [initialInput]);

  return [input, onChange, reset] as const;
}

export { useInput };
