import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({balance}) {
  // const { balance } = useSelector((store) => store.accountReducer);

  return <div className="balance">{formatCurrency(balance)}</div>;
}
function mapStateToProps(state) {
  return {
    balance: state.accountReducer.balance,
  };
}
export default connect(mapStateToProps)(BalanceDisplay);
//connect(mapstatetoprops) will become a new funcction and Balancedisplay 
//will become the argument of that function
