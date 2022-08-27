import TextField from "@material-ui/core/TextField";

const INPUT = ({label,autoFocus,onChange,value,type,name,required,multiline,rows,maxLength,error,helperText, style}) => {
  return (
    <TextField
    // required
    id="outlined-required"
    label={label}
    variant="outlined"
    autoFocus={autoFocus}
    onChange={onChange}
    value={value}
    inputProps={{maxLength :maxLength}}
    required={required}
    multiline={multiline}
    error={error}
    rows={rows}
    type={type}
    name={name}
    style={style}
    helperText={helperText}

    InputLabelProps={{
        shrink: true,
      }}
      size="small"
    />
  );
};

export default INPUT;
