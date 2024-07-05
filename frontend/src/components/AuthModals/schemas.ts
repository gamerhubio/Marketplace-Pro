import * as yup from "yup"

export const emailSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
})

export const passwordSchema = yup.object().shape({
    password: yup.string().min(6).required("Required"),
})

export const authSchema = yup.object().shape({
    username: yup.string().min(3).required("Username is required"),
    password: yup.string().min(6).required("Password is required"),
})

export const registerSchema = authSchema.shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
})


export const otpSchema = yup.object().shape({
    code: yup.string().min(6).max(6).required("Code is requird"),
})


export const resetPasswordSchema = yup.object().shape({
    password: yup.string().min(6).required("Password must contain atleast 6 characters"),
    confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref('password')], 'Passwords must match'),
})