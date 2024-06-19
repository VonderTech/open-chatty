/**
 * Represents the props for the InputField component.
 */
export interface InputFieldProps {
  prompt: string;
  value: string;
  onChange: (value: string) => void;
}

/**
 * A component that renders a text input field.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.prompt - The placeholder text for the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {Function} props.onChange - The callback function to handle changes in the input field value.
 * @returns {JSX.Element} The rendered text input component.
 */
export default function TextInput({
  prompt,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <textarea
      placeholder={prompt}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={10}
      style={{ resize: 'none' }}
      className="input-primary bg-primary-content border p-4 rounded-md"
    />
  );
}
