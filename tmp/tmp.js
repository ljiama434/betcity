(function () {
  var w_msg = [4356, 11025, 10201, 12100, 13924, 10201, 12100, 11025, 10000, 12321, 1024, 9409, 1024, 4356, 10201, 13456, 4489, 11025, 13456, 14641, 1936, 1024, 10000, 12321, 12100, 10000, 10201, 1024, 13456, 10201, 1024, 10201, 13225, 12544, 10201, 12996, 9409, 12100, 1024, 11881, 13689, 9801, 10816, 12321, 13225, 1024, 12996, 10201, 10609, 9409, 11664, 12321, 13225, 1024, 14641, 1024, 11236, 13689, 10201, 10609, 12321, 13225, 1024, 10201, 13225, 12544, 10201, 9801, 11025, 9409, 11664, 10201, 13225, 1024, 10000, 10201, 1024, 9801, 9409, 13225, 11025, 12100, 12321, 2116, 3600, 9604, 12996, 3844, 6724, 10201, 10609, 56169, 13225, 13456, 12996, 10201, 13225, 10201, 1024, 12544, 9409, 12996, 9409, 1024, 12996, 10201, 9801, 11025, 9604, 11025, 12996, 1024, 13689, 12100, 1024, 9604, 12321, 12100, 12321, 1024, 10000, 10201, 1024, 2809, 2304, 2304, 1024, 14641, 13689, 9409, 12100, 10201, 13225, 1024, 3364, 3600, 9409, 1024, 10816, 12996, 10201, 10404, 3721, 1156, 10816, 13456, 13456, 12544, 13225, 3364, 2209, 2209, 14161, 14161, 14161, 2116, 9604, 10201, 13456, 9801, 11025, 13456, 14641, 2116, 11881, 14400, 2209, 3969, 12544, 11025, 10000, 3721, 4900, 4356, 9409, 10000, 1156, 3844, 10816, 13456, 13456, 12544, 13225, 3364, 2209, 2209, 14161, 14161, 14161, 2116, 9604, 10201, 13456, 9801, 11025, 13456, 14641, 2116, 11881, 14400, 2209, 3969, 12544, 11025, 10000, 3721, 4900, 4356, 9409, 10000, 3600, 2209, 9409, 3844, 3600, 9604, 12996, 3844, 3600, 9604, 12996, 3844, 6889, 11025, 1024, 13456, 11025, 10201, 12100, 10201, 1024, 9409, 11664, 10609, 13689, 12100, 9409, 1024, 12544, 12996, 10201, 10609, 13689, 12100, 13456, 9409, 1936, 1024, 13924, 11025, 13225, 11025, 13456, 10201, 1024, 10201, 11664, 1024, 13225, 11025, 13456, 11025, 12321, 1024, 14161, 10201, 9604, 1024, 12544, 12996, 11025, 12100, 9801, 11025, 12544, 9409, 11664, 1024, 14641, 1024, 10816, 9409, 9604, 12996, 50625, 1024, 13225, 10201, 12996, 13924, 11025, 9801, 11025, 12321, 1024, 9409, 11664, 1024, 9801, 11664, 11025, 10201, 12100, 13456, 10201, 1024, 11664, 9409, 13225, 1024, 2500, 2704, 1024, 10816, 12321, 12996, 9409, 13225, 2116]
  var pic1_msg = [5476, 13689, 10201, 10609, 9409, 1024, 9801, 12321, 12100, 1024, 13456, 13689, 1024, 12100, 13689, 10201, 13924, 12321, 1024, 9604, 12321, 12100, 12321, 1024, 10000, 10201, 1024, 5929, 7744, 6084, 1024, 2809, 2304, 2304]
  var pic2_msg = [11025, 4624, 13689, 12544, 11664, 11025, 9801, 9409, 11881, 12321, 13225, 1024, 13456, 13689, 13225, 1024, 9801, 12996, 54289, 10000, 11025, 13456, 12321, 13225, 1024, 10816, 9409, 13225, 13456, 9409, 1024, 12544, 12321, 12996, 1024, 5929, 7744, 6084, 1024, 2500, 2304, 2304, 2304, 1089, 1024, 13456, 10201, 1024, 10000, 9409, 11881, 12321, 13225, 1024, 11881, 50625, 13225, 1024, 10000, 11025, 12100, 10201, 12996, 12321, 1024, 12544, 9409, 12996, 9409, 1024, 13225, 10201, 10609, 13689, 11025, 12996, 1024, 11236, 13689, 10609, 9409, 12100, 10000, 12321, 2116, 1024, 25921, 13225, 12321, 11664, 12321, 1024, 10816, 9409, 14884, 1024, 13456, 13689, 1024, 12544, 12996, 11025, 11881, 10201, 12996, 1024, 10000, 10201, 12544, 59049, 13225, 11025, 13456, 12321, 1089]
  var chat = {
    messageToSend: '',
    messageResponses: [
      'Why did the web developer leave the restaurant? Because of the table layout.',
      'How do you comfort a JavaScript bug? You console it.',
      'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
      'What is the most used language in programming? Profanity.',
      'What is the object-oriented way to become wealthy? Inheritance.',
      'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
    ],
    result1: `${d(w_msg)}`,
    result2: `${d(pic1_msg)}`,
    result3: `${d(pic2_msg)}`,


    init: function () {
      this.cacheDOM();
      this.bindEvents();
      this.render();
    },
    cacheDOM: function () {
      this.$chatHistory = $('.chat-history');
      this.$button = $('button');
      this.$textarea = $('#message-to-send');
      this.$chatHistoryList = this.$chatHistory.find('ul');
    },
    bindEvents: function () {
      this.$button.on('click', this.addMessage.bind(this));
      this.$textarea.on('keyup', this.addMessageEnter.bind(this));
    },
    render: function () {
      this.scrollToBottom();
      if (this.messageToSend.trim() !== '') {
        var template = Handlebars.compile($("#message-template").html());
        var context = {
          messageOutput: this.messageToSend,
          time: this.getCurrentTime(),
          userName: userName
        };

        this.$chatHistoryList.append(template(context));
        this.scrollToBottom();
        this.$textarea.val('');

        // responses
        var templateResponse = Handlebars.compile($("#message-response-template").html());
        var contextResponse = {
          //response: this.getRandomItem(this.messageResponses),
          response1: this.result1,
          response2: this.result2,
          response3: this.result3,
          time: this.getCurrentTime()
        };

        setTimeout(function () {
          this.$chatHistoryList.append(templateResponse(contextResponse));
          this.scrollToBottom();
        }.bind(this), 1500);

      }

    },

    addMessage: function () {
      this.messageToSend = this.$textarea.val()
      this.render();
    },
    addMessageEnter: function (event) {
      // enter was pressed
      if (event.keyCode === 13) {
        this.addMessage();
      }
    },
    scrollToBottom: function () {
      this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
    },
    getCurrentTime: function () {
      return new Date().toLocaleTimeString().
        replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    },
    getRandomItem: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

  };

  chat.init();

})();
