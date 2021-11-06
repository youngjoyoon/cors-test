import Table from 'components/table/Table';
import TestCase from 'components/testCase/TestCase';

const testCases = [
  'TC1005',
  'TC1006',
  'TC1007',
];

export default function MobileWeb() {
  return (
    <div>
      <Table>
        {testCases.map((t) => <TestCase key={t} testCaseId={t} />)}
      </Table>
    </div>
  ) 
}