import React from "react";
import 'bootswatch/dist/flatly/bootstrap.css'
import Rotas from "./rotas";
import '../css/custom.css'
import Navbar from "../views/components/navbar";

class App extends React.Component {


    render() {
        return (
            <>
                <Navbar/>
                <div className={'container'}>
                    <Rotas/>
                </div>
            </>
        )
    }
}

export default App;
