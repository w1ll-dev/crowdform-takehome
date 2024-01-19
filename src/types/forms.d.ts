type LoginFieldValues = {
  email: string;
  password: string;
};

type RegisterFieldValues = {
  firstName: string;
  lastName: string;
  email: string;
  passwordConfirmation: string;
} & LoginFieldValues;

type YupSchemaShape<Fields> = {
  [Key in keyof Fields]: ConditionalSchema<Fields[Key]>;
};
