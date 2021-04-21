class ActorModel {
  constructor(firstName, lastName, birthday, image, imdbLink) {
    this.id = new Date().getTime();
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.image = image;
    this.imdbLink = imdbLink;
  }

  Age() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - new Date(this.birthday).getFullYear();
    return age;
  }
}

export default ActorModel;
