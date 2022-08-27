import TextField from "@material-ui/core/TextField";

const INPUT = ({label,autoFocus,onChange,value,type,name,required,multiline,rows,style}) => {
  return (
    <TextField
    // required
    id="outlined-required"
    label={label}
    variant="outlined"
    autoFocus={autoFocus}
    onChange={onChange}
    value={value}
    required={required}
    multiline={multiline}
    rows={rows}
    type={type}
    name={name}
    style = {style} 
    InputLabelProps={{
        shrink: true,
      }}
      // size="small"
    />
  );
};

export default INPUT;
