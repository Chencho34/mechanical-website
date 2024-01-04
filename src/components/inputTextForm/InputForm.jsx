
export default function InputTextForm ({type , placeholder, name, value, onChange, iconClassName}) {
  return (
    <label className='form__label'>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <i className={iconClassName}/>
    </label>
  )
}