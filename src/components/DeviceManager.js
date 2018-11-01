import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from "@material-ui/core/Switch/Switch";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
});

class CheckboxesGroup extends React.Component {
    state = {
        gilad: true,
        jason: false,
        antoine: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        const { gilad, jason, antoine } = this.state;
        const error = [gilad, jason, antoine].filter(v => v).length !== 2;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Подключенные устройства</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" color="Primary"/>
                            }
                            label="Лампа 1"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" color="Primary"/>
                            }
                            label="Лампа 2"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={antoine}
                                    onChange={this.handleChange('antoine')}
                                    value="antoine"
                                    color="Primary"
                                />
                            }
                            label="Холодильник"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

CheckboxesGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);