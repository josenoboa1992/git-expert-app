import {useState} from "react";

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange=({target})=>{

        setInputValue(target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (inputValue.trim() <= 1)return;
        // setCategoria((categoria)=> [inputValue,...categoria])
        onAddCategory([inputValue]);
        setInputValue("");

    }
  return (
      <form onSubmit={handleSubmit}>
          <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          />
      </form>
  )
}