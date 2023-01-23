import { Formik, useField } from "formik";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import StyledText from "../components/StyledText";
import StyledTextInput from "../components/StyleTextInput";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
  form: {
    margin: 12,
  },
});

const onSave = (values) => {
  console.log("values", values);
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        value={field.value}
        error={meta.error}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />

      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  console.log("errors", errors);

  return errors;
};

const LogInPage = () => {
  return (
    <Formik validate={validate} initialValues={initialValues} onSubmit={onSave}>
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="Email" name="email" />

            <FormikInputValue
              placeholder="Password"
              name="password"
              secureTextEntry
            />

            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
};

export default LogInPage;
