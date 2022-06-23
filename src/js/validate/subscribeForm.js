const validationSubscribe = new JustValidate('#subscribe-form');

validationSubscribe
  .addField('#subscribe__email', [
    {
      rule: 'required',
      errorMessage: 'Ничего не введено',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);