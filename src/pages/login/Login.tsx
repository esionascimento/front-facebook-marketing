import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { validationSchemaAuth } from "./validationSchema";
import { useMounted } from "../../hooks/useMounted";

interface Values {
  email: string;
  password: string;
  submit: null;
}

const initialValues: Values = {
  email: "",
  password: "",
  submit: null,
};

const LoginPage = () => {
  const isMounted = useMounted();

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemaAuth,
    onSubmit: async (_values, helpers): Promise<void> => {
      try {
      } catch (err) {
        console.error(err);

        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setSubmitting(false);
        }
      }
    },
  });

  return (
    <>
      <div>
        <Card elevation={16}>
          <CardHeader
            subheader={
              <Typography color="text.secondary" variant="body2">
                Não tem uma conta? &nbsp;
                <Link href="#" underline="hover" variant="subtitle2">
                  Registrar
                </Link>
              </Typography>
            }
            sx={{ pb: 0 }}
            title="Entrar"
          />
          <CardContent>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  autoFocus
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Senha"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
              >
                Entrar
              </Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 3,
                }}
              >
                <Link href="#" underline="hover" variant="subtitle2">
                  Esqueceu sua senha?
                </Link>
              </Box>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
