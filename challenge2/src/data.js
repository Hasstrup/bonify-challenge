const applicationData = { 
	childrenInHousehold: { confidence: 0, value: 0 },
  country: { confidence: 1, value: 'DE' },
  zipCode: { confidence: 1, value: '12049' },
  propertyValueRange: { confidence: 1, value: 200000 },
  propertyPayment: { confidence: 1, value: 4567 },
  birthCountry: { confidence: 1, value: 'AW' },
  'collection-ibanOrAccountNumber': { confidence: 1, value: 'DE12345432345432343342' },
  'collection-accountId': { confidence: 1, value: 5397615 },
  nameOfEmployer: { confidence: 1, value: 'Forteil' },
  typeOfEmployment: { confidence: 1, value: 1 },
  firstName: { confidence: 1, value: 'John' },
  numberOfOtherIncomeSources: { confidence: 1, value: 1 },
  nationality: { confidence: 1, value: 'DE' },
  typeOfHousehold: { confidence: 1, value: 1 },
  lifeInsurance: { confidence: 0, value: null },
  familyStatus: { confidence: 1, value: 1 },
  lastName: { confidence: 1, value: 'Smith' },
  role: { confidence: 1, value: '1' },
  gender: { confidence: 1, value: 1 },
  city: { confidence: 1, value: 'Berlin' },
  leasingRates: { confidence: 0, value: null },
  houseNumber: { confidence: 1, value: '32' },
  title: { confidence: 1, value: 2 },
  employmentSector: { confidence: 1, value: 5 },
  existingCredits: { confidence: 1, value: [{
                "remainingAmount": {
                    "confidence": 1.0,
                    "value": 12345.0
                },
                "totalLoanAmount": {
                    "confidence": 1.0,
                    "value": 234.0
                },
                "monthlyLoanRate": {
                    "confidence": 1.0,
                    "value": 234.0
                },
                "creditTransfer": {
                    "confidence": 0.0,
                    "value": false
                },
                "creditType": {
                    "confidence": 1.0,
                    "value": 2
                }
            }, {
                "remainingAmount": {
                    "confidence": 1.0,
                    "value": 2344.0
                },
                "totalLoanAmount": {
                    "confidence": 1.0,
                    "value": 4322345.0
                },
                "monthlyLoanRate": {
                    "confidence": 1.0,
                    "value": 5432.0
                },
                "creditType": {
                    "confidence": 1.0,
                    "value": 2
                }
            }] },
  rentIncome: { confidence: 0, value: null },
  endOfWorkPermit: { confidence: 0, value: null },
  street: { confidence: 1, value: 'Alexanderplatz' },
  typeOfResidence: { confidence: 1, value: 1 },
  intendedUse: { confidence: 1, value: 3 },
  email: { confidence: 1, value: 'johnsmith@bonify.de' },
  buildingSavingsContracts: { confidence: 0, value: null },
  monthlyIncome: { confidence: 1, value: 318 },
  'collection-bankName': { confidence: 1, value: 'Deutsche Bank' },
  birthDate: { confidence: 1, value: 405734400000 },
  employmentSince: { confidence: 1, value: 1444176000000 },
  oldAgePension: { confidence: 1, value: 1234 } 
};

const expectedFormValues = { 
    childrenInHousehold: 0,
    country: 'DE',
    zipCode: '12049',
    propertyValueRange: 200000,
    propertyPayment: 4567,
    birthCountry: 'AW',
    'collection-ibanOrAccountNumber': 'DE12345432345432343342',
    'collection-accountId': 5397615,
    nameOfEmployer: 'Forteil',
    typeOfEmployment: 1,
    firstName: 'John',
    numberOfOtherIncomeSources: 1,
    nationality: 'DE',
    typeOfHousehold: 1,
    lifeInsurance: null,
    familyStatus: 1,
    lastName: 'Smith',
    role: '1',
    gender: 1,
    city: 'Berlin',
    leasingRates: null,
    houseNumber: '32',
    title: 2,
    employmentSector: 5,
    existingCredits: 
     [ { remainingAmount: 12345,
         totalLoanAmount: 234,
         monthlyLoanRate: 234,
         creditTransfer: false,
         creditType: 2 },
       { remainingAmount: 2344,
         totalLoanAmount: 4322345,
         monthlyLoanRate: 5432,
         creditType: 2 } ],
    rentIncome: null,
    endOfWorkPermit: null,
    street: 'Alexanderplatz',
    typeOfResidence: 1,
    intendedUse: 3,
    email: 'johnsmith@bonify.de',
    buildingSavingsContracts: null,
    monthlyIncome: 318,
    'collection-bankName': 'Deutsche Bank',
    birthDate: 405734400000,
    employmentSince: 1444176000000,
    oldAgePension: 1234 
  };

  module.exports = {
      source: applicationData,
      expected: expectedFormValues

  }