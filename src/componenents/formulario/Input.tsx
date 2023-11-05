import { ChangeEventHandler } from "react"

interface Props {
  id: string
  placeholder?: string
  title?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'file'
  as?: 'input' | 'textarea'
  name?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  min?: number
  max?: number
}

function Input({ placeholder, id, type = 'text', title, as = 'input', value, name, onChange }: Props) {
  return as == 'input' ? (
    <input
      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:border-blue-800 focus:outline-none focus:shadow"
      placeholder={placeholder}
      id={id}
      type={type}
      name={name}
      title={title}
      value={value}
      onChange={onChange}
    />
  ) : (
    <textarea
      placeholder={placeholder}
      id={id}
      title={title}
      name={name}
      className="w-full h-40 p-2 px-3 py-2 pl-3 leading-tight text-gray-700 border rounded appearance-none resize-none focus:border-blue-800 focus:outline-none focus:shadow"
      value={value}
      onChange={onChange}
    ></textarea>
  );
}

export default Input;
