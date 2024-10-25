import s from "../TransactionHistory/TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
    return (
        <table className={s.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    <tbody>
    {items.map((item) => {
        return (
        <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount }</td>
            <td className={s.currency}>{item.currency}</td>
        </tr>
        )
    })}
  </tbody>
</table>
    )
}
export default TransactionHistory;