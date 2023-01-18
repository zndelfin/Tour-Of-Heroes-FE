import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function CheckboxGroup() {
  const handleCheckbox = (e: any) => {
    const characterType = e.target.value;
    return console.log(characterType);
  };

  return (
    <FormGroup
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <FormControlLabel
        control={<Checkbox color="default" />}
        label="Hero"
        value="hero"
        onChange={e => handleCheckbox(e)}
      />

      <FormControlLabel
        control={<Checkbox color="default" />}
        label="Villain"
        value="villain"
        onChange={e => handleCheckbox(e)}
      />
    </FormGroup>
  );
}

export { CheckboxGroup };
