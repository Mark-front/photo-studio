const validationSendUs = new JustValidate('#send-us-form');

validationSendUs
  .addField('#send-us__name', [
    {
      rule: 'required',
      errorMessage: 'Имя не введено',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя слишком маленькое',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Имя слишком большое',
    },
  ])
  .addField('#send-us__email', [
    {
      rule: 'required',
      errorMessage: 'Ничего не введено',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);