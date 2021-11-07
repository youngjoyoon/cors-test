import Table from 'components/table/Table';
import TestCase from 'components/testCase/TestCase';
import * as cases from 'testCase/mobileweb';

const testCases = Object.keys(cases);

export default function MobileWeb() {
  return (
    <div>
      <Table>
        {testCases.map((t) => <TestCase key={t} testCaseId={t} />)}
      </Table>
    </div>
  ) 
}