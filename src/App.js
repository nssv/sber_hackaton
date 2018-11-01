import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DeviceManager from "./components/DeviceManager";
import GraphViewer from "./components/GraphViewer";
import Grap from "./components/Grap";
import RealTimeSeries from "./components/RealTimeSeries";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div class="jumbotron text-center">
                    <h3>SBERBANK</h3>
                    <h5>Energy Consumption Manager</h5>
                </div>

                <div class="container">

                    <div className="row">

                        <div className="col-sm-9">
                            <div className="container-fluid">
                                <div className="row bord">
                                    <Grap/>
                                    <RealTimeSeries />
                                </div>
                                <div className="row">
                                    <div className=" col-sm-6">
                                        <div className="container-fluid bord">
                                            1
                                        </div>
                                    </div>
                                    <div className=" col-sm-6">
                                        <div className="container-fluid bord">
                                            2
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 bord">
                            <div className="container-fluid">
                                <DeviceManager/>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default App;
