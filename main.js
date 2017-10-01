const vm = new Vue({
  el: '#box',
  data() {
    return {
      text: 'Registration Form',
      listUsers: [],
      name: '',
      lastName: '',
      email: '',
      message: 'Add your photo',
      messageChange: 'Change user data',
      messageDelete: 'Delete user data',
      show: false,
      change: {},
      photo: '',
      visible: false,
      visionList: true,
    };
  },
  computed: {
    count() {
      return this.listUsers.length;
    },
    visionBut() {
      if (this.listUsers.length === 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      return this.visible;
    }
  },
  methods: {
    clearForm() {
      this.name = '';
      this.lastName = '';
      this.email = '';
      this.show = false;
      this.photo = '';
    },
    addUser() {
      if (this.name === '' || this.lastName === '' || this.email === '') {
        return;
      }
      this.listUsers.push({
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        photo: this.photo
      });
      this.clearForm();
    },
    deleteUser(index) {
      this.listUsers.splice(index, 1);
      this.clearForm();
    },
    changeData(key) {
      this.show = true;
      Object.keys(this.listUsers[key]).forEach(keyUser => {
        this[keyUser] = this.listUsers[key][keyUser];
      });
      this.change = this.listUsers[key];
    },
    saveChange() {
      this.change.name = this.name;
      this.change.lastName = this.lastName;
      this.change.email = this.email;
      this.change.photo = this.photo;
      this.clearForm();
    },
    hideShowList() {
      this.visionList = !this.visionList;
    }
  }
});

// https://plnkr.co/edit/2mkREoKtmycDIWpL7O1y?p=preview
