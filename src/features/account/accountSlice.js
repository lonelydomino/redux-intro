const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
  };

  const accountReducer = (state = initialStateAccount, action) => {
    switch (action.type) {
      case "account/deposit":
        return { ...state, balance: state.balance + action.payload };
      case "account/withdraw":
        return { ...state, balance: state.balance - action.payload };
      case "account/requestLoan":
        if (state.loan > 0) return state;
  
        return {
          ...state,
          loanPurpose: action.payload.loanPurpose,
          balance: state.balance + action.payload.amount,
        };
      case "account/payLoan":
        return {
          ...state,
          loan: 0,
          loanPurpose: "",
          balance: state.balance - state.loan,
        };
      default:
        return state;
    }
  };
//Actions
  export const deposit = (amount) => {
    return { type: "account/deposit", payload: amount };
  };
  export const withdraw = (amount) => {
    return { type: "account/withdraw", payload: amount };
  };
  export const requestLoan = (loanPurpose, amount) => {
    return { type: "account/deposit", payload: {loanPurpose, amount} };
  };
  export const payLoan = () => {
    return { type: "account/deposit" };
  };
  export default accountReducer
