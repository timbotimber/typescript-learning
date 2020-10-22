class Department {
  static officeBuilding: string = "tall and scary";
  private name: string;
  //   whilst private is active, Properties are only accessible within class 'Department'.
  public employees: string[] = [];
  //   protected allows us to access the properties of the parent class from children classes that extend it
  protected equipment: string[] = [];

  //   as well as initializing variables above, TS allows you to pass them directly into the constructor

  constructor(prop: string, private catchphrase: string) {
    this.name = prop;
  }

  static createEmergency(emergency: string) {
    return { emergency };
  }

  static createPullRequest(pull: string) {
    return { pull };
  }

  describe() {
    console.log(this.catchphrase + this.name);
  }

  addEmployees(worker: string) {
    this.employees.push(worker);
  }

  printWorkerInfo() {
    console.log(this.employees, this.employees.length);
  }
}

class SmellDept extends Department {
  private smellReport: string;

  get mostRecentSmell() {
    if (this.smellReport) {
      return this.smellReport;
    } else {
      throw new Error("no smell found");
    }
  }

  set mostRecentSmell(value: string) {
    if (!value) {
      throw new Error("pass something in");
    } else {
      this.addSmell(value);
    }
  }

  constructor(name: string, private reports: string[]) {
    super(name, "this all stinks");
  }
  addSmell(text: string) {
    this.reports.push(text);
    this.smellReport = text;
  }

  //   we can edit the equipment array in the parent class because it's protecting... NOT private.

  addPencils(text: string) {
    this.equipment.push(text);
  }

  printSmells() {
    console.log(this.reports, this.equipment);
  }
}

class JokesDept extends Department {
  constructor(name: string, public jokes: string[]) {
    // super calls the constructor of the base class
    super(name, "really cool");
  }
}

const accounts = new Department("livin a lie ", "Timmeh");
const jokesDept = new JokesDept("Alfalsy", ["king nerd"]);
const smellDept = new SmellDept("jonny", ["foul smell"]);

console.log(smellDept);

smellDept.addSmell("wonderful aroma");
smellDept.addPencils("HB Pencil");

smellDept.printSmells();

// doing it right
accounts.addEmployees("Fessy");
accounts.addEmployees("Budsm'n");

// doing it wrong: We shouldn't be allowed to access the class like this!!
accounts.employees[2] = "jhanthan";

accounts.describe();
accounts.printWorkerInfo();

const pullRequest = Department.createPullRequest("git pull origin problems");
console.log(pullRequest);

const emergency1 = Department.createEmergency("fire");
console.log(emergency1, Department.officeBuilding);

console.log("this is the get method: ", smellDept.mostRecentSmell);

// const accountingCopy = { name: "jeffeh", describe: accounts.describe };

// accountingCopy.describe();

// console.log("this is the dept", accountingCopy);
