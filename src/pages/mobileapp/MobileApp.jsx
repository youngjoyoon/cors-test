import { Children } from 'react';
import Table from 'components/table/Table';
import TestCase from 'components/testCase/TestCase';
import * as testCaseMap from 'testCase/mobileapp';

const testCases = Object.values(testCaseMap);

export default function MobileApp() {
  return (
    <div>
      <Table>
        {Children.toArray(
          testCases.map((t, idx) => <TestCase createTestCase={t} testCaseId={`TC-300${ + idx + 1}`} />)
        )}
      </Table>
    </div>
  ) 
}
