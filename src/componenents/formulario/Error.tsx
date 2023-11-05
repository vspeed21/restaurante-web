
interface Props {
  msg: string
}

function Error({ msg }: Props) {
  return (
    <span role='alert' className='block mb-4 -mt-3 text-sm text-red-400'>
      {msg}
    </span>
  )
}

export default Error