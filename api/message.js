class Message {
  constructor() {
    this.currId = 0;
    this.arr = [];
  }

  validate(x) {
    return ("author" in x) && ("content" in x);
  }

  create(author, content) {
    const msg = {
      id: this.currId++,
      author,
      content
    };

    this.arr.push(msg);
    return msg;
  }

  getAll() {
    return this.arr;
  }
  
  getById(id) {
    return this.arr.find((e) => e.id == id);
  }
}

module.exports = Message;
