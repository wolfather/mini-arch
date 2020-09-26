import { CustomTableComponent } from './custom-table.component';

describe('CustomTableComponent', () => {

  const stubTable = [
    {
      "first-name": "John",
      "last-name": "Doe",
      "age": "30",
      "email": "john@email.com",
      "level": "1",
    },
  ];
  const cp: CustomTableComponent = new CustomTableComponent();

  beforeEach(() => {
    cp.dataTable = stubTable;
  });
  
  it('should create', () => {
    expect(cp).toBeTruthy();
  });

  it('should fill dataTable', () => {
    expect(cp.dataTable.length).toBeGreaterThanOrEqual(1);
  });

  it('should return the header of keys using createHeader()', () => {
    const headerResult = cp.createHeader();

    expect(headerResult).toEqual(['first-name','last-name','age','email','level']);
  });

  it('should return a new array of items on createBody()', () => {
    const bodyResult = cp.createBody();

    expect(bodyResult[0]).toEqual(["John", "Doe", "30", "john@email.com", "1"]);
  });

});
