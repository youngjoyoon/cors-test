import styles from './TableRow.module.scss';

export default function TableRow(props) {
  const { id, tid, desc, condition, input, output, error, onClick } = props;
  const { pathValue, query, requestBody } = input ?? {};
  const hasError = Boolean(error);

  let outputData;

  if (hasError) {
    outputData = error.message;
  } else {
    outputData = output ? JSON.stringify(output, null, 4) : null;
  }

  const handleClick = () => {
    onClick?.();
  }

  return (
    <tr className={hasError ? styles.hasError : ''}>
      <td className={styles.action}>
        {onClick && <button type="button" onClick={handleClick}>테스트</button>}
      </td>
      <td className={styles.id}>{tid}</td>
      <td className={styles.id}>{id}</td>
      <td>{desc}</td>
      <td>{condition || '없음'}</td>
      <td className={styles.data}>
        {Boolean(pathValue) && (
          <div className={styles.inputRow}>
            <div className={styles.title}>pathValue:</div>
            <div>{JSON.stringify(pathValue, null, 4)}</div>
          </div>
        )}
        {Boolean(query) && (
          <div className={styles.inputRow}>
            <div className={styles.title}>query:</div>
            <div>{JSON.stringify(query, null, 4)}</div>
          </div>
        )}
        {Boolean(requestBody) && (
          <div className={styles.inputRow}>
            <div className={styles.title}>requestBody:</div>
            <div>{JSON.stringify(requestBody, null, 4)}</div>
          </div>
        )}
      </td>
      <td className={styles.data}>{outputData}</td>
    </tr>
  );
}