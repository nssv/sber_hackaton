import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    LineChart
} from "react-timeseries-charts";
import {TimeSeries} from 'pondjs';

const styles = theme => ({
});

const series = new TimeSeries({
    name: "Electr",
    columns: ["time", "value"],
    points : [[
        1416787200000,
        0.8034
    ],
        [
            1416182400000,
            0.800128571428571
        ],
        [
            1415577600000,
            0.802128571428572
        ],
        [
            1414972800000,
            0.801071428571429
        ]].reverse()
});

class GraphViewer extends React.Component {
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
        console.log(series)
        return (
            <ChartContainer timeRange={series.range()} width={800}>

            </ChartContainer>
        );
    }
}

GraphViewer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GraphViewer);