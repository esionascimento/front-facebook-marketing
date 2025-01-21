import * as Yup from "yup";

export const validationSchemaAuth = Yup.object({
  email: Yup.string()
    .email("Deve ser um e-mail válido")
    .max(255)
    .required("E-mail é obrigatório"),
  password: Yup.string().max(255).required("Senha é necessária"),
});
