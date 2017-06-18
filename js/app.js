
$(document).ready(function(){
  
  var priceAuto = document.getElementById("priceAuto");
  var okButton = document.getElementsByClassName("ok")[0];

  $.validator.addMethod('validName', function (value) {
     var result = true;
     var iChars = "`~!@#$%^&*()+=-[]\\\';,./{}|\":<>?"+"0123456789";
      for (var i = 0; i < value.length; i++) {
          if (iChars.indexOf(value.charAt(i)) != -1) {
              return false;
          }
      }
      return result;
  }, '');

  $.validator.addMethod('validNum', function (value) {
     var result = true;
     var iChars = "`~!@#$%^&*()+=-[]\\\';,./{}|\":<>?"+"абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"+
                  "abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"+" ";
      for (var i = 0; i < value.length; i++) {
          if (iChars.indexOf(value.charAt(i)) != -1) {
              return false;
          }
      }
      return result;
  }, '');

  $.validator.addMethod('validDeposite', function (value) {
    return value < priceAuto.value;
  }, '');

  $("#creditForm").validate({
    submitHandler: function(form) {
        calcCredit();
        okButton.className = 'ok_showen';
    },
    focusInvalid: false,
    focusCleanup: true,
    rules: {
      name: {
           required: true,
           validName: true,
           minlength: 2,
           maxlength: 30
      },

      email: {
           required: true,
           email: true
      },

      phone: {
           required: true,
           validNum: true,           
           minlength: 5,
           maxlength: 11
      },

      priceAuto: {
           required: true,
           validNum: true,           
           range: [10000,1000000]
      }, 

      deposite: {
           required: true,
           validNum: true,           
           range: [10000,1000000],
           validDeposite: true
      },

      period: {
           required: true,
           validNum: true,           
           range: [3,120]
      },
    },
    invalidHandler: function() {
        okButton.className = 'ok';
    },
    messages: {
      name: {
        required: "Введите имя пользователя",
        validName: "Символы `~!@#$%^&*()+=-[]\\\';,./{}|\":<>? цифры и пробелы запрещены",
        minlength: "Минимум 2 символа ",
        maxlength: "Максимум 30 символов ",
        remote: "Такое имя уже существует "
      },

      email: {
        required: "Введите адрес ящика",
        email: "Введите корректный адрес"
      },

      phone: {
        required: "Укажите номер телефона",
        validNum: "Укажите номер телефона без символов +, - и пробелов ",
        minlength: "Минимум 5 цифр ",
        maxlength: "Максимум 11 цифр "
      },

      priceAuto: {
        required: "Укажите стоимость автомобиля",
        validNum: "Введите корректную сумму ",
        range: "Укажите сумму от 10000 до 1000000 "
      },

      deposite: {
        required: "Укажите стоимость автомобиля",
        validNum: "Введите корректную сумму ",
        range: "Укажите сумму от 10000 до 1000000 ",
        validDeposite: 'Взнос не может превышать сумму автомобиля, ты что, идиот?'
      },

      period: {
        required: "Укажите срок кредитования",
        validNum: "Введите корректный период ",
        range: "Укажите срок от 3 до 120 месяцев "
      },
    },
    errorPlacement: function(error, element) {
      var er = element.attr("name");
      error.appendTo( element.parent().find("label[@for='" + er + "']").find("span") );
    }
  });
});

