import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";


const DarkMode = () => {
    return (
        <div className="darkMode__toggle">
            <h4>Switch to Dark Mode</h4>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="top"
                        control={
                            <Switch
                            // checked={state.checkedA}
                            // onChange={handleChange('checkedA')}
                            // value="injValveOpen"
                            // color="primary"
                            // inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        }
                        label="Dark Mode"
                        labelPlacement="top"
                    />
                </FormGroup>
            </FormControl>
        </div>
    )
};

export default DarkMode;