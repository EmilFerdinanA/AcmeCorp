export interface IClients {
  dob: string;
  employmentStatus: string;
  gender: string;
  id: string;
  maritalStatus: string;
  name: string;
}

export interface IProfilteData {
  clientInformation: {
    name: string;
    dob: string;
    gender: string;
    maritalStatus: string;
    employmentStatus: string;
  };
  financials: {
    income: string;
    expenses: string;
    savings: string;
    investment: string;
    debt: string;
    cashflow: string;
    networth: string;
  };
  goals: {
    emergencyFund: string;
    travel: string;
  };
  insurances: {
    lifeInsurance: string;
    personalAccident: string;
  };
}
