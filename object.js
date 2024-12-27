let name = {
    FirstName: "Sageer",
    LastName: "Ahmed",
    NickName: "sageerify",
    fulName: function() {
      return this.FirstName + " " + this.LastName;
    }
  };
  
  console.log(name.fulName()); // Output: Sageer Ahmed
  
  // Adding a new property
  name.course = "basic web development";
  console.log(name);