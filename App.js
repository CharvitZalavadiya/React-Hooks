import React from "react";
// import { useReducer } from "react";         // 22
import "./App.css";
// import ClassCounter from './components/2-usestate-hook-class-counter';
// import HookCounter from './components/2-usestate-hook-hook-counter';
// import HookCounterTwo from './components/3-usestate-with-previous-value-hook-counter-two';
// import HookCounterThree from "./components/4-usestate-with-objects-hook-counter-three";
// import HookCounterFour from "./components/5-use-state-with-array";
// import HookCounterOne from "./components/7-use-effect-after-render";
// import ConditionallyRun from "./components/8-conditionally-run-effect";
// import HooksMouse from "./components/9-run-effects-only-once";
// import MouseContainer from "./components/10-user-effect-with-cleanup";
// import DataFetchingOne from "./components/11-fetching-data-with-useeffect-1";
// import DataFetchingTwo from "./components/12-fetching-data-with-useeffect-2";
// import DataFetchingThree from "./components/13-fetching-data-with-useeffect-3";
// import IntervalHookCounter from "./components/14-useeffect-with-incorrect-dependency";
// import CompC from "./components/16-usecontext-2-comp-c";         // 17
// export const UserContextName = React.createContext();          //17
// export const UserContextSurname = React.createContext();         //17
// import CounterOne from "./components/19-usereducer-simple-state-action";
// import CounterTwo from "./components/20-usereducer-complex-state-action";
// import CounterThree from "./components/21-multiple-usereducer";
//22
// import CompA from "./components/22-compA";
// import CompB from "./components/22-compB";
// import CompC from "./components/22-compC";
// export const CountContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
//
// import FetchReducerOne from "./components/23-fetch-data-with-usereducer";
// import FetchReducerTwo from "./components/24-fetch-data-with-usereducer-2";
// import ParentComp from "./components/26-usecallback-parent";
// import MemoCounter from "./components/27-usememo";
// import FocusInput from "./components/28-useref-focus-input";
// import RefTimer from "./components/29-useref-timer";
// import DocTitleOne from "./components/31-customhook-doc-one";
// import DocTitleTwo from "./components/31-customhook-doc-two";
// import CustomHookCounterOne from "./components/32-customhook-counter-one";
// import CustomHookCounterTwo from "./components/32-customhook-counter-two";
import UserForm from "./components/33-customhook-user-form";

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState); //22
  return (
    <div className="App">
      Hello !
      {/* <ClassCounter/>
      <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterOne/> */}
      {/* <ConditionallyRun/> */}
      {/* <HooksMouse/> */}
      {/* <MouseContainer/> */}
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <DataFetchingThree/> */}
      {/* <IntervalHookCounter/> */}
      {/* <UserContextName.Provider value={"Charvit"}>
        <UserContextSurname.Provider value={"Zalavadiya"}>
          <CompC />
        </UserContextSurname.Provider>
      </UserContextName.Provider> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* <div>
        <CountContext.Provider
          value={{ countState: count, countDispatch: dispatch }}
        >
          Count : {count}
          <CompA />
          <CompB />
          <CompC />
        </CountContext.Provider>
      </div> */}
      {/* <FetchReducerOne /> */}
      {/* <FetchReducerTwo/> */}
      {/* <ParentComp/> */}
      {/* <MemoCounter/> */}
      {/* <FocusInput/> */}
      {/* <RefTimer/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <CustomHookCounterOne/>
      <CustomHookCounterTwo/> */}
      <UserForm/>
    </div>
  );
}

export default App;
