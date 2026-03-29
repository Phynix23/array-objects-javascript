function createProfile() {
  const profile = {
    firstName: "Amina",
    lastNmae: "Boyoyo",
    age: 22,
    hobbies: ["bombing", "traveling", "yabbing"]
  };

  // print full name and age
  console.log(`Full Name: ${profile.firstName} ${profile.lastNmae}`);
  console.log(`Age: ${profile.age}`);

  // print number of hobbies
  console.log(`Number of hobbies: ${profile.hobbies.length}`);

  // print each hobby
  console.log("Hobbies:");
  for (let i = 0; i < profile.hobbies.length; i++) {
    console.log(`- ${profile.hobbies[i]}`);
  }
  return profile;
}
createProfile();