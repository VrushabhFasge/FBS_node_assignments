var emp = {
    "name":"vrushabh",
    "email" : "vrushabh@gmail.com",
    "phone" : 846449990
}

function printData(){
    console.log(emp.x)
}

var student = function(fname,lname,address){
    this.fname = fname
    this.lname = lname
    this.address = address

    this.details = () => {
        console.log(`Firstname: ${this.fname}, Lastname: ${this.lname}, Address: ${this.address}`)
    }
}

var sObj = new student('virat','kohli','Delhi')
sObj.details()