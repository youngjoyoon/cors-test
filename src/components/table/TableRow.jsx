import styles from './TableRow.module.scss';

export default function TableRow(props) {
  const { id, tid, desc, condition, input, output, hasError, onClick } = props;
  const inputData = input ? JSON.stringify(input, null, 4) : input;
  const outputData = output ? JSON.stringify(output, null, 4) : output;

  const handleClick = () => {
    onClick?.();
  }

  return (
    <tr className={hasError ? styles.hasError : ''}>
      <td className={styles.action}>
        <button type="button" onClick={handleClick}>테스트</button>
      </td>
      <td className={styles.id}>{tid}</td>
      <td className={styles.id}>{id}</td>
      <td>{desc}</td>
      <td>{condition || '없음'}</td>
      <td className={styles.data}>{inputData}</td>
      <td className={styles.data}>{outputData}</td>
    </tr>
  );
}