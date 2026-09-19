import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Wedding from "./Wedding";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RoutedApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<App/>}/>
                <Route path="/wedding" element={<Wedding/>}/>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<RoutedApp />, document.getElementById("root"));