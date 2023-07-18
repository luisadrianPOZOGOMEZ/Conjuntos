import Input from "../atoms/Input";
import Label from "../atoms/Label";
import '../../assets/styles/WrapperInput.css'

function WrapperInput({change, msn, type, placeholder, name}) {
    return (
        <div className="wrapper_input">
            <Label msn={msn}></Label>
            <Input change={change} type={type} placeholder={placeholder} name={name} />
        </div>
    );
}

export default WrapperInput;