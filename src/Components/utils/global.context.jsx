import { createContext, useEffect, useReducer } from "react";

export const initialState = JSON.parse(localStorage.getItem("mode")) || {mode: "", data: []}

const modeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return {...state, darkMode: !state.darkMode};
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

const url = "https://jsonplaceholder.typicode.com/users"

const initState = JSON.parse(localStorage.getItem("dentists")) || {
  dentistsList: [],
  favList: [],
  dentist: {},
};

const dentistReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "GET_DENTISTS":
      return {
        dentistsList: action.payload,
        favList: state.favList,
        dentist: state.dentist,
      };
    case "ADD_FAV":
      return {
        dentistsList: state.dentistsList,
        favList: [...state.favList, action.payload],
        dentist: state.dentist,
      };
    case "DEL_FAV":
      return {
        dentistsList: state.dentistsList,
        favList: state.favList.filter((fav) => fav.id !== action.payload),
        dentist: state.dentist,
      };

    case "SET_DENTIST":
      return {
        dentistsList: state.dentistsList,
        favList: state.favList,
        dentist: action.payload,
      };
    default:
      throw new Error;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentistState, dentistDispatch] = useReducer(
    dentistReducer,
    initState
  );

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => dentistDispatch({ type: "GET_DENTISTS", payload: data }));
  }, [])

  useEffect(() => {
    localStorage.setItem("dentists", JSON.stringify(dentistState));
  }, [dentistState]);

  const [modeState, modeDispatch] = useReducer(modeReducer, initialState);

  const toggleMode = () => {
    modeDispatch({ type: "CHANGE_MODE" });
  };

  if (modeState.darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(modeState));
  }, [modeState]);

  return (
    <ContextGlobal.Provider value={{
      dentistState,
      dentistDispatch,
      modeState,
      modeDispatch,
      toggleMode,
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};
