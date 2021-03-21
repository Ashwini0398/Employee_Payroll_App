class EmployeePayrollData{
    //getter and setter method
get id(){
        return this.id;
    }
    set id(){
        this._id=id;
    }

    get name(){
        return this.name;
    }
    set name(name){
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect!';
    }

    get profilePic(){
        return this._profilePic;
    }
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }

    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }

    get salary(){
        return this.salary;
    }
    set salary(salary){
        this.salary = salary;
    }

    get note(){
        return this.note;
    }
    set note(note){
        this.note = note;
    }

    get startDate(){
        return this.startDate;
    }
    set startDate(startDate){
        this.startDate = startDate;
    }
    
    toString(){
        const option ={ year:'number',month:'long',day:'numeric'};
        const empDate=!this.startDate ? "undefined": this.startDate.toLocalDateString("en-US",options);
        return "id=" + this.id + ",name" + this.name + ",gender" + this.gender + ",profilePic=" + this.profilePic +
               ",department=" +this.department+ ",salary=" +this.salary+ ",startDate=" +empDate+ ",note=" +this.note;
    }
}



