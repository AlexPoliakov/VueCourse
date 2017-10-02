const vm = new Vue({
  el: '#box',
  data() {
    return {
      text: 'Registration Form',
      listUsers: [],
      name: '',
      username: '',
      email: '',
      message: 'Add your photo',
      messageChange: 'Change user data',
      messageDelete: 'Delete user data',
      show: false,
      change: {},
      photo: '',
      visible: false,
      visionList: true,
      // endpoint: 'https://jsonplaceholder.typicode.com/users',
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
    },
    resource() {
      let options = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return this.$resource(
        'https://jsonplaceholder.typicode.com/users{/body}',
        options
      );
    },
  },
  methods: {
    clearForm() {
      this.name = '';
      this.username = '';
      this.email = '';
      this.show = false;
      this.photo = '';
    },
    addUser() {
      if (this.name === '' || this.username === '' || this.email === '') {
        return;
      }
      this.listUsers.push({
        name: this.name,
        username: this.username,
        email: this.email,
        photo: this.photo,
      });
      this.resource.save({
        name: this.name,
        username: this.username,
        email: this.email,
        photo: this.photo,
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
      this.change.username = this.username;
      this.change.email = this.email;
      this.change.photo = this.photo;
      this.clearForm();
    },
    hideShowList() {
      this.visionList = !this.visionList;
    },
    getAllUsers() {
      this.resource.get().then(
        response => {
          this.listUsers = [...response.body];
        },
        reject => {
          let err = new Error(reject);
          console.log(err);
        },
      );
    },
  },
  created() {
    this.getAllUsers();
  },
});

// https://plnkr.co/edit/2mkREoKtmycDIWpL7O1y?p=preview
