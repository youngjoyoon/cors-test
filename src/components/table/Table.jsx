import styles from './Table.module.scss';

export default function Table({ children }) {
  return (
    <div className={styles.table}>
      <table>
        <colgroup>
          <col className={styles.action} />
          <col className={styles.id} />
          <col className={styles.id} />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>액션</th>
            <th>테스트ID</th>
            <th>요구사항ID</th>
            <th>시나리오</th>
            <th>조건</th>
            <th>input</th>
            <th>output</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  ) 
}
