type State  ={
    isDark: boolean;
    fsize:number;

}
type Action = {
    type: "ThemeMode" | "increment" | "decrement";

}

const Reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ThemeMode":
            return{
                ...state,
                isDark: !state.isDark
            }
            case "increment":
                return{
                    ...state,
                    fsize: state.fsize + 1
                }
            case "decrement":
                return{
                    ...state,
                    fsize: state.fsize - 1
                }
            default: return state;
    }
}

export default Reducer;