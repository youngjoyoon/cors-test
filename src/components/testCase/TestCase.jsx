import { useState, useCallback } from 'react';

import { createTestCase } from 'testCase/createTestCase';
import TableRow from '../table/TableRow';

export default function TestCase(props) {
  const { testCaseId, option } = props;
  const [error, setError] = useState(null);
  const [input, setInput] = useState(null);
  const [output, setoutput] = useState(null);
  const testCase = createTestCase(testCaseId, option);

  const handleClick = useCallback(() => {
    const { execute } = testCase ?? {};

    if (!execute) {
      return;
    }

    (async () => {
      try {
        const { input, output } = await execute();

        setoutput(output);
        setInput(input);
        setError(null);
      } catch (e) {
        setInput(e.stack ?? e.message);
        setError(e);
      }
    })();
  }, [testCase]);

  if (!testCase) {
    console.error(`[TestCase] testCaseId: ${testCaseId} is not defined!`);
    
    return null;
  }

  const { id, tid, desc, condition } = testCase;

  return (
    <TableRow
      id={id}
      tid={tid}
      desc={desc}
      condition={condition}
      input={input}
      output={output}
      hasError={Boolean(error)}
      onClick={handleClick}
    />
  );
}