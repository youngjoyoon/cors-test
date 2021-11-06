import { useState, useCallback } from 'react';

import { createTestCase } from 'testCase/createTestCase';
import TableRow from '../table/TableRow';

export default function TestCase(props) {
  const { testCaseId, option } = props;
  const [input, setInput] = useState(null);
  const [output, setoutput] = useState(null);
  const testCase = createTestCase(testCaseId, option);

  const handleClick = useCallback(() => {
    const { execute } = testCase ?? {};

    if (!execute) {
      return;
    }

    (async () => {
      const { input, output } = await execute();

      setInput(input);
      setoutput(output);
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
      onClick={handleClick}
    />
  );
}