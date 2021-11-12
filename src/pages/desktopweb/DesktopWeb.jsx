import { Children } from 'react';
import Table from 'components/table/Table';
import TestCase from 'components/testCase/TestCase';
import * as testCaseMap from 'testCase/desktopweb';

const testCases = Object.values(testCaseMap);

export default function DesktopWeb() {
  return (
    <div>
      <Table>
        {Children.toArray(
          testCases.map((t, idx) => <TestCase createTestCase={t} testCaseId={`TC-000${ + idx + 1}`} />)
        )}
      </Table>
    </div>
  ) 
}
