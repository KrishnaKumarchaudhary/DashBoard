import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  TYPE="button"
                  className="text-3xl p-3 hover:bg-light-gray text-white"
                  style={{ background: "blue", borderRadius: "50%" }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">sidebar</div>
            )}
            <div
              className={
                activeMenu
                  ? "dark:bg-main-bg bg-main-bg min-h-screen w-full md:ml-72"
                  : "dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2"
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                Navbar
              </div>
            </div>
            <div>
              <Routes>
                {/*Dashboard */}
                <Route path="/" element="Ecommerce"></Route>
                <Route path="/ecommerce" element="Ecommerce"></Route>
                {/*Pages */}
                <Route path="/orders" element="Order"></Route>
                <Route path="/employees" element="Employees"></Route>
                <Route path="/customers" element="Customers"></Route>
                {/*Apps */}
                <Route path="/kanban" element="Kanban"></Route>
                <Route path="/editor" element="Editor"></Route>
                <Route path="/calendar" element="Calendar"></Route>
                <Route path="/color-picker" element="ColorPicker"></Route>
                {/*Apps */}
                <Route path="/line" element="Line"></Route>
                <Route path="/area" element="Area"></Route>
                <Route path="/bar" element="bar"></Route>
                <Route path="/pie" element="Pie"></Route>
                <Route path="/financial" element="Financial"></Route>
                <Route path="/color-mapping" element="ColorMapping"></Route>
                <Route path="/pyramid" element="Pyramid"></Route>
                <Route path="/stacked" element="Stacked"></Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
