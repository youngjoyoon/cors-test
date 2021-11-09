import { Children } from 'react';
import Table from 'components/table/Table';
import TestCase from 'components/testCase/TestCase';
import * as testCaseMap from 'testCase/mobileweb';

const testCases = Object.values(testCaseMap);

export default function MobileWeb() {
  return (
    <div>
      <Table>
        {Children.toArray(
          testCases.map((t, idx) => <TestCase createTestCase={t} testCaseId={`TC-${1000 + idx + 1}`} />)
        )}
      </Table>
    </div>
  ) 
}
